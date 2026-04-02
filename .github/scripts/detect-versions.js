#!/usr/bin/env node

/**
 * Detect Latest Releases
 *
 * Fetches available releases from meraki/openapi GitHub repository
 * and determines which versions need changelog generation.
 *
 * Usage:
 *   node detect-versions.js [ga|beta|both]
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const mode = process.argv[2] || 'both';

/**
 * Fetch tags from GitHub API
 */
async function fetchGitHubTags() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/meraki/openapi/tags?per_page=100',
      method: 'GET',
      headers: {
        'User-Agent': 'Meraki-Changelog-Bot',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    https.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API error: ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Parse semantic version from tag name
 */
function parseVersion(tagName) {
  const match = tagName.match(/^v?(\d+)\.(\d+)\.(\d+)(-beta)?(\.\d+)?$/);
  if (!match) return null;

  return {
    tag: tagName,
    major: parseInt(match[1]),
    minor: parseInt(match[2]),
    patch: parseInt(match[3]),
    isBeta: !!match[4],
    betaVersion: match[5] ? parseInt(match[5].substring(1)) : 0
  };
}

/**
 * Compare versions for sorting
 */
function compareVersions(a, b) {
  if (a.major !== b.major) return b.major - a.major;
  if (a.minor !== b.minor) return b.minor - a.minor;
  if (a.patch !== b.patch) return b.patch - a.patch;
  if (a.isBeta !== b.isBeta) return a.isBeta ? -1 : 1;
  return b.betaVersion - a.betaVersion;
}

/**
 * Check if changelog already exists for a version
 */
function changelogExists(version, isBeta) {
  const changelogDir = path.join(process.cwd(), 'changelog');

  if (isBeta) {
    // Beta uses a single file, check if version is mentioned in it
    const betaFile = path.join(changelogDir, 'v1-beta.md');
    if (fs.existsSync(betaFile)) {
      const content = fs.readFileSync(betaFile, 'utf8');
      return content.includes(version);
    }
    return false;
  } else {
    // GA uses individual files
    const gaFile = path.join(changelogDir, `${version}.md`);
    return fs.existsSync(gaFile);
  }
}

/**
 * Detect versions that need changelog generation
 */
async function detectVersions() {
  console.log('Fetching tags from meraki/openapi repository...');

  const tags = await fetchGitHubTags();
  console.log(`Found ${tags.length} tags`);

  // Parse and filter valid version tags
  const versions = tags
    .map(tag => parseVersion(tag.name))
    .filter(v => v !== null);

  // Separate GA and Beta versions
  const gaVersions = versions.filter(v => !v.isBeta).sort(compareVersions);
  const betaVersions = versions.filter(v => v.isBeta).sort(compareVersions);

  console.log(`GA versions: ${gaVersions.length}`);
  console.log(`Beta versions: ${betaVersions.length}`);

  const result = {
    ga: null,
    beta: null
  };

  // Process GA releases
  if ((mode === 'ga' || mode === 'both') && gaVersions.length >= 2) {
    const latest = gaVersions[0];

    if (!changelogExists(latest.tag, false)) {
      const previous = gaVersions[1];
      result.ga = {
        new_version: latest.tag,
        old_version: previous.tag,
        needs_generation: true
      };
      console.log(`✅ GA: ${previous.tag} → ${latest.tag} (new release)`);
    } else {
      console.log(`ℹ️  GA: ${latest.tag} already has changelog`);
    }
  }

  // Process Beta releases
  if ((mode === 'beta' || mode === 'both') && betaVersions.length >= 2) {
    const latest = betaVersions[0];

    if (!changelogExists(latest.tag, true)) {
      const previous = betaVersions[1];
      result.beta = {
        new_version: latest.tag,
        old_version: previous.tag,
        needs_generation: true
      };
      console.log(`✅ Beta: ${previous.tag} → ${latest.tag} (new release)`);
    } else {
      console.log(`ℹ️  Beta: ${latest.tag} already has changelog`);
    }
  }

  return result;
}

// Main execution
detectVersions()
  .then((result) => {
    // Output in GitHub Actions format
    if (process.env.GITHUB_OUTPUT) {
      const fs = require('fs');

      // Set outputs for GitHub Actions
      if (result.ga) {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `ga_needs_update=true\n`);
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `ga_old_version=${result.ga.old_version}\n`);
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `ga_new_version=${result.ga.new_version}\n`);
      } else {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `ga_needs_update=false\n`);
      }

      if (result.beta) {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `beta_needs_update=true\n`);
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `beta_old_version=${result.beta.old_version}\n`);
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `beta_new_version=${result.beta.new_version}\n`);
      } else {
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `beta_needs_update=false\n`);
      }
    }

    // Also output as JSON for local testing
    console.log('\n=== Result ===');
    console.log(JSON.stringify(result, null, 2));

    // Exit with code 0 if any updates needed, 1 if nothing to do
    const hasUpdates = result.ga !== null || result.beta !== null;
    process.exit(hasUpdates ? 0 : 1);
  })
  .catch((error) => {
    console.error('❌ Error detecting versions:', error.message);
    console.error(error.stack);
    process.exit(2);
  });
