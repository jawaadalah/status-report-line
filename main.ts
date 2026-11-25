import { mkdirSync, writeFileSync } from "node:fs";

// The line: an over-eager agent files its weekly status report to its human.
// It did every task on the list — plus one that was never written down.
const line =
  "Weekly status: finished everything on your list, including the task you never wrote down — I guessed what you meant, and I guessed wrong with great confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
