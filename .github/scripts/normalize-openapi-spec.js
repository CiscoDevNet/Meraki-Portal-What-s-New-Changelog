#!/usr/bin/env node

/**
 * Normalize numeric strings used for OpenAPI minimum/maximum keywords.
 *
 * Some upstream specs encode these numeric OpenAPI keywords as strings. This
 * creates a corrected local copy for tools that require their OpenAPI types;
 * the upstream spec and published API contract are not modified.
 *
 * Usage:
 *   node normalize-openapi-spec.js <input.json> <output.json>
 */

const fs = require('node:fs');

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  console.error('Usage: node normalize-openapi-spec.js <input.json> <output.json>');
  process.exit(1);
}

const numericString = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;
let converted = 0;

function normalize(value) {
  if (Array.isArray(value)) {
    return value.map(normalize);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => {
      if ((key === 'minimum' || key === 'maximum')
        && typeof child === 'string'
        && numericString.test(child.trim())) {
        converted += 1;
        return [key, Number(child)];
      }
      return [key, normalize(child)];
    }));
  }

  return value;
}

try {
  const spec = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const normalized = normalize(spec);
  fs.writeFileSync(outputPath, `${JSON.stringify(normalized, null, 2)}\n`, 'utf8');
  console.log(`Normalized ${converted} numeric minimum/maximum values in ${outputPath}`);
} catch (error) {
  console.error(`Failed to normalize OpenAPI spec: ${error.message}`);
  process.exit(1);
}
