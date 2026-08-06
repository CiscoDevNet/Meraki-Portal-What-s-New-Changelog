#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { operationIdToDocUrl } = require('./operation-doc-url');

const explicitFiles = process.argv.slice(2);
const files = explicitFiles.length
  ? explicitFiles
  : fs.readdirSync('changelog')
    .filter(name => name.endsWith('.md'))
    .map(name => `changelog/${name}`)
    .concat('documents/2026.md');

function slugBase(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/\\([\[\]])/g, '$1')
    .replace(/[^\p{L}\p{N}\p{M}\p{Pc}\- ]/gu, '')
    .replace(/ /g, '-');
}

function collectAnchors(lines) {
  const anchors = new Set();
  const counts = new Map();
  let fenced = false;
  for (let index = 0; index < lines.length; index++) {
    if (/^\s*```/.test(lines[index])) {
      fenced = !fenced;
      continue;
    }
    if (fenced) continue;
    let heading = lines[index].match(/^(?:> ?)* {0,3}#{1,6}\s+(.+?)\s*#*\s*$/)?.[1];
    if (!heading && index + 1 < lines.length && /^(?:> ?)* {0,3}(?:=+|-+)\s*$/.test(lines[index + 1])) {
      heading = lines[index].replace(/^(?:> ?)+/, '').trim();
    }
    if (!heading) continue;
    const base = slugBase(heading);
    const count = counts.get(base) || 0;
    counts.set(base, count + 1);
    anchors.add(count ? `${base}-${count}` : base);
  }
  return anchors;
}

function collectOperationIds(markdownFiles) {
  const operations = new Map();
  for (const file of markdownFiles.filter(file => file.startsWith('changelog/'))) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    for (let index = 0; index < lines.length; index++) {
      const id = lines[index].match(/^Operation ID: `([^`]+)`/);
      if (!id) continue;
      for (let look = index + 1; look < Math.min(index + 12, lines.length); look++) {
        const endpoint = lines[look].match(/^(?:> )?\*?\*?(GET|POST|PUT|DELETE|PATCH)\*?\*? (?:_)?`([^`]+)`/);
        if (endpoint) {
          operations.set(`${endpoint[1]} ${endpoint[2]}`, id[1]);
          break;
        }
      }
    }
  }
  return operations;
}

const operations = collectOperationIds(files);
const errors = [];
let checked = 0;

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const anchors = collectAnchors(lines);
  let fenced = false;
  for (let index = 0; index < lines.length; index++) {
    if (/^\s*```/.test(lines[index])) {
      fenced = !fenced;
      continue;
    }
    if (fenced) continue;
    const searchable = lines[index].replace(/`[^`]*`/g, '');
    for (const match of searchable.matchAll(/(?<!!)\[([^\]]*)\]\(\s*(?:<([^>]+)>|([^\s)]+))(?:\s+["'][^"']*["'])?\s*\)/g)) {
      checked++;
      const label = match[1];
      const url = match[2] || match[3];
      const location = `${file}:${index + 1}`;
      if (url.startsWith('#')) {
        const anchor = decodeURIComponent(url.slice(1)).toLowerCase();
        if (!anchors.has(anchor)) errors.push(`${location}: missing anchor ${url}`);
        continue;
      }
      if (!/^https?:/.test(url)) {
        if (url.startsWith('/')) continue;
        const target = path.resolve(path.dirname(file), decodeURIComponent(url.split('#')[0]));
        if (!fs.existsSync(target)) errors.push(`${location}: missing file ${url}`);
        continue;
      }
      if (!url.startsWith('https://developer.cisco.com/meraki/api-v1/')) continue;

      let operationId = null;
      const endpoint = label.match(/^(GET|POST|PUT|DELETE|PATCH)\s+(.+)$/);
      if (endpoint) operationId = operations.get(`${endpoint[1]} ${endpoint[2]}`);
      if (/^[a-z][A-Za-z0-9]+$/.test(label)) operationId = label;
      if (label === 'Docs') {
        for (let look = index + 1; look < Math.min(index + 8, lines.length); look++) {
          const id = lines[look].match(/^Operation ID: `([^`]+)`/);
          if (id) { operationId = id[1]; break; }
        }
      }
      if (operationId && url !== operationIdToDocUrl(operationId)) {
        errors.push(`${location}: ${url} should be ${operationIdToDocUrl(operationId)}`);
      }
    }
  }
}

if (errors.length) {
  for (const error of errors) console.error(error);
  console.error(`Found ${errors.length} invalid link(s) across ${files.length} file(s).`);
  process.exit(1);
}

console.log(`Checked ${checked} Markdown links across ${files.length} files.`);
