const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

const scriptPath = path.join(__dirname, 'fix-markdown-anchors.js');

test('renumbers duplicate heading links in a composite Markdown file', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'meraki-anchor-fix-'));
  const markdownPath = path.join(tempDir, 'composite.md');
  fs.writeFileSync(markdownPath, [
    '[Section](#section)',
    '# Section',
    '[Section](#section)',
    '# Section',
    ''
  ].join('\n'));

  const result = spawnSync(process.execPath, [scriptPath, markdownPath], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  assert.match(fs.readFileSync(markdownPath, 'utf8'), /\[Section\]\(#section-1\)/);
});
