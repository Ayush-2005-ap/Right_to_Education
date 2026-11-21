import React, { useState, useMemo } from 'react';
import {
  Download,
  ExternalLink,
  Search,
  Database,
  BarChart3,
  Scale,
  Info,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Select } from '../components/ui/Select';
import {
  NATIONAL_12_1_C_ENROLMENT_TRENDS,
  CENTRAL_REIMBURSEMENT_APPROVALS_2024_25,
  UDISE_NATIONAL_BENCHMARKS,
  CENTRAL_DATA_DISCLOSURES,
} from '../data/centralRTEData';
import {
  MASTER_RESEARCH_ITEMS,
  OFFICIAL_SOURCES_DATA,
  PRIORITY_RESEARCH_AREAS,
} from '../data/masterResearchTrackerData';
import { OFFICIAL_DOCUMENT_DOWNLOADS } from '../data/knowYourRTEFullData';

export const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'central' | 'tracker' | 'sources' | 'priority' | 'downloads' | 'legislation'>('central');

  // Search & Filters
  const [centralSearch, setCentralSearch] = useState('');
  const [trackerSearch, setTrackerSearch] = useState('');
  const [trackerCategory, setTrackerCategory] = useState('all');

  // Central disclosures filtered
  const filteredCentralDisclosures = useMemo(() => {
    if (!centralSearch.trim()) return CENTRAL_DATA_DISCLOSURES.slice(0, 30);
    const q = centralSearch.toLowerCase();
    return CENTRAL_DATA_DISCLOSURES.filter(
      (d) =>
        d.indicator.toLowerCase().includes(q) ||
        d.dataCategory.toLowerCase().includes(q) ||
        d.statutoryProvision.toLowerCase().includes(q) ||
        d.reportedData.toLowerCase().includes(q) ||
        d.researchNotes.toLowerCase().includes(q)
    );
  }, [centralSearch]);

  // Master Tracker filtered
  const filteredTrackerItems = useMemo(() => {
    return MASTER_RESEARCH_ITEMS.filter((item) => {
      const q = trackerSearch.toLowerCase();
      const matchesSearch =
        !trackerSearch ||
        item.title.toLowerCase().includes(q) ||
        item.authority.toLowerCase().includes(q) ||
        item.relevantProvision.toLowerCase().includes(q) ||
        item.briefSummary.toLowerCase().includes(q) ||
        item.legalImpact.toLowerCase().includes(q);

      const matchesCat = trackerCategory === 'all' || item.category === trackerCategory;
      return matchesSearch && matchesCat;
    });
  }, [trackerSearch, trackerCategory]);

  return (
    <div className="py-8 space-y-8">
      <Container>
        {/* Header Ribbon */}
        <SectionHeader
          title="Central Data, Policy Reports &amp; Master Research Repository"
          category="Union Government Disclosures · Empirical Research &amp; Sources"
          description="Consolidated central data compendium codifying official disclosures from the Ministry of Education, parliamentary question archives (Lok Sabha &amp; Rajya Sabha), UDISE+ school education statistics, the 22-item Master Research Tracker, and 15 primary statutory databases."
        />

        {/* TOP TAB NAVIGATION */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 select-none">
          <button
            type="button"
            onClick={() => setActiveTab('central')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'central'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Central Government Report &amp; Data</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tracker')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'tracker'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Master Research Tracker ({MASTER_RESEARCH_ITEMS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sources')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'sources'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Official Primary Sources (15)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('priority')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'priority'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Priority Research Areas (16)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('downloads')}
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === 'downloads'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            <Download className="w-4 h-4 text-ochre" />
            <span>Official Compendiums Download Center (9)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CENTRAL GOVERNMENT REPORT & EMPIRICAL DATA */}
        {/* ========================================================================= */}
        {activeTab === 'central' && (
          <div className="space-y-8">
            {/* National Section 12(1)(c) Enrolment Trend Table */}
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="primary">Rajya Sabha Unstarred Q.1483</Badge>
                    <span className="text-xs font-mono text-outline">Answered: 2 August 2023</span>
                  </div>
                  <h3 className="font-serif text-headline-sm font-bold text-primary">
                    National Enrolment under Section 12(1)(c) (2018–19 to 2022–23)
                  </h3>
                </div>
                <a
                  href="https://sansad.in/getFile/annex/260/AU1483.pdf?source=pqars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container text-xs font-semibold text-primary rounded-[2px] border border-border-subtle hover:bg-surface-container-high transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Official Parliamentary Annexure</span>
                </a>
              </div>

              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                Total reported numbers of children admitted to or studying in private unaided schools under Section 12(1)(c) nationwide. <em>Important:</em> These figures represent total stock enrolment (children studying), not exclusively new annual entry admissions.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-body-sm border border-border-subtle">
                  <thead className="bg-surface-container-low font-semibold text-primary border-b border-border-subtle">
                    <tr>
                      <th className="p-3">Academic Year</th>
                      <th className="p-3 text-right">Children Admitted / Studying</th>
                      <th className="p-3">Official Parliamentary Citation</th>
                      <th className="p-3 text-right">Primary Document</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {NATIONAL_12_1_C_ENROLMENT_TRENDS.map((row) => (
                      <tr key={row.academicYear} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="p-3 font-mono font-bold text-primary">{row.academicYear}</td>
                        <td className="p-3 font-mono font-bold text-right text-secondary text-headline-xs">
                          {row.formattedCount}
                        </td>
                        <td className="p-3 text-xs text-on-surface-variant">{row.parliamentarySource}</td>
                        <td className="p-3 text-right">
                          <a
                            href={row.documentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                          >
                            <span>Official PDF</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Data Discrepancy Note */}
              <div className="p-3 bg-surface-container-low rounded-[4px] border border-border-subtle flex items-start gap-2.5 text-xs text-on-surface-variant">
                <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <strong>Statutory Discrepancy Note:</strong> A separate Rajya Sabha answer (UQ No. 665, 8 Feb 2023) reported 45,23,080 for 2020-21 and 48,96,953 for 2021-22. As per official research guidelines, both parliamentary disclosures are retained without arbitrary modification until reconciled by the Ministry of Education.
                </div>
              </div>
            </div>

            {/* Central Reimbursement Approvals Table (2024-25) & 5 Financial Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Approvals Table */}
              <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-4">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <Badge variant="primary">Rajya Sabha Unstarred Q.1148</Badge>
                    <h3 className="font-serif text-headline-sm font-bold text-primary mt-1">
                      Central Reimbursement Approvals by State (FY 2024–25)
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-outline">Total Approved: ₹2,84,098.18 Lakh</span>
                </div>

                <div className="overflow-x-auto max-h-96">
                  <table className="w-full text-left font-sans text-body-sm border border-border-subtle">
                    <thead className="bg-surface-container-low font-semibold text-primary border-b border-border-subtle sticky top-0">
                      <tr>
                        <th className="p-2.5">State / Union Territory</th>
                        <th className="p-2.5 text-right">Approved Amount (₹ Lakh)</th>
                        <th className="p-2.5 text-right">In Crore</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      {CENTRAL_REIMBURSEMENT_APPROVALS_2024_25.map((item) => (
                        <tr key={item.state} className="hover:bg-surface-container-low transition-colors">
                          <td className="p-2.5 font-medium text-on-surface">{item.state}</td>
                          <td className="p-2.5 font-mono font-bold text-right text-primary">
                            ₹{item.approvedAmountLakh.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </td>
                          <td className="p-2.5 font-mono text-right text-xs text-outline">
                            ₹{(item.approvedAmountLakh / 100).toFixed(2)} Cr
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5 Financial Categories Explanation */}
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-secondary" />
                    <h4 className="font-serif text-headline-xs font-bold text-primary">
                      The 5 Statutory Financial Categories
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Official financial records on RTE Section 12(2) reimbursement must be distinguished into five separate categories that cannot be used interchangeably:
                  </p>
                  <ol className="font-sans text-xs space-y-2 text-on-surface list-decimal pl-4">
                    <li><strong>Amount Claimed:</strong> Submitted by State/UT to the Centre.</li>
                    <li><strong>Amount Proposed:</strong> Outlined in annual PAB planning sheets.</li>
                    <li><strong>Amount Approved:</strong> Cleared by Project Approval Board (PAB).</li>
                    <li><strong>Amount Released:</strong> Actually transferred from Central to State accounts.</li>
                    <li><strong>Actual Expenditure:</strong> Paid to participating schools.</li>
                  </ol>
                </div>

                <div className="pt-3 border-t border-border-subtle text-[11px] text-outline italic">
                  Note: Zero approval in a given financial year indicates procedural or claim submission status; it does not prove zero admissions occurred.
                </div>
              </div>
            </div>

            {/* UDISE+ National School Benchmarks */}
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Badge variant="primary">UDISE+ 2024–25</Badge>
                  <span className="text-xs font-mono text-outline">Department of School Education &amp; Literacy</span>
                </div>
                <a
                  href={UDISE_NATIONAL_BENCHMARKS.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Open Official UDISE+ Report</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="font-serif text-headline-sm font-bold text-primary">
                National School Education System Benchmarks (Contextual Baseline)
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-xs text-outline block">Total Schools (All Categories)</span>
                  <span className="font-mono text-headline-xs font-bold text-primary mt-1 block">
                    {UDISE_NATIONAL_BENCHMARKS.totalSchools}
                  </span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-xs text-outline block">Total National Enrolment</span>
                  <span className="font-mono text-headline-xs font-bold text-secondary mt-1 block">
                    {UDISE_NATIONAL_BENCHMARKS.totalEnrolment}
                  </span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-xs text-outline block">Total Teachers</span>
                  <span className="font-mono text-headline-xs font-bold text-ochre mt-1 block">
                    {UDISE_NATIONAL_BENCHMARKS.totalTeachers}
                  </span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-xs text-outline block">Private Unaided Schools</span>
                  <span className="font-mono text-headline-xs font-bold text-primary mt-1 block">
                    {UDISE_NATIONAL_BENCHMARKS.privateUnaidedSchools}
                  </span>
                </div>
              </div>
            </div>

            {/* Central Disclosures Browser (93 Items) */}
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle shadow-card space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-headline-sm font-bold text-primary">
                    Central Government Disclosures Repository ({CENTRAL_DATA_DISCLOSURES.length} Entries)
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Parsed from official (09) RTE Central Government Data (2014-2026).xlsx.
                  </p>
                </div>
                <div className="w-full sm:w-80 relative">
                  <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search disclosures, provisions, indicators..."
                    value={centralSearch}
                    onChange={(e) => setCentralSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-surface-container-low border border-border-subtle rounded-[2px] focus:outline-none focus:border-primary text-on-surface"
                  />
                </div>
              </div>

              <div className="overflow-x-auto max-h-[500px]">
                <table className="w-full text-left font-sans text-xs border border-border-subtle">
                  <thead className="bg-surface-container-low font-semibold text-primary border-b border-border-subtle sticky top-0">
                    <tr>
                      <th className="p-2.5">Sr</th>
                      <th className="p-2.5">Date / Period</th>
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5">Indicator &amp; Reported Data</th>
                      <th className="p-2.5">Statutory Provision</th>
                      <th className="p-2.5">Authority &amp; Verification</th>
                      <th className="p-2.5 text-right">Source Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {filteredCentralDisclosures.map((d) => (
                      <tr key={d.id} className="hover:bg-surface-container-low transition-colors">
                        <td className="p-2.5 font-mono text-outline">#{d.srNo}</td>
                        <td className="p-2.5 font-mono whitespace-nowrap">
                          <div>{d.reportingDate}</div>
                          <div className="text-[10px] text-outline">{d.periodOrYear}</div>
                        </td>
                        <td className="p-2.5">
                          <span className="px-1.5 py-0.5 bg-surface-container rounded-[2px] font-mono text-[10px] text-primary">
                            {d.dataCategory}
                          </span>
                        </td>
                        <td className="p-2.5 max-w-xs">
                          <div className="font-semibold text-on-surface">{d.indicator}</div>
                          <div className="font-mono text-primary font-bold">{d.reportedData} {d.unitOrMetric}</div>
                          {d.researchNotes && (
                            <div className="text-[10px] text-outline line-clamp-1 italic">{d.researchNotes}</div>
                          )}
                        </td>
                        <td className="p-2.5 font-mono text-[10px] text-secondary">{d.statutoryProvision}</td>
                        <td className="p-2.5">
                          <div className="font-medium text-on-surface">{d.officialAuthority}</div>
                          <div className="text-[10px] text-green-700">{d.verificationStatus}</div>
                        </td>
                        <td className="p-2.5 text-right">
                          {d.sourceLink && d.sourceLink.startsWith('http') ? (
                            <a
                              href={d.sourceLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-primary hover:underline font-mono text-[11px]"
                            >
                              <span>View</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-outline text-[10px]">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MASTER RESEARCH TRACKER (22 Items from File 01) */}
        {/* ========================================================================= */}
        {activeTab === 'tracker' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-headline-md font-bold text-primary">
                  RTE 2.0 Master Research Tracker ({MASTER_RESEARCH_ITEMS.length} Verified Milestones)
                </h3>
                <p className="font-sans text-xs text-on-surface-variant">
                  Longitudinal legal tracker from 2014 to 2026 compiling verified judgments, statutory amendments, and regulatory notifications.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-48">
                  <Select
                    value={trackerCategory}
                    onChange={(e) => setTrackerCategory(e.target.value)}
                    options={[
                      { value: 'all', label: 'All Categories' },
                      { value: 'Judgment', label: 'Judgments' },
                      { value: 'Amendment', label: 'Amendments' },
                      { value: 'Administrative', label: 'Administrative' },
                      { value: 'Report', label: 'Reports' },
                    ]}
                  />
                </div>
                <div className="w-64 relative">
                  <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search tracker..."
                    value={trackerSearch}
                    onChange={(e) => setTrackerSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-surface-container-low border border-border-subtle rounded-[2px] focus:outline-none focus:border-primary text-on-surface"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredTrackerItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary transition-all shadow-2xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold text-secondary">{item.year}</span>
                        {item.date && item.date !== item.year && (
                          <span className="text-xs text-outline font-mono">({item.date})</span>
                        )}
                        <Badge variant="primary">{item.category}</Badge>
                        <Badge variant="outline">{item.authority}</Badge>
                      </div>
                      <h4 className="font-serif text-headline-sm font-bold text-primary">
                        {item.title}
                      </h4>
                      <div className="text-xs font-mono text-secondary">
                        Provision: {item.relevantProvision}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-body-sm pt-2 border-t border-border-subtle">
                    <div>
                      <strong className="text-primary font-serif block mb-1">Brief Summary:</strong>
                      <p className="text-on-surface-variant leading-relaxed text-xs">{item.briefSummary}</p>
                    </div>
                    <div>
                      <strong className="text-secondary font-serif block mb-1">Legal Impact:</strong>
                      <p className="text-on-surface-variant leading-relaxed text-xs">{item.legalImpact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: OFFICIAL PRIMARY SOURCES (15 Databases from File 01) */}
        {/* ========================================================================= */}
        {activeTab === 'sources' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle">
              <h3 className="font-serif text-headline-md font-bold text-primary mb-1">
                Authoritative Primary Source Repository ({OFFICIAL_SOURCES_DATA.length} Verified Gateways)
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant">
                The official primary databases, gazette repositories, and parliamentary portals recommended for legal verification and empirical RTE research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {OFFICIAL_SOURCES_DATA.map((src) => (
                <div
                  key={src.id}
                  className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant={src.priority === 'Very High' ? 'primary' : 'secondary'}>
                        {src.priority} Priority
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-outline" />
                    </div>
                    <h4 className="font-serif text-headline-xs font-bold text-primary">
                      {src.source}
                    </h4>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                      {src.usage}
                    </p>
                    {src.notes && (
                      <div className="p-2 bg-surface-container-low rounded-[2px] text-[11px] text-outline italic">
                        {src.notes}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-3 border-t border-border-subtle">
                    <a
                      href={src.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Access Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: PRIORITY RESEARCH AREAS (16 Areas from File 01) */}
        {/* ========================================================================= */}
        {activeTab === 'priority' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle">
              <h3 className="font-serif text-headline-md font-bold text-primary mb-1">
                Priority Research Areas on the RTE Act ({PRIORITY_RESEARCH_AREAS.length} Key Topics)
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant">
                Strategic focus areas for empirical researchers, legal scholars, and education rights advocates, detailing specific legal provisions and starting case precedents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRIORITY_RESEARCH_AREAS.map((area) => (
                <div
                  key={area.id}
                  className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary transition-all shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant={area.priority === 'High' ? 'primary' : 'neutral'}>
                      {area.priority} Priority
                    </Badge>
                    <span className="font-mono text-xs text-secondary font-bold">
                      {area.relevantProvisions}
                    </span>
                  </div>

                  <h4 className="font-serif text-headline-xs font-bold text-primary">
                    {area.researchArea}
                  </h4>

                  <div className="space-y-2 text-xs font-sans">
                    <div>
                      <strong className="text-primary font-semibold block">Key Questions to Investigate:</strong>
                      <p className="text-on-surface-variant leading-relaxed">{area.keyQuestions}</p>
                    </div>
                    {area.importantStartingPoint && (
                      <div className="p-2 bg-surface-container-low rounded-[2px]">
                        <strong className="text-secondary font-semibold block text-[11px]">Important Starting Precedents:</strong>
                        <span className="text-outline text-[11px] italic">{area.importantStartingPoint}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: DOWNLOAD CENTER (All 9 Drive Compendiums) */}
        {/* ========================================================================= */}
        {activeTab === 'downloads' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary">Google Drive Master Archive</Badge>
                <span className="text-xs font-mono text-outline">Verified Drive Sync · November 2026</span>
              </div>
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Official Research Compendiums Download Center
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant">
                Direct download access to the complete, unedited source files (Word .docx and Excel .xlsx) provided in the official RTE 2.0 master Google Drive archive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFICIAL_DOCUMENT_DOWNLOADS.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle hover:border-primary transition-all flex flex-col justify-between shadow-card"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 font-mono text-[11px] font-bold rounded-[2px] bg-primary text-white">
                        {doc.format}
                      </span>
                      <span className="text-xs font-mono text-outline">{doc.size}</span>
                    </div>

                    <div className="text-[10px] font-mono uppercase text-secondary font-bold">
                      {doc.category}
                    </div>

                    <h4 className="font-serif text-headline-xs font-bold text-primary">
                      {doc.title}
                    </h4>

                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border-subtle">
                    <a
                      href={doc.url}
                      download
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-[2px] hover:bg-primary-container transition-colors shadow-2xs"
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
      </Container>
    </div>
  );
};

export default ResourcesPage;
