import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '../ui/Container';

// Label map for friendly segment names
const SEGMENT_LABELS: Record<string, string> = {
  'know-your-rte': 'Know Your RTE',
  about: 'About RTE',
  features: 'Features',
  chronology: 'Chronology',
  faq: 'FAQs',
  resources: 'Resources',
  centre: 'Central Resources',
  states: 'State Directory',
  'rte-matrix': 'RTE State Rules Matrix',
  'ask-a-question': 'Ask a Question',
  forum: 'Start a Discussion',
  'report-a-grievance': 'Report a Grievance',
  archives: 'Archives',
  news: 'News',
  events: 'Events',
  polls: 'Polls',
  videos: 'Videos',
  blog: 'Blog',
  'the-rte-blog': 'The RTE Blog',
  'featured-blog': 'Featured Blog',
  bloggers: 'Bloggers',
  'vision-and-mission': 'Vision & Mission',
  partners: 'Partners',
  'platform-team': 'Platform Team',
  contact: 'Contact Us',
  rti: 'Right to Information (RTI)',
  'coalition-25': 'Coalition 25',
  search: 'Search Portal',
  sitemap: 'Archive Sitemap',
  judgments: 'Judicial Orders & Cases',
  legislation: 'Legislation & Rules',
  research: 'Policy & Research',
  monitoring: 'Monitoring & Surveys',
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If on homepage, do not render breadcrumbs
  if (pathnames.length === 0) {
    return null;
  }

  const formatSegment = (segment: string) => {
    if (SEGMENT_LABELS[segment]) {
      return SEGMENT_LABELS[segment];
    }
    // Convert kebab-case or slug to Title Case
    return segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav
      aria-label="Breadcrumb Navigation"
      className="w-full bg-surface-container-low border-b border-border-subtle py-2 text-label-sm"
    >
      <Container>
        <ol className="flex items-center gap-1.5 flex-wrap text-on-surface-variant font-sans">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-primary transition-colors text-on-surface-variant font-medium"
            >
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {pathnames.map((segment, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = formatSegment(segment);

            return (
              <li key={routeTo} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-outline-variant shrink-0" aria-hidden="true" />
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-primary truncate max-w-[280px] sm:max-w-md"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-primary transition-colors font-medium truncate max-w-[180px]"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
};
