import React from 'react';
import {
  ShieldCheck,
  Building2,
  Target,
  FileCheck,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const Coalition25Page: React.FC = () => {
  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Coalition 25 — National Section 12(1)(c) Network"
          category="Civil Society Monitoring Alliance"
          description="A nationwide coalition of non-profit organizations, legal clinics, educators, and grassroots groups working collaboratively to ensure the transparent, equitable, and dignified implementation of the 25% RTE reservation mandate."
        />

        {/* Hero Card */}
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-card space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="primary">National Civil Society Alliance</Badge>
            <span className="text-xs font-mono text-outline">Section 12(1)(c) Focus</span>
          </div>

          <h2 className="font-serif text-headline-lg font-bold text-primary">
            Defending the 25% Inclusion Mandate Nationwide
          </h2>

          <div className="font-sans text-body-md text-on-surface space-y-3 leading-relaxed max-w-3xl">
            <p>
              Section 12(1)(c) of the RTE Act represents one of the world's most ambitious social integration mandates in elementary education. By requiring all recognized private non-minority schools to admit at least 25% of children from Economically Weaker Sections (EWS) and Disadvantaged Groups (DG), the law creates opportunities for social mobility and classroom diversity.
            </p>
            <p>
              <strong>Coalition 25</strong> unites grassroots community leaders, legal advocates, and education researchers to monitor admissions, audit digital lottery transparency, support parents through application hurdles, and address systemic implementation bottlenecks.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Coalition 25 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
            <Target className="w-6 h-6 text-primary mb-1" />
            <h3 className="font-serif text-headline-xs font-bold text-primary">Lottery Transparency</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Advocating for auditable, centralised digital lotteries to replace non-transparent manual allocation queues.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
            <ShieldCheck className="w-6 h-6 text-secondary mb-1" />
            <h3 className="font-serif text-headline-xs font-bold text-primary">Classroom Inclusion</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Ensuring admitted students are fully integrated into all academic and extra-curricular school programs without stigma.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
            <FileCheck className="w-6 h-6 text-ochre mb-1" />
            <h3 className="font-serif text-headline-xs font-bold text-primary">Zero Hidden Fees</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Monitoring compliance with the statutory guarantee of free uniforms, textbooks, and elimination of ancillary charges.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
            <Building2 className="w-6 h-6 text-primary mb-1" />
            <h3 className="font-serif text-headline-xs font-bold text-primary">Reimbursement Audits</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Tracking Section 12(2) fund disbursement timelines to ensure participating private schools remain sustainable.
            </p>
          </div>
        </div>

        {/* Participating Organizations & Call to Join */}
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-[4px] border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-headline-sm font-bold text-primary">
              Join the Coalition 25 National Network
            </h3>
            <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
              Are you an NGO, community leader, researcher, or education lawyer working on RTE admissions in your state? Join Coalition 25 to access shared research tools, legal briefs, and national advocacy roundtables.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => alert('Contacting Coalition 25 Secretariat via info@righttoeducation.in')}
          >
            Connect with Secretariat
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Coalition25Page;
