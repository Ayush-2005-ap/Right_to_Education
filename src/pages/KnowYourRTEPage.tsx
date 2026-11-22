import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ChevronDown,
  Download,
  BookOpen,
  FileText,
  Clock,
  HelpCircle,
  Search,
  Shield,
  GraduationCap,
  Scale,
  Building2,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CitationModal } from '../components/ui/CitationModal';
import {
  OFFICIAL_DOCUMENT_DOWNLOADS,
  KEY_FEATURES_BLOCKS,
} from '../data/knowYourRTEFullData';

export const KnowYourRTEPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'about' | 'features' | 'chronology' | 'faq' = location.pathname.includes('/features')
    ? 'features'
    : location.pathname.includes('/chronology')
    ? 'chronology'
    : location.pathname.includes('/faq')
    ? 'faq'
    : 'about';

  const [isCitationOpen, setIsCitationOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [featuresSearch, setFeaturesSearch] = useState('');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(1);

  // Relevant document downloads for this page
  const pageDocs = OFFICIAL_DOCUMENT_DOWNLOADS.filter(d =>
    ['doc-02', 'doc-03', 'doc-04'].includes(d.id)
  );

  const filteredFeatures = !featuresSearch.trim()
    ? KEY_FEATURES_BLOCKS
    : KEY_FEATURES_BLOCKS.filter(
        (f) =>
          f.title.toLowerCase().includes(featuresSearch.toLowerCase()) ||
          f.paragraphs.some((p) => p.toLowerCase().includes(featuresSearch.toLowerCase()))
      );

  const chronologyMilestones = [
    {
      year: '1950',
      title: 'Article 45 — Directive Principle of State Policy',
      authority: 'Constituent Assembly of India',
      tag: 'Constitutional Origin',
      summary: 'The original Constitution directed the State under Article 45 to endeavour to provide free and compulsory education for all children up to 14 years within ten years. While a historic constitutional objective, it was initially a non-justiciable Directive Principle.',
    },
    {
      year: '12 December 2002',
      title: 'Constitution (Eighty-sixth Amendment) Act, 2002',
      authority: 'Parliament of India',
      tag: 'Fundamental Right',
      summary: 'Inserted Article 21A into Part III of the Constitution, making free and compulsory education a fundamental right for children aged 6 to 14. Simultaneously revised Article 45 to cover early childhood care (<6 years) and added Article 51A(k) creating a fundamental duty for parents.',
    },
    {
      year: '2005',
      title: 'Drafting of the Right to Education Legislation',
      authority: 'Central Advisory Board of Education (CABE)',
      tag: 'Legislative Draft',
      summary: 'A national draft bill was prepared to operationalise Article 21A. It introduced the groundbreaking proposal to reserve at least 25% of entry-level seats in specified private schools for disadvantaged groups (Section 12(1)(c)), sparking intense debate on social inclusion.',
    },
    {
      year: 'July–August 2009',
      title: 'Parliamentary Approval of Act No. 35 of 2009',
      authority: 'Cabinet & Both Houses of Parliament',
      tag: 'Statutory Passage',
      summary: 'Approved by the Union Cabinet on 2 July 2009, passed by the Rajya Sabha on 20 July 2009, and passed by the Lok Sabha on 4 August 2009. Received Presidential Assent on 26 August 2009 as the Right of Children to Free and Compulsory Education Act, 2009.',
    },
    {
      year: '1 April 2010',
      title: 'Nationwide Enforcement & Model Rules Notification',
      authority: 'Ministry of Human Resource Development',
      tag: 'Enforcement Date',
      summary: 'The Act entered into force across India (initially excepting Jammu & Kashmir). Central Model Rules, 2010 notified under Section 38 to provide uniform standards for neighbourhood schools, SMC constitutions, and reimbursement formulas.',
    },
    {
      year: '12 April 2012',
      title: 'Society for Unaided Private Schools v. Union of India',
      authority: 'Supreme Court of India ((2012) 6 SCC 1)',
      tag: 'Constitutional Validity',
      summary: 'A 3-Judge Bench of the Supreme Court upheld the constitutional validity of the RTE Act and Section 12(1)(c) 25% reservation in private unaided schools, holding that it furthers Article 21A and does not arbitrarily violate Article 19(1)(g).',
    },
    {
      year: '6 May 2014',
      title: 'Pramati Educational & Cultural Trust v. Union of India',
      authority: 'Supreme Court Constitution Bench ((2014) 8 SCC 1)',
      tag: 'Minority Exemption',
      summary: 'A 5-Judge Constitution Bench held that the RTE Act, insofar as it applies to minority educational institutions (aided or unaided) protected under Article 30(1), is unconstitutional, establishing total exemption from Section 12(1)(c) for minority schools.',
    },
    {
      year: '2017',
      title: 'RTE (Amendment) Act, 2017 — Teacher Qualifications',
      authority: 'Parliament of India (Act No. 24 of 2017)',
      tag: 'Teacher Standards',
      summary: 'Amended Section 23(2) of the Act to provide a final opportunity for in-service elementary teachers who did not possess minimum academic qualifications to acquire them by 31 March 2019.',
    },
    {
      year: 'October 2019',
      title: 'Extension of RTE Act to Jammu & Kashmir and Ladakh',
      authority: 'Jammu & Kashmir Reorganisation Act, 2019',
      tag: 'Territorial Scope',
      summary: 'Following the enactment of the J&K Reorganisation Act, 2019, the previous territorial exclusion was superseded, bringing the Union Territories of Jammu & Kashmir and Ladakh under the RTE statutory framework.',
    },
    {
      year: '11 January 2019 / March 2019',
      title: 'RTE (Amendment) Act, 2019 — Examination Reform',
      authority: 'Parliament of India (Act No. 1 of 2019)',
      tag: 'Section 16 Reform',
      summary: 'Substituted Section 16 to reform the "No Detention Policy". Mandated regular examinations in Classes 5 and 8, required remedial training and re-examination for failed students within 2 months, empowered States to permit detention upon re-test failure, while strictly prohibiting expulsion.',
    },
    {
      year: '1 September 2025',
      title: 'Anjuman Ishaat-e-Taleem Trust v. State of Maharashtra',
      authority: 'Supreme Court of India (2025 INSC 1063)',
      tag: 'Constitutional Re-examination',
      summary: 'The Supreme Court questioned the blanket exemption granted to minority schools in Pramati (2014) regarding teacher qualifications and referred the issue of the RTE Act’s applicability to minority institutions to a larger Constitution Bench.',
    },
    {
      year: '13 January 2026',
      title: 'Dinesh Biwaji Ashtikar v. State of Maharashtra',
      authority: 'Supreme Court of India (2026 INSC 56)',
      tag: 'Quota Enforceability',
      summary: 'Reaffirmed the mandatory nature of the 25% Section 12(1)(c) quota, describing its effective execution as a "national mission" and directing State Governments to formulate clear rules and accountability protocols under Section 38.',
    },
    {
      year: '28 April 2026',
      title: 'Lucknow Public School, Eldico v. State of Uttar Pradesh',
      authority: 'Supreme Court of India (2026 INSC 422)',
      tag: 'Allotment Compliance',
      summary: 'Ruled that once a disadvantaged child has been selected and allotted to a private neighbourhood school by the State Government under Section 12(1)(c), the private school cannot question the allotment or deny admission.',
    },
    {
      year: '29 May 2026',
      title: 'Supreme Court In-Service Teachers TET Review Order',
      authority: 'Supreme Court of India (2026 INSC 597)',
      tag: 'TET Timeline Extension',
      summary: 'Extended the deadline for in-service teachers to qualify the Teacher Eligibility Test (TET) to 31 August 2028 and advised appropriate education authorities to conduct TET twice annually at six-month intervals.',
    },
  ];

  const faqs = [
    {
      q: 'Which children are entitled to free and compulsory education under the Act?',
      a: 'Under Section 3(1), every child between the ages of six and fourteen has the right to free and compulsory education in a neighbourhood school until the completion of elementary education (Classes I to VIII). A child cannot be made liable to pay any fee or expenses that would prevent them from pursuing and completing elementary schooling.',
    },
    {
      q: 'What does the 25% quota under Section 12(1)(c) require?',
      a: 'Section 12(1)(c) requires specified categories of schools—specifically non-minority private unaided schools—to admit at least 25% of their entry-level class strength (Pre-school/Nursery or Class 1) from children belonging to weaker sections and disadvantaged groups residing in the neighbourhood, and to provide them free elementary education. The State reimburses participating schools under Section 12(2) based on per-child government expenditure or school fee, whichever is lower.',
    },
    {
      q: 'Can schools conduct entrance screening or charge capitation fees?',
      a: 'No. Section 13 strictly prohibits capitation fees and screening procedures for admission. Collecting capitation fees is punishable with a fine of up to 10 times the amount charged. Subjecting a child or parents to screening or interviews is punishable with a fine of up to ₹25,000 for the first contravention and ₹50,000 for subsequent contraventions.',
    },
    {
      q: 'Can a child be denied admission for lack of age proof or transfer certificate?',
      a: 'No. Under Section 14, no child can be denied admission to a school for lack of proof of age (such as a birth certificate). Section 15 provides that a child can be admitted even after the formal commencement of the academic session. Furthermore, under Section 5, delay or lack of a transfer certificate can never be a ground for refusing admission.',
    },
    {
      q: 'What is the current legal status of the No Detention Policy under Section 16?',
      a: 'Following the RTE (Amendment) Act, 2019, regular examinations are held in Classes 5 and 8 at the end of each academic year. If a child fails, the school must provide additional remedial instruction and hold a re-examination within two months. State Governments are empowered to decide whether to permit schools to hold back pupils who fail the re-test. Crucially, the Act prohibits expelling any child from school until completion of elementary education.',
    },
    {
      q: 'What are the statutory requirements for School Management Committees (SMCs)?',
      a: 'Under Section 21, all government, government-aided, and special category schools must constitute an SMC. At least 75% of members must be parents or guardians of enrolled children, with 50% representation reserved for women. SMCs monitor school functioning, oversee fund utilisation, and prepare three-year School Development Plans (SDPs) under Section 22.',
    },
    {
      q: 'Does the RTE Act apply to minority educational institutions?',
      a: 'In Pramati Educational & Cultural Trust (2014), a Constitution Bench held that the RTE Act does not apply to minority educational institutions protected under Article 30(1) of the Constitution. However, in Anjuman Ishaat-e-Taleem Trust (1 September 2025), the Supreme Court questioned the blanket exemption—especially concerning teacher qualifications—and referred the matter to a larger Constitution Bench.',
    },
    {
      q: 'Where can a parent or citizen report an RTE violation or denial of admission?',
      a: 'Under Section 32, grievances can be submitted in writing to the local education authority (Block Education Officer / District Education Officer), who must decide the matter within 3 months after giving the applicant an opportunity to be heard. Violations can also be reported directly to State Commissions for Protection of Child Rights (SCPCR) or the National Commission for Protection of Child Rights (NCPCR) via its "e-Baalnidan" portal.',
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <Container>
        {/* Section Header */}
        <SectionHeader
          title="Know Your RTE — Comprehensive Statutory Compendium"
          category="Legal Framework &amp; Citizen Compendium"
          description="Authoritative statutory overview of the Right of Children to Free and Compulsory Education Act, 2009 (Act No. 35 of 2009). Codifies constitutional foundations under Article 21A, all 18 substantive mandates, 1950–2026 legal chronology, and official downloadable compendiums."
        />

        {/* OFFICIAL DRIVE DOCUMENTS DOWNLOAD BANNER */}
        <div className="bg-surface-container-low p-4 sm:p-5 rounded-[4px] border border-primary/20 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="primary">Official Research Documents</Badge>
              <span className="text-xs font-mono text-outline">Direct Drive Ingestion · 2026 Final Content</span>
            </div>
            <p className="font-sans text-body-sm text-on-surface">
              Download the authoritative, unedited Word documents for the statutory overview, legislative chronology, and section-by-section key features.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {pageDocs.map((doc) => (
              <a
                key={doc.id}
                href={doc.url}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-border-subtle rounded-[2px] text-label-sm font-semibold text-primary transition-colors"
                title={`${doc.title} (${doc.size})`}
              >
                <Download className="w-3.5 h-3.5 text-secondary" />
                <span>{doc.filename}</span>
                <span className="text-[10px] text-outline font-mono">({doc.size})</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none max-w-full min-w-0">
          <Link
            to="/know-your-rte/about"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'about'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>About the Act</span>
          </Link>
          <Link
            to="/know-your-rte/features"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'features'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Key Features (18 Domains)</span>
          </Link>
          <Link
            to="/know-your-rte/chronology"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'chronology'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Legal Chronology (1950–2026)</span>
          </Link>
          <Link
            to="/know-your-rte/faq"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'faq'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Citizen FAQ</span>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ABOUT THE ACT (Full fidelity from File 02) */}
        {/* ========================================================================= */}
        {activeTab === 'about' && (
          <div className="space-y-8">
            {/* Hero Summary Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-card space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="inline-flex items-center gap-2">
                  <Badge variant="primary">Act No. 35 of 2009</Badge>
                  <span className="text-xs font-mono text-outline">Enacted: 26 August 2009 · In Force: 1 April 2010</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/documents/ABOUT_RTE_ACT.docx"
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-xs font-semibold text-primary rounded-[2px] border border-border-subtle hover:bg-surface-container-high transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official Word Document</span>
                  </a>
                  <Button variant="outline" size="sm" onClick={() => setIsCitationOpen(true)}>
                    Cite Principal Statute
                  </Button>
                </div>
              </div>

              <h2 className="font-serif text-headline-lg font-bold text-primary">
                The Right to Education in India: Statutory Architecture &amp; Mandate
              </h2>

              <div className="font-sans text-body-md text-on-surface space-y-4 leading-relaxed">
                <p>
                  The Right of Children to Free and Compulsory Education Act, 2009 (RTE Act) is a landmark legislation that gives effect to the fundamental right to education guaranteed under <strong>Article 21A</strong> of the Constitution of India. Enacted on 26th August 2009 and brought into force on 1st April 2010, the Act establishes an enforceable legal framework for free and compulsory elementary education for children between the ages of six and fourteen.
                </p>
                <p>
                  The RTE Act recognises education not merely as a government welfare scheme, but as an absolute <strong>legal entitlement</strong>. It distributes binding legal obligations among the Central Government, State Governments, local authorities, and schools to guarantee access, attendance, completion of schooling, minimum school infrastructure, and safeguards against discriminatory exclusion.
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle">
                  <span className="text-label-sm text-outline block">Constitutional Anchor</span>
                  <span className="font-serif text-headline-xs font-bold text-primary mt-1 block">Article 21A</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">Part III Fundamental Right (86th Amendment)</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle">
                  <span className="text-label-sm text-outline block">Statutory Architecture</span>
                  <span className="font-serif text-headline-xs font-bold text-secondary mt-1 block">38 Sections &amp; Schedule</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">7 Core Chapters across Admissions &amp; Governance</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle">
                  <span className="text-label-sm text-outline block">Protected Cohort</span>
                  <span className="font-serif text-headline-xs font-bold text-ochre mt-1 block">6 to 14 Years</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">Classes I to VIII (Elementary Education)</span>
                </div>
              </div>
            </div>

            {/* Core Guarantees Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-headline-md font-bold text-primary">
                  What Does the RTE Act Guarantee?
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-secondary uppercase">Section 3</span>
                    <Badge variant="primary">Core Guarantee</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Free and Compulsory Education</h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    Under Section 3, every child aged six to fourteen has the right to free and compulsory education in a neighbourhood school until the completion of elementary education. A child cannot be prevented from completing elementary education because of fees or expenses that would impede access to schooling.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-secondary uppercase">Section 4 &amp; 14–15</span>
                    <Badge variant="secondary">Inclusion</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Admission &amp; Age-Appropriate Education</h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    Section 4 provides for children who have never been admitted to school or dropped out to be admitted to an age-appropriate class and receive special bridge training. Section 14 mandates that lack of birth proof can never be a ground for denying admission, and Section 15 permits admissions beyond the formal period.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-secondary uppercase">Section 12(1)(c) &amp; 12(2)</span>
                    <Badge variant="primary">25% Private Quota</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Admission in Specified Private Schools</h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    Requires specified categories of private unaided non-minority schools to admit at least 25% of their entry-level class strength from children belonging to weaker sections and disadvantaged groups in the neighbourhood. Reimbursement by the appropriate government is governed by Section 12(2) and applicable state rules.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-secondary uppercase">Section 13 &amp; 17</span>
                    <Badge variant="high-priority">Child Protection</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Fair Practices &amp; Dignity Safeguards</h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    Section 13 strictly prohibits capitation fees (penalised up to 10× amount charged) and screening interviews for child or parents. Section 17 enacts a blanket statutory ban on physical punishment and mental harassment, ensuring a safe, protective learning environment.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-secondary uppercase">Sections 18–19 &amp; Schedule</span>
                    <Badge variant="outline">Quality Norms</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Minimum School Norms &amp; PTR</h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    No school can operate without obtaining a Certificate of Recognition under Section 18. The Schedule prescribes binding standards: 1:30 PTR for Primary, 1:35 for Upper Primary, all-weather buildings, barrier-free access, separate toilets for boys and girls, drinking water, library, and playground.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-secondary uppercase">Section 16 (Amended 2019)</span>
                    <Badge variant="neutral">Examinations</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Regular Examinations &amp; Holding Back</h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    Regular exams in Classes 5 and 8. A child who fails must receive additional instruction and re-examination within two months. States may permit schools to hold back pupils who fail the re-test, but under no circumstance can a child be expelled before completing Class 8.
                  </p>
                </div>
              </div>
            </div>

            {/* Division of Responsibilities */}
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Responsibilities of Governments and Schools (Concurrent List)
                </h3>
              </div>
              <p className="font-sans text-body-sm text-on-surface leading-relaxed">
                Education is included in the <strong>Concurrent List (Entry 25, List III)</strong> of the Seventh Schedule to the Constitution, allowing both Parliament and State Legislatures to legislate on the subject.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="font-mono text-xs font-bold text-primary uppercase block mb-1">Central Government (Section 7)</span>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Prepares estimates of capital and recurring expenditure, allocates grants-in-aid to States under Samagra Shiksha, prescribes national curriculum framework under Section 29, and establishes teacher eligibility norms through NCTE.
                  </p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="font-mono text-xs font-bold text-secondary uppercase block mb-1">State Governments (Sections 8 &amp; 38)</span>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Formulates State RTE Rules, establishes neighbourhood schools, ensures admission and attendance, determines per-child reimbursement equations, inspects schools, and provides teacher training infrastructure.
                  </p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="font-mono text-xs font-bold text-ochre uppercase block mb-1">Local Authorities (Sections 9 &amp; 32)</span>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Maintains records of all children residing in their jurisdiction through household surveys, ensures children from disadvantaged groups are not excluded, acts as first-line grievance redressal forum, and monitors school calendars.
                  </p>
                </div>
              </div>
            </div>

            {/* Disability Rights & Continuing Implementation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-serif text-headline-xs font-bold text-primary">
                    Education for Children with Disabilities
                  </h4>
                </div>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  The RTE framework must be read alongside the <strong>Rights of Persons with Disabilities Act, 2016</strong>. Section 31 of the RPwD Act provides that children with benchmark disabilities between the ages of <strong>six and eighteen</strong> have the right to free education in a neighbourhood school or special school of their choice. True educational inclusion requires barrier-free architectural accessibility, assistive devices, Braille/sign language materials, and reasonable accommodations.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-secondary" />
                  <h4 className="font-serif text-headline-xs font-bold text-primary">
                    Continuing Implementation Challenges &amp; Judicial Evolution
                  </h4>
                </div>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  A legal entitlement does not automatically guarantee universal practice on the ground. Continuing challenges include uneven teacher deployment, reimbursement disputes between states and private schools under Section 12(2), verification hurdles for disadvantaged families, and judicial re-examinations (such as the Supreme Court’s 2025–2026 review in <em>Anjuman Ishaat-e-Taleem Trust</em> regarding minority institutions and mandatory TET qualifications).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: KEY FEATURES (18 Domains from File 04) */}
        {/* ========================================================================= */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            {/* Search and Overview Banner */}
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-headline-md font-bold text-primary">
                  18 Key Statutory Features of the RTE Act
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  Detailed analysis of each substantive mandate from the official <em>KEY FEATURES of the RTE ACT</em> research document.
                </p>
              </div>
              <div className="w-full sm:w-80 relative">
                <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search among 18 features..."
                  value={featuresSearch}
                  onChange={(e) => setFeaturesSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-body-sm bg-surface-container-low border border-border-subtle rounded-[2px] focus:outline-none focus:border-primary text-on-surface"
                />
              </div>
            </div>

            {/* 18 Features List */}
            <div className="space-y-4">
              {filteredFeatures.map((feat) => {
                const isExpanded = expandedFeature === feat.number;
                return (
                  <div
                    key={feat.number}
                    className="bg-surface-container-lowest rounded-[4px] border border-border-subtle overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFeature(isExpanded ? null : feat.number)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="w-7 h-7 rounded-[2px] bg-primary/10 text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {String(feat.number).padStart(2, '0')}
                        </span>
                        <h4 className="font-serif text-headline-sm font-bold text-primary">
                          {feat.title}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-outline shrink-0 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="p-5 pt-2 border-t border-border-subtle space-y-3 bg-surface-container-lowest">
                        {feat.paragraphs.map((p, pIdx) => {
                          const isBullet = p.startsWith('- ') || p.startsWith('• ');
                          if (isBullet) {
                            return (
                              <div key={pIdx} className="flex items-start gap-2 pl-3">
                                <span className="text-secondary font-bold">•</span>
                                <p className="font-sans text-body-sm text-on-surface leading-relaxed">
                                  {p.replace(/^[-•]\s*/, '')}
                                </p>
                              </div>
                            );
                          }
                          return (
                            <p key={pIdx} className="font-sans text-body-md text-on-surface leading-relaxed">
                              {p}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: LEGAL CHRONOLOGY (1950–2026 from File 03) */}
        {/* ========================================================================= */}
        {activeTab === 'chronology' && (
          <div className="space-y-8">
            {/* Context Box */}
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Badge variant="primary">Legislative &amp; Judicial Evolution</Badge>
                <a
                  href="/documents/CHRONOLOGY_of_the_RTE_ACT.docx"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-xs font-semibold text-primary rounded-[2px] border border-border-subtle hover:bg-surface-container-high transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Official Chronology (.docx)</span>
                </a>
              </div>
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Chronology of the Right to Education Act in India
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                The development of the RTE Act reflects India's continuing journey to translate the constitutional promise of education into enforceable legal rights and practical state obligations. From the initial Directive Principle under Article 45 in 1950 to the latest Supreme Court rulings in 2026, trace every milestone below:
              </p>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-primary/30 pl-5 sm:pl-6 space-y-6 sm:space-y-8 ml-2 sm:ml-3">
              {chronologyMilestones.map((evt, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors" />
                  <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle shadow-2xs space-y-2">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="font-mono text-xs font-bold text-secondary">{evt.year}</span>
                      <Badge variant="primary">{evt.tag}</Badge>
                    </div>
                    <h4 className="font-serif text-headline-sm font-bold text-primary">
                      {evt.title}
                    </h4>
                    <span className="block text-xs font-medium text-outline">
                      Authority / Forum: {evt.authority}
                    </span>
                    <p className="font-sans text-body-sm text-on-surface leading-relaxed pt-1">
                      {evt.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================================= */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle mb-4">
              <h3 className="font-serif text-headline-md font-bold text-primary mb-1">
                Frequently Asked Statutory Questions
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant">
                Direct statutory answers citing specific Sections and judicial interpretations for parents, school administrators, and legal practitioners.
              </p>
            </div>

            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[4px] border border-border-subtle overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-headline-sm font-bold text-primary hover:bg-surface-container-low transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-outline shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-border-subtle font-sans text-body-md text-on-surface leading-relaxed bg-surface-container-lowest">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Citation Modal */}
        <CitationModal
          isOpen={isCitationOpen}
          onClose={() => setIsCitationOpen(false)}
          statuteTitle="The Right of Children to Free and Compulsory Education Act, 2009"
          actNo="Act No. 35 of 2009"
          year="2009"
        />
      </Container>
    </div>
  );
};

export default KnowYourRTEPage;
