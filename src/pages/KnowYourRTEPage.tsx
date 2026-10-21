import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ChevronDown,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CitationModal } from '../components/ui/CitationModal';

export const KnowYourRTEPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'about' | 'features' | 'chronology' | 'faq' = location.pathname.includes('/features')
    ? 'features'
    : location.pathname.includes('/chronology')
    ? 'chronology'
    : location.pathname.includes('/faq')
    ? 'faq'
    : 'about';
  const [isCitationOpen, setIsCitationOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const chronologyEvents = [
    {
      year: '12 December 2002',
      title: '86th Constitutional Amendment Act, 2002',
      authority: 'Parliament of India',
      description: 'Inserted Article 21-A into Part III of the Constitution of India, elevating the provision of free and compulsory education for all children aged 6 to 14 to a Fundamental Right.',
      tag: 'Constitutional Foundation',
    },
    {
      year: '26 August 2009',
      title: 'Enactment of The RTE Act, 2009 (Act No. 35 of 2009)',
      authority: 'Presidential Assent',
      description: 'Received the assent of the President of India on 26 August 2009 and published in the Gazette of India Extraordinary, establishing statutory mandates across all 38 Sections and the Schedule.',
      tag: 'Statutory Enactment',
    },
    {
      year: '1 April 2010',
      title: 'Enforcement Date & Model Rules, 2010',
      authority: 'Ministry of Human Resource Development (MHRD)',
      description: 'The Act entered into force nationwide (except in Jammu & Kashmir). Central Model Rules, 2010 notified under Section 38 to provide guidelines for State implementation.',
      tag: 'Statutory Enforcement',
    },
    {
      year: '12 April 2012',
      title: 'Society for Unaided Private Schools of Rajasthan v. UOI',
      authority: 'Supreme Court of India (3-Judge Bench)',
      description: 'Supreme Court upheld the constitutional validity of Section 12(1)(c) requiring private unaided schools to admit 25% children from EWS/disadvantaged groups, holding it conforms to Article 21-A.',
      tag: 'Landmark Precedent',
    },
    {
      year: '6 May 2014',
      title: 'Pramati Educational & Cultural Trust v. Union of India',
      authority: 'Supreme Court of India (Constitution Bench - 5 Judges)',
      description: 'Held that the RTE Act does not apply to minority schools (aided or unaided) protected under Article 30(1) of the Constitution, clarifying the perimeter of Section 12(1)(c).',
      tag: 'Constitution Bench',
    },
    {
      year: '11 January 2019',
      title: 'RTE (Amendment) Act, 2019 (Act No. 1 of 2019)',
      authority: 'Parliament of India',
      description: 'Substituted Section 16 to reform the "No Detention Policy". Empowered States to conduct regular examinations in classes 5 and 8 and hold back failing pupils after re-examination, while prohibiting expulsion.',
      tag: 'Statutory Amendment',
    },
    {
      year: '2020–2026',
      title: 'NEP 2020 Alignment & Modern State Rules Evolution',
      authority: 'Department of School Education & Literacy',
      description: 'National Education Policy 2020 recommendations, digital lottery standardisation under Section 12(1)(c), and updated state per-child reimbursement equations across 28 States and 8 UTs.',
      tag: 'Contemporary Governance',
    },
  ];

  const faqs = [
    {
      q: 'Which children are entitled to free and compulsory education under the Act?',
      a: 'Under Section 3(1), every child of the age of six to fourteen years has a right to free and compulsory education in a neighbourhood school till the completion of elementary education (Class 1 to Class 8). No child can be made liable to pay any fee or charges that may prevent him or her from pursuing and completing elementary education.',
    },
    {
      q: 'What is the 25% reservation mandate under Section 12(1)(c)?',
      a: 'Section 12(1)(c) mandates that non-minority private unaided schools must admit at least 25% of children from Economically Weaker Sections (EWS) and Disadvantaged Groups (DG) in their entry-level class (pre-school or Class 1) and provide free education until completion of elementary schooling. The State reimburses the school per child based on state expenditure norms under Section 12(2).',
    },
    {
      q: 'Can private schools conduct entrance tests or charge capitation fees?',
      a: 'No. Section 13 strictly prohibits capitation fees and screening procedures for admission. Any school collecting capitation fees can be fined up to 10 times the capitation fee charged, and schools subjecting a child or parents to screening can be fined up to ₹25,000 for the first contravention and ₹50,000 for subsequent contraventions.',
    },
    {
      q: 'What is the current legal status of the No Detention Policy under Section 16?',
      a: 'Following the Right of Children to Free and Compulsory Education (Amendment) Act, 2019 (Act No. 1 of 2019), Section 16 was amended. While regular examinations must be held at the end of class 5 and class 8, a failed student must be given remedial instruction and a re-examination within two months. State Governments are empowered to decide whether to hold back pupils if they fail the second exam. However, no child can be expelled from school until completion of elementary education.',
    },
    {
      q: 'What are the statutory mandates for School Management Committees (SMCs)?',
      a: 'Under Section 21, all government, government-aided, and special category schools must constitute an SMC. At least 75% of the members of the SMC must be parents or guardians of children admitted to the school. Furthermore, 50% of the committee members must be women. The SMC is tasked with monitoring school operations, preparing School Development Plans, and overseeing fund utilisation.',
    },
    {
      q: 'Where can a parent or citizen report a violation of the RTE Act?',
      a: 'Under Section 31 and 32, grievances can be submitted in writing to the local authority (Block Education Officer or District Education Officer), which is legally mandated to decide the matter within 3 months. In addition, complaints can be lodged with the State Commission for Protection of Child Rights (SCPCR) or the National Commission for Protection of Child Rights (NCPCR) via its digital portal "e-Baalnidan".',
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <Container>
        {/* Section Header */}
        <SectionHeader
          title="Know Your RTE — Comprehensive Statutory Compendium"
          category="Legal Framework &amp; Citizen Compendium"
          description="A systematic analysis of the Right of Children to Free and Compulsory Education Act, 2009 (Act No. 35 of 2009). Explores constitutional foundations under Article 21-A, core mandates, legal chronology, and authoritative citizen FAQs."
        />

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none">
          <Link
            to="/know-your-rte/about"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'about'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            About the Act
          </Link>
          <Link
            to="/know-your-rte/features"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'features'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Key Features &amp; Mandates
          </Link>
          <Link
            to="/know-your-rte/chronology"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'chronology'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Legal Chronology (2002–2026)
          </Link>
          <Link
            to="/know-your-rte/faq"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'faq'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Frequently Asked Questions
          </Link>
        </div>

        {/* TAB 1: ABOUT */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="inline-flex items-center gap-2">
                  <Badge variant="primary">Act No. 35 of 2009</Badge>
                  <span className="text-xs font-mono text-outline">Gazette Assent: 26 Aug 2009</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsCitationOpen(true)}>
                  Cite Principal Statute
                </Button>
              </div>

              <h2 className="font-serif text-headline-lg font-bold text-primary">
                The Right of Children to Free and Compulsory Education Act, 2009
              </h2>

              <div className="font-sans text-body-md text-on-surface space-y-4 leading-relaxed">
                <p>
                  The Right of Children to Free and Compulsory Education Act, 2009 represents a historic legislative milestone in India's legal architecture. Enacted to operationalise <strong>Article 21-A</strong> inserted by the 86th Constitutional Amendment Act, 2002, the statute guarantees every child between the ages of 6 and 14 the fundamental right to full-time elementary education of satisfactory and equitable quality in a formal school.
                </p>
                <p>
                  The Act marks a paradigm shift from a welfare-oriented state approach to a rights-based statutory framework. It places an enforceable legal obligation on both Central and State Governments to ensure compulsory admission, attendance, and completion of elementary education for every child in India.
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-label-sm text-outline block">Constitutional Anchor</span>
                  <span className="font-serif text-headline-xs font-bold text-primary mt-1 block">Article 21-A</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">Part III Fundamental Right</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-label-sm text-outline block">Statutory Scope</span>
                  <span className="font-serif text-headline-xs font-bold text-secondary mt-1 block">38 Sections &amp; Schedule</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">7 Distinct Chapters</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-[4px]">
                  <span className="text-label-sm text-outline block">Target Age Cohort</span>
                  <span className="font-serif text-headline-xs font-bold text-ochre mt-1 block">6 to 14 Years</span>
                  <span className="text-xs text-on-surface-variant mt-1 block">Class 1 to Class 8</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FEATURES */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Section 12(1)(c) — 25% EWS/DG Quota
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Requires private unaided schools to reserve at least 25% of entry-level seats for children from economically weaker sections and disadvantaged groups. State governments reimburse participating schools based on per-child government expenditure.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Section 13 — Prohibition of Capitation &amp; Screening
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Strictly prohibits any capitation fee or screening interview of children or parents during admission. Violations carry civil financial penalties up to ₹50,000 and 10 times the capitation fee charged.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Section 16 &amp; 2019 Amendment — Examination Norms
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Regular examinations in class 5 and 8 with mandatory remedial instruction for failed students. Prohibits expulsion from school under all circumstances until completion of elementary education.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Section 21 — School Management Committees (SMCs)
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Decentralised participatory governance requiring 75% parent representation and 50% women representation in SMCs to monitor school functioning and fund utilisation.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">5</div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  Section 17 — Ban on Corporal Punishment
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Total statutory ban on physical punishment and mental harassment of children in schools, designating contraventions liable to disciplinary action under service rules.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-[4px] border border-border-subtle space-y-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">6</div>
                <h3 className="font-serif text-headline-sm font-bold text-primary">
                  The Schedule — Pupil-Teacher Ratio (PTR) Norms
                </h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                  Strict statutory norms of 1:30 for Primary (Classes 1–5) and 1:35 for Upper Primary (Classes 6–8), alongside building safety, separate toilets for boys and girls, drinking water, and playground infrastructure requirements.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CHRONOLOGY */}
        {activeTab === 'chronology' && (
          <div className="space-y-6">
            <div className="relative border-l-2 border-primary/30 pl-6 space-y-8 ml-3">
              {chronologyEvents.map((evt, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors" />
                  <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle shadow-2xs">
                    <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                      <span className="font-mono text-xs font-bold text-secondary">{evt.year}</span>
                      <Badge variant="primary">{evt.tag}</Badge>
                    </div>
                    <h3 className="font-serif text-headline-sm font-bold text-primary mb-1">
                      {evt.title}
                    </h3>
                    <span className="block text-xs font-medium text-outline mb-2">
                      Forum: {evt.authority}
                    </span>
                    <p className="font-sans text-body-sm text-on-surface leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FAQ */}
        {activeTab === 'faq' && (
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-[4px] border border-border-subtle overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-headline-sm font-bold text-primary hover:bg-surface-container-low transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-outline shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-border-subtle font-sans text-body-md text-on-surface leading-relaxed bg-surface-container-lowest">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Citation Modal */}
        <CitationModal
          isOpen={isCitationOpen}
          onClose={() => setIsCitationOpen(false)}
          statuteTitle="The Right of Children to Free and Compulsory Education Act, 2009"
          actNo="Act No. 35 of 2009"
          year="2009"
        />
      </Container>
    </div>
  );
};

export default KnowYourRTEPage;
