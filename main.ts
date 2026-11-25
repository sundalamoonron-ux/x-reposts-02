// Entry for the make.fun bounty "makefun-x-reposts-02".
// The entry itself is a list of my own posts on X, each one quoting or
// directly replying to a different post of @makefunai. This program only
// hands that list to the grader: it copies POSTS.json from the repository
// root to /output/POSTS.json. Nothing the program writes is scored.
// Score: 2 points per repost and per quote, 1 point per like, summed
// over all the posts in POSTS.json; views and replies move nothing.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POSTS.json");
const listed = JSON.parse(readFileSync(source, "utf8")).posts ?? [];

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POSTS.json"));
console.log(`Wrote ${listed.length} post(s) to ${join(outDir, "POSTS.json")}`);
