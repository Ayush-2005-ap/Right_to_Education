import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gavel,
  BookOpen,
  FileText,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { useLanguage } from '../../context';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#071626] text-slate-200 border-t-2 border-amber-600 mt-auto select-none font-sans">
      <Container className="pt-10 sm:pt-12 pb-8 sm:pb-10">
        {/* 4-COLUMN MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 text-left">
          {/* Column 1: About Portal & Archival Mandate */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/10">
                <Gavel className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {t('footer_about_title', 'About RTE India Portal')}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
                {t(
                  'footer_about_desc',
                  'An authoritative open-access digital archive mandated under Article 21-A of the Constitution of India. Dedicated to non-partisan civil society governance, legislative dissemination, and longitudinal public monitoring of the Right of Children to Free and Compulsory Education Act, 2009.'
                )}
              </p>
            </div>

            {/* Structured Institutional Metadata Card */}
            <div className="p-3 rounded-[3px] bg-white/[0.04] border border-white/10 space-y-1.5 text-[11px] font-sans">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Repository Identifier:</span>
                <span className="font-mono font-bold text-amber-400">RTE-IN-2009-PUB-DOCS</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Access Protocol:</span>
                <span className="text-slate-300 font-medium">Open Public Legal Archive</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>License:</span>
                <span className="text-slate-300 font-medium">CC BY 4.0 International</span>
              </div>
            </div>
          </div>

          {/* Column 2: Statutory References & Central Resources */}
          <div>
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/10">
              <BookOpen className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {t('footer_statutory_title', 'Statutory References')}
              </h3>
            </div>
            <ul className="font-sans text-xs sm:text-[13px] space-y-2.5 text-slate-300">
              <li>
                <Link to="/know-your-rte/about" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>RTE Act, 2009 (Full Text &amp; Amendments)</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/centre" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>Central Model Rules, 2010</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/rte-matrix" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>RTE State Rules Matrix (Section 38)</span>
                </Link>
              </li>
              <li>
                <Link to="/judgments" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>Landmark Constitutional Judgments</span>
                </Link>
              </li>
              <li>
                <Link to="/resources?topic=25-percent-reservation" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>Section 12(1)(c) Compliance Guidelines</span>
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-amber-400/80 group-hover:text-amber-400 shrink-0" />
                  <span>NCPCR Statutory Monitoring Protocols</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: State Resource Desks (37 States & UTs) */}
          <div>
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/10">
              <FileText className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {t('footer_state_desks_title', 'State & UT Desks')}
              </h3>
            </div>
            <ul className="font-sans text-xs sm:text-[13px] space-y-2.5 text-slate-300">
              <li>
                <Link
                  to="/resources/states"
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-[2px] bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:text-white hover:bg-amber-400/20 font-semibold transition-colors text-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>All 28 States &amp; 8 UTs Directory →</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/states/maharashtra" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                  <span>Maharashtra State RTE Desk</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/states/karnataka" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                  <span>Karnataka State RTE Desk</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/states/delhi" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                  <span>Delhi (NCT) EWS Admission Desk</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/states/telangana" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                  <span>Telangana State Desk (Active)</span>
                </Link>
              </li>
              <li>
                <Link to="/resources/states/ladakh" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                  <span>Ladakh UT Desk (Active)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Public Participation & Transparency */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/10">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {t('footer_helpdesk_title', 'Public Redressal & Helpdesk')}
                </h3>
              </div>
              <ul className="font-sans text-xs sm:text-[13px] space-y-2.5 text-slate-300 mb-5">
                <li>
                  <Link to="/coalition-25" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group text-amber-300 font-semibold">
                    <ChevronRight className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>Coalition 25 Initiative</span>
                  </Link>
                </li>
                <li>
                  <Link to="/rti" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                    <span>RTI Transparency Cell</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ask-a-question" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                    <span>Ask a Question / Helpdesk</span>
                  </Link>
                </li>
                <li>
                  <Link to="/forum" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                    <span>Public Inquiries &amp; Discussions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/report-a-grievance" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 shrink-0" />
                    <span>Report Grievance to SCPCR</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links Pills (Non-wrapping & Crisp) */}
            <div className="pt-3 border-t border-white/10">
              <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Connect with CCS India:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                <a
                  href="https://twitter.com/ccsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded-[2px] bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors whitespace-nowrap inline-flex items-center gap-1"
                  title="Twitter / X"
                >
                  <span>X (Twitter)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <a
                  href="https://facebook.com/ccsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded-[2px] bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors whitespace-nowrap inline-flex items-center gap-1"
                  title="Facebook"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <a
                  href="https://linkedin.com/company/centre-for-civil-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded-[2px] bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors whitespace-nowrap inline-flex items-center gap-1"
                  title="LinkedIn"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-400">
          <div className="text-center md:text-left text-slate-400 text-xs leading-relaxed max-w-2xl">
            <span>
              © 2026 Right to Education India Resource Initiative · Centre for Civil Society. All official notifications, circulars, and judicial orders sourced from verified public gazettes and court archives.
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 font-sans text-xs text-slate-300 flex-wrap justify-center font-medium shrink-0">
            <Link to="/about/vision-and-mission" className="hover:text-white transition-colors">
              Vision &amp; Mission
            </Link>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <Link to="/about/partners" className="hover:text-white transition-colors">
              Partners
            </Link>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <Link to="/about/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Archive Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
