# CONTENT INVENTORY
## Right to Education India — Website Redesign
**Phase:** 0 (Updated — research files inspected)
**Date updated:** 2026-10-21
**Audited by:** Antigravity

---

## 1. Live website navigation — confirmed URLs

### 1.1 Primary navigation

| Label | URL |
|---|---|
| KNOW YOUR RTE | /know-your-rte |
| RESOURCES | /resources |
| ASK A QUESTION | /ask-a-question |
| START A DISCUSSION | /forum |
| REPORT A GRIEVANCE | /report-a-grievance |
| ARCHIVES | /archives |
| BLOG | /blog |

### 1.2 KNOW YOUR RTE — subpages

| Label | URL |
|---|---|
| About | /know-your-rte/about |
| Features | /know-your-rte/features |
| Chronology | /know-your-rte/chronology |
| FAQs | /know-your-rte/faq |

### 1.3 RESOURCES — subpages

| Label | URL |
|---|---|
| Centre | /resources/centre |
| States | /resources/states |
| RTE State Rules Matrix | /resources/rte-matrix |

### 1.4 State and UT directory — confirmed URLs

Pattern: `/resources/states/{slug}`

| State/UT | Slug | Notes |
|---|---|---|
| Andaman and Nicobar Islands | andaman-and-nicobar-islands | |
| Andhra Pradesh | andhra-pradesh | |
| Arunachal Pradesh | arunachal-pradesh | |
| Assam | assam | |
| Bihar | bihar | |
| Chandigarh | chandigarh | |
| Chhattisgarh | chhattisgarh | Live site slug: chhattisgarh |
| Dadra and Nagar Haveli and Daman and Diu | dadra-and-nagar-haveli | Legacy slug from before 2020 merger — preserve |
| Daman and Diu | daman-and-diu | Legacy slug — retain for backward compat |
| Delhi | delhi | |
| Goa | goa | |
| Gujarat | gujarat | |
| Haryana | haryana | |
| Himachal Pradesh | himachal-pradesh | |
| Jammu and Kashmir | jammu-and-kashmir | Now a UT — preserve legacy URL |
| Jharkhand | jharkhand | |
| Karnataka | karnataka | |
| Kerala | kerala | Research file uses "Keralam" — display as Kerala |
| Lakshadweep | lakshadweep | |
| Madhya Pradesh | madhya-pradesh | |
| Maharashtra | maharashtra | |
| Manipur | manipur | |
| Meghalaya | meghalaya | |
| Mizoram | mizoram | |
| Nagaland | nagaland | |
| Odisha | orissa | Legacy slug "orissa" — preserve; display name "Odisha" |
| Puducherry | puducherry | |
| Punjab | punjab | |
| Rajasthan | rajasthan | |
| Sikkim | sikkim | |
| Tamil Nadu | tamil-nadu | |
| **Telangana** | **telangana** | **ADD — data present in research files (8 rows)** |
| Tripura | tripura | |
| Uttar Pradesh | uttar-pradesh | |
| Uttarakhand | uttarakhand | |
| West Bengal | west-bengal | |
| **Ladakh** | **ladakh** | **ADD — data present in research files (8 rows)** |

**Total: 37 states/UTs** (35 live + Telangana + Ladakh added)

> **Notes on new additions:**
> - Telangana: Research file contains Section 12(1)(c) enrolment and school-system context data. Clearly identify gaps relative to established states.
> - Ladakh: Research file contains Section 12(1)(c) enrolment and school-system context data. New UT since 2019; no legacy live URL.
> - Dadra & Nagar Haveli and Daman & Diu were merged into one UT in January 2020. The research file uses the merged name. Preserve both legacy URL slugs.
> - Jharkhand - Ranchi district entries exist in research data. These are district-level, not state-level. Do NOT mix with state-level entries.

### 1.5 State detail page sections (confirmed from live site)

1. Overview
2. Acts, Rules and Notifications
3. Reports & Case Studies
4. **Judgements** (live site spelling — preserve)
5. RTE Implementation in [State]
6. Grievance Redressal
7. News & Opinion

### 1.6 ARCHIVES — subpages

| Label | URL |
|---|---|
| News | /archives/news |
| Events | /archives/events |
| Polls | /archives/polls |
| Videos | /archives/videos |

### 1.7 BLOG — subpages

| Label | URL |
|---|---|
| The RTE Blog | /blog/the-rte-blog |
| Featured Blog | /blog/featured-blog |
| Bloggers | /blog/bloggers |

### 1.8 About pages (partially confirmed)

