import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileQuestion,
  Home,
  MapPin,
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-xl mx-auto bg-surface-container-lowest border border-border-subtle rounded-[4px] p-8 sm:p-12 text-center shadow-subtle space-y-6">
          <div className="w-16 h-16 rounded-full bg-surface-container mx-auto flex items-center justify-center text-primary">
            <FileQuestion className="w-8 h-8 text-secondary" aria-hidden="true" />
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
              Error 404 · Archival Record Not Found
            </span>
            <h1 className="font-serif text-display-sm font-bold text-primary mb-3">
              Document or Page Unavailable
            </h1>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              The statutory document, state desk, or URL you requested is not indexed in the Right to Education national repository. If this was a legacy link from our previous portal, the content may have been consolidated under our updated 37-jurisdiction directory.
            </p>
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/">
              <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
                Return to Portal Home
              </Button>
            </Link>

            <Link to="/resources/states">
              <Button variant="outline" leftIcon={<MapPin className="w-4 h-4" />}>
                State &amp; UT Directory (37)
              </Button>
            </Link>
          </div>

          <div className="text-xs font-sans text-outline pt-2">
            Need assistance finding a specific gazette?{' '}
            <Link to="/ask-a-question" className="text-primary font-semibold underline">
              Ask our research team
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
