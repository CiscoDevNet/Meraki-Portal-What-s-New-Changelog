const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'format-changelog.js');

test('does not add duplicate suffixes when Changed headings are unique', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-format-changelog-'));
  const inputPath = path.join(tempDir, 'simple.md');
  const outputPath = path.join(tempDir, 'verbose.md');
  const preloadPath = path.join(tempDir, 'fake-https.js');

  fs.writeFileSync(inputPath, [
    '### GET /organizations/{organizationId}/earlyAccess/features',
    '- response schema changed',
    ''
  ].join('\n'));
  fs.writeFileSync(preloadPath, `
    const https = require('node:https');
    const { EventEmitter } = require('node:events');
    https.get = (_url, callback) => {
      const response = new EventEmitter();
      response.statusCode = 200;
      process.nextTick(() => {
        callback(response);
        response.emit('data', JSON.stringify({ paths: {
          '/organizations/{organizationId}/earlyAccess/features': { get: {
            operationId: 'getOrganizationEarlyAccessFeatures',
            summary: 'List early access features',
            responses: {}
          } }
        } }));
        response.emit('end');
      });
      return new EventEmitter();
    };
  `);

  const result = spawnSync(process.execPath, [
    '--require', preloadPath,
    scriptPath,
    inputPath,
    'v1.72.0',
    'v1.73.0',
    outputPath
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  const changelog = fs.readFileSync(outputPath, 'utf8');
  assert.match(changelog, /\+ \[earlyAccess\]\(#earlyaccess\)/);
  assert.doesNotMatch(changelog, /\+ \[earlyAccess\]\(#earlyaccess-1\)/);
});
