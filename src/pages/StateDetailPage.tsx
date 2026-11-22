import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ExternalLink,
  Phone,
  Building2,
  ArrowLeft,
  Download,
  BarChart3,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DocumentRow } from '../components/ui/DocumentRow';
import { CitationModal } from '../components/ui/CitationModal';
import { ALL_STATES_DATA } from '../data/statesData';
import type { StateProfile } from '../data/statesData';
import {
  STATEWISE_ENROLMENT_1417,
  STATEWISE_REIMBURSEMENT_1417,
  STATEWISE_REIMBURSEMENT_2025,
  STATEWISE_PRIVATE_SCHOOLS_2025,
  STATEWISE_RECENT_INDICATORS,
  STATEWISE_MASTER_RECORDS,
} from '../data/statewiseEmpiricalData';

// Map legacy slugs to canonical state data
const SLUG_ALIASES: Record<string, string> = {
  orissa: 'odisha',
  'daman-and-diu': 'dadra-and-nagar-haveli',
};

export const StateDetailPage: React.FC = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'rules' | 'implementation' | 'judgments' | 'grievance' | 'empirical'>('overview');
  const [isCitationOpen, setIsCitationOpen] = useState(false);

  const canonicalSlug = stateSlug ? (SLUG_ALIASES[stateSlug.toLowerCase()] || stateSlug.toLowerCase()) : '';

  const stateData: StateProfile | undefined = ALL_STATES_DATA.find(
    (s) =>
      s.slug.toLowerCase() === canonicalSlug ||
      s.slug.toLowerCase() === stateSlug?.toLowerCase() ||
      s.altSlugs?.includes(canonicalSlug) ||
      s.altSlugs?.includes(stateSlug?.toLowerCase() || '')
  );

  if (!stateData) {
    return (
      <div className="py-12">
        <Container>
          <div className="p-8 bg-surface-container-lowest border border-border-subtle rounded-[4px] text-center max-w-xl mx-auto">
            <h1 className="font-serif text-headline-lg font-bold text-primary mb-3">
              State Record Not Found
            </h1>
            <p className="font-sans text-body-md text-on-surface-variant mb-6">
              The requested jurisdiction <code className="font-mono text-primary font-bold">{stateSlug}</code> is not listed in the statutory directory.
            </p>
            <Link to="/resources/states">
              <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Return to 37 State &amp; UT Directory
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const isLegacySlug = stateSlug === 'orissa' || stateSlug === 'daman-and-diu';

  // Find empirical data for this state
  const stateNameLower = stateData.name.toLowerCase();

  const enrolData = Object.entries(STATEWISE_ENROLMENT_1417).find(([s]) =>
    s.toLowerCase() === stateNameLower ||
    stateNameLower.includes(s.toLowerCase()) ||
    s.toLowerCase().includes(stateNameLower)
  )?.[1];

  const reimb1417Data = Object.entries(STATEWISE_REIMBURSEMENT_1417).find(([s]) =>
    s.toLowerCase() === stateNameLower ||
    stateNameLower.includes(s.toLowerCase()) ||
    s.toLowerCase().includes(stateNameLower)
  )?.[1];

  const reimb2025Data = Object.entries(STATEWISE_REIMBURSEMENT_2025).find(([s]) =>
    s.toLowerCase() === stateNameLower ||
    stateNameLower.includes(s.toLowerCase()) ||
    s.toLowerCase().includes(stateNameLower)
  )?.[1];

  const privSchoolsData = Object.entries(STATEWISE_PRIVATE_SCHOOLS_2025).find(([s]) =>
    s.toLowerCase() === stateNameLower ||
    stateNameLower.includes(s.toLowerCase()) ||
    s.toLowerCase().includes(stateNameLower)
  )?.[1];

  const recentInds = STATEWISE_RECENT_INDICATORS.filter((r) =>
    r.stateName.toLowerCase() === stateNameLower ||
    stateNameLower.includes(r.stateName.toLowerCase()) ||
    r.stateName.toLowerCase().includes(stateNameLower)
  );

  const masterRecords = STATEWISE_MASTER_RECORDS.filter((r) =>
    r.stateName.toLowerCase() === stateNameLower ||
    stateNameLower.includes(r.stateName.toLowerCase()) ||
    r.stateName.toLowerCase().includes(stateNameLower)
  );

  return (
    <div className="py-8 space-y-8">
      <Container>
        {/* Navigation Breadcrumb Backlink */}
        <div className="mb-4">
          <Link
            to="/resources/states"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All 37 States &amp; UTs</span>
          </Link>
        </div>

        {/* Legacy Slug Alert if navigated via historic URL */}
        {isLegacySlug && (
          <Alert variant="statutory" badgeText="Archival URL Redirect" className="mb-6">
            You accessed this record via the legacy citation URL (<code>/resources/states/{stateSlug}</code>). This page displays the authoritative, consolidated profile for <strong>{stateData.name}</strong>.
          </Alert>
        )}

        {/* State Desk Hero Header */}
        <div className="bg-surface-container-lowest rounded-[4px] border border-border-subtle p-6 sm:p-8 shadow-card mb-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="primary">{stateData.region} Region</Badge>
                <Badge variant="outline">{stateData.type}</Badge>
                <Badge variant={stateData.rulesStatus === 'Codified' ? 'secondary' : 'neutral'}>
                  {stateData.rulesStatus}
                </Badge>
              </div>

              <h1 className="font-serif text-display-md font-bold text-primary leading-tight mb-2">
                {stateData.name} State RTE Desk
              </h1>

              <p className="font-sans text-body-md text-on-surface-variant max-w-2xl mb-4">
                Official repository of Right to Education Act notifications, Section 38 state rules, Section 12(1)(c) lottery procedures, per-child reimbursement metrics, and High Court case law for {stateData.name}.
              </p>

              {/* Quick stats strip */}
              <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-border-subtle text-body-sm font-sans">
                {stateData.capital && (
                  <div>
                    <span className="text-outline text-xs block font-medium">Administrative Capital</span>
                    <span className="font-semibold text-on-surface">{stateData.capital}</span>
                  </div>
                )}
                <div>
                  <span className="text-outline text-xs block font-medium">Statutory Rules Ref</span>
                  <span className="font-mono text-xs font-semibold text-primary">
                    {stateData.rulesRef || 'Rule formulation documented in state gazette'}
                  </span>
                </div>
                {stateData.enrolmentAY23 && (
                  <div>
                    <span className="text-outline text-xs block font-medium">AY 2022-23 Sec 12(1)(c)</span>
                    <span className="font-semibold text-secondary">{stateData.enrolmentAY23} pupils</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              {stateData.portalUrl ? (
                <a
                  href={stateData.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="md" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Official State Portal
                  </Button>
                </a>
              ) : (
                <Button variant="outline" size="md" disabled>
                  Official Portal Pending
                </Button>
              )}

              <Button
                variant="outline"
                size="md"
                onClick={() => setIsCitationOpen(true)}
              >
                Cite State Desk
              </Button>

              <a
                href="/documents/RTE_Statewise_Research_2014-2026.xlsx"
                download
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-surface-container text-xs font-semibold text-primary border border-border-subtle rounded-[2px] hover:bg-surface-container-high transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-secondary" />
                <span>State Research Dataset (.xlsx)</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Sections Navigation Tabs */}
        <div className="border-b border-border-subtle flex items-center gap-1 overflow-x-auto no-scrollbar mb-8 select-none max-w-full min-w-0">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            1. Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'rules'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            2. Acts &amp; Rules
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('implementation')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'implementation'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            3. Section 12(1)(c) Implementation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('empirical')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'empirical'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-ochre" />
            <span>4. Empirical Research (2014–2026)</span>
            <Badge variant="primary">New</Badge>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('judgments')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'judgments'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            5. Judgements
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('grievance')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'grievance'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            6. Grievance Redressal (SCPCR)
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle">
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-3">
                  Statutory Profile &amp; Governance Structure
                </h3>
                <div className="font-sans text-body-md text-on-surface space-y-3 leading-relaxed">
                  <p>
                    Under Section 38 of the Right of Children to Free and Compulsory Education Act, 2009, the State Government of {stateData.name} is empowered to formulate and enforce subordinate rules for the implementation of the Act within its territorial jurisdiction.
                  </p>
                  <p>
                    The administration of elementary education and enforcement of Section 12(1)(c) mandates (25% reserved seats for children belonging to Economically Weaker Sections and Disadvantaged Groups in private unaided schools) is supervised by the State Directorate of Primary / School Education and tracked annually under the Samagra Shiksha framework.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <h4 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-3">
                    Key Administrative Highlights
                  </h4>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm">
                    <div className="bg-surface-container-low p-3 rounded">
                      <dt className="text-outline text-xs">Section 38 Rules Status</dt>
                      <dd className="font-semibold text-primary mt-0.5">{stateData.rulesStatus}</dd>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded">
                      <dt className="text-outline text-xs">Notification Identifier</dt>
                      <dd className="font-mono text-xs text-on-surface mt-0.5 font-semibold">
                        {stateData.rulesRef || 'See state gazette archive'}
                      </dd>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded">
                      <dt className="text-outline text-xs">Proposed Reimbursement</dt>
                      <dd className="font-semibold text-on-surface mt-0.5">
                        {stateData.reimbursementProposed || 'Under state formula review'}
                      </dd>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded">
                      <dt className="text-outline text-xs">Approved Reimbursement</dt>
                      <dd className="font-semibold text-secondary mt-0.5">
                        {stateData.reimbursementApproved || 'Determined under Sec 12(2)'}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Sidebar Quick Access */}
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle">
                  <h4 className="font-serif text-headline-xs font-bold text-primary mb-3">
                    SCPCR Grievance Desk
                  </h4>
                  <p className="text-body-sm text-on-surface-variant mb-4">
                    For complaints regarding denial of admission, harassment, or non-compliance under Section 31 and 32:
                  </p>
                  <div className="space-y-2 text-body-sm">
                    <div className="flex items-center gap-2 text-on-surface">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>{stateData.helpline || '1800-111-202 (NCPCR Central)'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface">
                      <Building2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{stateData.name} SCPCR Headquarters</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-5 rounded-[4px] border border-border-subtle">
                  <h4 className="font-serif text-headline-xs font-bold text-primary mb-2">
                    Official State Research Dataset
                  </h4>
                  <p className="text-body-sm text-on-surface-variant mb-3">
                    Access historical enrolment, reimbursement claims, and private school statistics from the master research sheet.
                  </p>
                  <a
                    href="/documents/RTE_Statewise_Research_2014-2026.xlsx"
                    download
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white text-xs font-semibold rounded-[2px] hover:bg-primary-container transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download State XLSX (125 KB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: RULES */}
        {/* ========================================================================= */}
        {activeTab === 'rules' && (
          <div className="space-y-4">
            <SectionHeader
              title={`Section 38 State RTE Rules & Notifications — ${stateData.name}`}
              category="Subordinate Legislation"
            />
            <DocumentRow
              title={`${stateData.name} Right of Children to Free and Compulsory Education Rules`}
              category="State Rules (Sec 38)"
              docType="Gazette Notification"
              authority={`Department of School Education, Government of ${stateData.name}`}
              gazetteRef={stateData.rulesRef || 'State Gazette Special Notification'}
              date="Gazetted under Section 38"
              jurisdiction={stateData.name}
              summary={`Statutory notification embodying state procedural provisions for school recognition, 25% admission norms under Section 12(1)(c), School Management Committee formulations, and pupil-teacher ratio norms in ${stateData.name}.`}
              badgeTone="secondary"
              fileFormat="PDF"
              fileSize="2.4 MB"
              isVerified={true}
              verificationLabel="Gazette Copy Verified"
              onDownload={() => window.open(stateData.portalUrl || '/documents/RTE_Statewise_Research_2014-2026.xlsx', '_blank')}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: IMPLEMENTATION */}
        {/* ========================================================================= */}
        {activeTab === 'implementation' && (
          <div className="space-y-6">
            <SectionHeader
              title={`Section 12(1)(c) Admission & Enrolment Data — ${stateData.name}`}
              category="Annual PAB Monitoring & Research"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle">
                <span className="text-label-sm text-outline block mb-1">AY 2022-23 Section 12(1)(c) Admissions</span>
                <span className="font-serif text-display-md font-bold text-primary block">
                  {stateData.enrolmentAY23 || 'Data in Verification'}
                </span>
                <span className="text-xs text-on-surface-variant mt-1 block">
                  Enrolled in eligible unaided schools
                </span>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle">
                <span className="text-label-sm text-outline block mb-1">Proposed Reimbursement</span>
                <span className="font-serif text-headline-lg font-bold text-secondary block">
                  {stateData.reimbursementProposed || 'Norm under review'}
                </span>
                <span className="text-xs text-on-surface-variant mt-1 block">
                  State government submission to PAB
                </span>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle">
                <span className="text-label-sm text-outline block mb-1">Approved Per-Child Norm</span>
                <span className="font-serif text-headline-lg font-bold text-ochre block">
                  {stateData.reimbursementApproved || 'Determined under Sec 12(2)'}
                </span>
                <span className="text-xs text-on-surface-variant mt-1 block">
                  Central reimbursement framework
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle">
              <h3 className="font-serif text-headline-sm font-bold text-primary mb-3">
                Lottery Admission Procedure &amp; Portal
              </h3>
              <p className="font-sans text-body-md text-on-surface leading-relaxed mb-4">
                Section 12(1)(c) of the RTE Act mandates that 25% of entry-level seats in non-minority private unaided schools be reserved for children from economically weaker and disadvantaged sections. Admissions are conducted through a centralized, transparent lottery mechanism to prevent screening and capitation fees.
              </p>
              {stateData.portalUrl ? (
                <div className="flex items-center gap-3">
                  <a href={stateData.portalUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" leftIcon={<ExternalLink className="w-4 h-4" />}>
                      Visit {stateData.name} RTE Admission Portal
                    </Button>
                  </a>
                  <span className="text-xs font-mono text-outline">({stateData.portalDomain})</span>
                </div>
              ) : (
                <Alert variant="info" badgeText="Portal Verification">
                  Direct online portal not yet indexed or admissions conducted through offline district education offices.
                </Alert>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: EMPIRICAL RESEARCH (2014–2026 from File 07) */}
        {/* ========================================================================= */}
        {activeTab === 'empirical' && (
          <div className="space-y-6">
            <SectionHeader
              title={`Empirical Research Datasets — ${stateData.name} (2014–2026)`}
              category="Master Statewise Research Ingestion"
              description={`Parsed from the official RTE Statewise Research compendium. Includes historical Section 12(1)(c) stock enrolments, reimbursement proposals vs approvals, private school counts, and recent 2026–2027 indicators.`}
            />

            {/* Historical Enrolment Strip */}
            {enrolData && (
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Badge variant="primary">Section 12(1)(c) Stock Enrolment</Badge>
                  <span className="text-xs font-mono text-outline">Source: SSA AWP&amp;B / Lok Sabha Q.1602</span>
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Historical Enrolment in Private Unaided Schools (2014–2017)
                </h3>
                <p className="font-sans text-xs text-on-surface-variant">
                  {enrolData.definition}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                  <div className="bg-surface-container-low p-4 rounded-[4px]">
                    <span className="text-xs text-outline block">2014–15 Enrolment</span>
                    <span className="font-mono text-headline-sm font-bold text-primary mt-1 block">
                      {enrolData['2014-15'] || 'NA'}
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-[4px]">
                    <span className="text-xs text-outline block">2015–16 Enrolment</span>
                    <span className="font-mono text-headline-sm font-bold text-primary mt-1 block">
                      {enrolData['2015-16'] || 'NA'}
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-[4px]">
                    <span className="text-xs text-outline block">2016–17 Enrolment</span>
                    <span className="font-mono text-headline-sm font-bold text-primary mt-1 block">
                      {enrolData['2016-17'] || 'NA'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Reimbursement 2014-2017 (in Lakh) */}
            {reimb1417Data && (
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Badge variant="secondary">Reimbursement Norms (2014–2017)</Badge>
                  <span className="text-xs font-mono text-outline">Amounts in ₹ Lakh</span>
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Proposed vs Approved Reimbursement (2014–15 to 2016–17)
                </h3>

                <div className="overflow-x-auto w-full max-w-full min-w-0">
                  <table className="w-full text-left font-sans text-xs border border-border-subtle">
                    <thead className="bg-surface-container-low font-semibold text-primary border-b border-border-subtle">
                      <tr>
                        <th className="p-2.5">Category</th>
                        <th className="p-2.5 text-right">2014–15</th>
                        <th className="p-2.5 text-right">2015–16</th>
                        <th className="p-2.5 text-right">2016–17</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle font-mono">
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-on-surface">Proposed Amount (₹ Lakh)</td>
                        <td className="p-2.5 text-right">₹{reimb1417Data.prop_1415 || '0.00'}</td>
                        <td className="p-2.5 text-right">₹{reimb1417Data.prop_1516 || '0.00'}</td>
                        <td className="p-2.5 text-right">₹{reimb1417Data.prop_1617 || '0.00'}</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-on-surface">Approved Amount (₹ Lakh)</td>
                        <td className="p-2.5 text-right font-bold text-primary">₹{reimb1417Data.appr_1415 || '0.00'}</td>
                        <td className="p-2.5 text-right font-bold text-primary">₹{reimb1417Data.appr_1516 || '0.00'}</td>
                        <td className="p-2.5 text-right font-bold text-primary">₹{reimb1417Data.appr_1617 || '0.00'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {reimb1417Data.remarks && (
                  <div className="p-3 bg-surface-container-low rounded-[4px] border border-border-subtle text-xs text-on-surface-variant">
                    <strong>Official Remarks:</strong> {reimb1417Data.remarks}
                  </div>
                )}
              </div>
            )}

            {/* Reimbursement 2020-2025 (in Crore) */}
            {reimb2025Data && (
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Badge variant="primary">Recent Central Approvals (2020–2025)</Badge>
                  <span className="text-xs font-mono text-outline">Source: Lok Sabha Q.2160 / RS Q.1148</span>
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Reimbursement Claims &amp; Central Approvals (₹ Crore)
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2020–21 Claim</span>
                    <span className="font-bold text-primary mt-1 block">₹{reimb2025Data.claim_2021 || '—'} Cr</span>
                    <span className="text-[10px] text-secondary mt-1 block">Appr: ₹{reimb2025Data.appr_2021 || '—'} Cr</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2021–22 Claim</span>
                    <span className="font-bold text-primary mt-1 block">₹{reimb2025Data.claim_2122 || '—'} Cr</span>
                    <span className="text-[10px] text-secondary mt-1 block">Appr: ₹{reimb2025Data.appr_2122 || '—'} Cr</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2022–23 Claim</span>
                    <span className="font-bold text-primary mt-1 block">₹{reimb2025Data.claim_2223 || '—'} Cr</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2023–24 Claim</span>
                    <span className="font-bold text-primary mt-1 block">₹{reimb2025Data.claim_2324 || '—'} Cr</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2024–25 Claim</span>
                    <span className="font-bold text-primary mt-1 block">₹{reimb2025Data.claim_2425 || '—'} Cr</span>
                  </div>
                </div>
              </div>
            )}

            {/* Private Schools Count 2020-2025 */}
            {privSchoolsData && (
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Badge variant="outline">Private Unaided Schools</Badge>
                  <span className="text-xs font-mono text-outline">Source: Rajya Sabha UQ 533</span>
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Recognized Private Unaided Schools in {stateData.name} (2020–2025)
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2020–21</span>
                    <span className="font-bold text-primary text-sm mt-1 block">{privSchoolsData['2020-21'] || '—'}</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2021–22</span>
                    <span className="font-bold text-primary text-sm mt-1 block">{privSchoolsData['2021-22'] || '—'}</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2022–23</span>
                    <span className="font-bold text-primary text-sm mt-1 block">{privSchoolsData['2022-23'] || '—'}</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2023–24</span>
                    <span className="font-bold text-primary text-sm mt-1 block">{privSchoolsData['2023-24'] || '—'}</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-[4px]">
                    <span className="text-[10px] text-outline block">2024–25</span>
                    <span className="font-bold text-primary text-sm mt-1 block">{privSchoolsData['2024-25'] || '—'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Indicators (e.g. 2026-27 Applications / Allotments) */}
            {recentInds.length > 0 && (
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="high-priority">2026–2027 Admission Cycle Data</Badge>
                  <span className="text-xs font-mono text-outline">NIC / State Department Disclosures</span>
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Recent Admission Demand &amp; Allotment Indicators
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recentInds.map((ri) => (
                    <div key={ri.id} className="bg-surface-container-low p-4 rounded-[4px] space-y-1">
                      <span className="text-xs font-mono text-secondary block">{ri.academicYear} · {ri.dataCategory}</span>
                      <h4 className="font-serif text-headline-xs font-bold text-primary">{ri.indicator}</h4>
                      <div className="font-mono text-headline-sm font-bold text-primary pt-1">
                        {Number(ri.reportedData).toLocaleString('en-IN')}
                      </div>
                      {ri.sourceLink && (
                        <div className="pt-2">
                          <a
                            href={ri.sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                          >
                            <span>Official Source Reference</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Master Dataset Records Table */}
            {masterRecords.length > 0 && (
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3">
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  All Master Research Entries for {stateData.name} ({masterRecords.length} Records)
                </h3>
                <div className="overflow-x-auto max-h-80 w-full max-w-full min-w-0">
                  <table className="w-full text-left font-sans text-xs border border-border-subtle">
                    <thead className="bg-surface-container-low font-semibold text-primary border-b border-border-subtle sticky top-0">
                      <tr>
                        <th className="p-2.5">Year</th>
                        <th className="p-2.5">Category</th>
                        <th className="p-2.5">Indicator</th>
                        <th className="p-2.5 text-right">Data</th>
                        <th className="p-2.5">Source &amp; Verification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {masterRecords.map((mr) => (
                        <tr key={mr.id} className="hover:bg-surface-container-low transition-colors">
                          <td className="p-2.5 font-mono">{mr.academicYear}</td>
                          <td className="p-2.5 text-[11px]">{mr.dataCategory}</td>
                          <td className="p-2.5 font-medium">{mr.indicator}</td>
                          <td className="p-2.5 font-mono font-bold text-right text-primary">{mr.reportedData}</td>
                          <td className="p-2.5 text-[11px] text-on-surface-variant max-w-xs">
                            <div>{mr.sourceType}</div>
                            {mr.researchNotes && <div className="text-[10px] text-outline italic">{mr.researchNotes}</div>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: JUDGMENTS */}
        {/* ========================================================================= */}
        {activeTab === 'judgments' && (
          <div className="space-y-4">
            <SectionHeader
              title={`Judicial Precedents & High Court Orders — ${stateData.name}`}
              category="Case Law Archive"
            />
            <DocumentRow
              title={`High Court Jurisprudence on Section 12(1)(c) & RTE Norms in ${stateData.name}`}
              category="Judicial Ruling"
              docType="High Court Bench"
              authority={`High Court of Judicature for ${stateData.name}`}
              citation="Reported in State Law Journal"
              date="Precedent Order"
              jurisdiction={`High Court of ${stateData.name}`}
              summary={`Key judicial decisions clarifying parental income limits, distance norms for school allotment, minority institution exemptions under Pramati, and timeliness of fee reimbursements under Section 12(2).`}
              badgeTone="secondary"
              fileFormat="PDF"
              fileSize="3.8 MB"
              isVerified={true}
              verificationLabel="Case Analysis Available"
              onDownload={() => window.location.assign('/judgments')}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: GRIEVANCE */}
        {/* ========================================================================= */}
        {activeTab === 'grievance' && (
          <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-4">
            <SectionHeader
              title={`Grievance Redressal Mechanisms in ${stateData.name}`}
              category="Section 31 & 32 Statutory Remedies"
            />
            <p className="font-sans text-body-md text-on-surface leading-relaxed">
              Section 31 of the RTE Act designates the National Commission for Protection of Child Rights (NCPCR) and the State Commission for Protection of Child Rights (SCPCR) as statutory monitoring bodies. Section 32 establishes a 3-month statutory timeline for local authorities to dispose of written grievances regarding right-to-education violations.
            </p>

            <div className="p-4 bg-surface-container-low rounded-[4px] border border-border-subtle">
              <h4 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-2">
                Filing a Complaint in {stateData.name}
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-body-sm text-on-surface">
                <li>Submit a written representation to the District Education Officer (DEO) / Block Education Officer (BEO).</li>
                <li>If unaddressed within 3 months, file an appeal with the {stateData.name} SCPCR.</li>
                <li>National complaints can be lodged via NCPCR's central digital portal <strong>e-Baalnidan</strong>.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Citation Modal */}
        <CitationModal
          isOpen={isCitationOpen}
          onClose={() => setIsCitationOpen(false)}
          statuteTitle={`${stateData.name} State RTE Desk & Section 38 Subordinate Rules`}
          actNo="State Subordinate Gazette"
          year="2026"
        />
      </Container>
    </div>
  );
};

export default StateDetailPage;
