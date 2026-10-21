# DATA QUALITY REPORT
## Right to Education India — Website Redesign
**Phase:** 0 (Complete — all four research files inspected)
**Date completed:** 2026-10-21
**Audited by:** Antigravity

---

## 1. Files inspected

| File | Size | Inspected |
|---|---|---|
| RTE 2.0 Master Research Tracker.xlsx | 32KB | ✅ |
| RTE Legal Developments 2014–2026_Case & Amendment Notes.docx | 753KB | ✅ |
| RTE Statewise Research (2014–2026).xlsx | 125KB | ✅ |
| RTE_Recent Legal Developments_Updates (2025–26).docx | 726KB | ✅ |

---

## 2. File 1 — RTE 2.0 Master Research Tracker.xlsx

### 2.1 Workbook structure

| Sheet | Rows (data) | Description |
|---|---|---|
| Master Research Tracker | 22 | Case/amendment/document records |
| Official Sources | 15 | Curated official source directory |
| Priority Research Areas | 16 | Research questions by priority level |

> **Note:** The XLSX file has 1000 pre-formatted rows in each sheet. Only the populated rows are counted above.

### 2.2 Master Research Tracker — columns confirmed

`Year | Date | Case / Amendment / Document | Category | Authority | Relevant Provision | Brief Summary | Legal Impact | Source URL | Verification Status | Remarks`

### 2.3 Categories (actual values)

| Category | Notes |
|---|---|
| Judgment | Court judgments |
| Amendment | Legislative amendments |
| Notification | Government notifications |
| Commencement notification | Commencement/effective-date notifications |
| Subordinate legislation | Rules, regulations |
| Review order | Court review orders |
| Judgment lead | Research lead — not a confirmed judgment |
| Research pending | Placeholder — no verified record yet |

> ⚠️ **"Judgment lead" and "Research pending" must NOT be displayed as confirmed legal developments.**

### 2.4 Authorities (actual values)

Supreme Court · Supreme Court of India · Bombay High Court · Punjab and Haryana High Court · Calcutta High Court · Madras High Court · NCTE · Parliament of India · Central Government · Central / State Governments · Central / State Governments, Courts · Government of NCT of Delhi · Supreme Court / High Courts / Government · Supreme Court / High Courts

> ⚠️ Inconsistency: "Supreme Court" and "Supreme Court of India" appear as separate values — normalize on display to "Supreme Court of India".

### 2.5 Verification statuses (actual values)

| Source value | Internal mapping |
|---|---|
| VERIFIED. JUDGEMENT REVIEWED. | `verified-primary` |
| VERIFIED – JUDGMENT REVIEWED | `verified-primary` |
| VERIFIED – OPERATIVE ORDER REVIEWED | `verified-primary` |
| Verified enactment; verify detailed rules | `verified-secondary` |
| Verified | `verified-secondary` |
| Verify | `needs-verification` |
| Verify official judgment | `needs-verification` |
| Verify official Supreme Court copy | `needs-verification` |
| Verify official review order | `needs-verification` |
| Research pending | `research-pending` |
| Unverified lead | `unverified-lead` |

> ⚠️ Records with status Verify/Verify official*/Research pending/Unverified lead must NOT be displayed as established legal facts.

### 2.6 Year range

2014 – 2026 (confirmed)

### 2.7 Missing data

- Rows missing Source URL: **0** (all 22 records have a URL)
- Date field format: inconsistent — some rows have integer year only (e.g., `2014`), others have full date string (e.g., `"28-04-2015"`) — must be handled as nullable/flexible type

### 2.8 Official Sources sheet

15 sources recorded. Priorities: Very High, High, Medium.
Includes: India Code, e-Gazette of India, Supreme Court of India, High Courts, NCPCR, MHRD/MoE, PRS Legislative Research, and others.

### 2.9 Priority Research Areas sheet

16 areas. Priority levels: High · Medium · Low
Key High-priority areas: 25% RTE Admissions · Teacher Qualifications/TET · Examinations/No-Detention · Minority Institutions · Reimbursement

---

## 3. File 2 — RTE Legal Developments 2014–2026 (DOCX)

### 3.1 Summary