| Label | URL | Status |
|---|---|---|
| Vision and Mission | /about/vision-and-mission | ✅ Confirmed |
| Partners | /about/partners | ⏳ Inferred — confirm before Phase 7 |
| Platform Team | /about/platform-team | ⏳ Inferred — confirm before Phase 7 |
| Contact | /about/contact | ⏳ Inferred — confirm before Phase 7 |

### 1.9 Key Provisions quick-links (approved for inclusion)

Decision: **Preserve and improve** presentation and accessibility.

Topics (confirmed from live site):
25% Reservation · Admissions · Curriculum · Budgets · ICT · Inclusion · School Infrastructure · Mid Day Meal · Quality · SMCs · Recognition · Teachers · Vouchers · Pre-School Education · Elementary Education · Secondary Education · Higher Education · Vocational Training · Courts · Government Orders · Government Schools · Government Aided Schools · Private Schools · Budget Private Schools · CSR and Civil Society · Success Stories

URL pattern: `/{topic-slug}-key-provisions`
Improvement tasks: confirm all destination URLs resolve correctly; verify slugs; make component responsive (horizontal scroll on mobile, or collapsible); add proper ARIA labelling.

### 1.10 Footer and secondary links (preserved)

| Label | URL | Placement |
|---|---|---|
| RTI | /rti | Footer |
| Coalition 25 | /coalition-25 | Footer |
| Suggest RTE Amendment | /forums/suggest-rte-amendments | Footer or public participation section |
| RSS feed | /rss.xml | Footer |
| Terms of Use | (confirm URL) | Footer |
| Privacy Policy | (confirm URL) | Footer |
| Disclaimer | (confirm URL) | Footer |
| Sitemap | /sitemap | Footer |

---

## 2. Proposed route registry

### 2.1 Full route table

```
/                               → HomePage
/know-your-rte                  → KnowYourRTEIndexPage
/know-your-rte/about            → KYRAboutPage
/know-your-rte/features         → KYRFeaturesPage
/know-your-rte/chronology       → KYRChronologyPage
/know-your-rte/faq              → KYRFAQPage
/resources                      → ResourcesIndexPage
/resources/centre               → CentreResourcesPage
/resources/states               → StateDirectoryPage
/resources/states/:stateSlug    → StateDetailPage   (37 slugs)
/resources/rte-matrix           → RTEMatrixPage
/ask-a-question                 → AskAQuestionPage
/forum                          → StartDiscussionPage
/report-a-grievance             → ReportGrievancePage
/archives                       → ArchivesIndexPage
/archives/news                  → NewsListingPage
/archives/news/:slug            → NewsDetailPage
/archives/events                → EventsListingPage
/archives/events/:slug          → EventDetailPage
/archives/polls                 → PollsPage
/archives/videos                → VideosPage
/blog                           → BlogIndexPage
/blog/the-rte-blog              → RTEBlogListingPage
/blog/the-rte-blog/:slug        → BlogPostDetailPage
/blog/featured-blog             → FeaturedBlogPage
/blog/bloggers                  → BloggersPage
/about/vision-and-mission       → VisionMissionPage
/about/partners                 → PartnersPage
/about/platform-team            → PlatformTeamPage
/about/contact                  → ContactPage
/search                         → SearchResultsPage
/sitemap                        → SitemapPage
/rti                            → RTIPage
/coalition-25                   → Coalition25Page
*                               → NotFoundPage
```

### 2.2 Legacy URL handling

