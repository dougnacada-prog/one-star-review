// One-Star Review of Something Essential — v2
// Writes a single-line, deadpan one-star review of gravity to /output/entry.txt.
// The grader runs this with Node 22+; the output path can be overridden with
// ENTRY_OUTPUT for local runs.
//
// The review is built from three parts so the turn lands in the last few words:
// a straight complaint about the essential itself, the specific daily grievance,
// and the one-star verdict. The text is validated before it is written:
// one line, 1 to 160 characters, no trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const SUBJECT = "Gravity";
const COMPLAINT = "works 24 hours a day and still drops my phone on my face in bed";
const VERDICT = "One star.";

const ENTRY = `${SUBJECT} ${COMPLAINT}. ${VERDICT}`;

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-160`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