- Total document length: ~51,944 characters
- Case entries: **15** (each marked "Case NN:")
- Format: structured sections per case — Details, Background, Legal Provisions, Legal Issues, Decision/Holding, Legal Significance, Relevance to RTE Research, Research Assessment, Primary Source

### 3.2 Courts covered

Supreme Court of India · Bombay High Court · Punjab and Haryana High Court · Calcutta High Court · Madras High Court · Allahabad High Court · Delhi High Court

### 3.3 Known data quality observations

| Observation | Detail |
|---|---|
| Research Assessment ≠ Court Holding | Each case has a researcher's "Research Assessment" field that is interpretation, not the court's ruling. These fields must be clearly distinguished in any display. |
| Some entries reference secondary sources | Several have indiankanoon.org or MP website reproductions as their primary URL — these are secondary reproductions. The tracker notes where the official primary has been verified. |
| "Judgment lead" category present | One record is a research lead, not a confirmed judgment. Do not display in legal developments until verified. |
| Date field inconsistency | Some records have a year only; some have full date strings. Handle both gracefully. |
| No fabricated data present | All 15 entries have case names, courts, and at least one source URL |

### 3.4 Cases verified as primary-reviewed (from tracker)

Records with `VERIFIED. JUDGEMENT REVIEWED.` or equivalent — safe to present with source citation. All others should carry a verification notice.

---

## 4. File 3 — RTE Statewise Research (2014–2026).xlsx

### 4.1 Workbook structure

| Component | Detail |
|---|---|
| Total sheets | 43 |
| Master Data rows (data) | **623** |
| Academic years covered | 2014-15 to 2026-27 |

### 4.2 Master Data — columns confirmed

`State/UT | Academic Year | Data Category | Indicator | Reported Data | Legal Provision | Source Type | Source Link | Verification Status | Research Notes`

### 4.3 Reported Data quality

| Condition | Count |
|---|---|
| Numeric values | 543 |
| "NA" (not available) | 51 |
| Zero (explicit) | 35 |
| Blank (empty) | 14 |

> ✅ 14 blank values identified — these must remain `null` in the data model, never `0`.
> ✅ "NA" is distinct from blank — preserve as `"NA"` string or a separate sentinel value.
> ✅ 35 explicit zeros are confirmed report values — retain as `0`.

### 4.4 Data categories (actual values — 12 distinct)

| Category | Notes |
|---|---|
| Section 12(1)(c) enrolment | Enrolment stock — NOT new admissions |
| Reimbursement (SSA proposal/approval) | Proposed AND approved bundled — see §4.7 |
| Reimbursement claim | Distinct from approval |
| Reimbursement approval | Distinct from claim |
| School-system context | Background indicators |
| Admissions demand | Applications received |
| Admissions allocation | Seats allocated |
| Admissions completed | Admissions actually completed |
| Admissions capacity | Available seats |
| Waiting list | Children on waiting list |
| School participation | Schools participating in RTE |
| Reimbursement | Generic — sub-type confirmation needed |

> ⚠️ "Reimbursement (SSA proposal/approval)" bundles two figures — the dedicated Reimbursement 2014-2017 sheet separates them correctly (columns: Proposed ₹ lakh and Approved ₹ lakh per year).

### 4.5 Verification statuses (actual values)

| Source value | Count | Internal mapping |
|---|---|---|
| Official UDISE+ parliamentary annexure | 180 | `verified-primary` |
| Official parliamentary PDF | 170 | `verified-primary` |
| Official parliamentary answer reproduced by MP; primary answer details present | 108 | `verified-secondary` |
| Official parliamentary answer reproduced by MP | 90 | `verified-secondary` |
| Official parliamentary PDF; extracted figures | 54 | `verified-primary` |
| Secondary source | 13 | `secondary-source` |
| Official document located | 5 | `verified-secondary` |
| Official source located | 2 | `verified-secondary` |
| Official notice located | 1 | `verified-secondary` |

> ✅ 13 records marked "Secondary source" — these must be clearly flagged when displayed.

### 4.6 State/UT name issues

