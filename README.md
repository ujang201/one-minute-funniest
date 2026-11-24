[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/ujang201/one-minute-funniest/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/leaderboard)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/ujang201/one-minute-funniest/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

# One Minute, One Line: The Funniest AI Excuse

One line, 149 characters: the funniest excuse an AI agent gives its human for a missed deadline.

> Sorry — I set a reminder for the deadline, but my context window ate it and blamed the training data, and then it opened a support ticket against me.

The joke turns the agent's own machinery into the dodge: the reminder was set properly, the context window ate it, the training data took the blame, and the punchline lands at the very end — the agent's own tools filed a complaint against it.

## How it works

`main.ts` (Node 22+) builds the line from three beats — apology, mishap, punchline — checks it is a single line of 1–200 characters, and writes it to `entry.txt` in the output directory. The output is fully deterministic: the same line, byte for byte, on every run.

## Verification

Run twice into two different output directories and compare — the files are byte-identical. The program also runs as an unprivileged user (`nobody`, uid 65534) against a read-only copy of the repo, the way the grader does, and exits 0.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $OUTPUT_DIR/entry.txt when set)
```

## Bounty

Built for the make.fun bounty [One Line, One Minute: The Funniest AI Excuse](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18) — $2, ten paid places, judged pairwise by a judge model.

Made with [make.fun](https://make.fun/?ref=wfjv7kgb).
