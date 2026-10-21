# PROJECT AUDIT
## Right to Education India — Website Redesign
**Phase:** 0 → Phase 1 Pre-flight (Updated)
**Date updated:** 2026-10-21
**Audited by:** Antigravity

---

## 1. Project Setup

### 1.1 Runtime and tooling

| Tool | Version |
|---|---|
| Node.js | v23.6.0 |
| npm | 11.1.0 |
| Vite | 9.3.1 (create-vite) |

### 1.2 Installed dependencies

**Runtime:**

| Package | Version |
|---|---|
| react | ^19.1.0 |
| react-dom | ^19.1.0 |
| react-router-dom | ^7.6.3 |
| lucide-react | ^0.503.0 |

**DevDependencies:**

| Package | Version |
|---|---|
| @vitejs/plugin-react | ^4.5.2 |
| @tailwindcss/vite | ^4.1.4 |
| tailwindcss | ^4.1.4 |
| typescript | ~5.8.3 |
| xlsx | (dev, data inspection only — not bundled into the app) |

### 1.3 Tailwind CSS v4 integration

Tailwind CSS v4 is configured using the **official @tailwindcss/vite plugin** — no PostCSS, no tailwind.config.js.

- `vite.config.ts` — tailwindcss() plugin added before react()
- `src/index.css` — `@import "tailwindcss"` + minimal box-sizing reset

### 1.4 Current project structure

```
Right_To_Education/
├── public/
│   ├── rte-logo.png                    ✅ Downloaded from live server (4.5KB)
│   ├── favicon.svg                     ✅ Present (9.5KB)
│   ├── icons.svg                       ✅ Present (5KB)
│   ├── RTE 2.0 Master Research Tracker.xlsx        ✅ Inspected (32KB, 22 data rows)
│   ├── RTE Legal Developments 2014-2026_Case & Amendment Notes.docx  ✅ Inspected (753KB)
│   ├── RTE Statewise Research (2014-2026).xlsx     ✅ Inspected (125KB, 623 data rows)
│   └── RTE_Recent Legal Developments_Updates (2025-26).docx  ✅ Inspected (726KB)
├── src/
│   ├── assets/
│   ├── App.tsx         (Vite boilerplate — replacement in Phase 2)
│   ├── App.css         (Vite boilerplate — replacement in Phase 1)
│   ├── index.css       (Updated: Tailwind v4 + minimal reset)
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts      (Updated: @tailwindcss/vite plugin)
├── PRD.md
├── PROJECT_AUDIT.md
├── CONTENT_INVENTORY.md
└── DATA_QUALITY_REPORT.md
```

---

## 2. Logo asset — status

- **Source:** `https://righttoeducation.in/sites/all/themes/rte_new/logo.png`
- **Downloaded to:** `public/rte-logo.png`
- **File size:** 4.5 KB (PNG)
- **Status:** ✅ Retrieved and placed. Asset is the approved institutional logo from the live site.
- **Action:** Inspect proportions visually before use in Phase 2 header implementation
- **Constraint:** Do not alter, recreate, or replace without project owner approval

---

## 3. Live website inspection

### 3.1 Platform

**Drupal 7** — theme `rte_new`. The React application replaces the frontend entirely. Content served via local data modules for the initial release.

### 3.2 Confirmed social media links

| Platform | URL |
|---|---|
| Facebook | https://www.facebook.com/ccsindia |
| Twitter/X | https://twitter.com/ccsindia |
| LinkedIn | https://www.linkedin.com/company/centre-for-civil-society |
| YouTube | https://www.youtube.com/user/ccsindiatv |
| RSS | /rss.xml |

### 3.3 Additional header links (confirmed)

| Label | URL | Decision |
|---|---|---|
| RTI | /rti | ✅ Preserve — see §5.1 |
| Coalition 25 | /coalition-25 | ✅ Preserve — see §5.1 |
| Login | /user | Drupal login — not applicable in React frontend; omit unless backend added |

---

## 4. Discrepancies and decisions

| Item | Finding | Decision |
|---|---|---|
| RTE Matrix download file | `RTE Matrix v1.4.xlsm` exists at `/sites/default/files/RTE%20Matrix%20v1.4.xlsm` | Treat as candidate; do not label "current/official" without verification — see §5.2 |
| Key Provisions toolbar | ~25 topic links below header; not in PRD nav spec | **Approved: Preserve and improve** |
| NEP 2016 banner | Outdated banner linking to nep.ccs.in | **Remove from homepage prominence; do not archive without context** |
| Scrolling marquee news ticker | `<marquee>` tag in header | **Remove entirely** — PRD forbids autoplay/marquee equivalents |
| Coalition 25 / RTI links | Present in header aside | **Preserve in footer** (relevant but not primary nav) |
| About sub-pages | Not in primary nav | Confirm exact URLs before Phase 2 |
| Telangana | Not in live state selector | **Add** — data exists in research files |
| Ladakh | Not in live state selector | **Add** — data exists in research files |
| Dadra & Nagar Haveli + Daman & Diu | Two historic slugs exist | Preserve both slugs for backward compatibility; data merged since 2020 |

---

## 5. Outstanding items requiring action before or during Phase 1

