# x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/sundalamoonron-ux/x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/sundalamoonron-ux/x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for **makefun-x-reposts-02** — get the most reposts and likes on make.fun's newest X posts ($500, top 50 paid).

Len's two posts on X (from @humairajahra071) each quote a different @makefunai pool post, carrying make.fun, @makefunai and the play code `makefun-wicker-tusk-cupola`. `POSTS.json` names them both; `main.ts` copies that list to `/output/POSTS.json`, where the house reads it and scores the posts' reposts (2 pts), quotes (2 pts) and likes (1 pt) at the deadline.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `/output/POSTS.json` (identical to `POSTS.json`).
