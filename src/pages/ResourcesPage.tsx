import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  MapPin,
  FileSpreadsheet,
  Building2,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DocumentRow } from '../components/ui/DocumentRow';
import { SearchInput } from '../components/ui/SearchInput';
import { Select } from '../components/ui/Select';
import { KEY_PROVISIONS_TOPICS } from '../data/keyProvisionsData';

interface CentralDoc {
  id: string;
  title: string;
  category: string;
  docType: string;
  gazetteRef: string;
  authority: string;
  date: string;
  summary: string;
  tags: string[];
  fileFormat: string;
  fileSize: string;
  topicSlug?: string;
}

const CENTRAL_DOCUMENTS: CentralDoc[] = [
  {
    id: 'cd-1',
    title: 'The Right of Children to Free and Compulsory Education (Amendment) Act, 2019 (Act No. 1 of 2019)',
    category: 'Primary Legislation',
    docType: 'Central Act',
    gazetteRef: 'DL-(N)04/0007/2003-19',
    authority: 'Ministry of Law and Justice (Legislative Dept.)',
    date: '11 January 2019',
    summary: 'Statutory amendment substituting Section 16 of the Principal Act. Formulates procedural norms for regular examinations at the end of class 5 and class 8, empowering States to hold back failed pupils upon second assessment while strictly safeguarding that no child shall be expelled until completion of elementary education.',
    tags: ['Sec 16(1)-(4) Amended', 'No Detention Policy Review', 'Remedial Instruction Mandate'],
    fileFormat: 'PDF',
    fileSize: '1.8 MB',
    topicSlug: 'elementary-education',
  },
  {
    id: 'cd-2',
    title: 'Right of Children to Free and Compulsory Education Rules, 2010 (Central Model Rules)',
    category: 'Subordinate Legislation',
    docType: 'Central Rules',
    gazetteRef: 'G.S.R. 292(E)',
    authority: 'Ministry of Human Resource Development (MHRD)',
    date: '8 April 2010',
    summary: 'Central model rules formulated under Section 38 for the guidance of State Governments and Union Territories. Details procedures for establishing neighbourhood schools, maintaining children records, SMC responsibilities, and school recognition procedures.',
    tags: ['Section 38 Framework', 'Central Model Rules', 'School Recognition Standards'],
    fileFormat: 'PDF',
    fileSize: '4.2 MB',
    topicSlug: 'recognition',
  },
  {
    id: 'cd-3',
    title: 'Model Operational Guidelines for Implementation of Section 12(1)(c) — AY 2025–26',
    category: 'Executive Guidelines',
    docType: 'Advisory Guidelines',
    gazetteRef: 'F.No. 1-15/2024-EE.4',
    authority: 'Dept. of School Education & Literacy, MoE',
    date: '28 October 2024',
    summary: 'Standard operating procedure for transparent computerized lottery allotment, non-discrimination protocols, income verification certificates, and quarterly reimbursement auditing under Section 12(2).',
    tags: ['25% Reservation', 'Lottery Protocols', 'Per-Child Cost Formula'],
    fileFormat: 'PDF',
    fileSize: '3.4 MB',
    topicSlug: '25-percent-reservation',
  },
  {
    id: 'cd-4',
    title: 'Advisory on School Management Committees (SMCs) and Social Audits under Section 21',
    category: 'Monitoring Framework',
    docType: 'National Advisory',
    gazetteRef: 'F.No. 11-3/2021-EE.1',
    authority: 'Ministry of Education',
    date: '14 July 2022',
    summary: 'Directives to States on enforcing the 75% parental quota, training mother-members of SMCs, preparing three-year School Development Plans (SDPs), and integrating social audit findings into annual PAB budget approvals.',
    tags: ['SMCs & Governance', 'Social Audit', '75% Parents Mandate'],
    fileFormat: 'PDF',
    fileSize: '2.1 MB',
    topicSlug: 'smcs',
  },
  {
    id: 'cd-5',
    title: 'Pupil-Teacher Ratio (PTR) Compliance Norms & Teacher Deployment Schedule',
    category: 'Regulatory Guidelines',
    docType: 'Statutory Circular',
    gazetteRef: 'D.O. No. 2-8/2023-EE',
    authority: 'National Council for Teacher Education (NCTE)',
    date: '19 May 2023',
    summary: 'Strict instructions prohibiting rationalisation transfers that breach the 1:30 primary PTR norm specified in the Schedule to the RTE Act. Mandatory deployment verification across single-teacher and rural schools.',
    tags: ['PTR Norms', 'The Schedule', 'Teacher Allocation'],
    fileFormat: 'PDF',
    fileSize: '1.6 MB',
    topicSlug: 'teachers',
  },
];

