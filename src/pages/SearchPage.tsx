import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  ArrowRight,
  Bookmark,
  Megaphone,
  Scale,
  Download,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SearchInput } from '../components/ui/SearchInput';
import { Badge } from '../components/ui/Badge';
import { ALL_STATES_DATA } from '../data/statesData';
import { KEY_PROVISIONS_TOPICS } from '../data/keyProvisionsData';
import { ANNOUNCEMENT_ITEMS, type AnnouncementItem } from '../data/announcementsData';
import { AnnouncementModal } from '../components/announcements/AnnouncementModal';
import { LANDMARK_CASES_DATA } from '../data/legalDevelopmentsData';
import { OFFICIAL_DOCUMENT_DOWNLOADS } from '../data/knowYourRTEFullData';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(queryParam);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem | null>(null);

  const query = queryParam.trim().toLowerCase();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    }
  };

  // 1. Matched Announcements & Releases
  const matchedAnnouncements = useMemo(() => {
    if (!query) return [];
    return ANNOUNCEMENT_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.refNumber.toLowerCase().includes(query) ||
        item.authority.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query))
    );
  }, [query]);

  // 2. Matched States
  const matchedStates = useMemo(() => {
    if (!query) return [];
    return ALL_STATES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.capital && s.capital.toLowerCase().includes(query)) ||
        (s.rulesRef && s.rulesRef.toLowerCase().includes(query)) ||
        s.region.toLowerCase().includes(query)
    );
  }, [query]);

  // 3. Matched Landmark Judgments
  const matchedJudgments = useMemo(() => {
    if (!query) return [];
    return LANDMARK_CASES_DATA.filter(
      (c) =>
        c.parties.toLowerCase().includes(query) ||
        c.citation.toLowerCase().includes(query) ||
        c.court.toLowerCase().includes(query) ||
        c.caseRef.toLowerCase().includes(query) ||
        c.allParagraphs.some((p) => p.toLowerCase().includes(query))
    );
  }, [query]);

  // 4. Matched Official Downloads
  const matchedDocuments = useMemo(() => {
    if (!query) return [];
    return OFFICIAL_DOCUMENT_DOWNLOADS.filter(
      (d) =>
        d.title.toLowerCase().includes(query) ||
        d.filename.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query) ||
        d.category.toLowerCase().includes(query)
    );
  }, [query]);

  // 5. Matched Key Provisions Topics
  const matchedTopics = useMemo(() => {
    if (!query) return [];
    return KEY_PROVISIONS_TOPICS.filter((t) =>
      t.label.toLowerCase().includes(query) || t.slug.toLowerCase().includes(query)
    );
  }, [query]);

  // Total results
  const totalResults =
    matchedAnnouncements.length +
    matchedStates.length +
    matchedJudgments.length +
    matchedDocuments.length +
    matchedTopics.length;

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Search the RTE Legal &amp; Research Archive"
          category="Statutory Discovery Engine"
          description="Unified full-text search across primary legislation, Section 38 state rules, 25 landmark court decisions, 9 official research compendiums, and Section 12(1)(c) data."
        />

        {/* Search input form */}
        <form onSubmit={handleSearch} className="max-w-2xl mb-8">
          <div className="flex gap-2">
            <div className="flex-1">
              <SearchInput
                placeholder="Search by state, case citation (SCC/INSC), topic, or keyword..."
                value={searchInput}
                onChange={setSearchInput}
                onClear={() => setSearchInput('')}
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 bg-primary text-white font-sans text-label-md font-semibold rounded-[4px] hover:bg-primary-container transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {query ? (
          <div className="space-y-8">
            <div className="text-body-sm font-sans text-on-surface-variant pb-2 border-b border-border-subtle">
              Showing <strong>{totalResults}</strong> verified records for &ldquo;{queryParam}&rdquo;
            </div>

            {/* Matched Official Documents */}
            {matchedDocuments.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
                  <Download className="w-5 h-5 text-ochre" />
                  <span>Official Research Compendiums ({matchedDocuments.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-surface-container-lowest p-4 rounded-[4px] border border-border-subtle flex flex-col justify-between shadow-2xs space-y-2"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="px-1.5 py-0.5 bg-primary text-white font-mono text-[10px] font-bold rounded-[2px]">
                            {doc.format} · {doc.size}
                          </span>
                          <span className="text-[10px] text-outline font-mono">{doc.category}</span>
                        </div>
                        <h4 className="font-serif text-headline-xs font-bold text-primary">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                          {doc.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-border-subtle flex justify-end">
                        <a
                          href={doc.url}
                          download
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download {doc.filename}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Judicial Precedents */}
            {matchedJudgments.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
                  <Scale className="w-5 h-5 text-secondary" />
                  <span>Landmark Judicial Precedents ({matchedJudgments.length})</span>
                </h3>
                <div className="divide-y divide-border-subtle border border-border-subtle rounded-[4px] overflow-hidden bg-surface-container-lowest">
                  {matchedJudgments.map((c) => (
                    <div key={c.id} className="p-4 hover:bg-surface-container-low transition-colors space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="primary">{c.court}</Badge>
                        {c.citation && <span className="font-mono text-xs font-bold text-secondary">{c.citation}</span>}
                        {c.date && <span className="text-xs text-outline font-mono">({c.date})</span>}
                      </div>
                      <h4 className="font-serif text-body-lg font-bold text-primary">
                        <Link to="/judgments" className="hover:underline">
                          {c.parties}
                        </Link>
                      </h4>
                      {c.caseRef && <div className="text-xs font-mono text-on-surface-variant">{c.caseRef}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Announcements & Releases */}
            {matchedAnnouncements.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-ochre" />
                  <span>New Releases &amp; Official Announcements ({matchedAnnouncements.length})</span>
                </h3>
                <div className="divide-y divide-border-subtle border border-border-subtle rounded-[4px] overflow-hidden bg-surface-container-lowest">
                  {matchedAnnouncements.map((ann) => (
                    <div
                      key={ann.id}
                      className="p-4 hover:bg-surface-container-low/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="primary">{ann.categoryLabel}</Badge>
                          {ann.isNew && (
                            <span className="px-1.5 py-0.2 rounded-[2px] bg-tertiary-container text-white font-mono text-[9px] font-bold">
                              NEW
                            </span>
                          )}
                          <span className="font-mono text-xs text-outline">
                            {ann.date} · Ref: {ann.refNumber}
                          </span>
                        </div>
                        <h4
                          className="font-serif text-body-lg font-bold text-primary group-hover:text-secondary cursor-pointer"
                          onClick={() => setSelectedAnnouncement(ann)}
                        >
                          {ann.title}
                        </h4>
                        <p className="font-sans text-body-sm text-on-surface-variant line-clamp-1">
                          {ann.summary}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedAnnouncement(ann)}
                        className="self-start sm:self-center px-3 py-1.5 rounded-[4px] bg-surface-container hover:bg-surface-container-high text-primary font-sans text-xs font-semibold shrink-0"
                      >
                        Read Notice
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matched States Section */}
            {matchedStates.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>State &amp; Union Territory RTE Desks ({matchedStates.length})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchedStates.map((state) => (
                    <div
                      key={state.slug}
                      className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary transition-all flex flex-col justify-between shadow-2xs"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Badge variant="primary">{state.type}</Badge>
                          <span className="text-xs text-outline">{state.region} Region</span>
                        </div>
                        <h4 className="font-serif text-headline-xs font-bold text-primary">
                          <Link to={`/resources/states/${state.slug}`} className="hover:underline">
                            {state.name}
                          </Link>
                        </h4>
                        <p className="text-xs font-mono text-outline mt-1 truncate">
                          {state.rulesRef || 'Section 38 State Rules on record'}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-border-subtle">
                        <Link
                          to={`/resources/states/${state.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary"
                        >
                          <span>Open State Desk</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Topics Section */}
            {matchedTopics.length > 0 && (
              <div className="space-y-3 pt-4">
                <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-ochre" />
                  <span>Key Provisions Compendia ({matchedTopics.length})</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {matchedTopics.map((topic) => (
                    <Link
                      key={topic.slug}
                      to={`/resources?topic=${topic.slug}`}
                      className="px-4 py-2 bg-surface-container-lowest hover:bg-surface-container border border-border-subtle rounded-[4px] text-body-sm font-medium text-primary hover:border-primary transition-all inline-flex items-center gap-2"
                    >
                      <span>{topic.label}</span>
                      <ArrowRight className="w-3 h-3 text-outline" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {totalResults === 0 && (
              <div className="p-12 text-center bg-surface-container-lowest rounded-[4px] border border-border-subtle space-y-3">
                <Search className="w-10 h-10 text-outline mx-auto" />
                <h4 className="font-serif text-headline-sm font-bold text-primary">No Records Found</h4>
                <p className="font-sans text-body-sm text-on-surface-variant max-w-md mx-auto">
                  We could not find any statutory records matching &ldquo;{queryParam}&rdquo;. Try searching by state name (e.g. &ldquo;Maharashtra&rdquo;), case name (&ldquo;Pramati&rdquo;), or explore the State Directory.
                </p>
                <Link to="/resources/states">
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-[4px] hover:bg-primary-container transition-colors"
                  >
                    View All 37 States &amp; UTs
                  </button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 bg-surface-container-lowest rounded-[4px] border border-border-subtle text-body-sm text-on-surface-variant">
            Enter a search term above to search all statutory gazettes, state rules, court judgments, and official research downloads.
          </div>
        )}
      </Container>

      {/* Detail Modal */}
      <AnnouncementModal
        item={selectedAnnouncement}
        isOpen={Boolean(selectedAnnouncement)}
        onClose={() => setSelectedAnnouncement(null)}
      />
    </div>
  );
};

export default SearchPage;
