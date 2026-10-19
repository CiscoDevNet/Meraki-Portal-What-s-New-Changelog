const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'update-changelog-config.js');

function runUpdater(items, version, branch, filename) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-config-update-'));
  const changelogDir = path.join(tempDir, 'changelog');
  fs.mkdirSync(changelogDir);
  const configPath = path.join(changelogDir, 'changelog-config.json');
  fs.writeFileSync(configPath, JSON.stringify({ title: 'API Changelog', items }, null, 2));

  const result = spawnSync(process.execPath, [scriptPath, version, branch, filename], {
    cwd: tempDir,
    encoding: 'utf8'
  });

  return { result, config: JSON.parse(fs.readFileSync(configPath, 'utf8')) };
}

test('adds a version title to new GA entries', () => {
  const { result, config } = runUpdater([
    { title: 'Generally Available', items: [] }
  ], 'v1.75.1', 'master', 'v1.75.1.md');

  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(config.items[0].items[0], {
    title: 'v1.75.1',
    content: 'v1.75.1.md'
  });
});

test('adds a stable title to the shared Beta changelog entry', () => {
  const { result, config } = runUpdater([
    { title: 'Beta', items: [] }
  ], 'v1.75.1-beta.0', 'v1-beta', 'v1-beta.md');

  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(config.items[0].items[0], {
    title: 'v1-beta',
    content: 'v1-beta.md'
  });
});

test('repairs a missing title on an existing Beta entry', () => {
  const { result, config } = runUpdater([
    { title: 'Beta', items: [{ content: 'v1-beta.md' }] }
  ], 'v1.75.1-beta.0', 'v1-beta', 'v1-beta.md');

  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(config.items[0].items[0], {
    title: 'v1-beta',
    content: 'v1-beta.md'
  });
});

test('fills missing historical GA titles when adding a release', () => {
  const { result, config } = runUpdater([
    { title: 'Generally Available', items: [{ content: 'v1.74.0.md' }] }
  ], 'v1.75.0', 'master', 'v1.75.0.md');

  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(config.items[0].items, [
    { title: 'v1.75.0', content: 'v1.75.0.md' },
    { title: 'v1.74.0', content: 'v1.74.0.md' }
  ]);
});
