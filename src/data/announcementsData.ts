export type AnnouncementCategory =
  | 'all'
  | 'release'
  | 'announcement'
  | 'gazette'
  | 'order'
  | 'circular';

export interface AnnouncementItem {
  id: string;
  title: string;
  category: AnnouncementCategory;
  categoryLabel: string;
  date: string;
  isoDate: string;
  refNumber: string;
  authority: string;
  summary: string;
  fullDescription: string;
  keyPoints?: string[];
  isNew: boolean;
  isUrgent?: boolean;
  isPinned?: boolean;
  fileFormat: string;
  fileSize: string;
  statutorySection?: string;
  jurisdiction?: string;
  tags: string[];
}

export const ANNOUNCEMENT_ITEMS: AnnouncementItem[] = [
  {
    id: 'ann-2025-01',
    title: 'National Elementary Education & RTE Compliance Matrix (AY 2025–26) Officially Released',
    category: 'release',
    categoryLabel: 'New Release',
    date: '18 Feb 2025',
    isoDate: '2025-02-18',
    refNumber: 'MoE/STAT-2025/RTE-09',
    authority: 'Ministry of Education & NIEPA (Department of School Education)',
    summary:
      'The comprehensive national compliance matrix monitoring Section 12(1)(c) quota allocations, pupil-teacher ratios, and school infrastructure benchmarks across all 28 States and 8 UTs has been published.',
    fullDescription:
      'The Department of School Education and Literacy, in collaboration with the National Institute of Educational Planning and Administration (NIEPA), has officially published the National Elementary Education & RTE Compliance Matrix for Academic Year 2025–26. This statutory publication provides audited state-by-state data on Section 12(1)(c) seat utilization, DBT per-child reimbursement disbursement timelines, and infrastructural adherence to the RTE Schedule.',
    keyPoints: [
      'Over 2.4 million seats tracked across 1.1 lakh private unaided schools nationwide',
      'Unified standardized formula for per-child expenditure auditing under Section 12(2)',
      'Digital verification benchmarks established for disability accessibility and CWSN facilities',
      'Integration with PM SHRI and UDISE+ 2024–25 portal records',
    ],
    isNew: true,
    isUrgent: false,
    isPinned: true,
    fileFormat: 'PDF',
    fileSize: '4.8 MB',
    statutorySection: 'Section 12(1)(c) & Section 38',
    jurisdiction: 'Pan-India (28 States & 8 UTs)',
    tags: ['RTE Compliance', 'National Matrix', 'AY 2025-26', 'UDISE+ Linkage'],
  },
  {
    id: 'ann-2025-02',
    title: 'Advisory on Section 12(1)(c) Model Admission Guidelines & Common Application Window 2025–26',
    category: 'announcement',
    categoryLabel: 'Admission Announcement',
    date: '14 Jan 2025',
    isoDate: '2025-01-14',
    refNumber: 'MoE-RTE-2025/04-A',
    authority: 'Department of School Education & Literacy, Govt. of India',
    summary:
      'States and UTs advised to commence centralized lottery registration for 25% reserved seats under Section 12(1)(c) with simplified digital document verification and geo-fenced catchment.',
    fullDescription:
      'The Central Government has issued comprehensive operational guidelines to all State Education Departments for the upcoming 2025–26 admission cycles under Section 12(1)(c). States are instructed to maintain transparent public lotteries, publish school-wise vacancy lists prior to lottery rounds, and disallow private schools from rejecting verified digital caste or income certificates issued by competent state authorities.',
    keyPoints: [
      'Mandatory single-window digital application portals across all implementing states',
      'Neighbourhood catchment radius established: 1 km for Classes I–V, 3 km for Classes VI–VIII',
      'Zero admission fees, screening procedures, or parent interviews under Section 13 prohibition',
      'Automated grievance escalation within 72 hours for rejected applications',
    ],
    isNew: true,
    isUrgent: true,
    isPinned: true,
    fileFormat: 'PDF',
    fileSize: '2.1 MB',
    statutorySection: 'Section 12(1)(c) & Section 13',
    jurisdiction: 'Implementing States & UTs',
    tags: ['Admission Guidelines', 'Section 12(1)(c)', 'EWS/DG Quota', 'Model Rules'],
  },
  {
    id: 'ann-2025-03',
    title: 'Compendium of State RTE Subordinate Rules (Section 38 Matrix 2025 Edition)',
    category: 'release',
    categoryLabel: 'New Release',
    date: '28 Jan 2025',
    isoDate: '2025-01-28',
    refNumber: 'CIVIL-RTE/PUB-2025/01',
    authority: 'RTE Legal Documentation Secretariat & Civil Society Consortium',
    summary:
      'Full statutory compendium gathering the latest notifications, gazette citations, and amendments to Section 38 State Rules from 37 States and Union Territories.',
    fullDescription:
      'An updated legal reference volume compiling all state notifications issued under Section 38 of the Right to Education Act. It provides comparative analysis of per-child expenditure formulas, neighborhood distance definitions, grievance redressal rules, and teacher recruitment norms across jurisdictions including Maharashtra, Karnataka, Telangana, Delhi, and Tamil Nadu.',
    keyPoints: [
      'Comparative clause-by-clause analysis of all 37 State/UT rules',
      'Complete statutory gazette references with English and vernacular citations',
      'State-wise per-child reimbursement ceiling benchmarks',
      'Free open-access digital edition released under CC BY 4.0 license',
    ],
    isNew: true,
    isUrgent: false,
    isPinned: false,
    fileFormat: 'PDF',
    fileSize: '8.4 MB',
    statutorySection: 'Section 38',
    jurisdiction: 'All 37 States & UTs',
    tags: ['Section 38 Rules', 'State Gazette Matrix', 'Legal Compendium'],
  },
  {
    id: 'ann-2025-04',
    title: 'Supreme Court of India Directives on Barrier-Free Facilities & Sanitary Amenities in Elementary Schools',
    category: 'order',
    categoryLabel: 'Judicial Order',
    date: '05 Feb 2025',
    isoDate: '2025-02-05',
    refNumber: 'W.P. (Civil) No. 580/2024',
    authority: 'Supreme Court of India',
    summary:
      'Apex court issues strict directions to all Chief Secretaries to ensure 100% boundary walls, functional gender-segregated toilets, and barrier-free access for Children with Special Needs (CWSN).',
    fullDescription:
      'In a decisive ruling reinforcing the constitutional core of Article 21-A and the RTE Schedule norms, the Supreme Court directed all States and Union Territories to audit every government and private recognized school. States must submit time-bound compliance affidavits confirming the availability of clean drinking water, dedicated toilets, and wheelchair ramps by the commencement of the upcoming academic term.',
    keyPoints: [
      'Strict enforcement of Schedule Norms under Section 19 and Section 25',
      'Non-negotiable compliance deadline for school physical infrastructure standards',
      'Mandatory geo-tagged verification by District Education Officers',
      'Failure to comply to trigger derecognition notices under Section 18(3)',
    ],
    isNew: true,
    isUrgent: true,
    isPinned: false,
    fileFormat: 'PDF',
    fileSize: '1.6 MB',
    statutorySection: 'Section 19 & RTE Schedule',
    jurisdiction: 'Pan-India Precedent',
    tags: ['Supreme Court Ruling', 'RTE Schedule', 'CWSN Infrastructure', 'Article 21-A'],
  },
  {
    id: 'ann-2025-05',
    title: 'National Special Drive for Section 32 Grievance Redressal Announced by NCPCR',
    category: 'announcement',
    categoryLabel: 'Public Notice',
    date: '10 Feb 2025',
    isoDate: '2025-02-10',
    refNumber: 'NCPCR/RTE/DRIVE-2025/02',
    authority: 'National Commission for Protection of Child Rights (NCPCR)',
    summary:
      'Statutory commission launches month-long nationwide grievance camps for parents facing illegal capitation fees, denial of elementary transfer certificates, or lottery exclusions.',
    fullDescription:
      'Invoking powers under Section 31 and Section 32 of the RTE Act, the National Commission for Protection of Child Rights (NCPCR), together with State Commissions (SCPCRs), announces a coordinated pan-India grievance redressal drive. Special fast-track digital benches will adjudicate violations regarding capitation fees, non-issuance of transfer certificates, and unconstitutional screening tests.',
    keyPoints: [
      'Direct online petition filing with 14-day statutory disposal mandate',
      'Prohibition of capitation fee with tenfold penalty enforcement under Section 13(2)',
      'Free legal aid desks mobilized at all District Child Protection Units',
      'Real-time status tracking via e-BaalNidan portal',
    ],
    isNew: true,
    isUrgent: false,
    isPinned: false,
    fileFormat: 'PDF',
    fileSize: '1.2 MB',
    statutorySection: 'Section 31 & Section 32',
    jurisdiction: 'National (NCPCR & SCPCRs)',
    tags: ['Grievance Redressal', 'NCPCR', 'Section 32', 'Parent Helpdesk'],
  },
  {
    id: 'ann-2025-06',
    title: 'Statutory Gazette Notice: Model Regulations on School Management Committees (SMC) Social Audits',
    category: 'gazette',
    categoryLabel: 'Official Gazette',
    date: '04 Jan 2025',
    isoDate: '2025-01-04',
    refNumber: 'G.S.R. 18(E) / 2025',
    authority: 'The Gazette of India (Extraordinary Part II, Section 3)',
    summary:
      'Notified statutory standards strengthening SMC parental representation, mandatory 75% parent-guardian quota, and quarterly transparent social audits of school grants.',
    fullDescription:
      'Published in the Gazette of India Extraordinary, these regulations mandate enhanced public transparency in School Management Committees formed under Section 21. At least 50% of the committee must be women, and disproportionate weight must be given to parents of children belonging to disadvantaged groups and weaker sections.',
    keyPoints: [
      'Mandatory 75% parental membership preserved with verified attendance registers',
      'School Development Plan (SDP) formulation under Section 22 made public on school noticeboards',
      'Social audit records open to scrutiny under Section 4(1)(b) of the RTI Act',
      'Quarterly grant utilization certificates required before subsequent fund tranches',
    ],
    isNew: false,
    isUrgent: false,
    isPinned: false,
    fileFormat: 'PDF',
    fileSize: '3.3 MB',
    statutorySection: 'Section 21 & Section 22',
    jurisdiction: 'Central & Model State Framework',
    tags: ['Official Gazette', 'SMC Regulations', 'Section 21', 'Social Audit'],
  },
  {
    id: 'ann-2025-07',
    title: 'Advisory Circular on Per-Child Reimbursement Computation Formula under Section 12(2)',
    category: 'circular',
    categoryLabel: 'Advisory Circular',
    date: '22 Jan 2025',
    isoDate: '2025-01-22',
    refNumber: 'F.No. 1-14/2025-EE.4',
    authority: 'Ministry of Education (Elementary Education Division)',
    summary:
      'Standardized advisory sent to state finance departments detailing methodology for calculating per-child recurring school expenditure to avoid reimbursement litigation.',
    fullDescription:
      'To address recurrent friction between state education directorates and unaided private institutions, the Ministry has circulated an audited guideline on calculating the per-child cost incurred by the State or the actual school fee charged, whichever is less, as prescribed by Section 12(2) of the Act.',
    keyPoints: [
      'Explicit definition of recurring operational cost heads vs non-recurring capital expenditure',
      'Direct Benefit Transfer (DBT) integration to accelerate escrow transfers to private schools',
      'Annual revision schedule synchronized with state budget approval cycles',
      'Dispute resolution mechanism under District Collector chairmanship',
    ],
    isNew: false,
    isUrgent: false,
    isPinned: false,
    fileFormat: 'PDF',
    fileSize: '1.9 MB',
    statutorySection: 'Section 12(2)',
    jurisdiction: 'All States & UTs',
    tags: ['Per-Child Cost', 'Section 12(2)', 'Reimbursement SOP', 'Circular'],
  },
  {
    id: 'ann-2025-08',
    title: 'High Court Precedent on Verification of Economically Weaker Section (EWS) Digital Certificates',
    category: 'order',
    categoryLabel: 'Judicial Order',
    date: '12 Jan 2025',
    isoDate: '2025-01-12',
    refNumber: 'LPA No. 44/2025 & CM App. 1120/2025',
    authority: 'High Court of Judicature',
    summary:
      'Division Bench holds that schools cannot unilaterally cancel lottery admissions citing certificate revenue jurisdiction disputes once authenticated by the tehsildar.',
    fullDescription:
      'A Division Bench ruled that unaided private schools lack the statutory authority to act as an appellate investigator on revenue certificates issued by authorized state officers. Once a digital income or caste certificate is certified on the state revenue portal, the school is legally bound to grant admission under Section 12(1)(c).',
    keyPoints: [
      'Schools barred from demanding physical stamp re-verification of digital revenue certificates',
      'Admission once allotted via computerized draw cannot be cancelled without district nodal order',
      'Clarification on annual parental income threshold benchmarking',
    ],
    isNew: false,
    isUrgent: false,
    isPinned: false,
    fileFormat: 'PDF',
    fileSize: '1.4 MB',
    statutorySection: 'Section 12(1)(c)',
    jurisdiction: 'State Precedent',
    tags: ['High Court Order', 'EWS Verification', 'Admission Protection', 'Section 12(1)(c)'],
  },
];
