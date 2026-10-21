import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Send,
  FileCheck2,
  ExternalLink,
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

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Public Participation & Citizen Redressal"
          category="Citizen Engagement &amp; Statutory Remediation"
          description="Direct citizen guidance channels, community discussions on right to education compliance, and legal escalation protocols for reporting violations to State Commissions for Protection of Child Rights (SCPCRs) and NCPCR."
        />

        {/* Navigation Tabs */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none">
          <Link
            to="/ask-a-question"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'ask'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Ask a Question
          </Link>
          <Link
            to="/forum"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'forum'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Start a Discussion
          </Link>
          <Link
            to="/report-a-grievance"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'grievance'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Report a Grievance (Sec 31/32)
          </Link>
        </div>

        {/* TAB 1: ASK A QUESTION */}
        {activeTab === 'ask' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-6">
              <div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-2">
                  Submit a Query to the RTE Resource Desk
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Have a question regarding Section 12(1)(c) admission criteria, neighbourhood eligibility distances, fee concessions, or teacher norms? Our research team reviews legal queries and provides reference citations.
                </p>
              </div>

              {questionSubmitted ? (
                <div className="p-6 bg-surface-container-low rounded-[4px] border border-secondary text-center space-y-3">
                  <FileCheck2 className="w-10 h-10 text-secondary mx-auto" />
                  <h4 className="font-serif text-headline-sm font-bold text-primary">Query Submitted Successfully</h4>
                  <p className="text-body-sm text-on-surface-variant max-w-md mx-auto">
                    Your query has been logged. Our civil society research volunteers verify citations against relevant State RTE Rules and respond within 3 to 5 working days.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setQuestionSubmitted(false)}>
                    Submit Another Query
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setQuestionSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm focus:outline-none focus:border-primary"
                        placeholder="e.g. Ramesh Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm focus:outline-none focus:border-primary"
                        placeholder="e.g. ramesh@example.org"
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
                        className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm focus:outline-none focus:border-primary"
                        placeholder="e.g. Maharashtra"
                      />
                    </div>
                    <div>
                      <label className="block text-label-sm font-semibold text-primary mb-1">
                        Query Category <span className="text-red-600">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm focus:outline-none focus:border-primary"
                      >
                        <option value="">Select Category...</option>
                        <option value="sec12">Section 12(1)(c) Admissions</option>
                        <option value="fees">School Fees &amp; Reimbursement</option>
                        <option value="smc">School Management Committees</option>
                        <option value="teachers">Teacher PTR / Qualifications</option>
                        <option value="general">General Statutory Provision</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-label-sm font-semibold text-primary mb-1">
                      Your Question / Statutory Context <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm focus:outline-none focus:border-primary"
                      placeholder="Please provide details of the school, district, and exact RTE query..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" type="submit" leftIcon={<Send className="w-4 h-4" />}>
                      Submit Query
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar FAQ Guidance */}
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <h4 className="font-serif text-headline-xs font-bold text-primary">
                  Common Query Themes
                </h4>
                <ul className="text-body-sm text-on-surface-variant space-y-2 font-sans">
                  <li>
                    <Link to="/know-your-rte/faq" className="text-primary hover:underline font-medium">
                      → What documents prove EWS eligibility?
                    </Link>
                  </li>
                  <li>
                    <Link to="/know-your-rte/faq" className="text-primary hover:underline font-medium">
                      → Can schools charge books/uniform fees under 12(1)(c)?
                    </Link>
                  </li>
                  <li>
                    <Link to="/know-your-rte/faq" className="text-primary hover:underline font-medium">
                      → What is the distance criterion for neighbourhood schools?
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-container-low p-6 rounded-[4px] border border-border-subtle space-y-2">
                <h4 className="font-serif text-headline-xs font-bold text-primary">
                  Need Immediate Legal Redressal?
                </h4>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  For formal violations, please use the statutory grievance procedure to notify the competent SCPCR or District Education Officer.
                </p>
                <Link to="/report-a-grievance">
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    Go to Grievance Guide →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FORUM */}
        {activeTab === 'forum' && (
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle space-y-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
                  Public Discussion Forums
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant">
                  Participatory civic discussions on right-to-education implementation, school governance, and educational equity.
                </p>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => alert('New discussion thread dialog')}
              >
                Start New Topic
              </Button>
            </div>

            <div className="divide-y divide-border-subtle">
              <div className="py-4 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">Implementation</Badge>
                  <span className="text-xs text-outline font-medium">Maharashtra · 14 replies</span>
                </div>
                <h4 className="font-serif text-headline-xs font-bold text-primary hover:underline cursor-pointer">
                  Delays in Section 12(1)(c) lottery rounds for AY 2025-26 in Pune &amp; Thane
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  Parents reporting delays in district lottery rounds following recent High Court proceedings. Discussing verification of income certificates.
                </p>
              </div>

              <div className="py-4 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">SMCs</Badge>
                  <span className="text-xs text-outline font-medium">Karnataka · 8 replies</span>
                </div>
                <h4 className="font-serif text-headline-xs font-bold text-primary hover:underline cursor-pointer">
                  Best practices for parent engagement in rural government school SMCs
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  Civil society volunteers sharing experience on holding monthly SMC meetings and conducting community social audits of school midday meals.
                </p>
              </div>

              <div className="py-4 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="neutral">Legal Clarification</Badge>
                  <span className="text-xs text-outline font-medium">Pan-India · 21 replies</span>
                </div>
                <h4 className="font-serif text-headline-xs font-bold text-primary hover:underline cursor-pointer">
                  Impact of 2019 Section 16 Amendment on Class 5 examination guidelines
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  Comparing how different state governments have notified the remedial teaching and re-examination provisions under the amended Section 16.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REPORT A GRIEVANCE */}
        {activeTab === 'grievance' && (
          <div className="space-y-6">
            <Alert variant="statutory" badgeText="Section 31 & 32 Statutory Escalation">
              Under Sections 31 and 32 of the RTE Act, 2009, local authorities are legally mandated to decide representations regarding right-to-education violations within <strong>three months</strong>. If unaddressed, appeals lie to the State Commission for Protection of Child Rights (SCPCR).
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-4">
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Step 1: Local Authority Representation
                </h3>
                <p className="text-body-sm text-on-surface leading-relaxed">
                  Submit a signed written complaint to the local Block Education Officer (BEO) or District Education Officer (DEO). Ensure you receive an official stamped acknowledgement (dairy number).
                </p>
                <div className="bg-surface-container-low p-4 rounded text-xs space-y-2">
                  <strong className="text-primary block font-sans uppercase">Essential Details to Include:</strong>
                  <ul className="list-disc list-inside space-y-1 text-on-surface">
                    <li>Full name of the child and date of birth</li>
                    <li>Name and address of the school</li>
                    <li>Specific violation (e.g., screening test, denial of 12(1)(c) admission, demand for capitation fee, or lack of infrastructure)</li>
                    <li>Date of occurrence and copy of acknowledgement receipt</li>
                  </ul>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-4">
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Step 2: Statutory Escalation to SCPCR &amp; NCPCR
                </h3>
                <p className="text-body-sm text-on-surface leading-relaxed">
                  If the local authority fails to redress the grievance within 3 months, or if the child faces imminent expulsion or severe harassment:
                </p>
                <div className="space-y-3 text-body-sm">
                  <div className="p-3 bg-surface-container-low rounded">
                    <span className="font-bold text-primary block">National Commission (NCPCR) Portal</span>
                    <span className="text-xs text-on-surface-variant block mt-0.5">
                      Submit digital complaints through the online <strong>e-Baalnidan</strong> tracking system:
                    </span>
                    <a
                      href="https://baalnidan.ncpcr.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-secondary font-bold mt-1 hover:underline"
                    >
                      <span>Visit e-Baalnidan Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-3 bg-surface-container-low rounded">
                    <span className="font-bold text-primary block">State Commission for Protection of Child Rights (SCPCR)</span>
                    <span className="text-xs text-on-surface-variant block mt-0.5">
                      Find your State's specific SCPCR contact address and telephone helpline in the{' '}
                      <Link to="/resources/states" className="text-primary font-semibold underline">
                        State &amp; UT Directory
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
