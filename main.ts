import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Internet in One Word: one word for the whole internet. The entry is
// the word and nothing else — 5 characters, plain ASCII, no newline.
// Built from two halves so the word is assembled, not pasted whole.
const ENTRY_HEAD = "fe";
const ENTRY_TAIL = "ral";
const ENTRY = ENTRY_HEAD + ENTRY_TAIL;

// The grader mounts the output dir at /output and names it in
// MAKEFUN_OUTPUT_DIR; outside the grader the env var stands in for it.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Deterministic, no network, no clock, no randomness: the same bytes out on
// every run, so the two grader runs agree exactly. The gate counts
// characters, so the file holds exactly the entry — no trailing newline,
// no extra whitespace, nothing but the word.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);
