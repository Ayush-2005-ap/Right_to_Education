import React, { useState } from 'react';
import {
  FileSpreadsheet,
  AlertTriangle,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { SearchInput } from '../components/ui/SearchInput';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';

interface MatrixRow {
  state: string;
  slug: string;
  rulesYear: string;
  sec12Quota: string;
  reimbursementFormula: string;
  smcMandate: string;
  grievanceTribunal: string;
  status: 'Complete' | 'Partial' | 'Notification Pending';
}

const SAMPLE_MATRIX_DATA: MatrixRow[] = [
  {
    state: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'State Per-Child Norm (₹12,800)',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'AP SCPCR',
    status: 'Complete',
  },
  {
    state: 'Assam',
    slug: 'assam',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'State Schedule Fixed',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'Assam SCPCR',
    status: 'Complete',
  },
  {
    state: 'Bihar',
    slug: 'bihar',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'District Assessment Metric',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'Bihar SCPCR',
    status: 'Complete',
  },
  {
    state: 'Delhi (NCT)',
    slug: 'delhi',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'Per-Child Cost (₹2,260/mo)',
    smcMandate: '75% Parents Mandated',
    grievanceTribunal: 'DCPCR',
    status: 'Complete',
  },
  {
    state: 'Gujarat',
    slug: 'gujarat',
    rulesYear: '2012',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'State Cap Ceiling (₹13,000)',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'Gujarat SCPCR',
    status: 'Complete',
  },
  {
    state: 'Karnataka',
    slug: 'karnataka',
    rulesYear: '2012',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'State Prescribed Cap (₹16,000)',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'KSCPCR',
    status: 'Complete',
  },
  {
    state: 'Maharashtra',
    slug: 'maharashtra',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'State Audited Cost (₹17,670)',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'MSCPCR',
    status: 'Complete',
  },
  {
    state: 'Rajasthan',
    slug: 'rajasthan',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'Direct DBT Unit Cost',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'RSCPCR',
    status: 'Complete',
  },
  {
    state: 'Tamil Nadu',
    slug: 'tamil-nadu',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'Annual Cost Determination',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'TNSCPCR',
    status: 'Complete',
  },
  {
    state: 'Telangana',
    slug: 'telangana',
    rulesYear: '2014/Reorg',
    sec12Quota: 'State Implementation Review',
    reimbursementFormula: 'Under State Gazette Notification',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'Telangana SCPCR',
    status: 'Partial',
  },
  {
    state: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    rulesYear: '2011',
    sec12Quota: '25% Entry Level',
    reimbursementFormula: 'Fixed ₹450/month per child',
    smcMandate: '75% Parents (50% Women)',
    grievanceTribunal: 'UPSCPCR',
    status: 'Complete',
  },
  {
    state: 'Ladakh',
    slug: 'ladakh',
    rulesYear: '2019/UT',
    sec12Quota: 'UT Norms Applicable',
    reimbursementFormula: 'Central UT Grant',
    smcMandate: 'VEC / SMC Norms',
    grievanceTribunal: 'UT Child Rights Directorate',
    status: 'Partial',
  },
];

export const RTEMatrixPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredData = SAMPLE_MATRIX_DATA.filter((row) => {
    const matchesSearch =
      row.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.sec12Quota.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.reimbursementFormula.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || row.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="RTE State Rules Comparative Matrix"
          category="Section 38 Statutory Benchmarking"
          description="Cross-jurisdictional comparative analysis of State Rules formulated under Section 38 of the Right to Education Act, 2009. Evaluates 25% quota definitions, SMC composition, teacher qualification norms, and per-child reimbursement equations."
        />

        {/* Archival Matrix Download Notice */}
        <div className="bg-surface-container-low border-l-4 border-secondary p-5 rounded-[4px] shadow-subtle mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                  Archival Comparative Dataset · Version 1.4
                </span>
                <span className="px-2 py-0.5 bg-surface-container text-on-surface font-mono text-[11px] rounded">
                  State Rules Benchmarking
                </span>
              </div>
              <p className="font-sans text-body-sm text-on-surface leading-relaxed">
                The comparative spreadsheet <strong>RTE State Rules Matrix (v1.4)</strong> provides a consolidated reference of subordinate rules notified under Section 38. For formal court proceedings or official citations, researchers are advised to cross-reference entries against individual State Gazette copies.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/sites/default/files/RTE%20Matrix%20v1.4.xlsm"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary text-white rounded-[4px] font-sans text-xs font-semibold hover:bg-primary-container transition-colors"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Download RTE Matrix (.xlsm)</span>
                </a>
                <span className="text-xs text-outline font-mono">Size: ~2.1 MB · Open Spreadsheet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Search & Filter */}
        <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="w-full sm:w-80">
            <SearchInput
              placeholder="Search by state or reimbursement norm..."
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-label-sm font-semibold text-outline whitespace-nowrap">Filter:</span>
            <button
              type="button"
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-[4px] transition-colors ${
                filterStatus === 'all' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:text-primary'
              }`}
            >
              All ({SAMPLE_MATRIX_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('Complete')}
              className={`px-3 py-1 text-xs font-semibold rounded-[4px] transition-colors ${
                filterStatus === 'Complete' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:text-primary'
              }`}
            >
              Codified
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('Partial')}
              className={`px-3 py-1 text-xs font-semibold rounded-[4px] transition-colors ${
                filterStatus === 'Partial' ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:text-primary'
              }`}
            >
              Transition / New
            </button>
          </div>
        </div>

        {/* Comparative Matrix Table */}
        <div className="bg-surface-container-lowest border border-border-subtle rounded-[4px] shadow-subtle overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State / UT</TableHead>
                <TableHead>Notification Year</TableHead>
                <TableHead>Section 12(1)(c) Quota</TableHead>
                <TableHead>Per-Child Reimbursement Norm</TableHead>
                <TableHead>SMC Composition</TableHead>
                <TableHead>Grievance Body</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.slug}>
                  <TableCell className="font-semibold text-primary">
                    <a href={`/resources/states/${row.slug}`} className="hover:underline">
                      {row.state}
                    </a>
                  </TableCell>
                  <TableCell className="font-mono text-xs">{row.rulesYear}</TableCell>
                  <TableCell className="text-body-sm">{row.sec12Quota}</TableCell>
                  <TableCell className="text-body-sm font-medium text-on-surface">{row.reimbursementFormula}</TableCell>
                  <TableCell className="text-body-sm">{row.smcMandate}</TableCell>
                  <TableCell className="text-body-sm">{row.grievanceTribunal}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === 'Complete' ? 'primary' : 'neutral'}>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Matrix Notes */}
        <div className="p-4 bg-surface-container-low rounded-[4px] border border-border-subtle text-body-sm text-on-surface-variant space-y-2">
          <p>
            <strong>Methodology Note:</strong> The state comparative metrics above are extracted from Section 38 state gazette notifications and validated against Samagra Shiksha Project Approval Board (PAB) proceedings.
          </p>
          <p>
            For official legal proceedings or court filings, please consult the authenticated state gazette notification available on individual <a href="/resources/states" className="text-primary font-semibold underline">State RTE Desks</a>.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RTEMatrixPage;
