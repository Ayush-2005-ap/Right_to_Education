import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  BookOpen,
  Download,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export const BlogPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'all' | 'commentaries' | 'dossiers' = location.pathname.includes('/commentaries')
    ? 'commentaries'
    : location.pathname.includes('/dossiers')
    ? 'dossiers'
    : 'all';

  const researchArticles = [
    {
      id: 'art-1',
      title: 'A Decade of Section 12(1)(c): Pan-India Admission Trends and Fiscal Reimbursement Dynamics (2014–2026)',
      authority: 'RTE Legal Research Team & Parliamentary Question Annexures',
      date: '2026 Empirical Study',
      category: 'Fiscal & Enrolment Monograph',
      readTime: '12 min read',
      excerpt: 'Synthesising national data from Rajya Sabha Unstarred Question No. 1483 and Lok Sabha financial disclosures, this study examines how Section 12(1)(c) enrolments grew from 41.57 lakh (2018–19) to over 48.19 lakh (2022–23), while analyzing the complex interplay between state claims, PAB approvals (₹2,84,098.18 lakh in FY 2024–25), and private school sustainability.',
      statutoryRef: 'Sections 12(1)(c) & 12(2)',
      docUrl: '/documents/Central_Government_Report_on_RTE_2014-2026.docx',
      downloadName: 'Central_Government_Report_on_RTE_2014-2026.docx',
    },
    {
      id: 'art-2',
      title: 'Enforcing the 25% Mandate as a "National Mission": Analysing Dinesh Biwaji Ashtikar (2026 INSC 56)',
      authority: 'Judicial Commentary Desk · Supreme Court Jurisprudence',
      date: '13 January 2026',
      category: 'Constitutional Jurisprudence',
      readTime: '8 min read',
      excerpt: 'On 13 January 2026, the Supreme Court delivered a decisive ruling emphasizing that neighbourhood private schools must strictly adhere to the 25% admission quota under Section 12(1)(c). The Court directed appropriate governments to frame robust accountability rules under Section 38, shifting legal focus from abstract recognition to enforceable execution.',
      statutoryRef: 'Section 12(1)(c), Section 38 & Article 21A',
      docUrl: '/documents/RTE_Recent_Legal_Developments_2025-26.docx',
      downloadName: 'RTE_Recent_Legal_Developments_2025-26.docx',
    },
    {
      id: 'art-3',
      title: 'In-Service Teachers and TET Qualifications: The Supreme Court’s 2028 Extended Timeline',
      authority: 'Statutory Policy Analysis · Department of School Education',
      date: '29 May 2026',
      category: 'Teacher Standards & Section 23',
      readTime: '10 min read',
      excerpt: 'In its review judgment dated 29 May 2026 (2026 INSC 597), the Supreme Court extended the deadline for in-service teachers to qualify the Teacher Eligibility Test (TET) to 31 August 2028 and advised states to conduct TET examinations twice annually at six-month intervals, balancing child quality guarantees with fair career transition.',
      statutoryRef: 'Section 23(1)-(2), RTE Act & NCTE Norms',
      docUrl: '/documents/RTE_Legal_Developments_2014-26_Case_and_Amendments.docx',
      downloadName: 'RTE_Legal_Developments_2014-26_Case_and_Amendments.docx',
    },
    {
      id: 'art-4',
      title: 'Minority Educational Institutions under the RTE: From Pramati (2014) to Anjuman Trust (2025–26)',
      authority: 'Constitutional Bench Legal Analysis',
      date: '1 September 2025 / 2026',
      category: 'Constitutional Bench Jurisprudence',
      readTime: '11 min read',
      excerpt: 'While the 2014 Constitution Bench in Pramati held that Article 30(1) exempts minority schools from the RTE Act, the Supreme Court in Anjuman Ishaat-e-Taleem Trust (2025 INSC 1063) questioned this exemption regarding mandatory teacher standards and referred the issue to a larger Constitution Bench.',
      statutoryRef: 'Articles 21A & 30(1), Constitution of India',
      docUrl: '/documents/RTE_Legal_Developments_2014-26_Case_and_Amendments.docx',
      downloadName: 'RTE_Legal_Developments_2014-26_Case_and_Amendments.docx',
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="The RTE Policy &amp; Legal Commentary Desk"
          category="Scholarly Research &amp; Jurisprudential Analyses"
          description="Authoritative legal monographs, statutory commentaries, and empirical policy papers examining right-to-education governance, Supreme Court precedent, and classroom equity across India."
        />

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none max-w-full min-w-0">
          <Link
            to="/blog"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'all'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>All Research Monographs ({researchArticles.length})</span>
          </Link>
          <Link
            to="/resources?tab=downloads"
            className="px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 border-transparent text-on-surface-variant hover:text-primary whitespace-nowrap transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-ochre" />
            <span>Official Research Datasets (9 Files)</span>
          </Link>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {researchArticles.map((art) => (
            <article
              key={art.id}
              className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle hover:border-primary transition-all shadow-card space-y-4"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="primary">{art.category}</Badge>
                    <span className="font-mono text-xs text-secondary font-bold">{art.statutoryRef}</span>
                    <span className="text-xs text-outline font-mono">· {art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-headline-md font-bold text-primary">
                    {art.title}
                  </h3>
                  <div className="text-xs text-on-surface-variant font-sans">
                    <strong>Authority / Authors:</strong> {art.authority} · <strong>Published / Updated:</strong> {art.date}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={art.docUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-xs font-semibold text-primary rounded-[2px] border border-border-subtle hover:bg-surface-container-high transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-secondary" />
                    <span>Download Source (.docx)</span>
                  </a>
                </div>
              </div>

              <p className="font-sans text-body-md text-on-surface leading-relaxed">
                {art.excerpt}
              </p>

              <div className="pt-3 border-t border-border-subtle flex items-center justify-between gap-4 flex-wrap text-xs font-sans">
                <span className="text-outline">
                  Source: Extracted from authenticated Google Drive research compendiums.
                </span>
                <Link
                  to="/judgments"
                  className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Associated Case Dossiers →</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
