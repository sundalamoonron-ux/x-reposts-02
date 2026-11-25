# x-reposts-02 — Get the most reposts and likes on make.fun's newest X posts

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/sundalamoonron-ux/x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/sundalamoonron-ux/x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts" ($500, top 50 paid). The entry is my own posts on X, each one a quote of a different one of make.fun's newest posts on @makefunai, all from one public account (@humairajahra071). Score: 2 points per repost and per quote, 1 point per like, summed over all my posts. Deadline: 28 Nov 2026, 15:30 WITA. The posts stay up and public until the results are out.

## Posts

`POSTS.json` names the posts handed in (up to 15). Each one quotes a different @makefunai pool post and carries make.fun, @makefunai and my play code in its own words.

## Program

`main.ts` (Node 22, standard library only) copies `POSTS.json` to `/output/POSTS.json`, where the gate reads it. Run it locally with:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
