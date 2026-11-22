import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  MapPin,
  Gavel,
  ArrowRight,
  Scale,
  Download,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DocumentRow } from '../components/ui/DocumentRow';
import { ResourceCard } from '../components/ui/ResourceCard';
import { AnnouncementsSection } from '../components/announcements';
import { useLanguage } from '../context';
import { OFFICIAL_DOCUMENT_DOWNLOADS } from '../data/knowYourRTEFullData';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-6 sm:py-8 space-y-10 w-full max-w-full overflow-hidden">
      <Container>
        {/* NEW RELEASES & ANNOUNCEMENTS TOP SECTION */}
        <div className="mb-8">
          <AnnouncementsSection />
        </div>

        {/* HERO SECTION */}
        <section className="bg-surface-container-lowest rounded-[4px] border border-border-subtle p-6 sm:p-10 shadow-subtle mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="primary">{t('const_article', 'Constitution of India · Article 21-A')}</Badge>
              <span className="text-border-strong" aria-hidden="true">·</span>
              <span className="font-mono text-code-md text-on-surface-variant">{t('act_no', 'Act No. 35 of 2009')}</span>
            </div>

            <h1 className="font-serif text-display-lg font-bold text-primary leading-tight tracking-tight mb-4">
              {t('hero_title', 'National Legal & Policy Resource Portal on Right to Education')}
            </h1>

            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed mb-6">
              {t('hero_desc', 'An authoritative civil-society repository documenting the Right of Children to Free and Compulsory Education Act, 2009. Providing verified statutory gazettes, Section 38 state rules, landmark Supreme Court jurisprudence, and Section 12(1)(c) implementation monitoring across 28 States and 8 Union Territories.')}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="/know-your-rte/about">
                <Button variant="primary" size="lg" leftIcon={<BookOpen className="w-4 h-4" />}>
                  {t('explore_rte_btn', 'Explore the RTE Act')}
                </Button>
              </Link>
              <Link to="/resources/states">
                <Button variant="secondary" size="lg" leftIcon={<MapPin className="w-4 h-4" />}>
                  {t('state_dir_btn', 'State & UT Directory (37)')}
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg" leftIcon={<FileText className="w-4 h-4" />}>
                  Central Data &amp; Research Compendiums
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
                  {t('pillar_kyr_title', 'Know Your RTE')}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  18 statutory domains, Article 21A guarantees, 1950–2026 chronology, and authoritative citizen FAQs.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                {t('explore_section', 'Explore Section →')}
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
                  {t('pillar_resources_title', 'Central Resources')}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  National Section 12(1)(c) enrolments (RS Q.1483), UDISE+ benchmarks, 2024-25 state approvals, and master research tracker.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                {t('browse_repository', 'Browse Repository →')}
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
                  {t('pillar_states_title', 'State & UT Desks')}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Profiles for all 37 States &amp; UTs with 624 empirical research records, historical enrolments, and reimbursement tracking.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                {t('view_all_states', 'View All States →')}
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
                  {t('pillar_judgments_title', 'Judicial Orders')}
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  25 landmark precedents (Pramati, Society) plus 5 recent 2025–2026 Supreme Court and High Court rulings.
                </p>
              </div>
              <span className="font-sans text-label-sm font-semibold text-secondary group-hover:text-primary mt-4 inline-flex items-center gap-1">
                {t('read_judgments', 'Read Judgments →')}
              </span>
            </Link>
          </div>
        </section>

        {/* OFFICIAL MASTER RESEARCH COMPENDIUMS BANNER */}
        <section className="bg-surface-container-lowest rounded-[4px] border border-border-subtle p-6 sm:p-8 shadow-card mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary">Official Master Research Archive</Badge>
                <span className="text-xs font-mono text-outline">Google Drive Final Dataset Ingestion (Nov 2026)</span>
              </div>
              <h2 className="font-serif text-headline-lg font-bold text-primary">
                Official Research Datasets &amp; Compendiums
              </h2>
              <p className="font-sans text-body-sm text-on-surface-variant max-w-2xl mt-1">
                Direct access to the 9 comprehensive legal dossiers and master spreadsheets verified through primary gazettes, parliamentary question annexures, and High Court law reports.
              </p>
            </div>
            <Link to="/resources?tab=downloads">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Open Download Center (9 Files)
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICIAL_DOCUMENT_DOWNLOADS.slice(0, 6).map((doc) => (
              <div
                key={doc.id}
                className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-1.5 py-0.5 bg-primary text-white font-mono text-[10px] font-bold rounded-[2px]">
                      {doc.format}
                    </span>
                    <span className="text-[11px] font-mono text-outline">{doc.size}</span>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary line-clamp-1">
                    {doc.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant line-clamp-2 mt-1">
                    {doc.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-border-subtle/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-outline truncate max-w-[140px]">{doc.filename}</span>
                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <Download className="w-3 h-3 text-secondary" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRIORITY STATUTORY RECORDS */}
        <section className="mb-12">
          <SectionHeader
            category={t('priority_records_category', 'Verified Archives')}
            title={t('priority_records_title', 'Priority Statutory & Jurisprudential Records')}
            description={t('priority_records_desc', 'Authoritative legal documents codified with primary source gazette citations and checksum validation.')}
            action={
              <Link to="/resources/centre">
                <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  {t('view_all_records', 'View All Gazette Records')}
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
              onDownload={() => window.open('/documents/KEY_FEATURES_of_the_RTE_ACT.docx', '_blank')}
              onView={() => window.location.assign('/know-your-rte/features')}
            />

            <DocumentRow
              title="Supreme Court of India: Dinesh Biwaji Ashtikar v. State of Maharashtra & Ors. (2026 INSC 56)"
              category="Judicial Ruling"
              docType="Supreme Court Bench"
              badgeTone="secondary"
              citation="2026 INSC 56"
              authority="Supreme Court of India"
              date="13 January 2026"
              jurisdiction="Pan-India Precedent"
              summary="Supreme Court emphasized the mandatory statutory obligation of neighbourhood private schools to admit at least 25% students from weaker and disadvantaged groups under Section 12(1)(c), characterizing effective implementation as a national mission and directing states to frame stringent enforcement rules under Section 38."
              tags={['Section 12(1)(c) Mandatory', 'National Mission Directive', 'Section 38 Rules Enforcement']}
              fileFormat="PDF"
              fileSize="4.2 MB"
              isVerified={true}
              verificationLabel="Official SC Judgment"
              onDownload={() => window.open('https://api.sci.gov.in/supremecourt/2017/8696/8696_2017_6_1501_67436_Judgement_13-Jan-2026.pdf', '_blank')}
            />
          </div>
        </section>

        {/* STATE IMPLEMENTATION DESKS */}
        <section className="mb-12">
          <SectionHeader
            category={t('state_desks_category', 'Sub-National Governance')}
            title={t('state_desks_title', 'State Implementation Desks')}
            description={t('state_desks_desc', 'Explore state-specific admission portals, Section 38 rules, per-child reimbursement formulas, and SCPCR grievance contacts.')}
            action={
              <Link to="/resources/states">
                <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  {t('explore_all_states', 'Explore All 37 States & UTs')}
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
                {t('open_gov_category', 'Open Public Governance')}
              </span>
              <h2 className="font-serif text-headline-lg font-bold text-primary mb-2">
                {t('open_gov_title', 'Public Participation, Helpdesk & Grievance Redressal')}
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-6">
                {t('open_gov_desc', 'Need guidance on Section 12(1)(c) admission lotteries, school fee reimbursement norms, or filing an application under Section 4(1)(b) of the Right to Information Act, 2005? Access our community platforms and state grievance cells.')}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/ask-a-question">
                  <Button variant="primary" size="md">
                    {t('ask_question', 'Ask a Question')}
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button variant="secondary" size="md">
                    {t('start_discussion', 'Start a Discussion')}
                  </Button>
                </Link>
                <Link to="/report-a-grievance">
                  <Button variant="outline" size="md">
                    {t('report_grievance', 'Report a Grievance')}
                  </Button>
                </Link>
                <Link to="/rti">
                  <Button variant="ghost" size="md">
                    {t('rti_guide', 'RTI Filing Guide →')}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-low p-5 rounded-[4px] border border-border-subtle">
              <h3 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-3">
                {t('portal_statistics', 'Portal Statistics')}
              </h3>
              <div className="space-y-2 text-label-sm font-sans">
                <div className="flex justify-between pb-1.5 border-b border-border-subtle">
                  <span className="text-on-surface-variant">{t('archived_legal_records', 'Archived Legal Records:')}</span>
                  <span className="font-mono font-bold text-primary">1,482 Documents</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-border-subtle">
                  <span className="text-on-surface-variant">{t('states_uts_profiled', 'States & UTs Profiled:')}</span>
                  <span className="font-mono font-bold text-primary">37 Jurisdictions</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-border-subtle">
                  <span className="text-on-surface-variant">{t('court_orders_count', 'High Court & SC Orders:')}</span>
                  <span className="font-mono font-bold text-primary">25 Precedents + 5 Recent</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-on-surface-variant">{t('access_license_label', 'Access License:')}</span>
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

export default HomePage;
