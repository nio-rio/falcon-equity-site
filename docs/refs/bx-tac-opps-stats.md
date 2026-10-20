# Blackstone Tactical Opportunities — featured stats (measured)

Source: `blackstone-v2/stat-block` on
`https://www.blackstone.com/our-businesses/tactical-opportunities/`
(“Assets Under Management” / Investments / Tac Opps Professionals Globally).

Live `blackstone.com` is Cloudflare-blocked here. Headless Chrome measured a
local replica of the archived section HTML (`Wayback 20260329161225`) plus
`blackstone-v2` `frontend.css` at **1440px**. **1280px** values are the same
stylesheet at `80em` (the 1440 dump matched those rules 1:1).

Component classes: `.bx-stat-featured__statmainWrapper`, `.bx-stat-featured__stat`,
`.bx-stat__stattitle`, `.bx-stat__statvalue`, `.bx-stat__animateFeatureStat`.
Section padding: `bx-component-stacked-same-theme-padding-top` +
`bx-component-base-padding-bottom`.

Grid at 80em / 90em (16 col, 16px gutter):

```
feat × 8 | . | title1 × 3 | . | title2 × 3
feat × 8 | . | value1 × 3 | . | value2 × 3
```

Featured spans both rows. Side labels share the **top** of the featured label
row (not the big number). No vertical rules. A 1px black line sits under each
small value (`.bx-stat__animateFeatureStat:before`).

| Token | 1280 (`80em`) | 1440 (`90em`, measured) |
| --- | --- | --- |
| Container | **1136px** (`71rem`) | **1264px** (`79rem`) |
| Grid | **16** col, gutter **16px**, tracks **56px** | tracks **64px** |
| Section padding | **48px** / **144px** | **56px** / **160px** |
| Featured columns | **1–8**, width **560px** (`35rem`) | **624px** (`39rem`) |
| Side 1 columns | **10–12**, width **200px** (`12.5rem`) | **224px** (`14rem`) |
| Side 2 columns | **14–16** | same span, **224px** |
| Featured label | sans **300**, **32px**, lh **48px** (1.5), tracking **0.008em** | same |
| Featured number | serif **300**, **9rem (144px)**, margin-top **56px** | **10rem (160px)**, lh **224px**, tracking **0.32px**, margin-top **64px** |
| Label → featured number | **56px** | **64px** |
| Small label | sans **300**, **16px**, lh **24px**, tracking **0.008em**, margin-bottom **32px** | same |
| Small number | serif **300**, **40px**, padding-bottom **16px** | **48px**, lh **72px**, padding-bottom **16px** |
| Underline | **1px** `#000`, full 3-col width | **1px** × **224px** |
| Side vs featured | side labels top = featured label top | measured 56px = 56px |

Falcon home maps this onto `.pilot-stats-*` with `24-48h` as the featured figure.
