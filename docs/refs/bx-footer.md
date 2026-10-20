# Blackstone site footer (measured)

Source: `.site-footer.is-color-theme-dark` on `https://www.blackstone.com/`.

Live `blackstone.com` is Cloudflare-blocked here. Values are from archived home HTML
(`/tmp/bxhero/bxhome.html`) plus `blackstone-v2` `frontend.css` (`/tmp/bxtac/frontend.css`).
**1280** = `80em`. **1440** = `90em`. Spacing tokens are 1:1 rem (`--spacing-48: 3rem`).

Dark theme: `--c-background: #000`, `--c-copy: #fff`, `--c-graphics: #fff`.

Markup: logo left (`.site-footer__branding`, cols **1–4** of 16), three columns
in `.site-footer__primary-nav` (Quick Links, Social, Get in Touch). Bottom rule is
`border-bottom: 1px solid var(--c-graphics)` on `.site-footer__top`. Bottom row is
flex `row-reverse` (legal right, copyright left).

| Token | 1280 (`80em`) | 1440 (`90em`) |
| --- | --- | --- |
| Container | **1136px** (`71rem`) | **1264px** (`79rem`) |
| Grid | **16** col, gutter **16px** | same |
| Branding | cols **1–4** | same |
| Nav | cols **5–16**, `display:flex`, `justify-content:flex-end` | same |
| Top padding | **48px** / **112px** | **56px** / **120px** |
| Nav column gap | **112px** | **120px** |
| Logo SVG width | **14.6875rem** (235px) | same |
| Column title | sans **18px**/500, tracking **0.02rem**, lh 1.5 | **20px** |
| List margin-top | **24px** | **32px** |
| Link | sans **16px**/300, item gap **16px** | **18px** |
| Bottom padding | **32px** / **32px** | **40px** / **40px** |
| Legal gap | **24px**, wrap, end-aligned | **32px** |
| Legal / copyright | **16px**/300 and **16px**/400 | **18px** |
| Rule | **1px** white, full inner width | same |

Falcon maps this onto `.site-footer` with the Falcon lockup and real Falcon URLs only
(X is the only social account). No funding/broker disclaimer — the previous footer
did not have one.
