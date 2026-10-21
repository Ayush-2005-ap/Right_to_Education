import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  SunMoon,
  MessageSquare,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [highContrast, setHighContrast] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFontSizeChange = (size: 'sm' | 'md' | 'lg') => {
    setFontSize(size);
    document.documentElement.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    document.documentElement.classList.add(`text-size-${size}`);
  };

  const handleContrastToggle = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    {
      to: '/know-your-rte',
      label: 'Know Your RTE',
      id: 'kyr',
      sublinks: [
        { to: '/know-your-rte/about', label: 'About the RTE Act' },
        { to: '/know-your-rte/features', label: 'Key Features & Mandates' },
        { to: '/know-your-rte/chronology', label: 'Legal Chronology (2002–2026)' },
        { to: '/know-your-rte/faq', label: 'Frequently Asked Questions' },
      ],
    },
    {
      to: '/resources',
      label: 'Resources',
      id: 'resources',
      sublinks: [
        { to: '/resources/centre', label: 'Central Government Notifications' },
        { to: '/resources/states', label: 'State & UT Directory (37 States/UTs)' },
        { to: '/resources/rte-matrix', label: 'RTE State Rules Matrix' },
      ],
    },
    { to: '/judgments', label: 'Judicial Orders' },
    { to: '/research', label: 'Policy & Research' },
    {
      to: '/ask-a-question',
      label: 'Public Participation',
      id: 'participation',
      sublinks: [
        { to: '/ask-a-question', label: 'Ask a Question' },
        { to: '/forum', label: 'Start a Discussion' },
        { to: '/report-a-grievance', label: 'Report a Grievance' },
      ],
    },
    {
      to: '/archives',
      label: 'Archives',
      id: 'archives',
      sublinks: [
        { to: '/archives/news', label: 'News & Press Clippings' },
        { to: '/archives/events', label: 'Workshops & Events' },
        { to: '/archives/polls', label: 'Public Opinion Polls' },
        { to: '/archives/videos', label: 'Audio & Video Library' },
      ],
    },
    {
      to: '/blog',
      label: 'Blog',
      id: 'blog',
      sublinks: [
        { to: '/blog/the-rte-blog', label: 'The RTE Blog' },
        { to: '/blog/featured-blog', label: 'Featured Analysis' },
        { to: '/blog/bloggers', label: 'Contributing Bloggers' },
      ],
    },
  ];

  return (
    <header className="w-full shadow-subtle z-40 relative">
      {/* 1. TOP UTILITY ACCESSIBILITY BAR */}
      <div className="w-full bg-primary-container text-on-primary font-sans text-[11px] py-1 border-b border-border-strong select-none">
        <Container className="flex items-center justify-between gap-4">
          {/* Left utility: Skip link + language + accessibility controls */}
          <div className="flex items-center gap-3">
            <a
              href="#main-content"
              className="text-primary-fixed hover:text-white font-medium focus:not-sr-only sr-only px-1"
            >
              Skip to Main Content
            </a>

            {/* Language indicators */}
            <div className="flex items-center gap-1.5 text-primary-fixed">
              <span className="text-primary-fixed-dim">Language:</span>
              <button
                type="button"
                className="font-bold text-white hover:text-primary-fixed"
              >
                English
              </button>
              <span className="text-outline">·</span>
              <button
                type="button"
                className="text-primary-fixed-dim hover:text-white"
                onClick={() => alert('हिन्दी portal mode is available in localized views.')}
              >
                हिन्दी
              </button>
              <span className="text-outline">·</span>
              <button
                type="button"
                className="text-primary-fixed-dim hover:text-white hidden sm:inline"
                onClick={() => alert('বাংলা localization')}
              >
                বাংলা
              </button>
              <span className="text-outline hidden sm:inline">·</span>
              <button
                type="button"
                className="text-primary-fixed-dim hover:text-white hidden sm:inline"
                onClick={() => alert('தமிழ் localization')}
              >
                தமிழ்
              </button>
            </div>

            <span className="text-outline" aria-hidden="true">
              |
            </span>

            {/* Font size adjuster */}
            <div className="flex items-center gap-1 text-primary-fixed">
              <span className="text-primary-fixed-dim">Text:</span>
              <button
                type="button"
                onClick={() => handleFontSizeChange('sm')}
                className={`px-1 hover:text-white ${fontSize === 'sm' ? 'font-bold text-white underline' : 'text-primary-fixed-dim'}`}
                title="Decrease font size"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => handleFontSizeChange('md')}
                className={`px-1 hover:text-white ${fontSize === 'md' ? 'font-bold text-white underline' : 'text-primary-fixed-dim'}`}
                title="Standard font size"
                aria-label="Standard font size"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => handleFontSizeChange('lg')}
                className={`px-1 hover:text-white ${fontSize === 'lg' ? 'font-bold text-white underline' : 'text-primary-fixed-dim'}`}
                title="Increase font size"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            <span className="text-outline hidden md:inline" aria-hidden="true">
              |
            </span>

            {/* High contrast switch */}
            <button
              type="button"
              onClick={handleContrastToggle}
              className="hidden md:inline-flex items-center gap-1 text-primary-fixed hover:text-white"
              title="Toggle High Contrast Display"
            >
              <SunMoon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{highContrast ? 'Standard Mode' : 'High Contrast'}</span>
            </button>
          </div>

          {/* Right utility links */}
          <div className="hidden lg:flex items-center gap-3 font-sans text-[11px] text-primary-fixed-dim">
            <Link to="/resources/centre" className="hover:text-white transition-colors">
              Gazette Archive
            </Link>
            <span className="text-outline">·</span>
            <Link to="/rti" className="hover:text-white transition-colors">
              RTI Transparency Cell
            </Link>
            <span className="text-outline">·</span>
            <Link to="/coalition-25" className="hover:text-white transition-colors">
              Coalition 25
            </Link>
          </div>
        </Container>
      </div>

      {/* 2. MAIN BRAND HEADER CANVAS */}
      <div className="w-full bg-surface-container-lowest py-3 sm:py-4 border-b border-border-subtle">
        <Container className="flex items-center justify-between gap-4">
          {/* Logo & Title Lockup */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
            <img
              src="/rte-logo.png"
              alt="Right to Education India Institutional Wordmark"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <div className="h-9 w-px bg-border-strong hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-serif text-[17px] sm:text-headline-sm font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                Right to Education India
              </span>
              <span className="font-sans text-[11px] sm:text-label-sm text-on-surface-variant font-medium tracking-tight">
                National Legal &amp; Policy Portal · Article 21-A
              </span>
            </div>
          </Link>

          {/* Search Trigger Bar (Center, Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative flex items-center bg-surface-container-low rounded-[4px] border border-border-strong focus-within:border-primary-container focus-within:bg-white transition-all shadow-2xs">
                <div className="pl-3 pr-2 text-outline flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-outline" aria-hidden="true" />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search acts, circulars, judgments, state rules..."
                  className="w-full bg-transparent py-2 px-1 font-sans text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 mr-1 text-[11px] font-mono font-medium text-on-surface-variant bg-surface-container hover:bg-surface-container-high rounded-[2px] border border-border-strong"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right Action & Helpdesk Cluster */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex flex-col text-right font-sans text-label-sm text-on-surface-variant">
              <span className="font-bold text-primary text-[12px]">Statutory Helpdesk</span>
              <span className="font-mono text-code-md">1800-11-2009</span>
            </div>

            <Button
              variant="primary"
              size="sm"
              leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
              onClick={() => navigate('/ask-a-question')}
              className="hidden sm:inline-flex"
            >
              Ask a Question
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-[4px] text-primary hover:bg-surface-container transition-colors border border-border-strong"
              title="Toggle Menu"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* 3. PRIMARY NAVIGATION BAR (DESKTOP) */}
      <div className="w-full bg-primary-container text-on-primary select-none hidden lg:block">
        <Container>
          <nav
            aria-label="Primary Portal Navigation"
            className="flex items-center font-sans text-label-md"
          >
            {navLinks.map((item) => {
              if (item.sublinks) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.id || null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1 px-3.5 py-3 text-label-md transition-colors ${
                          isActive
                            ? 'bg-secondary text-white font-bold border-b-2 border-ochre'
                            : 'text-on-primary hover:bg-surface-tint hover:text-white'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-primary-fixed-dim group-hover:rotate-180 transition-transform" />
                    </NavLink>

                    {/* Submenu Flyout */}
                    <div
                      className={`absolute left-0 top-full w-64 bg-surface-container-lowest text-on-surface rounded-b-[4px] border border-border-strong shadow-modal py-1.5 transition-all z-50 ${
                        activeDropdown === item.id ? 'block' : 'hidden'
                      }`}
                    >
                      {item.sublinks.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="block px-4 py-2 text-body-sm hover:bg-surface-container-low hover:text-primary transition-colors font-medium border-b border-border-subtle last:border-b-0"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-3 text-label-md transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-secondary text-white font-bold border-b-2 border-ochre'
                        : 'text-on-primary hover:bg-surface-tint hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </Container>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER (ACCORDION) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-container-lowest border-b border-border-strong shadow-modal py-4 px-4 font-sans text-body-sm animate-in fade-in slide-in-from-top-2">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="relative flex items-center bg-surface-container-low rounded-[4px] border border-border-strong">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search portal records..."
                className="w-full bg-transparent py-2 pl-3 pr-8 text-body-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 p-1 text-primary"
                aria-label="Submit search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Links List */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <div key={item.label} className="border-b border-border-subtle py-1.5">
                <Link
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-primary block py-1 hover:text-secondary"
                >
                  {item.label}
                </Link>
                {item.sublinks && (
                  <div className="pl-3 pt-1 space-y-1 text-on-surface-variant text-label-sm">
                    {item.sublinks.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 hover:text-primary"
                      >
                        · {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Utility Footer */}
          <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-2 font-sans text-label-sm text-on-surface-variant">
            <div className="flex items-center justify-between text-xs text-outline">
              <span>National RTE Resource Helpline</span>
              <span className="font-mono text-primary font-bold">1800-11-2009</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
