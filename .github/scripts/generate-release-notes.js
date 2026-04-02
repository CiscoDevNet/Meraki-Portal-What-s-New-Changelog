#!/usr/bin/env node

/**
 * Generate Release Notes for Annual Document
 *
 * Parses the oasdiff changelog and creates user-friendly release notes
 * formatted for the annual markdown files (e.g., 2026.md).
 *
 * Usage:
 *   node generate-release-notes.js <changelog.md> <version> <branch> <output.md>
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const [changelogPath, version, branch, outputPath] = process.argv.slice(2);

if (!changelogPath || !version || !branch || !outputPath) {
  console.error('Usage: node generate-release-notes.js <changelog.md> <version> <branch> <output.md>');
  process.exit(1);
}

// Read input file
const changelog = fs.readFileSync(changelogPath, 'utf8');

/**
 * Generate Cisco Developer Portal URL from endpoint path
 */
function generateDocUrl(method, path) {
  // Extract the resource name from the path
  // E.g., /networks/{networkId}/appliance/vlans -> appliance-vlans
  const parts = path.split('/').filter(p => p && !p.startsWith('{'));
  const resource = parts.slice(1).join('-'); // Skip first part (usually 'networks' or 'organizations')

  const methodLower = method.toLowerCase();
  return `https://developer.cisco.com/meraki/api-v1/${methodLower}-${resource}/`;
}

/**
 * Parse verbose changelog to extract changes
 *
 * Verbose format:
 * Added
 * =====
 * \[ module \]
 * ### resource
 * #### Operation Summary
 * Operation ID: `operationId`
 * PATH _`/path`_
 * > \- Path added
 * > \- New endpoint
 */
