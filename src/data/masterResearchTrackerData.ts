// Generated from official (01) RTE 2.0 Master Research Tracker.xlsx
export interface ResearchTrackerItem {
  id: string;
  year: string;
  date: string;
  title: string;
  category: string;
  authority: string;
  relevantProvision: string;
  briefSummary: string;
  legalImpact: string;
}

export interface OfficialSourceItem {
  id: string;
  source: string;
  usage: string;
  link: string;
  priority: string;
  notes: string;
}

export interface PriorityResearchAreaItem {
  id: string;
  priority: string;
  researchArea: string;
  relevantProvisions: string;
  keyQuestions: string;
  importantStartingPoint: string;
}

export const MASTER_RESEARCH_ITEMS: ResearchTrackerItem[] = [
  {
    "id": "item-1",
    "year": "2014",
    "date": "2014.0",
    "title": "Pramati Educational & Cultural Trust v. Union of India",
    "category": "Judgment",
    "authority": "Supreme Court",
    "relevantProvision": "Article 21A, Article 30(1), RTE Act",
    "briefSummary": "Considered applicability of the RTE Act to minority educational institutions.",
    "legalImpact": "Important for understanding the constitutional limits on RTE implementation in minority institutions."
  },
  {
    "id": "item-2",
    "year": "2015",
    "date": "28-04-2015",
    "title": "Uran Education Society v. State of Maharashtra",
    "category": "Judgment",
    "authority": "Bombay High Court",
    "relevantProvision": "Sections 11, 12(1)(c) & 12(2), RTE Act and Maharashtra ITI Rules",
    "briefSummary": "Concerned 25% RTE admissions at the pre-school/entry level and reimbursement to an unaided school for providing free education to children from weaker and disadvantaged groups.",
    "legalImpact": "Held that where the State requires unaided schools to admit children under the RTE quota at the pre-school level, eligible reimbursement cannot be denied merely because the admission is at the pre-school stage."
  },
  {
    "id": "item-3",
    "year": "2015",
    "date": "15-01-2015",
    "title": "A.V. Public School v. State of Haryana",
    "category": "Judgment",
    "authority": "Punjab and Haryana High Court",
    "relevantProvision": "RTE Act, 2009 and Haryana School Education Rules, 2003",
    "briefSummary": "Concerned closure of schools allegedly operating without required recognition/approval under the RTE framework and Haryana School Education Rules.",
    "legalImpact": "Court set aside the blanket closure approach and directed the State to examine each school independently, identify deficiencies and pass specific, reasoned orders regarding recognition or closure."
  },
  {
    "id": "item-4",
    "year": "2016",
    "date": "18-10-2016",
    "title": "Vikas Sankhala & Ors. v. Vikas Kumar Agarwal & Ors. (2017) 1 SCC 350; AIR 2016 SC 5265",
    "category": "Judgment",
    "authority": "Supreme Court of India",
    "relevantProvision": "Section 23(1), RTE Act, 2009; NCTE TET guidelines",
    "briefSummary": "Validity of relaxation in TET qualifying marks for reserved-category candidates in Rajasthan teacher recruitment.",
    "legalImpact": "The Court considered Rajasthan's TET qualifying-mark relaxation policy and clarified the treatment of candidates benefiting from relaxation when competing for unreserved vacancies."
  },
  {
    "id": "item-5",
    "year": "2016",
    "date": "14-09-2016",
    "title": "Chinmoy Dolui & Anr. v. Union of India & Ors., W.P. No. 14548 (W) of 2016, decided 14 September 2016",
    "category": "Judgment",
    "authority": "Calcutta High Court",
    "relevantProvision": "Section 23(2), RTE Act, 2009; Central Government relaxation notification",
    "briefSummary": "Continuation of West Bengal primary-teacher selection after expiry of a temporary relaxation of minimum teacher qualifications.",
    "legalImpact": "The Court disposed of the petition and vacated the interim order, permitting the selection process to proceed subject to the conditions of the relaxation and preserving the petitioners' ability to challenge subsequent irregularities."
  },
  {
    "id": "item-6",
    "year": "2016",
    "date": "22-09-2016",
    "title": "A. Firdose Begum v. Secretary to Government, W.P. No. 14072 of 2015 and connected matters, common order dated 22 September 2016",
    "category": "Judgment",
    "authority": "Madras High Court",
    "relevantProvision": "Article 30(1), Constitution; Section 23, RTE Act; Tamil Nadu G.O.Ms. No. 181 dated 15-11-2011; Puducherry G.O.Ms. No. 76 dated 18-03-2015",
    "briefSummary": "Application of TET requirements to teachers in minority educational institutions and approval/payment of salaries.",
    "legalImpact": "The Court held that the relevant Government Orders prescribing TET requirements were not applicable to minority institutions, allowed the petitions, dismissed the State's appeals and directed release of teachers' salaries and arrears within two months."
  },
  {
    "id": "item-7",
    "year": "2018",
    "date": "28-06-2018",
    "title": "NCTE notification amending minimum qualification notification",
    "category": "Notification",
    "authority": "NCTE",
    "relevantProvision": "Section 23, teacher qualifications",
    "briefSummary": "Amendment concerning minimum qualifications for teachers.",
    "legalImpact": "Relevant to teacher qualification requirements under the RTE framework."
  },
  {
    "id": "item-8",
    "year": "2018",
    "date": "",
    "title": "Research pending",
    "category": "Research pending",
    "authority": "Supreme Court / High Courts / Government",
    "relevantProvision": "Sections 12, 16, 18, 19, 23",
    "briefSummary": "",
    "legalImpact": ""
  },
  {
    "id": "item-9",
    "year": "2019",
    "date": "43739.0",
    "title": "RTE (Amendment) Act, 2019",
    "category": "Amendment",
    "authority": "Parliament of India",
    "relevantProvision": "Section 16",
    "briefSummary": "Amended the no-detention framework and introduced regular examinations for Classes 5 and 8, additional instruction and re-examination.",
    "legalImpact": "Changed the statutory framework concerning examinations and holding back."
  },
  {
    "id": "item-10",
    "year": "2019",
    "date": "28-02-2019",
    "title": "Notification bringing RTE Amendment Act 2019 into force",
    "category": "Commencement notification",
    "authority": "Central Government",
    "relevantProvision": "Section 16",
    "briefSummary": "2019 amendment was brought into force from 01-03-2019.",
    "legalImpact": "Establishes the effective date of the amended Section 16 framework."
  },
  {
    "id": "item-11",
    "year": "2019",
    "date": "2019.0",
    "title": "RTE implementation notifications and rules",
    "category": "Subordinate legislation",
    "authority": "Central / State Governments",
    "relevantProvision": "Sections 12, 16, 23",
    "briefSummary": "Various RTE-related rules and notifications require identification and verification.",
    "legalImpact": "May affect admissions, examinations and teacher qualifications."
  },
  {
    "id": "item-12",
    "year": "2020",
    "date": "",
    "title": "Research pending",
    "category": "Research pending",
    "authority": "Central / State Governments, Courts",
    "relevantProvision": "Sections 12, 16, 18, 19, 23",
    "briefSummary": "Search for RTE-related judgments, rules and government orders including COVID-period issues.",
    "legalImpact": "Identify legal developments directly affecting RTE implementation."
  },
  {
    "id": "item-13",
    "year": "2021",
    "date": "",
    "title": "Research pending",
    "category": "Research pending",
    "authority": "Supreme Court / High Courts / Government",
    "relevantProvision": "",
    "briefSummary": "",
    "legalImpact": ""
  },
  {
    "id": "item-14",
    "year": "2022",
    "date": "2022.0",
    "title": "Delhi RTE Amendment Rules",
    "category": "Subordinate legislation",
    "authority": "Government of NCT of Delhi",
    "relevantProvision": "RTE Rules",
    "briefSummary": "An entry for Delhi RTE Amendment Rules is listed in the consolidated RTE index.",
    "legalImpact": "May affect local procedural implementation in Delhi."
  },
  {
    "id": "item-15",
    "year": "2022",
    "date": "",
    "title": "Research pending",
    "category": "Research pending",
    "authority": "Supreme Court / High Courts",
    "relevantProvision": "Sections 12, 16, 18, 19, 23",
    "briefSummary": "Search for case law involving 25% admissions, recognition, examinations and teacher qualifications.",
    "legalImpact": "Identify jurisdiction-specific interpretations."
  },
  {
    "id": "item-16",
    "year": "2023",
    "date": "",
    "title": "Research pending",
    "category": "Research pending",
    "authority": "Supreme Court / High Courts / Government",
    "relevantProvision": "Sections 12, 16, 18, 19, 23",
    "briefSummary": "Search for judgments, amendments, rules and notifications relevant to RTE.",
    "legalImpact": "Identify important judicial and administrative developments."
  },
  {
    "id": "item-17",
    "year": "2024",
    "date": "",
    "title": "Research pending",
    "category": "Research pending",
    "authority": "Supreme Court / High Courts / Government",
    "relevantProvision": "Sections 12, 16, 18, 19, 23",
    "briefSummary": "Search for RTE-related litigation and legal changes.",
    "legalImpact": ""
  },
  {
    "id": "item-18",
    "year": "2025",
    "date": "45666.0",
    "title": "Anjuman Ishaat-e-Taleem Trust v. State of Maharashtra",
    "category": "Judgment",
    "authority": "Supreme Court",
    "relevantProvision": "Articles 21A, 30(1), Sections 12(1)(c), 23",
    "briefSummary": "Considered the RTE framework in relation to minority educational institutions and teacher eligibility including TET.",
    "legalImpact": "Important for minority-institution exemptions, Section 12(1)(c) and teacher qualification requirements."
  },
  {
    "id": "item-19",
    "year": "2026",
    "date": "13-01-2026",
    "title": "Dinesh Biwaji Ashtikar v. State of Maharashtra",
    "category": "Judgment",
    "authority": "Supreme Court",
    "relevantProvision": "Article 21A, Section 12(1)(c)",
    "briefSummary": "Addressed implementation of the 25% admission obligation and responsibilities of authorities.",
    "legalImpact": "Highly relevant to enforcement of Section 12(1)(c) and access to remedies."
  },
  {
    "id": "item-20",
    "year": "2026",
    "date": "28-04-2026",
    "title": "Lucknow Public School, Eldico v. State of Uttar Pradesh",
    "category": "Judgment",
    "authority": "Supreme Court",
    "relevantProvision": "Section 12(1)(c), UP RTE Rules",
    "briefSummary": "Reportedly held that a school cannot delay admission of a state-allotted RTE student while disputing eligibility.",
    "legalImpact": "Relevant to timing of RTE admission and the role of schools and State authorities."
  },
  {
    "id": "item-21",
    "year": "2026",
    "date": "29-05-2026",
    "title": "Review in Anjuman Ishaat-e-Taleem Trust v. State of Maharashtra",
    "category": "Review order",
    "authority": "Supreme Court",
    "relevantProvision": "Section 23, TET",
    "briefSummary": "Reportedly extended the timeline for certain in-service teachers to acquire TET qualification to 31/8/2028 and recommended TET preferably twice a year.",
    "legalImpact": "Relevant to teacher eligibility and continued service."
  },
  {
    "id": "item-22",
    "year": "2026",
    "date": "2026.0",
    "title": "Maharashtra RTE distance / neighbourhood admission litigation",
    "category": "Judgment lead",
    "authority": "Bombay High Court",
    "relevantProvision": "Sections 6, 8, 9, 12(1)(c)",
    "briefSummary": "Media reports refer to litigation concerning distance criteria in RTE admissions.",
    "legalImpact": "May be relevant to neighbourhood-school criteria and 25% admissions."
  }
];