| Issue | Detail | Action |
|---|---|---|
| "Keralam" in sheet tab | Master Data uses "Kerala"; sheet name is "Keralam" | Display as "Kerala" |
| "Chhatisgarh" in sheet tab | Master Data uses "Chhattisgarh" | Use "Chhattisgarh" |
| "Dadra and Nagar Haveli and Daman and Diu" | Merged since Jan 2020 | Preserve merged name for 2020+ data; legacy names for earlier |
| "Daman and Diu" | Appears separately in Reimbursement 2020-2025 | Retain — historic data |
| "Jharkhand - Ranchi district" | District-level entry mixed in state data | **Flag as district-level; do not aggregate with state totals** |

### 4.7 Reimbursement data — critical distinctions

#### Reimbursement 2014-2017 sheet (15 states)
Columns: `State/UT | [Year] Proposed ₹ lakh | [Year] Approved ₹ lakh` (per year, 2014-15 to 2016-17)
✅ Proposed and Approved are separate columns — preserve this separation

#### Reimbursement 2020-2025 sheet (17 states)
Columns: `State/UT | Claim [Year] ₹ cr | Approved [Year] ₹ cr` (per year, 2020-21 to 2024-25)
✅ Claims and Approvals are separate columns — preserve this separation
Units: ₹ crore (2020-25) vs ₹ lakh (2014-17) — these are **not comparable without conversion**

> ⚠️ Do NOT add or combine reimbursement amounts across the two periods without explicit conversion and methodology documentation.

### 4.8 Private Schools sheet (2020-2025)

- 36 states/UTs, years 2020-21 to 2024-25
- Columns: `State/UT | [year] | ... | Source`
- This is a count of **private unaided schools** from UDISE+ data
- **This is NOT a count of schools obligated under Section 12(1)(c)**. The header does not claim this, but display must make the distinction explicit.

### 4.9 District-level entries

2 rows in Master Data are for "Jharkhand - Ranchi district":
- Private schools / entry-level seats / reserved seats: 117 schools; 4699 seats; 1161 reserved
- Admissions after two rounds: 722

> ⚠️ These must not be aggregated with Jharkhand state totals.

### 4.10 Telangana and Ladakh data (confirmed present)

| Entity | Rows in Master Data | Categories present |
|---|---|---|
| Telangana | 8 | Section 12(1)(c) enrolment, School-system context |
| Ladakh | 8 | Section 12(1)(c) enrolment, School-system context |

Both have research data and dedicated worksheets in the XLSX — safe to include in the state directory with clearly identified data gaps.

### 4.11 Source Inventory sheet (10 sources)

| Source | Period | Status |
|---|---|---|
| Lok Sabha Q.1602 | 5 Mar 2018 | Official parliamentary answer reproduced on MP's site |
| Rajya Sabha Q.665 | 8 Feb 2023 | Official parliamentary PDF |
| Lok Sabha Q.2160 | 5 Aug 2024 | Official parliamentary PDF |
| UDISE+ annexure | 2020-21 to 2024-25 | Official parliamentary annexure sourced to UDISE+ |
| UP NIC | 2026-27 | Official government/NIC |
| Haryana Elementary Education | 2026-27 | Official state notice |
| Tamil Nadu PAB | 2024-25 | Official PAB document |
| Tamil Nadu supplementary PAB | 2024-25 expenditure reviewed 2025-26 | Official PAB minutes |
| Maharashtra PAB addendum | 2025-26 | Official PAB addendum |
| Manipur PAB | 2025-26 | Official PAB minutes |

### 4.12 Academic year data gaps

Years represented: 2014-15, 2015-16, 2016-17 (then gap), 2019-20, 2020-21, 2021-22, 2022-23, 2023-24, 2024-25, 2025-26, 2026-27.

> ⚠️ Gap: 2017-18 and 2018-19 are not represented. Do not interpolate. Display gap as "data not available".

---

## 5. File 4 — RTE Recent Legal Developments (2025–26) DOCX

### 5.1 Summary

- Total length: ~5,747 characters
- Entries: **5 developments**
- Format: numbered entries with date, case/authority, provision, development, significance, primary source

### 5.2 Developments documented