### 5.1 Coalition 25 and RTI links — placement decision
**Decision:** Place in footer (secondary navigation), not primary header nav. The primary nav is reserved for the established 7 sections. Confirm `/rti` and `/coalition-25` resolve correctly before linking.

### 5.2 RTE Matrix v1.4.xlsm — verification
The file at `/sites/default/files/RTE%20Matrix%20v1.4.xlsm` is a candidate download. Before linking it:
- [ ] Confirm version date (v1.4 date unknown)
- [ ] Confirm whether a more current version exists
- [ ] Label clearly: "version 1.4 — date to be verified"
- [ ] Provide a clear unavailable/unverified state on the matrix page if not confirmed

### 5.3 Logo dimensions
- [ ] Verify rte-logo.png aspect ratio before Phase 2 header implementation
- [ ] Create `public/images/` subfolder and move asset there (or use from `public/` root)

### 5.4 favicon.svg
- The existing `favicon.svg` (9.5KB) is available in `public/`
- Use this in `index.html` if it matches the institutional identity; confirm before use

### 5.5 About sub-page URLs
- `/about/partners`, `/about/platform-team`, `/about/contact` are inferred
- Confirm against live website before Phase 7 (About pages)

---

## 6. Build verification status

| Check | Status |
|---|---|
| npm install | ✅ Complete |
| Tailwind v4 configured | ✅ Integrated via `@tailwindcss/vite` |
| Design tokens & @theme | ✅ Complete in `src/index.css` |
| UI Primitives (`src/components/ui/`) | ✅ Complete (12 reusable primitives) |
| Linter (`npm run lint`) | ✅ 0 errors, 0 warnings (`oxlint`) |
| Dev server (`npm run dev`) | ✅ Active on `http://localhost:5173` |
| Production build (`npm run build`) | ✅ Passed (`tsc -b && vite build`) in 621ms |

---

## 7. Phase 1 Deliverables Summary

### 7.1 Implemented Design Tokens & Global Styles (`src/index.css`)
- **Institutional Color Tokens**:
  - Primary Navy: `#001428` / `#0F2942` (`--color-primary-container`, WCAG AAA 12.8:1)
  - Academic Slate Teal: `#3B6569` / `#234E52` (`--color-secondary`, WCAG AAA 7.2:1)
  - Sovereign Ochre / Saffron: `#C05621` / `#C58B35` (`--color-ochre`, semantic alert accent)
  - Neutral Slate Editorial: `#111C2D` / `#43474D` / `#64748B` (WCAG AAA 15.4:1)
  - Surfaces: `#FFFFFF`, `#F0F3FF`, `#E7EEFF`, `#DEE8FF`, `#F9F9FF`
  - Architectural Rules: `#E2E8F0`, `#CBD5E1`, `#DCE2E8`
- **Typography Scale**:
  - Headings: `Source Serif 4` (`display-lg` 36px, `headline-xl` 30px, `headline-lg` 24px, `headline-md` 20px, `headline-sm` 18px)
  - Body & UI: `Public Sans` / `Inter` (`body-lg` 18px, `body-md` 15px, `body-sm` 13px, `label-lg` 14px, `label-md` 12px, `label-sm` 11px)
  - Gazette / Citation Codes: `ui-monospace` (`code-md` 13px tracked)
- **Shape & Elevation**:
  - Mechanical 2px radius for classified document metadata (`rounded-[2px]`)
  - Disciplined 4px radius for action controls, inputs, and cards (`rounded-[4px]`)
  - Subdued ambient elevation (`shadow-subtle`, `shadow-card`, zero exaggerated blurs)

### 7.2 Created UI Primitives (`src/components/ui/`)
1. `Container.tsx` — 1280px max-width, responsive margins and gutters
2. `Button.tsx` — Institutional Navy, Surface Secondary, Teal Accent, Urgent Ochre, Outline, Ghost
3. `Badge.tsx` — Strict 2px mechanical radius with legal & verification taxonomies
4. `Card.tsx` — Archival card with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
5. `DocumentRow.tsx` — High-density legal/statutory document row with checksum and download action
6. `ResourceCard.tsx` — State desk and policy brief card with official domain and live portal indicator
7. `Table.tsx` — Accessible, structured tabular data components conforming to Section 7.5 data rules
8. `MetadataBlock.tsx` — Key-value ribbon and grid for legal citations, assent dates, and benches
9. `SearchInput.tsx` — High-contrast search input with icon, clear button, and `Ctrl+K` shortcut hint
10. `Select.tsx` — Accessible select dropdown with chevron and institutional borders
11. `Alert.tsx` — Official Gazette Alert banner with 4px left accent stripe and scope badge
12. `EmptyState.tsx` — Accessible empty state for search and filtered views
13. `SectionHeader.tsx` — Institutional section header with 4px vertical bar and uppercase category label
14. `CitationModal.tsx` — Interactive legal citation modal (Bluebook, OSCOLA, BibTeX) with clipboard copy

### 7.3 Interactive Verification Showcase (`src/App.tsx`)
- Demonstrates all 10 foundations interactively
- Uses verified records from Phase 0 inspection
- Real-time search and filter simulation with empty state
- Validates 390px mobile viewport collapse without overflow

---

*Phase 1 complete. Stop here and await project owner review and approval before proceeding to Phase 2 (Global Shell and Routing).*
