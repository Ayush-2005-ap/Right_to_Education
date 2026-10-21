import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gavel,
  BookOpen,
  FileText,
  HelpCircle,
  Rss,
} from 'lucide-react';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-container text-on-primary border-t-2 border-ochre mt-auto select-none">
      <Container className="pt-space-xl pb-space-lg">
        {/* 4-COLUMN MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl text-left">
          {/* Column 1: About Portal & Archival Mandate */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Gavel className="w-5 h-5 text-secondary-fixed shrink-0" aria-hidden="true" />
              <h3 className="font-serif text-headline-sm font-bold text-white">
                About RTE India Portal
              </h3>
            </div>
            <p className="font-sans text-body-sm text-primary-fixed-dim leading-relaxed mb-4">
              An authoritative open-access digital archive mandated under Article 21-A of the Constitution of India. Dedicated to non-partisan civil society governance, legislative dissemination, and longitudinal public monitoring of the Right of Children to Free and Compulsory Education Act, 2009.
            </p>
            <div className="font-sans text-[11px] text-outline-variant space-y-1.5 pt-2 border-t border-border-strong">
              <div>
                Repository Identifier:{' '}
                <span className="font-mono text-code-md text-primary-fixed">
                  RTE-IN-2009-PUB-DOCS
                </span>
              </div>
              <div>Access Protocol: Open Public Legal Archive</div>
              <div>License: Creative Commons Attribution 4.0 (CC BY 4.0)</div>
            </div>
          </div>

          {/* Column 2: Statutory References & Central Resources */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-secondary-fixed shrink-0" aria-hidden="true" />
              <h3 className="font-serif text-headline-sm font-bold text-white">
                Statutory References
              </h3>
            </div>
            <ul className="font-sans text-body-sm space-y-2 text-primary-fixed-dim">
              <li>
                <Link to="/know-your-rte/about" className="hover:text-white transition-colors">
                  RTE Act, 2009 (Full Text &amp; Amendments)
                </Link>
              </li>
              <li>
                <Link to="/resources/centre" className="hover:text-white transition-colors">
                  Central Model Rules, 2010
                </Link>
              </li>
              <li>
                <Link to="/resources/rte-matrix" className="hover:text-white transition-colors">
                  RTE State Rules Matrix (Section 38)
                </Link>
              </li>
              <li>
                <Link to="/judgments" className="hover:text-white transition-colors">
                  Landmark Constitutional Bench Judgments
                </Link>
              </li>
              <li>
                <Link to="/resources?topic=25-percent-reservation" className="hover:text-white transition-colors">
                  Section 12(1)(c) Compliance Guidelines
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-white transition-colors">
                  NCPCR Statutory Monitoring Protocols
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: State Resource Desks (37 States & UTs) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-secondary-fixed shrink-0" aria-hidden="true" />
              <h3 className="font-serif text-headline-sm font-bold text-white">
                State &amp; UT Desks
              </h3>
            </div>
            <ul className="font-sans text-body-sm space-y-2 text-primary-fixed-dim">
              <li>
                <Link to="/resources/states" className="hover:text-white transition-colors font-semibold text-primary-fixed">
                  All 28 States &amp; 8 UTs Directory →
                </Link>
              </li>
              <li>
                <Link to="/resources/states/maharashtra" className="hover:text-white transition-colors">
                  Maharashtra State RTE Desk
                </Link>
              </li>
              <li>
                <Link to="/resources/states/karnataka" className="hover:text-white transition-colors">
                  Karnataka State RTE Desk
                </Link>
              </li>
              <li>
                <Link to="/resources/states/delhi" className="hover:text-white transition-colors">
                  Delhi (NCT) EWS Admission Desk
                </Link>
              </li>
              <li>
                <Link to="/resources/states/telangana" className="hover:text-white transition-colors">
                  Telangana State Desk (New Addition)
                </Link>
              </li>
              <li>
                <Link to="/resources/states/ladakh" className="hover:text-white transition-colors">
                  Ladakh UT Desk (New Addition)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Public Participation & Transparency */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-5 h-5 text-secondary-fixed shrink-0" aria-hidden="true" />
              <h3 className="font-serif text-headline-sm font-bold text-white">
                Public Participation
              </h3>
            </div>
            <ul className="font-sans text-body-sm space-y-2 text-primary-fixed-dim mb-4">
              <li>
                <Link to="/coalition-25" className="hover:text-white transition-colors font-semibold text-amber-300">
                  Coalition 25 Initiative
                </Link>
              </li>
              <li>
                <Link to="/rti" className="hover:text-white transition-colors">
                  Right to Information (RTI) Transparency Cell
                </Link>
              </li>
              <li>
                <Link to="/ask-a-question" className="hover:text-white transition-colors">
                  Ask a Question / Helpdesk
                </Link>
              </li>
              <li>
                <Link to="/forum" className="hover:text-white transition-colors">
                  Public Discussion Forums
                </Link>
              </li>
              <li>
                <Link to="/report-a-grievance" className="hover:text-white transition-colors">
                  Report a Grievance to SCPCR
                </Link>
              </li>
            </ul>

            {/* Social Media Links (Confirmed from live site audit) */}
            <div className="pt-2 border-t border-border-strong">
              <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim mb-2">
                Connect with CCS India:
              </span>
              <div className="flex items-center gap-3 text-primary-fixed">
                <a
                  href="https://twitter.com/ccsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-label-sm"
                  title="Twitter / X"
                >
                  X (Twitter)
                </a>
                <span className="text-outline">·</span>
                <a
                  href="https://facebook.com/ccsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-label-sm"
                  title="Facebook"
                >
                  Facebook
                </a>
                <span className="text-outline">·</span>
                <a
                  href="https://linkedin.com/company/centre-for-civil-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-label-sm"
                  title="LinkedIn"
                >
                  LinkedIn
                </a>
                <span className="text-outline">·</span>
                <Link to="/rss.xml" className="hover:text-white transition-colors" title="RSS Feed">
                  <Rss className="w-3.5 h-3.5 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-space-md border-t border-border-strong flex flex-col md:flex-row items-center justify-between gap-3 font-sans text-body-sm text-outline-variant">
          <div className="text-center md:text-left text-primary-fixed-dim text-[12px]">
            <span>
              © 2026 Right to Education India Resource Initiative · Centre for Civil Society. All official notifications and judgments sourced from public records.
            </span>
          </div>

          <div className="flex items-center gap-3 font-sans text-label-sm text-primary-fixed-dim flex-wrap justify-center">
            <Link to="/about/vision-and-mission" className="hover:text-white transition-colors">
              Vision &amp; Mission
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/about/partners" className="hover:text-white transition-colors">
              Partners
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/about/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Archive Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
