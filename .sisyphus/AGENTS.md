# fychao.github.io — Knowledge Base

## Repository Purpose
Academic homepage for **趙逢毅 (August Chao)**, built with Vue 3 + Vite, deployed to GitHub Pages via Actions.

## Author Name Canonical Forms

### Chinese Name
- **Correct**: 趙逢毅
- **Do NOT use**: 趙竣毅 (wrong character 竣 → 逢)

### English Name
- **Correct**: August Chao
- **Do NOT use**: August F.Y. Chao, August F. Y. Chao, A. Chao, Chao August F.Y., Chao F.Y. August, F.Y. August Chao, etc.
- **Format in citation (last name first)**: Chao, August (not Chao, August F.Y.)

### Decision History
- 2026-07-09: All publication name entries corrected. 7 instances of 趙竣毅→趙逢毅 in journals.md and patents.md. All English name variants unified to "August Chao" across conference.md and journals.md.

## Publications Content Structure
- `src/content/journals.md` — Journal papers (HTML list format)
- `src/content/conference.md` — Conference papers (HTML ordered list format, `<ol>`)
- `src/content/patents.md` — Patents (HTML list format)
- `src/views/PublicationsView.vue` — Renders all three via v-html
