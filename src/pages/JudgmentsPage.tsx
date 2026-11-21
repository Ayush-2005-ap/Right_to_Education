import React, { useState, useMemo } from 'react';
import {
  Download,
  Quote,
  Search,
  Calendar,
  Scale,
  Sparkles,
  ExternalLink,
  X,
  Check,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import {
  LANDMARK_CASES_DATA,
  RECENT_LEGAL_DEVELOPMENTS,
} from '../data/legalDevelopmentsData';
import type {
  LandmarkCase,
  RecentLegalDevelopment,
} from '../data/legalDevelopmentsData';

export const JudgmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'precedents' | 'recent'>('precedents');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('all');
  const [selectedCaseForModal, setSelectedCaseForModal] = useState<LandmarkCase | null>(null);
  const [selectedRecentForModal, setSelectedRecentForModal] = useState<RecentLegalDevelopment | null>(null);
  const [citationCopied, setCitationCopied] = useState(false);

  const filteredLandmarkCases = useMemo(() => {
    return LANDMARK_CASES_DATA.filter((c) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        c.parties.toLowerCase().includes(q) ||
        c.citation.toLowerCase().includes(q) ||
        c.caseRef.toLowerCase().includes(q) ||
        c.court.toLowerCase().includes(q) ||
        c.allParagraphs.some((p) => p.toLowerCase().includes(q));

      const matchesCourt =
        selectedCourt === 'all' ||
        (selectedCourt === 'Supreme Court' && (c.court.includes('Supreme Court') || c.title.includes('SC'))) ||
        (selectedCourt === 'High Court' && (c.court.includes('High Court') || c.title.includes('HC') || c.title.includes('Bom CR') || c.title.includes('DLT')));

      return matchesSearch && matchesCourt;
    });
  }, [searchQuery, selectedCourt]);

  const filteredRecentDevs = useMemo(() => {
    return RECENT_LEGAL_DEVELOPMENTS.filter((d) => {
      const q = searchQuery.toLowerCase();
      return (
        !searchQuery ||
        d.title.toLowerCase().includes(q) ||
        d.caseName.toLowerCase().includes(q) ||
        d.citation?.toLowerCase().includes(q) ||
        d.court.toLowerCase().includes(q) ||
        d.development.toLowerCase().includes(q) ||
        d.significance.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const handleCopyCitation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCitationCopied(true);
    setTimeout(() => setCitationCopied(false), 2000);
  };

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Constitutional &amp; Judicial Precedents on RTE (2014–2026)"
          category="Judicial Law Archive · Supreme Court &amp; High Courts"
          description="Authoritative jurisprudence interpreting Article 21A and the Right of Children to Free and Compulsory Education Act, 2009. Codified from the official Legal Developments compendiums, spanning 25 landmark precedent analyses and 5 recent 2025–2026 judicial and regulatory rulings."
        />

        {/* OFFICIAL DOCUMENTS DOWNLOAD BANNER */}
        <div className="bg-surface-container-low p-4 sm:p-5 rounded-[4px] border border-primary/20 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="primary">Official Legal Compendiums</Badge>
              <span className="text-xs font-mono text-outline">Verified Primary Case Notes</span>
            </div>
            <p className="font-sans text-body-sm text-on-surface">
              Download the comprehensive legal dossiers containing full background, issues, holdings, and judicial significance for all 25 landmark cases and 2025–2026 updates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <a
              href="/documents/RTE_Legal_Developments_2014-26_Case_and_Amendments.docx"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-border-subtle rounded-[2px] text-label-sm font-semibold text-primary transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-secondary" />
              <span>Landmark Cases (2014–26).docx</span>
              <span className="text-[10px] text-outline font-mono">(49 KB)</span>
            </a>
            <a
              href="/documents/RTE_Recent_Legal_Developments_2025-26.docx"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-border-subtle rounded-[2px] text-label-sm font-semibold text-primary transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-ochre" />
              <span>Recent Developments (2025–26).docx</span>
              <span className="text-[10px] text-outline font-mono">(10 KB)</span>
            </a>
          </div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 select-none">
          <button
            type="button"
            onClick={() => setActiveTab('precedents')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'precedents'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Landmark Precedents ({LANDMARK_CASES_DATA.length} Cases)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('recent')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'recent'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Sparkles className="w-4 h-4 text-ochre" />
            <span>Recent Legal Developments (2025–2026)</span>
            <Badge variant="primary">New</Badge>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="w-full sm:w-96 relative">
            <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                activeTab === 'precedents'
                  ? 'Search by case title, citation (SCC/INSC), party, or keyword...'
                  : 'Search recent 2025–2026 developments...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-body-sm bg-surface-container-lowest border border-border-subtle rounded-[2px] focus:outline-none focus:border-primary text-on-surface"
            />
          </div>

          {activeTab === 'precedents' && (
            <div className="w-full sm:w-64">
              <Select
                value={selectedCourt}
                onChange={(e) => setSelectedCourt(e.target.value)}
                options={[
                  { value: 'all', label: 'All Judicial Benches' },
                  { value: 'Supreme Court', label: 'Supreme Court of India' },
                  { value: 'High Court', label: 'High Courts of States' },
                ]}
              />
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: LANDMARK PRECEDENTS (25 Cases from File 05) */}
        {/* ========================================================================= */}
        {activeTab === 'precedents' && (
          <div className="space-y-4">
            <div className="text-xs text-outline font-mono">
              Showing {filteredLandmarkCases.length} of {LANDMARK_CASES_DATA.length} landmark decisions
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredLandmarkCases.map((c) => {
                // Find brief background and holding snippets
                const bgLines = c.sections['2. BACKGROUND'] || c.sections['BACKGROUND'] || [];
                const issuesLines = c.sections['3. LEGAL ISSUES'] || c.sections['LEGAL ISSUES'] || [];
                const snippet = bgLines[0] || c.allParagraphs[1] || '';

                return (
                  <div
                    key={c.id}
                    className="bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary transition-all p-5 sm:p-6 shadow-2xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="w-7 h-7 rounded-[2px] bg-primary/10 text-primary font-mono text-xs font-bold flex items-center justify-center">
                            #{String(c.caseNumber).padStart(2, '0')}
                          </span>
                          <Badge variant="primary">{c.court}</Badge>
                          {c.citation && (
                            <span className="font-mono text-xs font-bold text-secondary">
                              {c.citation}
                            </span>
                          )}
                          {c.date && (
                            <span className="text-xs text-outline flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {c.date}
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-headline-sm font-bold text-primary">
                          {c.parties}
                        </h3>
                        {c.caseRef && (
                          <div className="text-xs font-mono text-on-surface-variant">
                            Ref: {c.caseRef}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:justify-start pt-1 sm:pt-0">
                        <button
                          type="button"
                          onClick={() => handleCopyCitation(`${c.parties}, ${c.citation}`)}
                          className="px-2.5 py-1 text-xs font-sans font-semibold border border-border-subtle rounded-[2px] hover:bg-surface-container text-on-surface-variant transition-colors flex items-center gap-1"
                          title="Copy legal citation"
                        >
                          <Quote className="w-3 h-3" />
                          <span>Cite</span>
                        </button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => setSelectedCaseForModal(c)}
                        >
                          Read Case Dossier
                        </Button>
                      </div>
                    </div>

                    {/* Excerpt */}
                    {snippet && (
                      <p className="font-sans text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                        {snippet}
                      </p>
                    )}

                    {/* Key Issue Tag if available */}
                    {issuesLines.length > 0 && (
                      <div className="pt-2 border-t border-border-subtle/50 flex items-center gap-2 text-xs font-sans text-on-surface">
                        <span className="font-bold text-outline uppercase tracking-wider text-[10px]">Key Issue:</span>
                        <span className="line-clamp-1 italic">{issuesLines[0]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: RECENT LEGAL DEVELOPMENTS (2025–2026 from File 06) */}
        {/* ========================================================================= */}
        {activeTab === 'recent' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="high-priority">2025–2026 High Court &amp; Supreme Court Directives</Badge>
                <span className="text-xs font-mono text-outline">File (06) Real-time Dossier</span>
              </div>
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Recent Judicial, Regulatory &amp; Implementation Developments
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                Critical recent orders strengthening Section 12(1)(c) quota compliance, clarifying in-service Teacher Eligibility Test (TET) transition timelines through August 2028, staying arbitrary distance limitations, and Supreme Court questioning of regulatory monitoring bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredRecentDevs.map((dev) => (
                <div
                  key={dev.number}
                  className="bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary transition-all p-6 shadow-card space-y-4"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-7 h-7 rounded-[2px] bg-ochre/20 text-ochre font-mono text-xs font-bold flex items-center justify-center">
                          #{String(dev.number).padStart(2, '0')}
                        </span>
                        <Badge variant="primary">{dev.court}</Badge>
                        <span className="text-xs font-mono font-bold text-secondary">{dev.date}</span>
                        {dev.citation && <Badge variant="secondary">{dev.citation}</Badge>}
                      </div>
                      <h4 className="font-serif text-headline-sm font-bold text-primary">
                        {dev.title}
                      </h4>
                      <div className="text-xs font-sans text-on-surface-variant">
                        <strong>Matter:</strong> {dev.caseName} {dev.caseRef ? `(${dev.caseRef})` : ''} · <strong>Provision:</strong> {dev.provision}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedRecentForModal(dev)}
                    >
                      View Details &amp; Primary Sources
                    </Button>
                  </div>

                  <div className="space-y-2 font-sans text-body-sm text-on-surface leading-relaxed">
                    <div>
                      <strong className="text-primary font-serif">Development: </strong>
                      {dev.development}
                    </div>
                    <div>
                      <strong className="text-secondary font-serif">Legal Significance: </strong>
                      {dev.significance}
                    </div>
                  </div>

                  {/* Primary Sources Strip */}
                  {dev.sources.length > 0 && (
                    <div className="pt-3 border-t border-border-subtle flex items-center gap-2 flex-wrap text-xs font-mono">
                      <span className="font-bold text-outline">Primary Record:</span>
                      {dev.sources.map((src, sIdx) => {
                        const urlMatch = src.match(/https?:\/\/[^\s)]+/);
                        const url = urlMatch ? urlMatch[0] : null;
                        return url ? (
                          <a
                            key={sIdx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            <span>Open Source [{sIdx + 1}]</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span key={sIdx} className="text-on-surface-variant">{src}</span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL: FULL CASE DOSSIER (LANDMARK PRECEDENT) */}
        {/* ========================================================================= */}
        {selectedCaseForModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-scrim/60 backdrop-blur-xs animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-surface-container-lowest rounded-[4px] border border-border-strong w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-modal">
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-border-subtle flex items-start justify-between gap-4 bg-surface-container-low">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Badge variant="primary">{selectedCaseForModal.court}</Badge>
                    {selectedCaseForModal.citation && (
                      <span className="font-mono text-xs font-bold text-secondary">
                        {selectedCaseForModal.citation}
                      </span>
                    )}
                    {selectedCaseForModal.date && (
                      <span className="text-xs font-mono text-outline">
                        Date: {selectedCaseForModal.date}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-headline-md font-bold text-primary">
                    {selectedCaseForModal.parties}
                  </h3>
                  {selectedCaseForModal.caseRef && (
                    <span className="text-xs font-mono text-on-surface-variant block mt-1">
                      Case Number: {selectedCaseForModal.caseRef}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCaseForModal(null)}
                  className="p-1 rounded-[2px] text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 font-sans text-body-md text-on-surface leading-relaxed">
                {/* Meta Strip */}
                <div className="bg-surface-container-low p-4 rounded-[4px] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {selectedCaseForModal.bench && (
                    <div>
                      <span className="font-bold text-outline block">Bench:</span>
                      <span className="text-on-surface">{selectedCaseForModal.bench}</span>
                    </div>
                  )}
                  {selectedCaseForModal.citation && (
                    <div>
                      <span className="font-bold text-outline block">Official Citation:</span>
                      <span className="font-mono text-primary font-bold">{selectedCaseForModal.citation}</span>
                    </div>
                  )}
                </div>

                {/* Subsections */}
                {Object.entries(selectedCaseForModal.sections).map(([secTitle, secParas], sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <h4 className="font-serif text-headline-xs font-bold text-primary border-b border-border-subtle pb-1">
                      {secTitle}
                    </h4>
                    <div className="space-y-2">
                      {secParas.map((p, pIdx) => (
                        <p key={pIdx} className="text-body-sm leading-relaxed text-on-surface">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 border-t border-border-subtle bg-surface-container-low flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 safe-padding-bottom">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    handleCopyCitation(
                      `${selectedCaseForModal.parties}, ${selectedCaseForModal.citation}`
                    )
                  }
                  leftIcon={citationCopied ? <Check className="w-4 h-4 text-green-600" /> : <Quote className="w-4 h-4" />}
                >
                  {citationCopied ? 'Citation Copied!' : 'Copy Citation'}
                </Button>

                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <a
                    href="/documents/RTE_Legal_Developments_2014-26_Case_and_Amendments.docx"
                    download
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest border border-border-subtle rounded-[2px] text-xs font-semibold text-primary hover:bg-surface-container transition-colors flex-1 sm:flex-initial"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Compendium (.docx)</span>
                  </a>
                  <Button variant="primary" size="sm" onClick={() => setSelectedCaseForModal(null)}>
                    Close Dossier
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MODAL: RECENT DEVELOPMENT DETAIL */}
        {/* ========================================================================= */}
        {selectedRecentForModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-scrim/60 backdrop-blur-xs animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-surface-container-lowest rounded-[4px] border border-border-strong w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-modal">
              <div className="p-4 sm:p-6 border-b border-border-subtle flex items-start justify-between gap-4 bg-surface-container-low">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="primary">{selectedRecentForModal.court}</Badge>
                    <span className="text-xs font-mono text-outline">{selectedRecentForModal.date}</span>
                  </div>
                  <h3 className="font-serif text-headline-sm font-bold text-primary">
                    {selectedRecentForModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRecentForModal(null)}
                  className="p-1 text-outline hover:text-on-surface"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 font-sans text-body-md text-on-surface leading-relaxed">
                <div className="bg-surface-container-low p-4 rounded-[4px] space-y-1 text-xs">
                  <div><strong>Case Title:</strong> {selectedRecentForModal.caseName}</div>
                  {selectedRecentForModal.citation && <div><strong>Citation:</strong> {selectedRecentForModal.citation}</div>}
                  {selectedRecentForModal.caseRef && <div><strong>Case Number:</strong> {selectedRecentForModal.caseRef}</div>}
                  <div><strong>Provision Involved:</strong> {selectedRecentForModal.provision}</div>
                </div>

                <div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary mb-1">
                    Judicial / Regulatory Holding
                  </h4>
                  <p className="text-body-sm leading-relaxed text-on-surface">
                    {selectedRecentForModal.development}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-headline-xs font-bold text-secondary mb-1">
                    Significance &amp; Implementation Impact
                  </h4>
                  <p className="text-body-sm leading-relaxed text-on-surface">
                    {selectedRecentForModal.significance}
                  </p>
                </div>

                {selectedRecentForModal.sources.length > 0 && (
                  <div>
                    <h4 className="font-serif text-headline-xs font-bold text-primary mb-2">
                      Primary Court Records &amp; Official Disclosures
                    </h4>
                    <div className="space-y-2 text-xs">
                      {selectedRecentForModal.sources.map((s, idx) => {
                        const urlMatch = s.match(/https?:\/\/[^\s)]+/);
                        const url = urlMatch ? urlMatch[0] : null;
                        return url ? (
                          <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 bg-surface-container-low border border-border-subtle rounded-[2px] text-primary hover:underline break-all"
                          >
                            {s}
                          </a>
                        ) : (
                          <div key={idx} className="p-2 bg-surface-container-low rounded-[2px] text-on-surface-variant">
                            {s}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-border-subtle bg-surface-container-low flex justify-end">
                <Button variant="primary" size="sm" onClick={() => setSelectedRecentForModal(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default JudgmentsPage;