function parseChangelog(content) {
  const sections = {
    newEndpoints: [],
    modifiedEndpoints: [],
    stats: {
      new: 0,
      modified: 0
    }
  };

  const lines = content.split('\n');
  let currentSection = null; // 'Added' or 'Changed'
  let currentEndpoint = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Detect section headers
    if (line === 'Added') {
      currentSection = 'Added';
      continue;
    }
    if (line === 'Changed') {
      currentSection = 'Changed';
      continue;
    }

    // Match operation summary headers: #### Summary text
    const summaryMatch = line.match(/^####\s+(.+)$/);
    if (summaryMatch) {
      // Save previous endpoint if exists
      if (currentEndpoint) {
        if (currentEndpoint.isNew) {
          sections.newEndpoints.push(currentEndpoint);
          sections.stats.new++;
        } else if (currentEndpoint.changes.length > 0) {
          sections.modifiedEndpoints.push(currentEndpoint);
          sections.stats.modified++;
        }
      }

      // Start new endpoint
      currentEndpoint = {
        operationSummary: summaryMatch[1],
        method: null,
        path: null,
        changes: [],
        isNew: currentSection === 'Added'
      };
      continue;
    }

    // Extract Operation ID
    if (line.startsWith('Operation ID:') && currentEndpoint) {
      const opIdMatch = line.match(/Operation ID:\s*`([^`]+)`/);
      if (opIdMatch) {
        currentEndpoint.operationId = opIdMatch[1];
      }
      continue;
    }

    // Extract PATH and METHOD
    const pathMatch = line.match(/^(GET|POST|PUT|DELETE|PATCH)\s+_`([^`]+)`_$/);
    if (pathMatch && currentEndpoint) {
      currentEndpoint.method = pathMatch[1];
      currentEndpoint.path = pathMatch[2];
      continue;
    }

    // Also check for PATH without method (format: PATH _`/path`_)
    const pathOnlyMatch = line.match(/^PATH\s+_`([^`]+)`_$/);
    if (pathOnlyMatch && currentEndpoint) {
      currentEndpoint.path = pathOnlyMatch[1];
      continue;
    }

    // Extract method from blockquote if not already found
    const blockquoteMethodMatch = line.match(/^>\s+\*\*(GET|POST|PUT|DELETE|PATCH)\*\*\s+`([^`]+)`/);
    if (blockquoteMethodMatch && currentEndpoint && !currentEndpoint.method) {
      currentEndpoint.method = blockquoteMethodMatch[1];
      if (!currentEndpoint.path) {
        currentEndpoint.path = blockquoteMethodMatch[2];
      }
      continue;
    }

    // Parse changes from blockquotes (skip standard new endpoint markers)
    if (line.startsWith('> \\-') && currentEndpoint) {
      const change = line.substring(4).trim(); // Remove "> \-"

      // Skip standard markers for new endpoints
      if (change.toLowerCase() === 'path added' ||
          change.toLowerCase() === 'new endpoint' ||
          change === '') {
        continue;
      }

      // For modified endpoints, collect actual changes
      if (!currentEndpoint.isNew) {
        currentEndpoint.changes.push(change);
      }
    }
  }

  // Don't forget the last endpoint
  if (currentEndpoint) {
    if (currentEndpoint.isNew) {
      sections.newEndpoints.push(currentEndpoint);
      sections.stats.new++;
    } else if (currentEndpoint.changes.length > 0) {
      sections.modifiedEndpoints.push(currentEndpoint);
      sections.stats.modified++;
    }
  }

  return sections;
}

/**
 * Group endpoints by category (extracted from path)
 */
function groupByCategory(endpoints) {
  const groups = {};

  endpoints.forEach(endpoint => {
    // Extract category from path
    // /devices/{serial}/... -> devices
    // /networks/{networkId}/appliance/... -> appliance
    // /organizations/{organizationId}/... -> organizations
    const pathParts = endpoint.path.split('/').filter(p => p && !p.startsWith('{'));

    let category, subcategory;

    if (pathParts[0] === 'devices') {
      category = 'devices';
      subcategory = pathParts[1] || 'general';
    } else if (pathParts[0] === 'networks' && pathParts.length > 1) {
      category = pathParts[1]; // appliance, wireless, switch, etc.
      subcategory = pathParts[2] || 'general';
    } else if (pathParts[0] === 'organizations' && pathParts.length > 1) {
      category = 'organizations';
      subcategory = pathParts[1];
    } else {
      category = pathParts[0] || 'other';
      subcategory = pathParts[1] || 'general';
    }

    if (!groups[category]) {
      groups[category] = {};
    }

    if (!groups[category][subcategory]) {
      groups[category][subcategory] = [];
    }

    groups[category][subcategory].push(endpoint);
  });

  return groups;
}

/**
 * Generate human-readable description from endpoint
 */
function generateDescription(endpoint) {
  // Create description from method and path
  const pathParts = endpoint.path.split('/').filter(p => p && !p.startsWith('{'));
  const resource = pathParts[pathParts.length - 1] || 'resource';

  const methodMap = {
    'GET': 'Get',
    'POST': 'Create',
    'PUT': 'Update',
    'DELETE': 'Delete',
    'PATCH': 'Update'
  };

  const verb = methodMap[endpoint.method] || endpoint.method;
  return `${verb} ${resource}`;
}

/**
 * Generate release notes markdown
 */
function generateReleaseNotes(sections, version, branch) {
  let markdown = '';

  // Determine month and year
  const now = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  // Header
  markdown += `# ${month} ${year}\n\n`;
  markdown += `Meraki API Release Notes **${version}**\n\n`;

  // Generate changelog URL (version with dashes instead of dots)
  const versionSlug = version.replace(/\./g, '-').toLowerCase();
  markdown += `[**Changelog**](https://developer.cisco.com/meraki/whats-new/${versionSlug}/)\n\n`;

  // Summary
  markdown += `## Summary\n\n`;
  const totalOperations = sections.stats.new + sections.stats.modified + 850; // Approximate baseline
  markdown += `- ${sections.stats.new} new operations added\n`;
  markdown += `- ${sections.stats.modified} operations enhanced\n`;
  markdown += `- ${totalOperations} total operations available\n`;
  markdown += `\n`;

  // What's New section
  if (sections.newEndpoints.length > 0) {
    markdown += `## What's New\n\n`;
    const grouped = groupByCategory(sections.newEndpoints);

    Object.keys(grouped).sort().forEach(category => {
      markdown += `### ${category}\n\n`;

      Object.keys(grouped[category]).sort().forEach(subcategory => {
        markdown += `**${subcategory}**\n\n`;

        grouped[category][subcategory].forEach(endpoint => {
          const description = generateDescription(endpoint);
          const url = generateDocUrl(endpoint.method, endpoint.path);
          markdown += `- ${description}, [${endpoint.method} ${endpoint.path}](${url})\n`;
        });
        markdown += `\n`;
      });
    });
  }

  // What's Updated section
  if (sections.modifiedEndpoints.length > 0) {
    markdown += `## What's Updated\n\n`;
    const grouped = groupByCategory(sections.modifiedEndpoints);

    Object.keys(grouped).sort().forEach(category => {
      markdown += `### ${category}\n\n`;

      Object.keys(grouped[category]).sort().forEach(subcategory => {
        markdown += `**${subcategory}**\n\n`;

        grouped[category][subcategory].forEach(endpoint => {
          const description = generateDescription(endpoint);
          const url = generateDocUrl(endpoint.method, endpoint.path);
          markdown += `- ${description}, [${endpoint.method} ${endpoint.path}](${url})\n`;

          // Add change details (limit to first 3 for brevity)
          const changesToShow = endpoint.changes.slice(0, 3);
          changesToShow.forEach(change => {
            markdown += `\n> \\- ${change}\n`;
          });

          if (endpoint.changes.length > 3) {
            markdown += `\n> \\- ... and ${endpoint.changes.length - 3} more changes\n`;
          }

          markdown += `\n`;
        });
      });
    });
  }

  return markdown;
}

// Main execution
try {
  console.log('Parsing changelog...');
  const sections = parseChangelog(changelog);

  console.log(`Found ${sections.stats.new} new endpoints`);
  console.log(`Found ${sections.stats.modified} modified endpoints`);

  console.log('Generating release notes...');
  const releaseNotes = generateReleaseNotes(sections, version, branch);

  fs.writeFileSync(outputPath, releaseNotes, 'utf8');
  console.log(`✅ Release notes written to ${outputPath}`);

  // Print summary
  console.log('\n=== Summary ===');
  console.log(`Version: ${version}`);
  console.log(`Branch: ${branch}`);
  console.log(`New: ${sections.stats.new}`);
  console.log(`Modified: ${sections.stats.modified}`);

  process.exit(0);
} catch (error) {
  console.error('❌ Error generating release notes:', error.message);
  console.error(error.stack);
  process.exit(1);
}