export const OFFICIAL_SOURCES_DATA: OfficialSourceItem[] = [
  {
    "id": "src-1",
    "source": "India Code",
    "usage": "Official text of the RTE Act, amendments and consolidated legislation",
    "link": "https://www.indiacode.nic.in/",
    "priority": "Very High",
    "notes": "Use this as a primary source for the current statutory text."
  },
  {
    "id": "src-2",
    "source": "e-Gazette of India",
    "usage": "Acts, amendment notifications, commencement notifications and other official legal notifications",
    "link": "https://egazette.gov.in/",
    "priority": "Very High",
    "notes": "Use the Gazette to verify exact dates, wording and commencement"
  },
  {
    "id": "src-3",
    "source": "Supreme Court of India",
    "usage": "Official Supreme Court judgments and orders",
    "link": "https://www.sci.gov.in/",
    "priority": "Very High",
    "notes": "Prefer the official judgment over news reports or secondary legal websites."
  },
  {
    "id": "src-4",
    "source": "eCourts Judgments",
    "usage": "Search Supreme Court and High Court judgments",
    "link": "https://judgments.ecourts.gov.in/",
    "priority": "Very High",
    "notes": "Useful for finding judgments when the exact case name is unknown."
  },
  {
    "id": "src-5",
    "source": "Ministry of Education",
    "usage": "Central government notifications, RTE documents, policy material and official communications",
    "link": "https://www.education.gov.in/",
    "priority": "High",
    "notes": "Useful for RTE amendments, implementation material and government communications"
  },
  {
    "id": "src-6",
    "source": "Press Information Bureau",
    "usage": "Official government press releases and explanations of major legal or policy developments",
    "link": "https://www.pib.gov.in/",
    "priority": "High",
    "notes": "Useful for understanding the background to government actions; verify legal claims against primary documents."
  },
  {
    "id": "src-7",
    "source": "National Council for Teacher Education (NCTE)",
    "usage": "Teacher qualification and TET-related notifications and regulations",
    "link": "https://ncte.gov.in/",
    "priority": "High",
    "notes": "Particularly important for Section 23 and teacher qualification research."
  },
  {
    "id": "src-8",
    "source": "National Commission for Protection of Child Rights (NCPCR)",
    "usage": "Child-rights material, RTE implementation reports and official recommendations",
    "link": "https://ncpcr.gov.in/",
    "priority": "Medium",
    "notes": "Useful for implementation and enforcement issues."
  },
  {
    "id": "src-9",
    "source": "State Education Departments",
    "usage": "State-specific RTE rules, notifications, circulars and implementation orders",
    "link": "Search relevant State Education Department",
    "priority": "High",
    "notes": "Important because RTE implementation involves both central and state authorities."
  },
  {
    "id": "src-10",
    "source": "State Gazettes",
    "usage": "State-specific rules, amendments and notifications",
    "link": "Search relevant State Gazette",
    "priority": "High",
    "notes": "Use when researching state-level changes to RTE implementation."
  },
  {
    "id": "src-11",
    "source": "Right to Education India",
    "usage": "RTE case-law and resource discovery",
    "link": "https://righttoeducation.in/resources/centre?qt-resources=3",
    "priority": "Medium",
    "notes": "Use primarily to discover cases and documents; verify important claims using primary sources."
  },
  {
    "id": "src-12",
    "source": "Student First",
    "usage": "RTE and education-policy research resources",
    "link": "https://studentfirst.in/resources/",
    "priority": "High",
    "notes": "Review the resources specifically suggested by your CCS supervisor."
  },
  {
    "id": "src-13",
    "source": "Supreme Court Case Status",
    "usage": "Case status, orders and proceedings",
    "link": "https://www.sci.gov.in/",
    "priority": "High",
    "notes": "Useful for checking subsequent developments in important Supreme Court cases."
  },
  {
    "id": "src-14",
    "source": "Legislative Department",
    "usage": "Acts and legislative material",
    "link": "https://legislative.gov.in/",
    "priority": "Medium",
    "notes": "Useful as an additional official source for Acts and legislative documents."
  },
  {
    "id": "src-15",
    "source": "Ministry of Law and Justice",
    "usage": "Legal and legislative material",
    "link": "https://lawmin.gov.in/",
    "priority": "Medium",
    "notes": "Use as an additional official government source where relevant."
  }
];

