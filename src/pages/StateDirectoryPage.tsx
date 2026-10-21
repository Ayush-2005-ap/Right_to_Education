import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Filter,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { SearchInput } from '../components/ui/SearchInput';
import { Select } from '../components/ui/Select';
import { ALL_STATES_DATA } from '../data/statesData';

export const StateDirectoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredStates = useMemo(() => {
    return ALL_STATES_DATA.filter((state) => {
      const matchesSearch =
        state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (state.capital && state.capital.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (state.rulesRef && state.rulesRef.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRegion = selectedRegion === 'all' || state.region === selectedRegion;
      const matchesType = selectedType === 'all' || state.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || state.rulesStatus === selectedStatus;

      return matchesSearch && matchesRegion && matchesType && matchesStatus;
    });
  }, [searchQuery, selectedRegion, selectedType, selectedStatus]);

  // Statistics
  const totalCount = ALL_STATES_DATA.length;
  const codifiedCount = ALL_STATES_DATA.filter((s) => s.rulesStatus === 'Codified').length;
  const notificationCount = ALL_STATES_DATA.filter((s) => s.rulesStatus === 'Notification Issued').length;

  return (
    <div className="py-8 space-y-8">
      <Container>
        {/* Header Ribbon */}
        <div className="mb-6">
          <SectionHeader
            title="State & Union Territory RTE Directory"
            category="Subordinate Legislation · Section 38"
            description="Comprehensive legislative and administrative tracking of Section 38 State RTE Rules, Section 12(1)(c) admission portals, reimbursement rates, and State Commission for Protection of Child Rights (SCPCR) grievance channels across 28 States and 8 Union Territories."
          />
        </div>

        {/* Directory Scope Alert */}
        <Alert
          variant="statutory"
          badgeText="Pan-India Directory"
          gazetteRef="Section 38 State Rules"
          className="mb-8"
        >
          <div className="space-y-1 text-body-sm">
            <p>
              <strong>Consolidated 37-Jurisdiction Compendium:</strong> Profiles all 28 States and 8 Union Territories, detailing Section 38 state rules, admission portals, per-child reimbursement metrics, and State Commission for Protection of Child Rights (SCPCR) grievance channels.
            </p>
          </div>
        </Alert>

        {/* Aggregate KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-container-lowest p-4 rounded-[4px] border border-border-subtle shadow-2xs">
            <span className="block font-sans text-label-sm text-on-surface-variant mb-1">Total Jurisdictions</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-display-sm font-bold text-primary">{totalCount}</span>
              <span className="font-sans text-xs text-outline">(28 States + 8 UTs)</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-4 rounded-[4px] border border-border-subtle shadow-2xs">
            <span className="block font-sans text-label-sm text-on-surface-variant mb-1">Codified State Rules</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-display-sm font-bold text-secondary">{codifiedCount}</span>
              <span className="font-sans text-xs text-secondary-container">Gazetted under Sec 38</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-4 rounded-[4px] border border-border-subtle shadow-2xs">
            <span className="block font-sans text-label-sm text-on-surface-variant mb-1">Notification Issued</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-display-sm font-bold text-primary-container">{notificationCount}</span>
              <span className="font-sans text-xs text-outline">Executive orders</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-4 rounded-[4px] border border-border-subtle shadow-2xs">
            <span className="block font-sans text-label-sm text-on-surface-variant mb-1">Sec 12(1)(c) Portals</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-display-sm font-bold text-ochre">22+</span>
              <span className="font-sans text-xs text-outline">Active lottery systems</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-surface-container-low p-5 rounded-[4px] border border-border-subtle shadow-2xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <SearchInput
                placeholder="Search State or Rule..."
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => setSearchQuery('')}
              />
            </div>

            <div>
              <Select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                options={[
                  { value: 'all', label: 'All Geographic Regions' },
                  { value: 'Northern', label: 'Northern Region' },
                  { value: 'Southern', label: 'Southern Region' },
                  { value: 'Western', label: 'Western Region' },
                  { value: 'Eastern', label: 'Eastern Region' },
                  { value: 'Central', label: 'Central Region' },
                  { value: 'North Eastern', label: 'North Eastern Region' },
                  { value: 'Islands', label: 'Islands (UT)' },
                ]}
              />
            </div>

            <div>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                options={[
                  { value: 'all', label: 'All Governance Types' },
                  { value: 'State', label: 'States (28)' },
                  { value: 'Union Territory', label: 'Union Territories (8)' },
                ]}
              />
            </div>

            <div>
              <Select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                options={[
                  { value: 'all', label: 'All Rule Statuses' },
                  { value: 'Codified', label: 'Codified State Rules' },
                  { value: 'Notification Issued', label: 'Notification Issued' },
                  { value: 'Pending Codification', label: 'Pending Codification' },
                  { value: 'UT Transition', label: 'UT Transition' },
                ]}
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-label-sm text-on-surface-variant pt-3 border-t border-border-subtle">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-outline" />
              <span>
                Showing <strong>{filteredStates.length}</strong> of {totalCount} Jurisdictions
              </span>
            </div>
            {(searchQuery || selectedRegion !== 'all' || selectedType !== 'all' || selectedStatus !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('all');
                  setSelectedType('all');
                  setSelectedStatus('all');
                }}
                className="text-primary hover:underline text-xs font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* States Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStates.map((state) => {
            const isCodified = state.rulesStatus === 'Codified';
            return (
              <div
                key={state.slug}
                className="bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary hover:shadow-card transition-all p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-sans text-[11px] font-semibold text-outline uppercase tracking-wider">
                      {state.region} · {state.type}
                    </span>
                    <Badge variant={isCodified ? 'primary' : 'neutral'}>
                      {state.rulesStatus}
                    </Badge>
                  </div>

                  {/* State Name */}
                  <h3 className="font-serif text-headline-sm font-bold text-primary group-hover:text-primary-container transition-colors mb-2">
                    <Link to={`/resources/states/${state.slug}`} className="hover:underline">
                      {state.name}
                    </Link>
                  </h3>

                  {/* Rules Reference */}
                  <div className="text-body-sm font-sans text-on-surface-variant space-y-1.5 mb-4">
                    <div className="text-xs">
                      <span className="font-medium text-outline">Statutory Reference:</span>{' '}
                      <span className="font-mono text-[11px] text-on-surface">
                        {state.rulesRef || 'Rule formulation documented in state gazette'}
                      </span>
                    </div>

                    {state.enrolmentAY23 && (
                      <div className="text-xs">
                        <span className="font-medium text-outline">AY 2022-23 Sec 12(1)(c):</span>{' '}
                        <span className="font-semibold text-primary">{state.enrolmentAY23} pupils</span>
                      </div>
                    )}

                    {state.reimbursementApproved && (
                      <div className="text-xs">
                        <span className="font-medium text-outline">Reimbursement Norm:</span>{' '}
                        <span className="text-on-surface">{state.reimbursementApproved}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-label-sm">
                  <Link
                    to={`/resources/states/${state.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-secondary transition-colors"
                  >
                    <span>Open State Desk</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  {state.portalDomain && (
                    <span className="text-[11px] font-mono text-outline-variant truncate max-w-[140px]" title={state.portalDomain}>
                      {state.portalDomain}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredStates.length === 0 && (
          <div className="p-12 text-center bg-surface-container-lowest rounded-[4px] border border-border-subtle">
            <AlertCircle className="w-10 h-10 text-outline mx-auto mb-3" />
            <h4 className="font-serif text-headline-sm font-bold text-on-surface mb-2">No matching states found</h4>
            <p className="font-sans text-body-sm text-on-surface-variant max-w-md mx-auto mb-4">
              We couldn't find any jurisdictions matching your query &ldquo;{searchQuery}&rdquo;. Try clearing your search filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
                setSelectedType('all');
                setSelectedStatus('all');
              }}
              className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-[4px] hover:bg-primary-container"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default StateDirectoryPage;
