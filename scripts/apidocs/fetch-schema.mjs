#!/usr/bin/env node
// Fetches the public SDL (with applied directives) from the gateway. Set APIDOCS_SCHEMA_FILE to use a local file instead.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { checkSdl } from './lib/sdl-guard.mjs';

const GATEWAY = process.env.PLATFORM_API_GATEWAY || 'https://eur.365.altium.com/napi/gateway/graphql';
const SCHEMA_DIR = '.schema';
const SIZE_FILE = `${SCHEMA_DIR}/last-size`;

mkdirSync(SCHEMA_DIR, { recursive: true });

let text;
let source;
if (process.env.APIDOCS_SCHEMA_FILE) {
  source = process.env.APIDOCS_SCHEMA_FILE;
  text = readFileSync(source, 'utf8');
} else {
  source = `${GATEWAY}?sdl`;
  const attempt = () => fetch(source, { signal: AbortSignal.timeout(60000) });
  let response;
  try {
    response = await attempt();
    if (response.status >= 500) throw new Error(`${response.status} ${response.statusText}`);
  } catch (error) {
    console.warn(`fetch-schema: ${error.message}; retrying in 5 s`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    response = await attempt();
  }
  if (!response.ok) {
    console.error(`fetch-schema: ${response.status} ${response.statusText} from ${source}`);
    process.exit(1);
  }
  text = await response.text();
}

const allowShrink = process.env.APIDOCS_ALLOW_SHRINK === '1';
if (allowShrink) console.warn('fetch-schema: APIDOCS_ALLOW_SHRINK=1, schema size guard bypassed');
const previousSize = !allowShrink && !process.env.APIDOCS_SCHEMA_FILE && existsSync(SIZE_FILE)
  ? Number(readFileSync(SIZE_FILE, 'utf8'))
  : 0;
try {
  checkSdl(text, previousSize);
} catch (error) {
  console.error(`fetch-schema: ${error.message}`);
  process.exit(1);
}

writeFileSync(`${SCHEMA_DIR}/raw.graphql`, text);
if (!process.env.APIDOCS_SCHEMA_FILE) writeFileSync(SIZE_FILE, String(text.length));
console.log(`fetch-schema: ${text.length} bytes from ${source}`);
