const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'generate-release-notes.js');

test('uses the operation ID for Meraki API documentation links', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-release-notes-'));
  const changelogPath = path.join(tempDir, 'changelog.md');
  const outputPath = path.join(tempDir, 'release-notes.md');

  fs.writeFileSync(changelogPath, [
    'Added',
    '=====',
    '#### Return the wireless network usage',
    'Operation ID: `getOrganizationWirelessClientsUsageByNetwork`',
    'PATH _`/organizations/{organizationId}/wireless/clients/usage/byNetwork`_',
    '> **GET** `/organizations/{organizationId}/wireless/clients/usage/byNetwork`',
    ''
  ].join('\n'));

  const result = spawnSync(process.execPath, [
    scriptPath,
    changelogPath,
    'v1.73.0',
    'master',
    outputPath
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  const releaseNotes = fs.readFileSync(outputPath, 'utf8');
  assert.match(
    releaseNotes,
    /\[\*\*Changelog\*\*\]\(https:\/\/developer\.cisco\.com\/meraki\/whats-new\/v1-73-0\/\)/
  );
  assert.match(
    releaseNotes,
    /https:\/\/developer\.cisco\.com\/meraki\/api-v1\/get-organization-wireless-clients-usage-by-network\//
  );
});

test('does not create a hyperlink when an operation ID is unavailable', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-release-notes-'));
  const changelogPath = path.join(tempDir, 'changelog.md');
  const outputPath = path.join(tempDir, 'release-notes.md');

  fs.writeFileSync(changelogPath, [
    'Changed',
    '=======',
    '#### A removed operation',
    'POST _`/organizations/{organizationId}/removed`_',
    '> \\- api path removed with deprecation',
    ''
  ].join('\n'));

  const result = spawnSync(process.execPath, [
    scriptPath, changelogPath, 'v1.73.0', 'master', outputPath
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  const releaseNotes = fs.readFileSync(outputPath, 'utf8');
  assert.match(releaseNotes, /`POST \/organizations\/\{organizationId\}\/removed`/);
  assert.doesNotMatch(releaseNotes, /\]\(null\)/);
});

test('uses operation counts from the provided OpenAPI spec', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-release-notes-spec-'));
  const changelogPath = path.join(tempDir, 'changelog.md');
  const specPath = path.join(tempDir, 'spec.json');
  const outputPath = path.join(tempDir, 'release-notes.md');

  fs.writeFileSync(changelogPath, 'Added\n=====\n#### New operation\nOperation ID: `newOperation`\nPATH _`/one`_\n');
  fs.writeFileSync(specPath, JSON.stringify({ paths: {
    '/one': { get: { operationId: 'one' } },
    '/two': { post: { operationId: 'two' }, get: { operationId: 'three' } },
    '/three': { parameters: [] }
  } }));

  const result = spawnSync(process.execPath, [
    scriptPath,
    changelogPath,
    'v1.75.1',
    'master',
    outputPath,
    specPath
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  const releaseNotes = fs.readFileSync(outputPath, 'utf8');
  assert.match(releaseNotes, /- 3 total operations available/);
  assert.doesNotMatch(releaseNotes, /852 total operations available/);
});
