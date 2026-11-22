import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Calendar,
  Video,
  ExternalLink,
  Download,
  Scale,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export const ArchivesPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'all' | 'milestones' | 'parliament' | 'videos' = location.pathname.includes('/parliament')
    ? 'parliament'
    : location.pathname.includes('/milestones')
    ? 'milestones'
    : location.pathname.includes('/videos')
    ? 'videos'
    : 'all';

  const statutoryMilestones = [
    {
      title: 'Supreme Court Designates 25% RTE Quota Enforcement as a "National Mission" (2026 INSC 56)',
      date: '13 January 2026',
      forum: 'Supreme Court of India · Division Bench',
      citation: '2026 INSC 56',
      summary: 'In Dinesh Biwaji Ashtikar v. State of Maharashtra, the Supreme Court directed appropriate governments to frame comprehensive rules and regulations under Section 38, holding that realizing the 25% admission quota for weaker sections is a vital national imperative.',
      sourceUrl: 'https://api.sci.gov.in/supremecourt/2017/8696/8696_2017_6_1501_67436_Judgement_13-Jan-2026.pdf',
    },
    {
      title: 'Supreme Court Affirms State Allotment Authority under Section 12(1)(c) (2026 INSC 422)',
      date: '28 April 2026',
      forum: 'Supreme Court of India',
      citation: '2026 INSC 422',
      summary: 'In Lucknow Public School, Eldico v. State of UP, the Court ruled that once a child is allotted to a private neighbourhood school by the State Government under the statutory RTE lottery, the school cannot refuse admission or question the State’s selection.',
      sourceUrl: 'https://api.sci.gov.in/supremecourt/2024/60657/60657_2024_6_1501_70588_Judgement_28-Apr-2026.pdf',
    },
    {
      title: 'Supreme Court Review Extends Teacher TET Acquisition Timeline to August 2028',
      date: '29 May 2026',
      forum: 'Supreme Court of India',
      citation: '2026 INSC 597',
      summary: 'Extending the timeline for in-service elementary teachers to acquire Teacher Eligibility Test (TET) qualifications under Section 23 from 2027 to 31 August 2028, and directing education authorities to conduct TET twice annually.',
      sourceUrl: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2293990&lang=2&reg=48&utm',
    },
    {
      title: 'Parliamentary Disclosure Reports ₹2,84,098.18 Lakh Approved for RTE Reimbursement',
      date: '30 July 2025',
      forum: 'Rajya Sabha · Ministry of Education',
      citation: 'Unstarred Question No. 1148',
      summary: 'The Ministry of Education tabled detailed state-by-state financial records showing approvals for 22 States and UTs under Samagra Shiksha for Section 12(1)(c) per-child reimbursements in FY 2024–25.',
      sourceUrl: 'https://sansad.in/getFile/annex/268/AU1148_MUDBWu.pdf?source=pqars',
    },
    {
      title: 'National Enrolment under Section 12(1)(c) Surpasses 48.19 Lakh Children',
      date: '2 August 2023',
      forum: 'Rajya Sabha · Ministry of Education',
      citation: 'Unstarred Question No. 1483',
      summary: 'Official parliamentary disclosure providing national totals of disadvantaged children admitted or studying under Section 12(1)(c), tracking progressive expansion from 41.57 lakh in 2018–19 to 48.19 lakh in 2022–23.',
      sourceUrl: 'https://sansad.in/getFile/annex/260/AU1483.pdf?source=pqars',
    },
    {
      title: 'Enactment of The Right of Children to Free and Compulsory Education (Amendment) Act, 2019',
      date: '11 January 2019',
      forum: 'Parliament of India (Act No. 1 of 2019)',
      citation: 'Gazette of India Extraordinary',
      summary: 'Statutory amendment substituting Section 16 of the Principal Act to introduce regular examinations in Classes 5 and 8, additional remedial instruction, and state detention powers while prohibiting school expulsion.',
      sourceUrl: 'https://egazette.gov.in',
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Digital Archives &amp; Statutory Records (2009–2026)"
          category="Public Record Repository · Parliamentary &amp; Judicial Archives"
          description="Chronological repository of primary gazette notifications, parliamentary question annexures, and Supreme Court rulings documenting the evolution and enforcement of the Right to Education Act, 2009."
        />

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none max-w-full min-w-0">
          <Link
            to="/archives"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'all'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>All Historical Records ({statutoryMilestones.length})</span>
          </Link>
          <Link
            to="/resources?tab=downloads"
            className="px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 border-transparent text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-ochre" />
            <span>Official Research Files (9 Datasets)</span>
          </Link>
          <Link
            to="/judgments"
            className="px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 border-transparent text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors flex items-center gap-2"
          >
            <Scale className="w-4 h-4" />
            <span>25 Case Law Dossiers</span>
          </Link>
        </div>

        {/* Milestones Content */}
        <div className="space-y-4">
          <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle">
            <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
              Verified Legal Milestones &amp; Parliamentary Disclosures
            </h3>
            <p className="font-sans text-body-sm text-on-surface-variant">
              Every record in this archive links directly to the authenticated court judgment, official parliamentary annexure, or Gazette notification.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {statutoryMilestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle hover:border-primary transition-all shadow-card space-y-3"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-secondary">{item.date}</span>
                      <Badge variant="primary">{item.forum}</Badge>
                      <span className="font-mono text-xs font-semibold text-primary">{item.citation}</span>
                    </div>
                    <h4 className="font-serif text-headline-sm font-bold text-primary">
                      {item.title}
                    </h4>
                  </div>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-xs font-semibold text-primary rounded-[2px] border border-border-subtle hover:bg-surface-container-high transition-colors"
                  >
                    <span>View Primary Record</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="font-sans text-body-sm text-on-surface leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audio / Video and Documentation Section */}
        <div className="p-6 bg-surface-container-lowest rounded-[4px] border border-border-subtle text-center space-y-3 shadow-card">
          <Video className="w-10 h-10 text-primary mx-auto" />
          <h4 className="font-serif text-headline-sm font-bold text-primary">
            Official Video &amp; Research Discussion Archives
          </h4>
          <p className="text-body-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Access recordings of parliamentary debates, national consultations on Section 12(1)(c) lottery transparency, and interviews with educational jurists on the official channel.
          </p>
          <a
            href="https://www.youtube.com/user/ccsindiatv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-[2px] hover:bg-primary-container transition-colors shadow-2xs"
          >
            <span>Open Official CCS Video Archive on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default ArchivesPage;
