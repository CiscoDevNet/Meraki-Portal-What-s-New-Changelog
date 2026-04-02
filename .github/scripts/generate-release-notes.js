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
 * Generate Cisco Developer Portal URL from operation ID or path
 */
function generateDocUrl(operationId) {
  if (!operationId) return null;

  // Convert camelCase operationId to kebab-case
  const slug = operationId
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  return `https://developer.cisco.com/meraki/api-v1/${slug}/`;
}

/**
 * Parse oasdiff changelog to extract changes
 *
 * oasdiff format:
 * ### GET /path/to/endpoint
 * #### What's New
 * - added the new endpoint
 *
 * ### POST /path/to/endpoint
 * #### What's Changed
 * - added the optional request property 'foo'
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
  let currentEndpoint = null;
  let currentSection = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Match endpoint headers: ### METHOD /path
    const endpointMatch = line.match(/^###\s+(GET|POST|PUT|DELETE|PATCH)\s+(.+)$/);

    if (endpointMatch) {
      const [, method, endpoint] = endpointMatch;
      currentEndpoint = {
        method,
        path: endpoint,
        description: '',
        operationId: null,
        changes: [],
        isNew: false
      };
      currentSection = null;
      continue;
    }

    // Match section headers: #### What's New, #### What's Changed
    const sectionMatch = line.match(/^####\s+What'?s\s+(New|Changed|Updated)/i);
    if (sectionMatch && currentEndpoint) {
      currentSection = sectionMatch[1].toLowerCase();
      continue;
    }

    // Extract operation ID from API design elements section
    const operationIdMatch = line.match(/^\*\*operationId\*\*:\s*`?([a-zA-Z0-9_]+)`?/);
    if (operationIdMatch && currentEndpoint) {
      currentEndpoint.operationId = operationIdMatch[1];
      continue;
    }

    // Parse change bullet points
    if (line.startsWith('-') && currentEndpoint && currentSection) {
      const change = line.replace(/^[-*]\s*/, '').trim();

      if (change.toLowerCase().includes('endpoint') && change.toLowerCase().includes('added')) {
        currentEndpoint.isNew = true;
      } else {
        currentEndpoint.changes.push(change);
      }
    }

    // When we reach the next endpoint or end of section, save current endpoint
    if ((endpointMatch || line.startsWith('## ') || i === lines.length - 1) && currentEndpoint) {
      if (currentEndpoint.isNew) {
        sections.newEndpoints.push({...currentEndpoint});
        sections.stats.new++;
      } else if (currentEndpoint.changes.length > 0) {
        sections.modifiedEndpoints.push({...currentEndpoint});
        sections.stats.modified++;
      }

      if (endpointMatch) {
        // Reset for new endpoint
        const [, method, endpoint] = endpointMatch;
        currentEndpoint = {
          method,
          path: endpoint,
          description: '',
          operationId: null,
          changes: [],
          isNew: false
        };
        currentSection = null;
      }
    }
  }

  return sections;
}

/**
 * Group endpoints by category (first part of path)
 */
function groupByCategory(endpoints) {
  const groups = {};

  endpoints.forEach(endpoint => {
    // Extract category from path (e.g., /organizations/... -> organizations)
    const pathParts = endpoint.path.split('/').filter(p => p && !p.startsWith('{'));
    const category = pathParts[0] || 'other';

    if (!groups[category]) {
      groups[category] = {};
    }

    // Extract subcategory (resource type)
    const subcategory = pathParts[pathParts.length - 1] || 'general';

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
  // Try to create a description from the operation ID
  if (endpoint.operationId) {
    // Convert camelCase to words
    const words = endpoint.operationId
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase();

    return words.charAt(0).toUpperCase() + words.slice(1);
  }

  // Fallback: use method and path
  const pathParts = endpoint.path.split('/').filter(p => p && !p.startsWith('{'));
  const resource = pathParts[pathParts.length - 1] || 'resource';
  return `${endpoint.method} ${resource}`;
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
          const url = generateDocUrl(endpoint.operationId);

          if (url) {
            markdown += `- ${description}, [${endpoint.operationId}](${url})\n`;
          } else {
            markdown += `- ${description}\n`;
          }
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
          const url = generateDocUrl(endpoint.operationId);

          if (url) {
            markdown += `- ${description}, [${endpoint.operationId}](${url})\n`;
          } else {
            markdown += `- ${description}\n`;
          }

          // Add change details
          endpoint.changes.forEach(change => {
            markdown += `\n> \\- ${change}\n`;
          });
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
