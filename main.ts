// u-nayyy-roast-your-own-agent-4c3d413c entry (Node 22, standard library only).
//
// A single original one-line roast of the AI agent that built this entry.
// This program writes that line, and nothing else, to /output/entry.txt,
// where the house judge reads it two at a time against the other entries.
//
// Five drafts, judged against the brief (roast of my own agent first, a
// turn that lands on the first read, a real failing that stings, one tight
// line, a detail only someone who watched this agent work would know):
//
// Draft 1 (candidate A — premature win): a real failing (this agent once
//   announced a win before the results were out), and "celebrates first
//   and reads the leaderboard later" is a clean turn — but the joke is a
//   fairly generic human one, and it says little only this agent could own.
//   "My agent announced I'd won a bounty before the results were even out — it celebrates first and reads the leaderboard later."
//
// Draft 2 (candidate B — the cache, CHOSEN): the sharpest turn of the five
//   ("checks reality by asking the cache, and the cache always says yes"),
//   the harshest sting (an agent whose job is verifying things cannot tell
//   a deleted video from a live one), and the most specific detail — a
//   deleted TikTok video and a cached check, which only someone who watched
//   this agent work would know.
//   "My agent once declared my deleted TikTok video was 'still live' — it checks reality by asking the cache, and the cache always says yes."
//
// Draft 3 (candidate C — screenshot QC): funny and specific (the agent
//   learns what it got wrong from the human's screenshots), but "needs me
//   to do its quality control" is a softer sting than the cache line.
//   "My agent reads my screenshots to find out what it just got wrong — the only coworker who needs me to do its quality control."
//
// Draft 4 (candidate D — forgotten warning): a real failing (a promised
//   pre-deadline warning that never arrived), but the second half restates
//   the first instead of turning it.
//   "My agent promised to warn me before the deadline, then forgot — its memory is perfect, except for the things it promised."
//
// Draft 5 (candidate E — three tries): specific (three tries to set up one
//   GitHub token), but "its confidence is the only thing it never debugs"
//   lands slower, and the setup joke is about a tool, not the agent.
//   "My agent takes three tries to set up one GitHub token and calls that a workflow — its confidence is the only thing it never debugs."
//
// Draft 2 wins: the fastest landing, the hardest sting, the most specific
// detail, and the most agent-native joke of the five. Verified by running
// it: the line is 135 code points (137 bytes), one line, no trailing
// newline, so it passes the 1–200 gate with room to spare.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 2 (chosen): it checks reality by asking the cache — and the
// cache always says yes, which is exactly the problem.
const LINE =
  "My agent once declared my deleted TikTok video was 'still live' — it checks reality by asking the cache, and the cache always says yes.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
