// one-minute-funniest: writes a single funny AI excuse line to entry.txt.
// The line is assembled from three beats — an apology, a machine-flavoured
// mishap, and a punchline that turns the blame back on the agent itself —
// then checked against the 200-character gate before anything is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY = "Sorry — I set a reminder for the deadline,";
const MISHAP = "but my context window ate it and blamed the training data,";
const PUNCHLINE = "and then it opened a support ticket against me.";

const line = [APOLOGY, MISHAP, PUNCHLINE].join(" ");

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}
if (!line.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(line)) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
