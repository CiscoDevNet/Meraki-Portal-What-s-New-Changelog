#!/usr/bin/env node

const fs = require('node:fs');

const files = process.argv.slice(2);
if (!files.length) {
  console.error('Usage: node fix-markdown-anchors.js <file.md> [...]');
  process.exit(1);
}

function slugBase(value) {
  return value.trim().toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/\\([\[\]])/g, '$1')
    .replace(/[^\p{L}\p{N}\p{M}\p{Pc}\- ]/gu, '')
    .replace(/ /g, '-');
}

function headingTargets(content) {
  const targets = new Map();
  const seen = new Map();
  const lines = content.split('\n');
  for (let index = 0; index < lines.length; index++) {
    let heading = null;
    let quoted = false;
    const atx = lines[index].match(/^((?:> ?)*) {0,3}#{1,6}\s+(.+?)\s*#*\s*$/);
    if (atx) {
      heading = atx[2];
      quoted = Boolean(atx[1]);
    }
    const setext = index + 1 < lines.length && lines[index + 1].match(/^((?:> ?)*) {0,3}(?:=+|-+)\s*$/);
    if (!heading && setext && lines[index].trim()) {
      heading = lines[index].replace(/^(?:> ?)+/, '').trim();
      quoted = Boolean(setext[1]) || /^(?:> ?)+/.test(lines[index]);
    }
    if (!heading) continue;
    const base = slugBase(heading);
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    if (!quoted) {
      if (!targets.has(base)) targets.set(base, []);
      targets.get(base).push(count ? `${base}-${count}` : base);
    }
  }
  return targets;
}

let changed = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const targets = headingTargets(content);
  const occurrences = new Map();
  const updated = content.replace(/(?<!!)\[([^\]]*)\]\(#([^)]+)\)/g, (link, label) => {
    const base = slugBase(label);
    const occurrence = occurrences.get(base) || 0;
    occurrences.set(base, occurrence + 1);
    const target = targets.get(base)?.[occurrence];
    if (!target) return link;
    const replacement = `[${label}](#${target})`;
    if (replacement !== link) changed++;
    return replacement;
  });
  fs.writeFileSync(file, updated);
}

console.log(`Updated ${changed} anchor link(s).`);
