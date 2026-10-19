const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'detect-versions.js');

test('exits successfully when latest GA and Beta changelogs already exist', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-detect-versions-'));
  const changelogDir = path.join(tempDir, 'changelog');
  const outputPath = path.join(tempDir, 'github-output.txt');
  fs.mkdirSync(changelogDir);
  fs.writeFileSync(path.join(changelogDir, 'v1.75.1.md'), 'GA changelog');
  fs.writeFileSync(path.join(changelogDir, 'v1-beta.md'), '## v1.75.1-beta.0\n');

  const preloadPath = path.join(tempDir, 'fake-https.js');
  fs.writeFileSync(preloadPath, `
    const https = require('node:https');
    const { EventEmitter } = require('node:events');
    https.get = (_options, callback) => {
      const response = new EventEmitter();
      response.statusCode = 200;
      process.nextTick(() => {
        callback(response);
        response.emit('data', JSON.stringify([
          { name: 'v1.75.1' },
          { name: 'v1.75.0' },
          { name: 'v1.75.1-beta.0' },
          { name: 'v1.75.0-beta.1' }
        ]));
        response.emit('end');
      });
      return new EventEmitter();
    };
  `);

  const result = spawnSync(process.execPath, [
    '--require', preloadPath,
    scriptPath,
    'both'
  ], {
    cwd: tempDir,
    encoding: 'utf8',
    env: { ...process.env, GITHUB_OUTPUT: outputPath }
  });

  assert.equal(result.status, 0, result.stderr);
  const output = fs.readFileSync(outputPath, 'utf8');
  assert.match(output, /ga_needs_update=false/);
  assert.match(output, /beta_needs_update=false/);
});
