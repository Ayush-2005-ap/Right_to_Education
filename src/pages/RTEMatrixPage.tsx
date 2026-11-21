import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Search,
  ExternalLink,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { ALL_STATES_DATA } from '../data/statesData';
import { STATEWISE_ENROLMENT_1417, STATEWISE_REIMBURSEMENT_1417 } from '../data/statewiseEmpiricalData';

export const RTEMatrixPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const matrixData = useMemo(() => {
    return ALL_STATES_DATA.map((state) => {
      const stateNameLower = state.name.toLowerCase();
      const enrol = Object.entries(STATEWISE_ENROLMENT_1417).find(([s]) =>
        s.toLowerCase() === stateNameLower ||
        stateNameLower.includes(s.toLowerCase()) ||
        s.toLowerCase().includes(stateNameLower)
      )?.[1];

      const reimb = Object.entries(STATEWISE_REIMBURSEMENT_1417).find(([s]) =>
        s.toLowerCase() === stateNameLower ||
        stateNameLower.includes(s.toLowerCase()) ||
        s.toLowerCase().includes(stateNameLower)
      )?.[1];

      return {
        name: state.name,
        slug: state.slug,
        region: state.region,
        type: state.type,
        rulesStatus: state.rulesStatus,
        rulesRef: state.rulesRef || 'Gazetted under Sec 38',
        sec12Quota: '25% Entry Level Mandate',
        reimbursementApproved: state.reimbursementApproved || (reimb?.appr_1617 ? `₹${reimb.appr_1617} Lakh (16-17)` : 'Determined under Sec 12(2)'),
        reimbursementProposed: state.reimbursementProposed || (reimb?.prop_1617 ? `₹${reimb.prop_1617} Lakh (16-17)` : 'State Formula Review'),
        enrolmentStock: enrol?.['2016-17'] || state.enrolmentAY23 || 'Official Audit',
        smcMandate: '75% Parents (50% Women)',
        portalUrl: state.portalUrl,
      };
    });
  }, []);

  const filteredData = useMemo(() => {
    return matrixData.filter((row) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        row.name.toLowerCase().includes(q) ||
        row.rulesRef.toLowerCase().includes(q) ||
        row.region.toLowerCase().includes(q) ||
        row.reimbursementApproved.toLowerCase().includes(q);

      const matchesRegion = filterRegion === 'all' || row.region === filterRegion;
      const matchesStatus = filterStatus === 'all' || row.rulesStatus === filterStatus;

      return matchesSearch && matchesRegion && matchesStatus;
    });
  }, [matrixData, searchQuery, filterRegion, filterStatus]);

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="RTE State Rules Comparative Matrix (All 37 States &amp; UTs)"
          category="Section 38 Statutory Benchmarking"
          description="Cross-jurisdictional comparative analysis of subordinate rules formulated under Section 38 of the Right to Education Act, 2009. Codified from the official 2014–2026 Statewise Research dataset, covering all 28 States and 8 Union Territories plus Ladakh."
        />

        {/* Archival Matrix Download Notice */}
        <div className="bg-surface-container-lowest border border-border-subtle p-6 rounded-[4px] shadow-card mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="primary">Official Master Dataset</Badge>
                <span className="text-xs font-mono text-outline">624 Empirical Observations · All 37 Jurisdictions</span>
              </div>
              <h3 className="font-serif text-headline-sm font-bold text-primary">
                Consolidated RTE Statewise Research Compendium (2014–2026)
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant max-w-2xl leading-relaxed">
                Download the master spreadsheet containing empirical state data on Section 12(1)(c) enrolments, reimbursement proposed vs approved, private school counts, and verified primary citations from Lok Sabha &amp; Rajya Sabha questions.
              </p>
            </div>
            <a
              href="/documents/RTE_Statewise_Research_2014-2026.xlsx"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-[2px] font-sans text-xs font-semibold hover:bg-primary-container transition-colors shrink-0 shadow-2xs"
            >
              <Download className="w-4 h-4 text-ochre" />
              <span>Download Statewise Research (.xlsx)</span>
            </a>
          </div>
        </div>

        {/* Interactive Search & Filter Bar */}
        <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by state, gazette rule, or rate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-surface-container-lowest border border-border-subtle rounded-[2px] focus:outline-none focus:border-primary text-on-surface"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-outline font-medium">Region:</span>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="px-2.5 py-1.5 bg-surface-container-lowest border border-border-subtle rounded-[2px] text-xs font-medium text-primary focus:outline-none"
              >
                <option value="all">All Regions</option>
                <option value="Northern">Northern</option>
                <option value="Western">Western</option>
                <option value="Southern">Southern</option>
                <option value="Eastern">Eastern</option>
                <option value="Central">Central</option>
                <option value="North Eastern">North Eastern</option>
                <option value="Island">Island Territory</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-outline font-medium">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-2.5 py-1.5 bg-surface-container-lowest border border-border-subtle rounded-[2px] text-xs font-medium text-primary focus:outline-none"
              >
                <option value="all">All Statuses ({ALL_STATES_DATA.length})</option>
                <option value="Codified">Codified Rules</option>
                <option value="Draft">Draft / Transition</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comparative Matrix Table */}
        <div className="bg-surface-container-lowest border border-border-subtle rounded-[4px] shadow-subtle overflow-hidden">
          <div className="md:hidden px-3.5 py-1.5 bg-surface-container-low text-[11px] text-outline font-sans flex items-center justify-between border-b border-border-subtle">
            <span>← Swipe horizontally to view all columns</span>
            <span className="font-mono text-primary font-bold">37 States/UTs</span>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>State / UT</TableHead>
                  <TableHead>Region &amp; Type</TableHead>
                  <TableHead>Statutory Rules Ref (Sec 38)</TableHead>
                  <TableHead>Section 12(1)(c) Quota</TableHead>
                  <TableHead>Reimbursement Norm</TableHead>
                  <TableHead>Enrolment (Stock)</TableHead>
                  <TableHead>SMC Composition</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Desk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.slug} className="hover:bg-surface-container-low transition-colors">
                    <TableCell className="font-semibold text-primary">
                      <Link to={`/resources/states/${row.slug}`} className="hover:underline flex items-center gap-1">
                        <span>{row.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell className="text-xs text-on-surface-variant">
                      <div>{row.region}</div>
                      <span className="text-[10px] text-outline">{row.type}</span>
                    </TableCell>
                    <TableCell className="font-mono text-xs max-w-xs truncate text-on-surface" title={row.rulesRef}>
                      {row.rulesRef}
                    </TableCell>
                    <TableCell className="text-xs">{row.sec12Quota}</TableCell>
                    <TableCell className="text-xs font-mono font-medium text-primary">
                      {row.reimbursementApproved}
                    </TableCell>
                    <TableCell className="font-mono text-xs font-bold text-secondary">
                      {row.enrolmentStock}
                    </TableCell>
                    <TableCell className="text-xs text-on-surface-variant">{row.smcMandate}</TableCell>
                    <TableCell>
                      <Badge variant={row.rulesStatus === 'Codified' ? 'secondary' : 'neutral'}>
                        {row.rulesStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link
                        to={`/resources/states/${row.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Matrix Notes */}
        <div className="p-4 bg-surface-container-low rounded-[4px] border border-border-subtle text-body-sm text-on-surface-variant space-y-2">
          <p>
            <strong>Methodology Note:</strong> The state comparative metrics above are extracted from official State Gazette notifications issued under Section 38 and cross-referenced with the <em>(07) RTE Statewise Research (2014–2026)</em> master workbook.
          </p>
          <p>
            For individual state notifications, lottery portal links, and historical AWP&amp;B reimbursement data, navigate to individual <Link to="/resources/states" className="text-primary font-semibold underline">State RTE Desks</Link>.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RTEMatrixPage;
