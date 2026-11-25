// makefun-x-reposts-02 entry (Node 22, standard library only).
// The entry is Len's own posts on X: each one quotes or replies directly to a
// different @makefunai pool post, with make.fun / @makefunai and his play code
// in its own words. This program only hands the list over: it reads POSTS.json
// from the repository root, checks it is the expected list shape, and writes
// it unchanged to /output/POSTS.json, where the house's gate reads it.
// Nothing this program writes about the posts is scored — the house reads
// each post's reposts, quotes and likes from X itself.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with /bot and /output instead, no environment needed.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POSTS.json');
const raw = readFileSync(sourcePath, 'utf8');

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`POSTS.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts) ||
  (parsed as { posts: unknown[] }).posts.length < 1 ||
  (parsed as { posts: unknown[] }).posts.length > 15
) {
  console.error('POSTS.json must be {"posts": [...]} with 1 to 15 post addresses.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POSTS.json'), raw, 'utf8');
console.log(`Wrote ${parsed.posts.length} post(s) to ${join(OUTPUT_DIR, 'POSTS.json')}.`);