| Legacy URL | Display name | Slug | Action |
|---|---|---|---|
| /resources/states/orissa | Odisha | orissa | Preserve — do not redirect |
| /resources/states/dadra-and-nagar-haveli | Dadra & NH and Daman & Diu | dadra-and-nagar-haveli | Preserve legacy slug |
| /resources/states/daman-and-diu | Daman and Diu | daman-and-diu | Preserve legacy slug |
| /resources/states/jammu-and-kashmir | Jammu & Kashmir | jammu-and-kashmir | Preserve — display as UT |
| /media/news/* | — | — | Do NOT add redirects without approval |

---

## 3. Content schema (TypeScript — updated from research file inspection)

### 3.1 VerificationStatus — finalized from source files

```typescript
// Master Research Tracker verification values (actual source strings):
// 'VERIFIED. JUDGEMENT REVIEWED.'
// 'VERIFIED – JUDGMENT REVIEWED'
// 'VERIFIED – OPERATIVE ORDER REVIEWED'
// 'Verified enactment; verify detailed rules'
// 'Verified'
// 'Verify'
// 'Verify official judgment'
// 'Verify official Supreme Court copy'
// 'Verify official review order'
// 'Research pending'
// 'Unverified lead'
//
// Statewise Research verification values (actual source strings):
// 'Official parliamentary answer reproduced by MP; primary answer details present'
// 'Official parliamentary PDF; extracted figures'
// 'Official parliamentary answer reproduced by MP'
// 'Official parliamentary PDF'
// 'Official UDISE+ parliamentary annexure'
// 'Official source located'
// 'Official notice located'
// 'Secondary source'
// 'Official document located'

// Normalized internal enum — original source value preserved separately
type VerificationStatus =
  | 'verified-primary'     // Confirmed against primary source, reviewed
  | 'verified-secondary'   // Official source located or parliamentary answer via secondary
  | 'needs-verification'   // 'Verify', 'Verify official judgment', etc.
  | 'research-pending'     // 'Research pending'
  | 'unverified-lead'      // 'Unverified lead'
  | 'secondary-source'     // 'Secondary source' (news report, MP site reproduction)
  | 'unavailable';         // Not yet assessed
```

### 3.2 LegalCategory — finalized from Tracker sheet

```typescript
// Actual Category values from Master Research Tracker:
type LegalCategory =
  | 'judgment'
  | 'amendment'
  | 'notification'
  | 'commencement-notification'
  | 'subordinate-legislation'
  | 'review-order'
  | 'judgment-lead'       // "Judgment lead" — research note, not confirmed judgment
  | 'research-pending';   // Placeholder category
```

### 3.3 SourceType — finalized from Statewise Research

```typescript
// Actual Source Type values from Statewise Research:
type SourceType =
  | 'lok-sabha-parliamentary-answer'
  | 'rajya-sabha-parliamentary-answer'
  | 'udise-parliamentary-annexure'   // UDISE+ data in parliamentary annexure
  | 'official-pab-document'          // Project Approval Board document
  | 'official-government-nic'        // Government/NIC portal
  | 'official-state-notice'
  | 'news-report'                    // Must be clearly flagged as secondary
  | 'news-report-citing-department'  // Secondary source quoting official
  | 'unknown';
```

### 3.4 DataCategory — finalized from Statewise Research

```typescript
type DataCategory =
  | 'section-12-1c-enrolment'
  | 'reimbursement-ssa-proposal-approval'   // Proposed vs approved — keep separate
  | 'reimbursement-claim'
  | 'reimbursement-approval'
  | 'school-system-context'
  | 'admissions-demand'
  | 'admissions-allocation'
  | 'admissions-completed'
  | 'admissions-capacity'
  | 'waiting-list'
  | 'school-participation'
  | 'reimbursement';    // Generic — confirm sub-type before display
```

---

## 4. Research files — availability summary

| File | Size | Status | Data rows |
|---|---|---|---|
| RTE 2.0 Master Research Tracker.xlsx | 32KB | ✅ Inspected | 22 tracker rows, 15 sources, 16 priority areas |
| RTE Legal Developments 2014–2026_Case & Amendment Notes.docx | 753KB | ✅ Inspected | 15 case entries (51,944 chars) |
| RTE Statewise Research (2014–2026).xlsx | 125KB | ✅ Inspected | 623 Master Data rows, 43 worksheets |
| RTE_Recent Legal Developments_Updates (2025–26).docx | 726KB | ✅ Inspected | 5 developments (5,747 chars) |

---

## 5. Homepage content sections (confirmed)

1. Header (logo, search, social links, Key Provisions toolbar, primary nav)
2. Banner / introductory area
3. **RTE IN YOUR STATE** — state selector + (optional: map) + Download RTE Matrix button
4. **KNOW YOUR RTE** — About, Features, Chronology, FAQs
5. **CENTRE RESOURCES** — resource listings
6. **NEWS** — news articles
7. **EVENTS** — upcoming/recent events
8. **POLLS** — active poll widget
9. **BLOG** — latest blog posts
10. **VIDEOS** — video listing
11. Footer (nav links, legal links, social, Coalition 25, RTI)

---

## 6. Outstanding approvals and verifications

| Item | Status | Blocker? |
|---|---|---|
| RTE Matrix v1.4.xlsm date/version | Unconfirmed | No — page can show "version pending confirmation" |
| About sub-page URLs (/partners, /team, /contact) | Inferred | No — confirm before Phase 7 |
| Key Provisions destination URL accuracy | Check each slug | No — can be done during Phase 4 |
| Footer legal page content (Terms, Privacy, Disclaimer) | Not obtained | No — Phase 7 |
| Coalition 25 / RTI URL validity | Confirm /rti and /coalition-25 resolve | No — Phase 2 |
| Logo aspect ratio | Visual check needed | No — Phase 2 |
| favicon.svg suitability | Visual check needed | No — Phase 1 |

---

*Updated Phase 0 deliverable — research files inspected. Ready for Phase 1 approval.*