export const PRIORITY_RESEARCH_AREAS: PriorityResearchAreaItem[] = [
  {
    "id": "area-1",
    "priority": "High",
    "researchArea": "25% RTE Admissions",
    "relevantProvisions": "Section 12(1)(c)",
    "keyQuestions": "Who is eligible? How are admissions allocated? What happens when a school refuses admission? How is reimbursement handled? What remedies are available to parents?",
    "importantStartingPoint": "Dinesh Biwaji Ashtikar v. State of Maharashtra (2026); Lucknow Public School, Eldico v. State of Uttar Pradesh (2026)"
  },
  {
    "id": "area-2",
    "priority": "High",
    "researchArea": "Teacher Qualifications and TET",
    "relevantProvisions": "Section 23, NCTE notifications",
    "keyQuestions": "What are the prescribed minimum qualifications for teachers? When is TET mandatory? How does TET affect existing or in-service teachers? What relaxations have been granted?",
    "importantStartingPoint": "RTE Amendment Act, 2017; Anjuman Ishaat-e-Taleem Trust v. State of Maharashtra (2025 and 2026 review)"
  },
  {
    "id": "area-3",
    "priority": "High",
    "researchArea": "Examinations and No-Detention Policy",
    "relevantProvisions": "Section 16",
    "keyQuestions": "What changed through the 2019 amendment? How do regular examinations in Classes 5 and 8 operate? What are the requirements for additional instruction and re-examination? When can a child be held back?",
    "importantStartingPoint": "RTE Amendment Act, 2019; commencement notification effective 01-03-2019"
  },
  {
    "id": "area-4",
    "priority": "High",
    "researchArea": "Minority Educational Institutions",
    "relevantProvisions": "Article 21A, Article 30(1), RTE Act",
    "keyQuestions": "Does the RTE Act apply to minority educational institutions? How does Article 30(1) interact with Article 21A? What issues have subsequently arisen regarding minority institutions?",
    "importantStartingPoint": "Pramati Educational & Cultural Trust v. Union of India (2014); Anjuman Ishaat-e-Taleem Trust v. State of Maharashtra (2025)"
  },
  {
    "id": "area-5",
    "priority": "High",
    "researchArea": "Section 12(1)(c) Implementation and Reimbursement",
    "relevantProvisions": "Sections 12(1)(c) and 12(2)",
    "keyQuestions": "How is the 25% obligation implemented? How are children selected and allotted? How are private unaided schools reimbursed? What disputes have arisen regarding eligibility and reimbursement?",
    "importantStartingPoint": "RTE Act; Central and State RTE Rules; relevant Supreme Court and High Court decisions"
  },
  {
    "id": "area-6",
    "priority": "Medium",
    "researchArea": "Recognition of Schools",
    "relevantProvisions": "Sections 18 and 19, Schedule",
    "keyQuestions": "What recognition requirements apply to schools? What happens if a school operates without recognition? What infrastructure and other norms must schools satisfy?",
    "importantStartingPoint": "RTE Act; applicable RTE Rules; Supreme Court and High Court judgments"
  },
  {
    "id": "area-7",
    "priority": "Medium",
    "researchArea": "Neighbourhood Schools and State Duties",
    "relevantProvisions": "Sections 6, 8 and 9",
    "keyQuestions": "What is the government's obligation to establish neighbourhood schools? How is neighbourhood or distance defined? What responsibilities fall on the appropriate government and local authority?",
    "importantStartingPoint": "RTE Act; State RTE Rules; state notifications and High Court decisions"
  },
  {
    "id": "area-8",
    "priority": "Medium",
    "researchArea": "Grievance Redressal and Enforcement",
    "relevantProvisions": "Sections 31 and 32",
    "keyQuestions": "Where can parents complain about violations of a child's RTE rights? What is the role of NCPCR, SCPCR and prescribed authorities? What remedies have courts provided?",
    "importantStartingPoint": "RTE Act; Central and State Rules; relevant judicial decisions"
  },
  {
    "id": "area-9",
    "priority": "Medium",
    "researchArea": "Age-Appropriate Admission and Special Training",
    "relevantProvisions": "Sections 4 and 5",
    "keyQuestions": "How is an out-of-school child admitted to an age-appropriate class? What special training must be provided? What happens when a child transfers between schools?",
    "importantStartingPoint": "RTE Act; Central and State RTE Rules"
  },
  {
    "id": "area-10",
    "priority": "Medium",
    "researchArea": "School Management Committees",
    "relevantProvisions": "Sections 21 and 22",
    "keyQuestions": "Which schools must constitute School Management Committees? What is their composition? What are their functions? What is the role of the School Development Plan?",
    "importantStartingPoint": "RTE Act; applicable RTE Rules"
  },
  {
    "id": "area-11",
    "priority": "Medium",
    "researchArea": "Teachers' Duties and Conditions",
    "relevantProvisions": "Sections 23, 24, 25, 26, 27 and 28",
    "keyQuestions": "What qualifications and duties apply to teachers? What pupil-teacher ratio is required? What restrictions exist regarding deployment for non-educational purposes and private tuition?",
    "importantStartingPoint": "RTE Act; NCTE notifications; Central and State Rules"
  },
  {
    "id": "area-12",
    "priority": "Medium",
    "researchArea": "Curriculum and Evaluation",
    "relevantProvisions": "Section 29",
    "keyQuestions": "What principles govern curriculum and evaluation under RTE? Which academic authority determines curriculum? How does this interact with the amended Section 16 framework?",
    "importantStartingPoint": "RTE Act; Rules; academic-authority notifications"
  },
  {
    "id": "area-13",
    "priority": "Medium",
    "researchArea": "Norms and Standards for Schools",
    "relevantProvisions": "Section 19, RTE Schedule",
    "keyQuestions": "What norms apply to teachers, classrooms, infrastructure, working days, instructional hours, library and other facilities? How have courts interpreted compliance with these standards?",
    "importantStartingPoint": "RTE Act Schedule; Rules; relevant judgments"
  },
  {
    "id": "area-14",
    "priority": "Medium",
    "researchArea": "Children from Weaker Sections and Disadvantaged Groups",
    "relevantProvisions": "Sections 2(d), 2(e) and 12(1)(c)",
    "keyQuestions": "How are weaker sections and disadvantaged groups defined? Can governments notify additional categories? How do income criteria and state-specific eligibility requirements operate?",
    "importantStartingPoint": "RTE Act; Central and State notifications; Section 12(1)(c) case law"
  },
  {
    "id": "area-15",
    "priority": "Medium",
    "researchArea": "State Rules and Notifications",
    "relevantProvisions": "Section 38",
    "keyQuestions": "How have different States implemented the RTE Act through rules and notifications? Which state-level changes are relevant to admissions, neighbourhood criteria, examinations and teacher qualifications?",
    "importantStartingPoint": "Central RTE Rules; State RTE Rules; official Gazettes"
  },
  {
    "id": "area-16",
    "priority": "Low",
    "researchArea": "Constitutional Background",
    "relevantProvisions": "Article 21A, Articles 14, 19(1)(g), 29 and 30",
    "keyQuestions": "How did the constitutional right to education develop? How have competing rights of children, private schools and minority institutions been balanced?",
    "importantStartingPoint": "Society for Unaided Private Schools of Rajasthan v. Union of India (2012) as background; Pramati (2014)"
  }
];
