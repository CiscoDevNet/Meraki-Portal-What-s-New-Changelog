#!/usr/bin/env node

/**
 * Update Annual Document
 *
 * Prepends release notes to the annual markdown file (e.g., 2026.md).
 * Creates new annual file if year boundary is crossed.
 *
 * Usage:
 *   node update-annual-document.js <release-notes.md> <version> <branch>
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const [releaseNotesPath, version, branch] = process.argv.slice(2);

if (!releaseNotesPath || !version || !branch) {
  console.error('Usage: node update-annual-document.js <release-notes.md> <version> <branch>');
  console.error('Example: node update-annual-document.js release-notes.md v1.69.0 master');
  process.exit(1);
}

// Paths
const DOCUMENTS_DIR = path.join(process.cwd(), 'documents');
const CONFIG_PATH = path.join(process.cwd(), 'config.json');

/**
 * Get current year
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Update or create annual document
 */
function updateAnnualDocument(releaseNotesPath, version, branch) {
  // Skip for beta releases
  if (branch === 'v1-beta') {
    console.log('ℹ️  Skipping annual document update for beta release');
    return false;
  }

  // Get current year
  const year = getCurrentYear();
  const annualFilePath = path.join(DOCUMENTS_DIR, `${year}.md`);

  // Read release notes
  if (!fs.existsSync(releaseNotesPath)) {
    console.error(`❌ Release notes file not found: ${releaseNotesPath}`);
    process.exit(1);
  }

  const releaseNotes = fs.readFileSync(releaseNotesPath, 'utf8');

  // Check if annual file exists
  let existingContent = '';
  let isNewFile = false;

  if (fs.existsSync(annualFilePath)) {
    existingContent = fs.readFileSync(annualFilePath, 'utf8');
  } else {
    console.log(`ℹ️  Creating new annual file for ${year}`);
    isNewFile = true;
  }

  // Prepend release notes to existing content
  let updatedContent;

  if (existingContent.trim()) {
    // Add two blank lines between release notes
    updatedContent = releaseNotes.trim() + '\n\n' + existingContent;
  } else {
    updatedContent = releaseNotes.trim() + '\n';
  }

  // Write updated content
  fs.writeFileSync(annualFilePath, updatedContent, 'utf8');
  console.log(`✅ Updated ${year}.md`);

  // Update config.json if this is a new year
  if (isNewFile) {
    updateConfigForNewYear(year);
  }

  return true;
}

/**
 * Update config.json to include new year
 */
function updateConfigForNewYear(year) {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.log('⚠️  config.json not found, skipping config update');
    return;
  }

  try {
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

    // Find the Release Notes section
    const releaseNotesSection = config.items.find(item => item.title === 'Release Notes');

    if (!releaseNotesSection) {
      console.log('⚠️  Release Notes section not found in config.json');
      return;
    }

    // Check if year already exists
    const yearExists = releaseNotesSection.items.some(item => item.title === year.toString());

    if (yearExists) {
      console.log(`ℹ️  Year ${year} already in config.json`);
      return;
    }

    // Add new year at the beginning (newest first)
    releaseNotesSection.items.unshift({
      title: year.toString(),
      content: `documents/${year}.md`
    });

    // Write back to file
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n', 'utf8');
    console.log(`✅ Added ${year} to config.json`);
  } catch (error) {
    console.error(`⚠️  Failed to update config.json: ${error.message}`);
  }
}

// Main execution
try {
  console.log(`Updating annual document with ${version}...`);
  console.log(`Branch: ${branch}`);

  const updated = updateAnnualDocument(releaseNotesPath, version, branch);

  if (updated) {
    console.log(`✅ Annual document updated successfully`);
  } else {
    console.log(`ℹ️  Annual document not modified (beta release)`);
  }

  process.exit(0);
} catch (error) {
  console.error('❌ Error updating annual document:', error.message);
  console.error(error.stack);
  process.exit(1);
}
