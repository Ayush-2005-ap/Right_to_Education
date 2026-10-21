import React, { useState } from 'react';
import {
  Download,
  Quote,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SearchInput } from '../components/ui/SearchInput';
import { Select } from '../components/ui/Select';
import { CitationModal } from '../components/ui/CitationModal';

interface Judgment {
  id: string;
  caseTitle: string;
  citation: string;
  court: string;
  bench: string;
  dateOfDecision: string;
  topic: string;
  ratioDecidendi: string;
  significance: string;
  fileSize: string;
}

const JUDGMENTS_DATA: Judgment[] = [
  {
    id: 'case-1',
    caseTitle: 'Society for Unaided Private Schools of Rajasthan v. Union of India & Anr.',
    citation: '(2012) 6 SCC 1',
    court: 'Supreme Court of India',
    bench: 'S.H. Kapadia, C.J., K.S. Panicker Radhakrishnan, Swatanter Kumar, JJ.',
    dateOfDecision: '12 April 2012',
    topic: 'Section 12(1)(c) Constitutional Validity',
    ratioDecidendi: 'The Right of Children to Free and Compulsory Education Act, 2009 is constitutionally valid. Section 12(1)(c) requiring private unaided schools to reserve 25% seats for children from weaker and disadvantaged groups is an affirmative state measure furthering the fundamental mandate of Article 21-A and does not violate Article 19(1)(g).',
    significance: 'Established pan-India validity of 25% quota in private non-minority unaided schools.',
    fileSize: '5.1 MB',
  },
  {
    id: 'case-2',
    caseTitle: 'Pramati Educational and Cultural Trust & Ors. v. Union of India & Ors.',
    citation: '(2014) 8 SCC 1',
    court: 'Supreme Court of India (Constitution Bench)',
    bench: 'R.M. Lodha, C.J., A.K. Patnaik, S.J. Mukhopadhaya, Dipak Misra, F.M.I. Kalifulla, JJ.',
    dateOfDecision: '6 May 2014',
    topic: 'Minority Institutions Exemption (Article 30)',
    ratioDecidendi: 'The RTE Act, 2009, insofar as it applies to minority schools, aided or unaided, covered under Article 30(1) of the Constitution, is ultra vires the Constitution. Minority educational institutions are exempt from the 25% admission mandate under Section 12(1)(c).',
    significance: 'Decisive Constitution Bench ruling establishing total exemption for minority educational institutions.',
    fileSize: '6.4 MB',
  },
  {
    id: 'case-3',
    caseTitle: 'Action Committee Unaided Recognised Private Schools v. Justice for All & Anr.',
    citation: '2021 SCC OnLine Del 3120',
    court: 'High Court of Delhi',
    bench: 'D.N. Patel, C.J., Jyoti Singh, J.',
    dateOfDecision: '24 September 2021',
    topic: 'Online Education & Digital Access for EWS Pupils',
    ratioDecidendi: 'Private unaided schools admitting students under Section 12(1)(c) must provide synchronised digital learning equipment (tablets/smartphones and high-speed data connection) to EWS pupils during remote schooling, with costs reimbursable by the Directorate of Education under Section 12(2).',
    significance: 'Extended right to education into digital infrastructure equality.',
    fileSize: '2.8 MB',
  },
  {
    id: 'case-4',
    caseTitle: 'Association of Indian Schools v. State of Maharashtra',
    citation: '2024 SCC OnLine Bom 1422',
    court: 'High Court of Bombay',
    bench: 'Devendra Kumar Upadhyaya, C.J., Arif S. Doctor, J.',
    dateOfDecision: '19 July 2024',
    topic: 'State Exemption of Private Schools within 1km of Govt Schools',
    ratioDecidendi: 'Quashed the Maharashtra State Government amendment to State RTE Rules that sought to exempt private unaided schools from Section 12(1)(c) admissions if a government or aided school existed within a 1-kilometre radius. Held that state subordinate rules cannot override the unconditional statutory mandate of Section 12(1)(c).',
    significance: 'Critical contemporary reaffirmation preventing dilution of private school quota.',
    fileSize: '3.6 MB',
  },
  {
    id: 'case-5',
    caseTitle: 'Independent Schools Association v. State of Karnataka & Ors.',
    citation: 'ILR 2019 KAR 2855',
    court: 'High Court of Karnataka',
    bench: 'L. Narayana Swamy, Ag. C.J., P.S. Dinesh Kumar, J.',
    dateOfDecision: '31 May 2019',
    topic: 'Section 12(2) Fee Reimbursement Norms',
    ratioDecidendi: 'State Government is under an absolute statutory obligation under Section 12(2) to determine and disburse per-child expenditure reimbursements to private schools in a time-bound manner, without creating arbitrary budgetary delays or administrative deductions.',
    significance: 'Precedent safeguarding operational viability of participating unaided schools.',
    fileSize: '3.2 MB',
  },
];

