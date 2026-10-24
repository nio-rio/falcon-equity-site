# Blackstone site footer (measured)

Source: `.site-footer.is-color-theme-dark` on `https://www.blackstone.com/`.

Live `blackstone.com` is Cloudflare-blocked here. Values are from archived home HTML
(`/tmp/bxhero/bxhome.html`) plus `blackstone-v2` `frontend.css` (`/tmp/bxtac/frontend.css`).
**1280** = `80em`. **1440** = `90em`. Spacing tokens are 1:1 rem (`--spacing-48: 3rem`).

Dark theme: `--c-background: #000`, `--c-copy: #fff`, `--c-graphics: #fff`.

Markup: logo left (`.site-footer__branding`, cols **1–4** of 16), columns
in `.site-footer__primary-nav` (Blackstone: Quick Links, Social, Get in Touch). Bottom rule is
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
| Logo (live lockup) | mark **2rem (32px)** + At Gambit **1.3rem (20.8px)** / **400** / lh 1.5, gap **1.2rem (19.2px)** through tablet. Desktop `80em+`: mark **36.8px**, word **24px**. | same |
| Column title | sans **18px**/500, tracking **0.02rem**, lh 1.5 | **20px** |
| List margin-top | **24px** | **32px** |
| Link | sans **16px**/300, item gap **16px** | **18px** |
| Bottom padding | **32px** / **32px** | **40px** / **40px** |
| Legal gap | **24px**, wrap, end-aligned | **32px** |
| Legal / copyright | **16px**/300 and **16px**/400 | **18px** |
| Rule | **1px** white, full inner width | same |

Falcon maps this onto `.site-footer` with the Falcon lockup and **three** nav columns
(Ling, 23 Oct): **What we do** (Services, Industries, About, Apply for funding) ·
**Resources** (Blog, FAQ, then the Cardiff affiliate wordmark) · **Get in Touch** (email,
phone, address, `X (Twitter)`). Real Falcon URLs only. No funding/broker disclaimer — the
previous footer did not have one. If a disclaimer is ever legally required, it belongs here
in the footer, never under a CTA. Nothing near a call to action should give the user second
thoughts.

**Column layout is the reference's, not a grid.** `.site-footer__nav` is `display: flex;
justify-content: flex-end` over cols 5–16 with **column-gap 112px at 80em / 120px at 90em**,
so the three columns are content-width and hug the right edge, exactly as Blackstone's do.
A `repeat(3, minmax(0,1fr))` grid spreads them across the whole span and reads as evenly
spaced columns — that was wrong and was reverted on 23 Oct. Below 48em the columns stack in
one column, and from 48em the nav is a 3-column grid (Falcon's own tablet step; the reference
is desktop-only here). The mobile stack sits flush with the logo: the base grid puts
`nav` and the bottom legal/copyright rows on `* * * *`, not on `. * * *`.

**Cardiff needs a plate.** Its wordmark is royal blue `rgb(43, 76, 163)` on transparency —
1.7:1 on `--color-surface-dark`, unreadable. It sits on a white 2px-radius plate at 16px tall
(`.site-footer__cardiff`), which is the live site's `.icon-height-xxsmall` size. The live
footer is white, so it can skip the plate; ours cannot.
