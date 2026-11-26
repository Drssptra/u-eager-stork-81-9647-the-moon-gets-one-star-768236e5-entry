// The Moon Gets One Star — a one-star review of the Moon.
// Writes the review to /output/entry.txt with no trailing newline.
// Gate: UTF-8 text, 1-120 characters, not only whitespace.
// Revision: sharpened the ghosting joke — "like nothing happened. Blocked."
// lands the punchline harder than the flat "Zero accountability." closer.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "★☆☆☆☆ Ghosts me for two weeks every month, then comes back full of itself like nothing happened. Blocked.";

// Fail loudly instead of shipping an entry the gate would reject.
if ([...ENTRY].length < 1 || [...ENTRY].length > 120 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-120 non-blank characters, got ${[...ENTRY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
