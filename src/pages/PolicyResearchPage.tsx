import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  BarChart3,
  BookOpen,
  Download,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Alert } from '../components/ui/Alert';
import { DocumentRow } from '../components/ui/DocumentRow';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { OFFICIAL_DOCUMENT_DOWNLOADS } from '../data/knowYourRTEFullData';

export const PolicyResearchPage: React.FC = () => {
  const researchDocs = OFFICIAL_DOCUMENT_DOWNLOADS.filter((d) =>
    ['doc-01', 'doc-07', 'doc-08', 'doc-09'].includes(d.id)
  );

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Policy &amp; Empirical Research Repository (2014–2026)"
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
          This repository synthesises findings from the <strong>RTE 2.0 Master Research Tracker</strong>, <strong>Central Government Report on RTE (2014–2026)</strong>, and the <strong>RTE Statewise Research Compendium (2014–2026)</strong>, providing validated datasets on Section 12(1)(c) enrolment, per-child reimbursement equations, teacher vacancies, and infrastructure compliance across India.
        </Alert>

        {/* OFFICIAL DATASETS DOWNLOAD SECTION */}
        <section className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary">Drive Master Ingestion</Badge>
                <span className="text-xs font-mono text-outline">Authoritative Research Files</span>
              </div>
              <h3 className="font-serif text-headline-sm font-bold text-primary">
                Official Research Datasets &amp; Compendiums
              </h3>
            </div>
            <Link to="/resources?tab=downloads">
              <Button variant="outline" size="sm">
                View All 9 Compendiums →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-secondary">{doc.format} · {doc.size}</span>
                    <Badge variant="outline">{doc.category}</Badge>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">
                    {doc.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border-subtle/60 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-outline">{doc.filename}</span>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest text-xs font-semibold text-primary border border-border-subtle rounded-[2px] hover:bg-surface-container transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-secondary" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

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
              Coverage: 624 Master Observations
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
            onDownload={() => window.open('/documents/Central_Government_Report_on_RTE_2014-2026.docx', '_blank')}
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
            onDownload={() => window.open('/documents/RTE_Statewise_Research_2014-2026.xlsx', '_blank')}
          />
        </div>
      </Container>
    </div>
  );
};

export default PolicyResearchPage;
