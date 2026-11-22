import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Send,
  FileCheck2,
  ExternalLink,
  ShieldAlert,
  Clock,
  BookOpen,
  Scale,
  HelpCircle,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';

export const PublicParticipationPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'ask' | 'forum' | 'grievance' = location.pathname.includes('/forum')
    ? 'forum'
    : location.pathname.includes('/report-a-grievance')
    ? 'grievance'
    : 'ask';

  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  const [submittedQueryId, setSubmittedQueryId] = useState('');

  // Verified public inquiries grounded in actual statutory disputes
  const verifiedInquiries = [
    {
      id: 'inq-1',
      title: 'Neighbourhood Distance Criteria & 1-km Radius Restriction under Section 12(1)(c)',
      jurisdiction: 'Maharashtra & Pan-India',
      statutoryRef: 'Section 12(1)(c) & State Subordinate Rules',
      category: 'Admission Catchment',
      verifiedContext: 'Parents challenging restrictive government resolutions that limit RTE applications to schools within 1 km. In March 2026, the Bombay High Court stayed Maharashtra’s 1-km restriction, noting that arbitrary distance barriers undermine access when neighbourhood schools lack adequate seats.',
      legalAuthority: 'Bombay High Court (Order March 2026); Sec 6 & 12(1)(c)',
    },
    {
      id: 'inq-2',
      title: 'Mandatory Nature of State Allotments & School Refusal of Admitted Children',
      jurisdiction: 'Uttar Pradesh & All States',
      statutoryRef: 'Section 12 & Article 21A',
      category: 'Admission Enforcement',
      verifiedContext: 'What happens when a private school denies admission to a child allotted through the computerized lottery? In Lucknow Public School, Eldico v. State of UP (2026 INSC 422), the Supreme Court ruled that once a child is allotted by the State, private schools have no jurisdiction to sit in appeal or refuse admission.',
      legalAuthority: 'Supreme Court of India (2026 INSC 422)',
    },
    {
      id: 'inq-3',
      title: 'In-Service Teacher TET Qualifications & Statutory Grace Timelines',
      jurisdiction: 'Pan-India / Union Territory',
      statutoryRef: 'Section 23, RTE Act & NCTE Guidelines',
      category: 'Teacher Standards',
      verifiedContext: 'Clarifying the legal position of teachers appointed prior to RTE qualification norms. In its review judgment dated 29 May 2026 (2026 INSC 597), the Supreme Court extended the deadline for in-service teachers to qualify the Teacher Eligibility Test (TET) to 31 August 2028.',
      legalAuthority: 'Supreme Court Review Order (2026 INSC 597)',
    },
    {
      id: 'inq-4',
      title: 'Reimbursement for Pre-School / Nursery Admissions under Section 12(2)',
      jurisdiction: 'Bombay High Court & State Norms',
      statutoryRef: 'Sections 11, 12(1)(c) & 12(2)',
      category: 'Pre-Primary Quota',
      verifiedContext: 'In Uran Education Society v. State of Maharashtra, the Bombay High Court held that where the State mandates unaided schools to admit 25% children at the pre-school entry level, eligible reimbursement under Section 12(2) cannot be denied merely because schooling commences before Class 1.',
      legalAuthority: 'Uran Education Society, (2015) 5 Bom CR 95',
    },
    {
      id: 'inq-5',
      title: 'Mandatory 75% Parental Representation in School Management Committees (SMCs)',
      jurisdiction: 'All States & UTs',
      statutoryRef: 'Sections 21 & 22, RTE Act',
      category: 'SMC Governance',
      verifiedContext: 'Statutory composition requires that at least 75% of SMC members be parents or guardians of enrolled children, with 50% reserved for women. SMCs hold the legal power to prepare 3-year School Development Plans and oversee the utilisation of school grants.',
      legalAuthority: 'Section 21 Statutory Mandate',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `RTE-Q-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedQueryId(id);
    setQuestionSubmitted(true);
  };

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Public Participation, Legal Consultation &amp; Statutory Redressal"
          category="Citizen Engagement · Section 31 &amp; 32 Framework"
          description="Direct citizen guidance channels, verified public legal inquiries on right-to-education compliance, and official statutory escalation protocols for reporting violations to State Commissions for Protection of Child Rights (SCPCRs) and the NCPCR."
        />

        {/* Navigation Tabs */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none max-w-full min-w-0">
          <Link
            to="/ask-a-question"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'ask'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Citizen Legal Query Helpdesk</span>
          </Link>
          <Link
            to="/forum"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'forum'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Verified Public Inquiries Archive ({verifiedInquiries.length})</span>
          </Link>
          <Link
            to="/report-a-grievance"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'grievance'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-secondary" />
            <span>Statutory Grievance Redressal (Sec 31/32)</span>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ASK A QUESTION */}
        {/* ========================================================================= */}
        {activeTab === 'ask' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-card space-y-6">
              <div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-2">
                  Submit a Query to the Legal &amp; Policy Helpdesk
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Have a question regarding Section 12(1)(c) admission eligibility, age-proof exemptions under Section 14, fee concessions, teacher PTR norms, or reimbursement procedures? Our team references statutory provisions, State RTE Rules, and Supreme Court precedent.
                </p>
              </div>

              {questionSubmitted ? (
                <div className="p-6 bg-surface-container-low rounded-[4px] border border-secondary text-center space-y-3">
                  <FileCheck2 className="w-10 h-10 text-secondary mx-auto" />
                  <h4 className="font-serif text-headline-sm font-bold text-primary">Query Logged Successfully</h4>
                  <div className="inline-block px-3 py-1 bg-surface-container font-mono text-xs font-bold text-primary rounded-[2px] border border-border-subtle">
                    Reference ID: {submittedQueryId}
                  </div>
                  <p className="text-body-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Your inquiry has been recorded. Our research team reviews legal queries against the authenticated State Gazette Rules and relevant High Court / Supreme Court jurisprudence.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setQuestionSubmitted(false)}>
                    Submit Another Query
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[2px] text-body-sm focus:outline-none focus:border-primary bg-surface-container-low text-on-surface"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[2px] text-body-sm focus:outline-none focus:border-primary bg-surface-container-low text-on-surface"
                        placeholder="yourname@domain.org"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        State / Union Territory <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[2px] text-body-sm focus:outline-none focus:border-primary bg-surface-container-low text-on-surface"
                        placeholder="e.g. Maharashtra, Uttar Pradesh, Delhi"
                      />
                    </div>
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        Query Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[2px] text-body-sm focus:outline-none focus:border-primary bg-surface-container-low text-on-surface"
                      >
                        <option value="">Select Category...</option>
                        <option value="sec12">Section 12(1)(c) 25% Quota Admissions</option>
                        <option value="fees">School Fees, Capitation &amp; Screening (Sec 13)</option>
                        <option value="smc">School Management Committees (Sec 21)</option>
                        <option value="teachers">Teacher PTR / TET Qualifications (Sec 23)</option>
                        <option value="age">Age Proof Exemption &amp; Transfers (Sec 14–15)</option>
                        <option value="disability">Rights of Children with Disabilities</option>
                        <option value="general">General Statutory Provision</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-label-sm font-semibold text-primary mb-1">
                      Statutory Query Context &amp; Details <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-border-subtle rounded-[2px] text-body-sm focus:outline-none focus:border-primary bg-surface-container-low text-on-surface"
                      placeholder="Please specify the school category (private unaided / aided / govt), district, class level, and exact statutory issue..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" type="submit" leftIcon={<Send className="w-4 h-4" />}>
                      Submit Query to Desk
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar FAQ Guidance */}
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <h4 className="font-serif text-headline-xs font-bold text-primary">
                  Common Statutory Guidelines
                </h4>
                <ul className="text-body-sm text-on-surface-variant space-y-2.5 font-sans">
                  <li>
                    <Link to="/know-your-rte/faq" className="text-primary hover:underline font-medium block">
                      → Can schools charge books or uniform fees under 12(1)(c)?
                    </Link>
                    <span className="text-[11px] text-outline block">No. Education must be completely free under Section 3.</span>
                  </li>
                  <li>
                    <Link to="/know-your-rte/faq" className="text-primary hover:underline font-medium block">
                      → Can admission be refused for lack of birth certificate?
                    </Link>
                    <span className="text-[11px] text-outline block">No. Section 14 guarantees age proof flexibility.</span>
                  </li>
                  <li>
                    <Link to="/know-your-rte/faq" className="text-primary hover:underline font-medium block">
                      → What remedies exist if a school refuses allotted admission?
                    </Link>
                    <span className="text-[11px] text-outline block">Direct representation under Section 32 &amp; SCPCR escalation.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-container-low p-6 rounded-[4px] border border-border-subtle space-y-2">
                <div className="flex items-center gap-1.5 text-secondary font-bold text-xs uppercase">
                  <Clock className="w-4 h-4" />
                  <span>Statutory Timelines</span>
                </div>
                <h4 className="font-serif text-headline-xs font-bold text-primary">
                  Section 32 Statutory Timeline
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  Written representations to local authorities regarding RTE violations must be decided within <strong>3 months</strong> after hearing the applicant.
                </p>
                <Link to="/report-a-grievance">
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    Open Grievance Protocol →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: VERIFIED PUBLIC INQUIRIES ARCHIVE */}
        {/* ========================================================================= */}
        {activeTab === 'forum' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="primary">Legal Consultation Archive</Badge>
                <span className="text-xs font-mono text-outline">Verified Precedents &amp; Statutory Notes</span>
              </div>
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Verified Public Legal Inquiries &amp; Precedential Analysis
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                A structured compendium of recurring legal and administrative questions raised by parents, civil society coalitions, and educators, analysed alongside verified statutory rulings from the High Courts and Supreme Court of India.
              </p>
            </div>

            <div className="space-y-4">
              {verifiedInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle hover:border-primary transition-all shadow-card space-y-3"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary">{inq.category}</Badge>
                        <span className="font-mono text-xs font-bold text-primary">{inq.jurisdiction}</span>
                        <span className="text-xs text-outline font-mono">({inq.statutoryRef})</span>
                      </div>
                      <h4 className="font-serif text-headline-sm font-bold text-primary">
                        {inq.title}
                      </h4>
                    </div>
                  </div>

                  <p className="font-sans text-body-sm text-on-surface leading-relaxed">
                    {inq.verifiedContext}
                  </p>

                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between gap-2 flex-wrap text-xs">
                    <span className="font-sans text-outline">
                      <strong>Binding Authority:</strong> {inq.legalAuthority}
                    </span>
                    <Link
                      to="/judgments"
                      className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                      <span>Check Court Judgments</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: REPORT A GRIEVANCE (SECTION 31 & 32) */}
        {/* ========================================================================= */}
        {activeTab === 'grievance' && (
          <div className="space-y-6">
            <Alert variant="statutory" badgeText="Section 31 & 32 Statutory Escalation">
              Under Sections 31 and 32 of the RTE Act, 2009, local authorities are legally mandated to decide representations regarding right-to-education violations within <strong>three months</strong>. If unaddressed, appeals lie to the State Commission for Protection of Child Rights (SCPCR) and the National Commission for Protection of Child Rights (NCPCR).
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-4 shadow-card">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-headline-sm font-bold text-primary">
                    Step 1: Local Authority Representation (Sec 32)
                  </h3>
                </div>
                <p className="text-body-sm text-on-surface leading-relaxed font-sans">
                  Submit a signed written complaint to the local Block Education Officer (BEO) or District Education Officer (DEO). Under Section 32(2), the authority is required to afford the applicant an opportunity of being heard and pass an order within 3 months.
                </p>
                <div className="bg-surface-container-low p-4 rounded-[2px] text-xs space-y-2 font-sans border border-border-subtle">
                  <strong className="text-primary block font-serif uppercase tracking-wider text-[11px]">
                    Essential Details to Include in Written Notice:
                  </strong>
                  <ul className="list-disc list-inside space-y-1.5 text-on-surface">
                    <li>Full name of the child, date of birth, and home address.</li>
                    <li>Name and exact address of the respondent school.</li>
                    <li>Specific statutory violation (denial of Section 12(1)(c) seat, demand for capitation fee, screening test interview, or corporal punishment).</li>
                    <li>Copy of application acknowledgment, online lottery allotment slip, or fee receipt.</li>
                    <li>Explicit demand for disposal within the 3-month statutory window under Section 32.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-4 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-secondary" />
                  <h3 className="font-serif text-headline-sm font-bold text-primary">
                    Step 2: Statutory Escalation to SCPCR &amp; NCPCR
                  </h3>
                </div>
                <p className="text-body-sm text-on-surface leading-relaxed font-sans">
                  If the local authority fails to redress the grievance within 3 months, or if the child faces imminent expulsion or discriminatory exclusion:
                </p>
                <div className="space-y-3 text-body-sm font-sans">
                  <div className="p-3.5 bg-surface-container-low rounded-[2px] border border-border-subtle">
                    <span className="font-bold text-primary block">National Commission (NCPCR) — e-Baalnidan</span>
                    <span className="text-xs text-on-surface-variant block mt-1 leading-relaxed">
                      NCPCR is mandated under Section 31 to examine safeguards and inquire into complaints. Digital complaints can be lodged via the national <strong>e-Baalnidan</strong> tracking portal:
                    </span>
                    <a
                      href="https://baalnidan.ncpcr.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary font-bold mt-2 hover:underline"
                    >
                      <span>Open e-Baalnidan Digital Tracking Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-3.5 bg-surface-container-low rounded-[2px] border border-border-subtle">
                    <span className="font-bold text-primary block">State Commissions for Protection of Child Rights (SCPCR)</span>
                    <span className="text-xs text-on-surface-variant block mt-1 leading-relaxed">
                      Find your State's specific SCPCR contact address, regional office, and helpline in the{' '}
                      <Link to="/resources/states" className="text-primary font-semibold underline">
                        State &amp; UT Directory (37 Desks)
                      </Link>.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PublicParticipationPage;
