import React from 'react';
import {
  TrendingUp,
  BarChart3,
  BookOpen,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Alert } from '../components/ui/Alert';
import { DocumentRow } from '../components/ui/DocumentRow';

export const PolicyResearchPage: React.FC = () => {
  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Policy & Empirical Research Repository"
          category="Empirical Studies &amp; Research Trackers"
          description="Independent policy evaluation, civil society monitoring, and longitudinal research on the implementation, funding, and learning outcomes under the Right of Children to Free and Compulsory Education Act, 2009."
        />

        {/* Primary Research Dataset Notice */}
        <Alert
          variant="statutory"
          badgeText="Verified Master Datasets (2014–2026)"
          gazetteRef="Civil Society Empirical Research"
          className="mb-8"
        >
          This repository synthesises findings from the <strong>RTE 2.0 Master Research Tracker</strong> and the <strong>RTE Statewise Research Compendium (2014–2026)</strong>, providing validated datasets on Section 12(1)(c) enrolment, per-child reimbursement equations, teacher vacancies, and infrastructure compliance across India.
        </Alert>

        {/* Research Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-headline-sm font-bold text-primary mb-2">
                Section 12(1)(c) Enrolment &amp; Inclusion
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Longitudinal analysis of private unaided school seat availability, lottery participation rates, and admission fill percentages across 22 participating States and Union Territories.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-secondary">
              Coverage: 623 District &amp; State Observations
            </span>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-secondary mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-headline-sm font-bold text-primary mb-2">
                Public Expenditure &amp; Section 12(2) Costs
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Empirical investigation of State per-child expenditure formulas, budget allocations under Samagra Shiksha, and systemic disbursement delays affecting participating schools.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-secondary">
              Formulas: Unit Cost vs. Prescribed State Ceilings
            </span>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-ochre mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-headline-sm font-bold text-primary mb-2">
                School Governance &amp; SMC Accountability
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed mb-4">
                Field surveys evaluating parent participation in School Management Committees (SMCs), preparation of School Development Plans, and social audit integration.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-secondary">
              Field Evidence: 28 State Directorates Monitored
            </span>
          </div>
        </div>

        {/* Featured Research Documents */}
        <div className="space-y-4">
          <h3 className="font-serif text-headline-sm font-bold text-primary">
            Curated Research Papers &amp; Working Papers
          </h3>

          <DocumentRow
            title="A Decade of Section 12(1)(c): Pan-India Admission Trends and Systemic Challenges (2014–2024)"
            category="Empirical Research Monograph"
            docType="Research Report"
            gazetteRef="RTE-WP-2024-01"
            authority="Centre for Civil Society &amp; Research Affiliates"
            date="September 2024"
            jurisdiction="National Overview"
            summary="A comprehensive ten-year review evaluating the intake of disadvantaged students under the 25% quota. Synthesises data from over 20 state online admission portals, highlighting stark interstate variations in seat allocation, reimbursement delays, and procedural dropouts."
            tags={['Section 12(1)(c)', 'Inclusion', 'Reimbursement Audit']}
            fileFormat="PDF"
            fileSize="4.8 MB"
            badgeTone="primary"
            isVerified={true}
            verificationLabel="Peer-Reviewed Working Paper"
            onDownload={() => alert('Opening Research Paper PDF')}
          />

          <DocumentRow
            title="Per-Child Expenditure Under Section 12(2): Analysis of State Notification Formulas"
            category="Fiscal Policy Analysis"
            docType="Policy Brief"
            gazetteRef="RTE-PB-2023-04"
            authority="National RTE Resource Team"
            date="November 2023"
            jurisdiction="28 States Comparative"
            summary="Examines the diverse computational methods used by State Governments to calculate the reimbursement ceiling per child. Documents disparities ranging from ₹450 per month in Uttar Pradesh to ₹17,670 annually in Maharashtra."
            tags={['Fiscal Policy', 'Section 12(2)', 'State Formulas']}
            fileFormat="PDF"
            fileSize="2.6 MB"
            badgeTone="secondary"
            isVerified={true}
            verificationLabel="Verified Policy Brief"
            onDownload={() => alert('Opening Fiscal Policy Brief')}
          />
        </div>
      </Container>
    </div>
  );
};

export default PolicyResearchPage;
