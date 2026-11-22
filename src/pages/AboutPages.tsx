import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Users,
  Building,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

export const AboutPages: React.FC = () => {
  const location = useLocation();
  const [messageSent, setMessageSent] = useState(false);
  const activeTab: 'vision' | 'partners' | 'team' | 'contact' = location.pathname.includes('/partners')
    ? 'partners'
    : location.pathname.includes('/platform-team')
    ? 'team'
    : location.pathname.includes('/contact')
    ? 'contact'
    : 'vision';

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="About the Right to Education Portal"
          category="Governance · Civil Society Initiative"
          description="A dedicated civil society repository tracking the enforcement, legal evolution, and institutional milestones of the Right of Children to Free and Compulsory Education Act, 2009."
        />

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none max-w-full min-w-0">
          <Link
            to="/about/vision-and-mission"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'vision'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Vision &amp; Mission
          </Link>
          <Link
            to="/about/partners"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'partners'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Partners &amp; Collaborators
          </Link>
          <Link
            to="/about/platform-team"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'team'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Platform Research Team
          </Link>
          <Link
            to="/about/contact"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'contact'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Contact &amp; Inquiries
          </Link>
        </div>

        {/* TAB 1: VISION & MISSION */}
        {activeTab === 'vision' && (
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-6">
            <div className="max-w-3xl space-y-4">
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Civil Society Mandate: Transparency &amp; Universal Access
              </h3>
              <div className="font-sans text-body-md text-on-surface space-y-3 leading-relaxed">
                <p>
                  The Right to Education Resource Portal was established by the <strong>Centre for Civil Society (CCS)</strong> as an independent, non-partisan legal information service. The platform aims to bridge the information gap between complex statutory texts, subordinate state gazette rules, and the millions of families, educators, and researchers seeking to realize the constitutional promise of <strong>Article 21-A</strong>.
                </p>
                <p>
                  By digitising, cross-referencing, and indexing all Section 38 State RTE Rules, High Court orders, and annual Samagra Shiksha PAB datasets, the portal empowers parents to assert educational rights, guides legal practitioners with authoritative citations, and furnishes policymakers with empirical evidence.
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low rounded-[4px] border-l-2 border-primary">
                  <h4 className="font-serif text-headline-xs font-bold text-primary mb-1">Our Core Vision</h4>
                  <p className="text-body-sm text-on-surface-variant">
                    An India where every child exercises an unhindered, high-quality, and equitable fundamental right to education in an empowering learning atmosphere.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-low rounded-[4px] border-l-2 border-secondary">
                  <h4 className="font-serif text-headline-xs font-bold text-secondary mb-1">Our Public Mission</h4>
                  <p className="text-body-sm text-on-surface-variant">
                    To maintain the authoritative public record on the RTE Act, 2009, making legislative documents, court orders, and state admission protocols universally accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PARTNERS */}
        {activeTab === 'partners' && (
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-6">
            <h3 className="font-serif text-headline-md font-bold text-primary">
              Institutional Partners &amp; Civil Society Collaborators
            </h3>
            <p className="font-sans text-body-md text-on-surface-variant max-w-2xl">
              The RTE Resource Initiative collaborates with independent civil society organizations, law faculties, and grassroots networks across all 28 States and 8 Union Territories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-surface-container-low rounded-[4px] border border-border-subtle space-y-2">
                <Building className="w-6 h-6 text-primary mb-1" />
                <h4 className="font-serif text-headline-xs font-bold text-primary">Centre for Civil Society (CCS)</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Leading public policy think tank advancing choice, competition, and community governance in education.
                </p>
              </div>

              <div className="p-5 bg-surface-container-low rounded-[4px] border border-border-subtle space-y-2">
                <Users className="w-6 h-6 text-secondary mb-1" />
                <h4 className="font-serif text-headline-xs font-bold text-primary">Coalition 25 National Network</h4>
                <p className="text-body-sm text-on-surface-variant">
                  A nationwide civil society coalition tracking the transparent implementation of Section 12(1)(c) admissions.
                </p>
              </div>

              <div className="p-5 bg-surface-container-low rounded-[4px] border border-border-subtle space-y-2">
                <ShieldCheck className="w-6 h-6 text-ochre mb-1" />
                <h4 className="font-serif text-headline-xs font-bold text-primary">Legal Education &amp; Clinic Network</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Law school legal aid clinics providing pro-bono assistance to disadvantaged parents seeking school admissions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PLATFORM TEAM */}
        {activeTab === 'team' && (
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-6">
            <h3 className="font-serif text-headline-md font-bold text-primary">
              Research &amp; Archival Editorial Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 bg-surface-container-low rounded-[4px] border border-border-subtle space-y-2">
                <h4 className="font-serif text-headline-xs font-bold text-primary">Legal &amp; Policy Research</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Monitors state gazette notifications, subordinate rules, and Supreme Court/High Court judgments.
                </p>
              </div>
              <div className="p-5 bg-surface-container-low rounded-[4px] border border-border-subtle space-y-2">
                <h4 className="font-serif text-headline-xs font-bold text-primary">Empirical Data &amp; Analytics</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Maintains the Statewise Research Compendium and annual Samagra Shiksha Project Approval Board metrics.
                </p>
              </div>
              <div className="p-5 bg-surface-container-low rounded-[4px] border border-border-subtle space-y-2">
                <h4 className="font-serif text-headline-xs font-bold text-primary">Digital Archive Architecture</h4>
                <p className="text-body-sm text-on-surface-variant">
                  Ensures digital accessibility standards (WCAG AAA), high-contrast accessibility, and statutory citation accuracy.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONTACT */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-4">
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Institutional Contact Information
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                For research inquiries, citation validation, or to submit unindexed state gazette copies:
              </p>
              <div className="space-y-3 text-body-sm font-sans pt-2">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block">Centre for Civil Society (CCS)</strong>
                    <span className="text-on-surface-variant">
                      A-69, Hauz Khas, New Delhi 110016, India
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-on-surface-variant">General Inquiries:</span>{' '}
                    <a href="mailto:info@righttoeducation.in" className="text-primary font-semibold hover:underline">
                      info@righttoeducation.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-on-surface-variant">Telephone:</span>{' '}
                    <span className="text-on-surface font-semibold">+91 11 2653 7456 / 2652 1882</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-[4px] border border-border-subtle shadow-subtle space-y-4">
              <h3 className="font-serif text-headline-md font-bold text-primary">
                Send a Message
              </h3>
              {messageSent ? (
                <div className="p-5 bg-surface-container-low rounded-[4px] border border-secondary text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-secondary mx-auto" />
                  <h4 className="font-serif text-headline-xs font-bold text-primary">Message Dispatched to Secretariat</h4>
                  <p className="text-body-sm text-on-surface-variant max-w-sm mx-auto">
                    Your inquiry has been received by our editorial team. We will review and respond via email within 2–3 working days.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setMessageSent(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setMessageSent(true); }} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Your Name</label>
                    <input type="text" required className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Email Address</label>
                    <input type="email" required className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Message</label>
                    <textarea rows={4} required className="w-full px-3 py-2 border border-border-subtle rounded-[4px] text-body-sm"></textarea>
                  </div>
                  <Button variant="primary" type="submit" size="sm">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AboutPages;