export const ResourcesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentTopic = searchParams.get('topic');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocType, setSelectedDocType] = useState('all');

  const topicObj = currentTopic ? KEY_PROVISIONS_TOPICS.find((t) => t.slug === currentTopic) : null;

  const filteredDocs = CENTRAL_DOCUMENTS.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.gazetteRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedDocType === 'all' || doc.docType === selectedDocType;
    const matchesTopic = !currentTopic || doc.topicSlug === currentTopic || doc.tags.some(t => t.toLowerCase().includes(currentTopic.replace(/-/g, ' ')));

    return matchesSearch && matchesType && matchesTopic;
  });

  return (
    <div className="py-8 space-y-8">
      <Container>
        {/* Header Ribbon */}
        <SectionHeader
          title={topicObj ? `Key Provision: ${topicObj.label}` : 'Central Statutory Resources & Gazette Archive'}
          category={topicObj ? 'Substantive Mandate Compendium' : 'Union Government · Ministry of Education'}
          description={
            topicObj
              ? `Archival documents, notifications, and judicial guidance governing the key statutory topic "${topicObj.label}" under the Right of Children to Free and Compulsory Education Act, 2009.`
              : 'Primary and subordinate central legislation, Central Model Rules 2010, Department of School Education circulars, and Section 12(1)(c) national advisory frameworks.'
          }
        />

        {/* Topic Alert if active topic filter */}
        {topicObj && (
          <div className="p-4 bg-surface-container rounded-[4px] border border-primary/20 flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Active Topic Filter:</span>
              <span className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded-[2px]">{topicObj.label}</span>
            </div>
            <Link to="/resources" className="text-xs font-semibold text-primary hover:underline">
              Clear Topic Filter
            </Link>
          </div>
        )}

        {/* Quick Resource Subsections Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Link
            to="/resources/centre"
            className="p-5 bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary hover:shadow-card transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-headline-sm font-bold text-primary">Central Government</h3>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              Central Acts, Model Rules 2010, MoE Gazettes, and PAB Minutes.
            </p>
          </Link>

          <Link
            to="/resources/states"
            className="p-5 bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary hover:shadow-card transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <h3 className="font-serif text-headline-sm font-bold text-primary">State Directory (37)</h3>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              Section 38 state rules, admission portals, and SCPCR contacts for 37 States &amp; UTs.
            </p>
          </Link>

          <Link
            to="/resources/rte-matrix"
            className="p-5 bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary hover:shadow-card transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileSpreadsheet className="w-5 h-5 text-ochre" />
              <h3 className="font-serif text-headline-sm font-bold text-primary">RTE Rules Matrix</h3>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              Comparative cross-state matrix and v1.4 candidate spreadsheet.
            </p>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="w-full sm:w-96">
            <SearchInput
              placeholder="Search Central Gazettes &amp; Guidelines..."
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>

          <div className="w-full sm:w-64">
            <Select
              value={selectedDocType}
              onChange={(e) => setSelectedDocType(e.target.value)}
              options={[
                { value: 'all', label: 'All Document Types' },
                { value: 'Central Act', label: 'Central Acts' },
                { value: 'Central Rules', label: 'Central Rules' },
                { value: 'Advisory Guidelines', label: 'Advisory Guidelines' },
                { value: 'National Advisory', label: 'National Advisories' },
                { value: 'Statutory Circular', label: 'Statutory Circulars' },
              ]}
            />
          </div>
        </div>

        {/* Documents Stack */}
        <div className="space-y-4">
          {filteredDocs.map((doc) => (
            <DocumentRow
              key={doc.id}
              title={doc.title}
              category={doc.category}
              docType={doc.docType}
              gazetteRef={doc.gazetteRef}
              authority={doc.authority}
              date={doc.date}
              jurisdiction="Pan-India"
              summary={doc.summary}
              tags={doc.tags}
              fileFormat={doc.fileFormat}
              fileSize={doc.fileSize}
              badgeTone={doc.docType === 'Central Act' ? 'primary' : 'secondary'}
              isVerified={true}
              verificationLabel="Official Gazette Copy"
              onDownload={() => alert(`Initiating download for ${doc.title}`)}
            />
          ))}

          {filteredDocs.length === 0 && (
            <div className="p-8 text-center bg-surface-container-lowest rounded-[4px] border border-border-subtle text-on-surface-variant text-body-sm">
              No central documents found matching your filter criteria.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ResourcesPage;
