import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  MapPin,
  Gavel,
  ArrowRight,
  Scale,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DocumentRow } from '../components/ui/DocumentRow';
import { ResourceCard } from '../components/ui/ResourceCard';

export const HomePage: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 space-y-10">
      <Container>
        {/* Statutory Gazette Notice */}
        <Alert
          variant="statutory"
          badgeText="Official Gazette Alert"
          gazetteRef="MoE-RTE-2025/04-A"
          publishedDate="14 Jan 2025"
          actionText="View Gazette Copy (PDF)"
          onActionClick={() => alert('Opening Gazette Copy (AY 2025-26)')}
        >
          Revision of Model Admission Guidelines under Section 12(1)(c) for Academic Year 2025–26
        </Alert>

        {/* HERO SECTION */}
        <section className="bg-surface-container-lowest rounded-[4px] border border-border-subtle p-6 sm:p-10 shadow-subtle mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="primary">Constitution of India · Article 21-A</Badge>
              <span className="text-border-strong" aria-hidden="true">·</span>
              <span className="font-mono text-code-md text-on-surface-variant">Act No. 35 of 2009</span>
            </div>

            <h1 className="font-serif text-display-lg font-bold text-primary leading-tight tracking-tight mb-4">
              National Legal &amp; Policy Resource Portal on Right to Education
            </h1>

            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed mb-6">
              An authoritative civil-society repository documenting the Right of Children to Free and Compulsory Education Act, 2009. Providing verified statutory gazettes, Section 38 state rules, landmark Supreme Court jurisprudence, and Section 12(1)(c) implementation monitoring across 28 States and 8 Union Territories.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="/know-your-rte/about">
                <Button variant="primary" size="lg" leftIcon={<BookOpen className="w-4 h-4" />}>
                  Explore the RTE Act
                </Button>
              </Link>
              <Link to="/resources/states">
                <Button variant="secondary" size="lg" leftIcon={<MapPin className="w-4 h-4" />}>
                  State &amp; UT Directory (37)
                </Button>
              </Link>
              <Link to="/resources/rte-matrix">
                <Button variant="outline" size="lg" leftIcon={<FileText className="w-4 h-4" />}>
                  RTE State Rules Matrix
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 4 CORE NAVIGATION PILLARS */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/know-your-rte"
              className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary-container hover:shadow-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
                  Know Your RTE
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Historical background, key mandates, 2002–2026 chronology, and frequently asked legal questions.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                Explore Section →
              </span>
            </Link>

            <Link
              to="/resources"
              className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary-container hover:shadow-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
                  Central Resources
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Official gazettes, central model rules, advisory circulars, and the Section 38 State Rules Matrix.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                Browse Repository →
              </span>
            </Link>

            <Link
              to="/resources/states"
              className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary-container hover:shadow-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
                  State &amp; UT Desks
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Comprehensive profiles for all 28 States &amp; 8 UTs including Telangana, Ladakh, and Maharashtra.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                View All States →
              </span>
            </Link>

            <Link
              to="/judgments"
              className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary-container hover:shadow-card transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                  <Gavel className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
                  Judicial Orders
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Landmark Supreme Court rulings, High Court interpretations, and constitutional bench precedents.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                Read Judgments →
              </span>
            </Link>
          </div>
        </section>

        {/* PRIORITY STATUTORY RECORDS */}
        <section className="mb-12">
          <SectionHeader
            category="Verified Archives"
            title="Priority Statutory &amp; Jurisprudential Records"
            description="Authoritative legal documents codified with primary source gazette citations and checksum validation."
            action={
              <Link to="/resources/centre">
                <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  View All Gazette Records
                </Button>
              </Link>
            }
          />

          <div className="flex flex-col gap-3">
            <DocumentRow
              title="The Right of Children to Free and Compulsory Education (Amendment) Act, 2019 (Act No. 1 of 2019)"
              category="Primary Legislation"
              docType="Central Act"
              badgeTone="primary"
              gazetteRef="DL-(N)04/0007/2003-19"
              authority="Ministry of Law and Justice (Legislative Dept.)"
              date="11 January 2019"
              jurisdiction="Pan-India (All States & UTs)"
              summary="Statutory amendment substituting Section 16 of the Principal Act. Formulates procedural norms for regular examinations at the end of class 5 and class 8, empowering States to hold back failed pupils upon second assessment while strictly safeguarding that no child shall be expelled until completion of elementary education."
              tags={['Sec 16(1)-(4) Amended', 'No Detention Policy Review', 'Remedial Instruction Mandate']}
              fileFormat="PDF"
              fileSize="1.8 MB"
              isVerified={true}
              verificationLabel="Verified Gazette Copy"
              onDownload={() => alert('Download triggered for Act No. 1 of 2019')}
              onView={() => alert('Detail view opened for Act No. 1 of 2019')}
            />

            <DocumentRow
              title="Supreme Court of India: Society for Unaided Private Schools of Rajasthan v. Union of India & Anr."
              category="Judicial Ruling"
              docType="Constitutional Bench"
              badgeTone="secondary"
              citation="(2012) 6 SCC 1"
              authority="Supreme Court of India"
              date="12 April 2012"
              jurisdiction="Pan-India Precedent"
              summary="Authoritative Three-Judge Bench decision examining constitutional validity of Section 12(1)(c). The Court held that the RTE Act is constitutionally valid and applies to all non-minority unaided private schools, serving as an affirmative state instrument to realize the fundamental promise of Article 21-A."
              tags={['Article 21-A Jurisprudence', 'Section 12(1)(c) Upheld', 'Unaided Schools Quota']}
              fileFormat="PDF"
              fileSize="5.1 MB"
              isVerified={true}
              verificationLabel="Final Constitutional Order"
              onDownload={() => alert('Download triggered for (2012) 6 SCC 1')}
              onView={() => alert('Detail view opened for (2012) 6 SCC 1')}
            />
          </div>
        </section>

        {/* STATE IMPLEMENTATION DESKS */}
        <section className="mb-12">
          <SectionHeader
            category="Sub-National Governance"
            title="State Implementation Desks"
            description="Explore state-specific admission portals, Section 38 rules, per-child reimbursement formulas, and SCPCR grievance contacts."
            action={
              <Link to="/resources/states">
                <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore All 37 States &amp; UTs
                </Button>
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResourceCard
              region="Western Region"
              title="Maharashtra RTE Desk"
              description="Administered under Maharashtra RTE Rules, 2011. Centralized digital lottery allocated over 88,400 elementary seats across 9,100 institutions in 2024."
              attributes={[
                { icon: 'description', label: 'State Rules: Oct 2011 (Amended 2024)' },
                { icon: 'helpline', label: 'Grievance Helpline: 020-25612700' },
                { icon: 'reimbursement', label: 'Reimbursement: ₹17,670 / Child / Yr' },
              ]}
              portalDomain="student.maharashtra.gov.in"
              portalUrl="https://student.maharashtra.gov.in"
            />

            <ResourceCard
              region="Southern Region"
              title="Karnataka RTE Desk"
              description="Operating under Karnataka Right of Children to Free and Compulsory Education Rules, 2012 via Samanvaya digital admissions workflow."
              attributes={[
                { icon: 'description', label: 'Rules: Gazette ED 368 PBS 2012' },
                { icon: 'helpline', label: 'KSCPCR Redressal: 080-22115291' },
                { icon: 'reimbursement', label: 'Direct DBT Reimbursement Node' },
              ]}
              portalDomain="schooleducation.karnataka.gov.in"
              portalUrl="https://schooleducation.karnataka.gov.in"
            />

            <ResourceCard
              region="Northern Region"
              title="Delhi (NCT) RTE Desk"
              description="Directorate of Education (DoE) computerized lottery for EWS/DG and Children with Special Needs (CWSN) quotas in private schools."
              attributes={[
                { icon: 'description', label: 'Rules: Delhi RTE Rules, Nov 2011' },
                { icon: 'helpline', label: 'DoE Helpline: 011-23672007' },
                { icon: 'reimbursement', label: 'Digital Income Certificate Linkage' },
              ]}
              portalDomain="edudel.nic.in"
              portalUrl="http://www.edudel.nic.in"
            />

            <ResourceCard
              region="Southern Region"
              title="Tamil Nadu RTE Desk"
              description="Tamil Nadu RTE Rules 2011 managed through the Directorate of Matriculation Schools online allocation engine covering 85,000+ seats annually."
              attributes={[
                { icon: 'description', label: 'Rules: G.O. (Ms) No. 173 (School Edu)' },
                { icon: 'helpline', label: 'TNSCPCR Redressal: 044-28270117' },
                { icon: 'reimbursement', label: 'GIS Geo-Fenced School Catchment' },
              ]}
              portalDomain="rte.tnschools.gov.in"
              portalUrl="https://rte.tnschools.gov.in"
            />
          </div>
        </section>

        {/* PUBLIC PARTICIPATION & TRANSPARENCY CALLOUT */}
        <section className="bg-surface-container-lowest rounded-[4px] border border-border-subtle p-6 sm:p-8 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="font-sans text-label-sm font-bold text-secondary uppercase tracking-wider block mb-1">
                Open Public Governance
              </span>
              <h2 className="font-serif text-headline-lg font-bold text-primary mb-2">
                Public Participation, Helpdesk &amp; Grievance Redressal
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-6">
                Need guidance on Section 12(1)(c) admission lotteries, school fee reimbursement norms, or filing an application under Section 4(1)(b) of the Right to Information Act, 2005? Access our community platforms and state grievance cells.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/ask-a-question">
                  <Button variant="primary" size="md">
                    Ask a Question
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button variant="secondary" size="md">
                    Start a Discussion
                  </Button>
                </Link>
                <Link to="/report-a-grievance">
                  <Button variant="outline" size="md">
                    Report a Grievance
                  </Button>
                </Link>
                <Link to="/rti">
                  <Button variant="ghost" size="md">
                    RTI Filing Guide →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-low p-5 rounded-[4px] border border-border-subtle">
              <h3 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-3">
                Portal Statistics
              </h3>
              <div className="space-y-2 text-label-sm font-sans">
                <div className="flex justify-between pb-1.5 border-b border-border-subtle">
                  <span className="text-on-surface-variant">Archived Legal Records:</span>
                  <span className="font-mono font-bold text-primary">1,482 Documents</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-border-subtle">
                  <span className="text-on-surface-variant">States &amp; UTs Profiled:</span>
                  <span className="font-mono font-bold text-primary">37 Jurisdictions</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-border-subtle">
                  <span className="text-on-surface-variant">High Court &amp; SC Orders:</span>
                  <span className="font-mono font-bold text-primary">214 Rulings</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-on-surface-variant">Access License:</span>
                  <span className="font-bold text-secondary">CC BY 4.0 Open Public</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
