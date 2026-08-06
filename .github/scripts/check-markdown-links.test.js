const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'check-markdown-links.js');

test('reports a Markdown link whose local heading target is missing', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-link-check-'));
  const markdownPath = path.join(tempDir, 'broken.md');
  fs.writeFileSync(markdownPath, '# Present\n\n[Missing](#missing)\n');

  const result = spawnSync(process.execPath, [scriptPath, markdownPath], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /broken\.md:3: missing anchor #missing/);
});
