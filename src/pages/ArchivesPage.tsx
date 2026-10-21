import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Newspaper,
  Calendar,
  Video,
  ExternalLink,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export const ArchivesPage: React.FC = () => {
  const location = useLocation();
  const activeTab: 'all' | 'news' | 'events' | 'polls' | 'videos' = location.pathname.includes('/news')
    ? 'news'
    : location.pathname.includes('/events')
    ? 'events'
    : location.pathname.includes('/polls')
    ? 'polls'
    : location.pathname.includes('/videos')
    ? 'videos'
    : 'all';

  const newsItems = [
    {
      title: 'Supreme Court reiterates non-discrimination mandate under Section 12(1)(c)',
      date: '18 November 2024',
      source: 'National Legal Bureau',
      summary: 'Apex court cautions private institutions against creating segregated divisions or denying co-curricular access to EWS quota students.',
    },
    {
      title: 'State Education Departments issue revised per-child reimbursement metrics for AY 2024-25',
      date: '12 September 2024',
      source: 'State Gazettes Review',
      summary: 'Nine states notify updated fee reimbursement rates to unaided schools, factoring in updated recurring salary components.',
    },
    {
      title: 'Parliamentary Committee reviews elementary infrastructure compliance under the Schedule',
      date: '5 July 2024',
      source: 'Parliament of India Press Release',
      summary: 'Standing Committee emphasizes drinking water, boundary walls, and dedicated barrier-free toilets for children with disabilities.',
    },
  ];

  const events = [
    {
      title: 'National Consultation on Section 12(1)(c) Implementation & Digital Lottery Auditing',
      date: '14–15 March 2025',
      location: 'New Delhi / Hybrid',
      status: 'Upcoming',
    },
    {
      title: 'State Commission (SCPCR) Roundtable on Grievance Disposal under Section 32',
      date: '18 October 2024',
      location: 'Bengaluru, Karnataka',
      status: 'Archived',
    },
    {
      title: 'Workshop on Social Audits & School Management Committee Empowerment',
      date: '22 June 2024',
      location: 'Bhopal, Madhya Pradesh',
      status: 'Archived',
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <Container>
        <SectionHeader
          title="Digital Archives & Historical Records"
          category="Public Record Repository (2009–2026)"
          description="Chronological repository of media coverage, national consultations, workshops, public opinion polls, and audio-visual recordings documenting the evolution of right to education jurisprudence in India."
        />

        {/* Tab Navigation */}
        <div className="border-b border-border-subtle flex items-center gap-2 overflow-x-auto no-scrollbar mb-8 select-none">
          <Link
            to="/archives"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            All Archives
          </Link>
          <Link
            to="/archives/news"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'news'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            News &amp; Media Clippings
          </Link>
          <Link
            to="/archives/events"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'events'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Workshops &amp; Events
          </Link>
          <Link
            to="/archives/polls"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'polls'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Public Opinion Polls
          </Link>
          <Link
            to="/archives/videos"
            className={`px-4 py-2.5 font-sans text-label-md font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'videos'
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-primary'
            }`}
          >
            Audio &amp; Video Library
          </Link>
        </div>

        {/* Content by Tab */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <div className="space-y-4 mb-8">
            <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-secondary" />
              <span>News &amp; Press Clippings</span>
            </h3>
            <div className="space-y-3">
              {newsItems.map((item, idx) => (
                <div key={idx} className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle hover:border-primary transition-all">
                  <div className="flex items-center gap-3 text-xs text-outline mb-1.5 font-sans">
                    <span className="font-semibold text-secondary">{item.date}</span>
                    <span>·</span>
                    <span>Source: {item.source}</span>
                  </div>
                  <h4 className="font-serif text-headline-xs font-bold text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'events') && (
          <div className="space-y-4 mb-8">
            <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              <span>National Consultations &amp; Roundtables</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {events.map((evt, idx) => (
                <div key={idx} className="bg-surface-container-lowest p-5 rounded-[4px] border border-border-subtle space-y-2">
                  <Badge variant={evt.status === 'Upcoming' ? 'primary' : 'neutral'}>
                    {evt.status}
                  </Badge>
                  <h4 className="font-serif text-headline-xs font-bold text-primary">
                    {evt.title}
                  </h4>
                  <div className="text-xs text-outline font-sans">
                    <div>{evt.date}</div>
                    <div>{evt.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="space-y-4">
            <h3 className="font-serif text-headline-sm font-bold text-primary flex items-center gap-2">
              <Video className="w-5 h-5 text-secondary" />
              <span>Audio &amp; Video Recordings</span>
            </h3>
            <div className="p-6 bg-surface-container-lowest rounded-[4px] border border-border-subtle text-center space-y-3">
              <Video className="w-10 h-10 text-outline mx-auto" />
              <h4 className="font-serif text-headline-sm font-bold text-primary">
                Civil Society Documentary &amp; Educational Library
              </h4>
              <p className="text-body-sm text-on-surface-variant max-w-md mx-auto">
                Access recordings of parliamentary debates, panel discussions on Section 12(1)(c), and interviews with education legal scholars on our official channel.
              </p>
              <a
                href="https://www.youtube.com/user/ccsindiatv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-[4px] hover:bg-primary-container transition-colors"
              >
                <span>View CCS Video Archive on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ArchivesPage;