export const JudgmentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('all');
  const [selectedCaseForCitation, setSelectedCaseForCitation] = useState<Judgment | null>(null);

  const filteredJudgments = JUDGMENTS_DATA.filter((j) => {
    const matchesSearch =
      j.caseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.citation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.ratioDecidendi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourt =
      selectedCourt === 'all' ||
      (selectedCourt === 'Supreme Court' && j.court.includes('Supreme Court')) ||
      (selectedCourt === 'High Court' && j.court.includes('High Court'));
    return matchesSearch && matchesCourt;
  });

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Constitutional & Judicial Precedents on RTE"
          category="Judicial Law Archive · Supreme Court &amp; High Courts"
          description="Authoritative jurisprudence interpreting Article 21-A and the Right of Children to Free and Compulsory Education Act, 2009. Includes landmark Constitution Bench judgments, Section 12(1)(c) quota rulings, and subordinate rule challenges."
        />

        {/* Filter and Search Bar */}
        <div className="bg-surface-container-low p-4 rounded-[4px] border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="w-full sm:w-96">
            <SearchInput
              placeholder="Search by case title, citation (SCC), or topic..."
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
          </div>

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
        </div>

        {/* Cases List */}
        <div className="space-y-6">
          {filteredJudgments.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary transition-all p-6 shadow-subtle space-y-4"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant={item.court.includes('Constitution Bench') ? 'secondary' : 'primary'}>
                      {item.court}
                    </Badge>
                    <span className="font-mono text-xs font-bold text-primary bg-surface-container px-2 py-0.5 rounded">
                      {item.citation}
                    </span>
                    <span className="text-xs text-outline font-medium">Decided: {item.dateOfDecision}</span>
                  </div>

                  <h3 className="font-serif text-headline-sm font-bold text-primary">
                    {item.caseTitle}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedCaseForCitation(item)}
                    leftIcon={<Quote className="w-3.5 h-3.5" />}
                  >
                    Cite Judgment
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => alert(`Opening official judgment report for ${item.citation}`)}
                    leftIcon={<Download className="w-3.5 h-3.5" />}
                  >
                    Download ({item.fileSize})
                  </Button>
                </div>
              </div>

              <div className="text-body-sm font-sans space-y-2">
                <div className="text-xs">
                  <strong className="text-outline">Coram / Bench:</strong>{' '}
                  <span className="text-on-surface font-medium">{item.bench}</span>
                </div>
                <div className="text-xs">
                  <strong className="text-outline">Subject Topic:</strong>{' '}
                  <span className="text-secondary font-semibold">{item.topic}</span>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low rounded-[4px] border-l-2 border-secondary text-body-sm font-sans text-on-surface leading-relaxed">
                <strong className="text-primary block text-xs uppercase tracking-wider mb-1">
                  Ratio Decidendi:
                </strong>
                {item.ratioDecidendi}
              </div>

              <div className="text-xs font-sans text-outline-variant flex items-center justify-between pt-2 border-t border-border-subtle">
                <span>{item.significance}</span>
                <span className="font-mono text-[11px] text-primary">Verified Legal Reporter Transcript</span>
              </div>
            </div>
          ))}

          {filteredJudgments.length === 0 && (
            <div className="p-8 text-center bg-surface-container-lowest rounded-[4px] border border-border-subtle text-on-surface-variant text-body-sm">
              No judgments found matching your search term.
            </div>
          )}
        </div>

        {/* Citation Modal */}
        {selectedCaseForCitation && (
          <CitationModal
            isOpen={true}
            onClose={() => setSelectedCaseForCitation(null)}
            statuteTitle={selectedCaseForCitation.caseTitle}
            actNo={selectedCaseForCitation.citation}
            year={selectedCaseForCitation.dateOfDecision}
          />
        )}
      </Container>
    </div>
  );
};

export default JudgmentsPage;
