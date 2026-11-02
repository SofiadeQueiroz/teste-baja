# Observation ledger — https://testebaja.my.canva.site/ (imported to /)

Page type: Canva full-viewport app; no window scroll (scrollH == clientH on desktop and phone).
Sections are Canva sub-pages reached via #page-* hash links, swapped by Canva JS on the source.

## Checks

| Control | Route | Viewport | Trigger | Expected | Observed (source) | Observed (preview) | Status |
|---|---|---|---|---|---|---|---|
| Top-strip hamburger ("Navigation Menu") | / | desktop 1280x1800 | click | White right-side drawer with 18 links + X close, dimmed backdrop | Opens drawer (src_desktop_menu.png) | Did nothing before repair; after repair opens matching drawer (fix2_desktop_menu.png), Escape closes, backdrop click closes | pass (after repair) |
| Same hamburger | / | phone 390x844 | click | Same drawer | Opens drawer | Opens drawer (fix2_phone_menu.png) | pass (after repair) |
| Drawer link SOBRE NÓS | / | desktop | click | Navigate to #page-PB7tCxxg6gWxgYfZ section | Source swaps to Sobre Nós page via JS | Hash updates to #page-PB7tCxxg6gWxgYfZ, drawer closes; section content not captured (separate Canva page) | pass destination / section unimported |
| Hero nav bar icon (right end, #LB0vfvQRDy1KpbVn) | / | desktop + phone | render | Hamburger glyph image | Visible on source | Was empty box: img had no src (1/66 asset failed, blob: URL). Extracted blob → public/site-assets/nav-menu-icon.png; now loads (fix_icon.png) | pass (after repair) |
| Hero nav links (INÍCIO, SOBRE NÓS, SUBSISTEMAS, PROCESSO SELETIVO, CONTATO) | / | desktop + phone | click | Swap to corresponding Canva sub-page | Source swaps pages via JS | Hash preserved on preview origin; sub-page content not imported | pass destination / sections unimported |
| Hero CTAs SAIBA MAIS / LOJA | / | desktop | click | Navigate to #page-1 / #page-5 | Source swaps pages | Hash preserved on preview origin | pass destination / sections unimported |
| Window scroll | / | desktop + phone | wheel | No window scroll (fixed viewport app) | scrollY stays 0 | scrollY stays 0 | pass |
| Canva footer pills (Terms & Support, Privacy Policy, Designed with Canva) | / | desktop | render/click | Footer pills visible; external links to canva.com | Present | Present, external hrefs unchanged | pass |

## Unrepaired / unverified

- Canva sub-pages (SOBRE NÓS, SUBSISTEMAS, PROCESSO SELETIVO, CONTATO, LOJA, CATÁLOGO, Página 1, 8, 10–18) are separate Canva pages loaded by the source's JS; only the supplied home page was imported. Their links keep source hash paths on the preview origin. Import more pages on request.
- Source page-swap transition animation (orange wipe) is not reproduced; static clone.

## Artifacts

- Source screenshots: /tmp/browser/import-check/screenshots/src_*.png
- Preview screenshots: /tmp/browser/import-check/screenshots/prev_*.png, fix*.png
- Reference: .site-import/reference.png
- Asset mapping: blob:https://testebaja.my.canva.site/12ffdd29-... → public/site-assets/nav-menu-icon.png
