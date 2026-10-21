import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  ArrowRight,
  Bookmark,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SearchInput } from '../components/ui/SearchInput';
import { Badge } from '../components/ui/Badge';
import { ALL_STATES_DATA } from '../data/statesData';
import { KEY_PROVISIONS_TOPICS } from '../data/keyProvisionsData';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(queryParam);

  const query = queryParam.trim().toLowerCase();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    }
  };

  // 1. Matched States
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

  // 2. Matched Key Provisions Topics
  const matchedTopics = useMemo(() => {
    if (!query) return [];
    return KEY_PROVISIONS_TOPICS.filter((t) =>
      t.label.toLowerCase().includes(query) || t.slug.toLowerCase().includes(query)
    );
  }, [query]);

  // Total results
  const totalResults = matchedStates.length + matchedTopics.length;

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Search the RTE Legal Archive"
          category="Statutory Discovery Engine"
          description="Unified full-text search across primary legislation, Section 38 state rules, judicial orders, and Key Provisions compendia."
        />

        {/* Search input form */}
        <form onSubmit={handleSearch} className="max-w-2xl mb-8">
          <div className="flex gap-2">
            <div className="flex-1">
              <SearchInput
                placeholder="Search by state, statutory topic, case citation, or keyword..."
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
          <div className="space-y-6">
            <div className="text-body-sm font-sans text-on-surface-variant pb-2 border-b border-border-subtle">
              Showing <strong>{totalResults}</strong> results for &ldquo;{queryParam}&rdquo;
            </div>

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
                      className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary transition-all flex flex-col justify-between"
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
                  We could not find any statutory records matching &ldquo;{queryParam}&rdquo;. Try searching by state name (e.g. &ldquo;Maharashtra&rdquo;), legal term (&ldquo;Section 12&rdquo;), or explore the State Directory.
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
            Enter a search term above to search all statutory gazettes, state rules, and judgments.
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchPage;
