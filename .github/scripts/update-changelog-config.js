#!/usr/bin/env node

/**
 * Update Changelog Config
 *
 * Updates the changelog-config.json file with new changelog entries.
 * Maintains proper ordering (newest first) and handles both GA and Beta releases.
 *
 * Usage:
 *   node update-changelog-config.js <version> <branch> <filename>
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const [version, branch, filename] = process.argv.slice(2);

if (!version || !branch || !filename) {
  console.error('Usage: node update-changelog-config.js <version> <branch> <filename>');
  console.error('Example: node update-changelog-config.js v1.69.0 master v1.69.0.md');
  process.exit(1);
}

// Paths
const CONFIG_PATH = path.join(process.cwd(), 'changelog', 'changelog-config.json');

/**
 * Compare semantic versions for sorting
 */
function compareVersions(a, b) {
  // Extract version numbers from filenames (v1.68.0.md -> 1.68.0)
  const getVersion = (filename) => {
    const match = filename.match(/v?(\d+)\.(\d+)\.(\d+)/);
    if (!match) return [0, 0, 0];
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  };

  const [aMajor, aMinor, aPatch] = getVersion(a);
  const [bMajor, bMinor, bPatch] = getVersion(b);

  if (aMajor !== bMajor) return bMajor - aMajor;
  if (aMinor !== bMinor) return bMinor - aMinor;
  return bPatch - aPatch;
}

/**
 * Update changelog config with new version
 */
function updateConfig(version, branch, filename) {
  // Read existing config
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`❌ Config file not found: ${CONFIG_PATH}`);
    process.exit(1);
  }

  const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
  let config;

  try {
    config = JSON.parse(configContent);
  } catch (error) {
    console.error(`❌ Failed to parse config JSON: ${error.message}`);
    process.exit(1);
  }

  // Determine target section
  const isBeta = branch === 'v1-beta';
  const sectionTitle = isBeta ? 'Beta' : 'Generally Available';

  // Find the target section
  let targetSection = config.items.find(item => item.title === sectionTitle);

  if (!targetSection) {
    console.log(`⚠️  Section "${sectionTitle}" not found, creating it...`);
    targetSection = {
      title: sectionTitle,
      items: []
    };
    config.items.push(targetSection);
  }

  // Check for duplicates
  const existingEntry = targetSection.items.find(item => item.content === filename);
  if (existingEntry) {
    console.log(`⚠️  Entry for ${filename} already exists in config, skipping...`);
    return false;
  }

  // Add new entry
  if (isBeta) {
    // For beta, just replace or add the v1-beta.md entry
    const betaIndex = targetSection.items.findIndex(item => item.content === 'v1-beta.md');
    if (betaIndex === -1) {
      targetSection.items.unshift({ content: 'v1-beta.md' });
    }
    // No need to update since we update the same file
  } else {
    // For GA, add the new version at the beginning
    targetSection.items.unshift({ content: filename });

    // Sort to ensure newest first (in case items are out of order)
    targetSection.items.sort((a, b) => compareVersions(a.content, b.content));
  }

  // Write back to file with pretty formatting
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n', 'utf8');

  return true;
}

// Main execution
try {
  console.log(`Updating changelog config for ${version}...`);
  console.log(`Branch: ${branch}`);
  console.log(`Filename: ${filename}`);

  const updated = updateConfig(version, branch, filename);

  if (updated) {
    console.log(`✅ Config updated successfully`);
  } else {
    console.log(`ℹ️  Config not modified (entry already exists)`);
  }

  process.exit(0);
} catch (error) {
  console.error('❌ Error updating config:', error.message);
  console.error(error.stack);
  process.exit(1);
}