| # | Title | Date | Source type |
|---|---|---|---|
| 1 | SC strengthens enforcement of 25% RTE quota | 13 Jan 2026 | Supreme Court judgment — primary source (SCI PDF) |
| 2 | SC directs schools to admit RTE-allotted children | 28 Apr 2026 | Supreme Court judgment — primary source (SCI PDF) |
| 3 | TET and RTE compliance (two dates) | 1 Sep 2025 and 29 May 2026 | Supreme Court — type pending verification |
| 4 | Maharashtra RTE admission restriction | (date not explicit) | Bombay High Court |
| 5 | SC pulls up NCPCR on 25% quota implementation | (ongoing — very recent) | ⚠️ News report only (Hindustan Times, Economic Times) |

### 5.3 Data quality observations

| Observation | Detail |
|---|---|
| Entry 5 is news-report-only | Based on newspaper coverage of a hearing — NOT a primary source. Must be labelled as "Based on news reports; primary court order not yet located." |
| Entry 3 has two dates | September 2025 original order + May 2026 review. These should be stored as two sub-entries or a single entry with both dates clearly documented. |
| Entry 4 (Maharashtra) | Bombay High Court — specific order date and case number not provided in this document. Research pending for primary source. |
| Pending litigation | Entry 5 describes ongoing proceedings — outcome unknown. Must not be presented as settled law. |
| All other entries have SC PDF links | Entries 1 and 2 provide direct SCI PDF links — verified primary sources. |

### 5.4 Publication note

This document is dated 2025–26. It is a research input, not approved publication content. All five entries should be labelled with their verification status when displayed.

---

## 6. Mandatory data handling rules (confirmed from file inspection)

1. **Blank ≠ Zero**: 14 blank Reported Data cells → store as `null`
2. **"NA" ≠ Zero**: 51 "NA" values → store as string sentinel, display as "Not available"
3. **Zero ≠ Missing**: 35 explicit zero values → retain as `0`
4. **Enrolment ≠ New admissions**: Research notes in every enrolment row say "Figures are stock/enrolment, not new admissions." — display must reflect this
5. **Claims ≠ Approvals**: Separate columns in both reimbursement sheets — never combine
6. **Proposed ≠ Approved (2014-17)**: Separate columns — never combine
7. **₹ lakh (2014-17) ≠ ₹ crore (2020-25)**: Different units across periods — never add
8. **Private school count ≠ Sec 12(1)(c) obligation count**: Private Schools sheet counts all private schools, not obligated schools
9. **District records ≠ State totals**: 2 Jharkhand-Ranchi district rows — must not aggregate with state
10. **Research notes not discarded**: All "Research Notes" and "Remarks" column values must be preserved in the data model

---

## 7. RTE State Rules Matrix — verification status

| Item | Status |
|---|---|
| File found at live server | `/sites/default/files/RTE%20Matrix%20v1.4.xlsm` |
| Version | v1.4 |
| Date | **Unknown — not verified** |
| File contents | Not inspected (not in project files) |
| Authorization to link | Pending — do not label as "current" or "official" |
| Page treatment | Show as candidate download with version/date caveat |

---

## 8. First datasets safe for initial frontend release

Based on verification status analysis, the following data are suitable for initial display (with mandatory source citations):

**Safe to display:**
- Legal developments tracker entries with status `VERIFIED. JUDGEMENT REVIEWED.` (approximately 10–12 of the 22 records)
- Recent legal developments entries 1 and 2 (verified Supreme Court PDFs)
- Statewise enrolment data with status "Official parliamentary PDF" or "Official UDISE+ parliamentary annexure" (350 of 623 rows)

**Require additional verification notice:**
- Tracker entries with "Verify" statuses
- All "Secondary source" rows in statewise data (13 rows)
- Recent development entry 5 (news-report-only)
- Recent development entry 4 (primary source not confirmed)

**Must NOT be published without further research:**
- Tracker entries with status "Research pending" or "Unverified lead"
- Recent development entry 3 (partial source — confirm primary order for both dates)

---

*Phase 0 data quality report — COMPLETE. All four research files inspected and documented.*
*Proceed to Phase 1 design system implementation upon project owner approval.*
