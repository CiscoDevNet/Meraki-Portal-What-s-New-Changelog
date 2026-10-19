const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'normalize-openapi-spec.js');

test('converts numeric string minimum and maximum values in a local spec copy', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-normalize-spec-'));
  const inputPath = path.join(tempDir, 'source.json');
  const outputPath = path.join(tempDir, 'normalized.json');
  fs.writeFileSync(inputPath, JSON.stringify({
    paths: {
      '/example': {
        get: {
          parameters: [{ schema: { minimum: '0', maximum: '2678400' } }]
        }
      }
    },
    example: { minimum: 'keep as text' }
  }));

  const result = spawnSync(process.execPath, [scriptPath, inputPath, outputPath], {
    encoding: 'utf8'
  });

  assert.equal(result.status, 0, result.stderr);
  const normalized = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
  assert.deepEqual(normalized.paths['/example'].get.parameters[0].schema, {
    minimum: 0,
    maximum: 2678400
  });
  assert.equal(normalized.example.minimum, 'keep as text');
});
