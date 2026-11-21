import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  Bell,
  Calendar,
  FileText,
  Building,
  Download,
  Search,
  ChevronRight,
  Filter,
  LayoutGrid,
  List,
  ArrowRight,
  Scale,
} from 'lucide-react';
import {
  ANNOUNCEMENT_ITEMS,
  type AnnouncementItem,
  type AnnouncementCategory,
} from '../../data/announcementsData';
import { Badge, type BadgeVariant } from '../ui/Badge';
import { Button } from '../ui/Button';
import { AnnouncementModal } from './AnnouncementModal';
import { useLanguage } from '../../context';

interface AnnouncementsSectionProps {
  className?: string;
  showHeroBanner?: boolean;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({
  className = '',
  showHeroBanner = true,
}) => {
  const [activeTab, setActiveTab] = useState<AnnouncementCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyUrgent, setOnlyUrgent] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [selectedItem, setSelectedItem] = useState<AnnouncementItem | null>(null);
  const { t } = useLanguage();

  // Filtered announcements
  const filteredItems = useMemo(() => {
    return ANNOUNCEMENT_ITEMS.filter((item) => {
      // Category tab filter
      if (activeTab !== 'all' && item.category !== activeTab) {
        return false;
      }

      // Urgent filter
      if (onlyUrgent && !item.isUrgent && !item.isPinned) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesRef = item.refNumber.toLowerCase().includes(q);
        const matchesAuthority = item.authority.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesRef && !matchesAuthority && !matchesSummary && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, onlyUrgent, searchQuery]);

  // Top spotlight / breaking item (e.g. pinned or most urgent)
  const spotlightItem = useMemo(() => {
    return ANNOUNCEMENT_ITEMS.find((item) => item.isPinned && item.isUrgent) || ANNOUNCEMENT_ITEMS[0];
  }, []);

  const getCategoryBadgeVariant = (category: string): BadgeVariant => {
    switch (category) {
      case 'release':
        return 'primary';
      case 'announcement':
        return 'warning';
      case 'gazette':
        return 'high-priority';
      case 'order':
        return 'secondary';
      case 'circular':
        return 'light-blue';
      default:
        return 'neutral';
    }
  };

  const countsByCategory = useMemo(() => {
    return {
      all: ANNOUNCEMENT_ITEMS.length,
      release: ANNOUNCEMENT_ITEMS.filter((i) => i.category === 'release').length,
      announcement: ANNOUNCEMENT_ITEMS.filter((i) => i.category === 'announcement').length,
      gazette: ANNOUNCEMENT_ITEMS.filter((i) => i.category === 'gazette').length,
      order: ANNOUNCEMENT_ITEMS.filter((i) => i.category === 'order').length,
      circular: ANNOUNCEMENT_ITEMS.filter((i) => i.category === 'circular').length,
    };
  }, []);

  return (
    <section
      id="announcements-section"
      aria-label="Official Releases and Announcements"
      className={`w-full bg-surface-container-lowest rounded-[4px] border border-border-strong shadow-subtle overflow-hidden ${className}`}
    >
      {/* 1. TOP STATUTORY HEADER */}
      <div className="bg-gradient-to-r from-primary-container via-primary-container to-primary text-on-primary p-4 sm:p-6 border-b border-border-strong">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-ochre text-white font-sans text-label-sm font-bold uppercase tracking-wider">
                <Megaphone className="w-3.5 h-3.5" aria-hidden="true" />
                {t('announcements_badge', 'Latest Legal Bulletin')}
              </span>
              <span className="font-sans text-[11px] text-primary-fixed-dim bg-white/10 px-2 py-0.5 rounded-[2px] border border-white/15">
                {t('announcements_deva', 'नवीनतम विज्ञप्तियां एवं सूचनाएं')}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-primary-fixed">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t('announcements_live', 'Live Feed · AY 2025–26')}
              </span>
            </div>

            <h2 className="font-serif text-headline-md sm:text-headline-lg font-bold text-white tracking-tight">
              {t('announcements_title', 'New Releases & Official Announcements')}
            </h2>

            <p className="font-sans text-body-sm sm:text-body-md text-primary-fixed leading-relaxed max-w-3xl">
              {t('announcements_desc', 'Authentic statutory repository of Central and State notifications, model rule amendments, Section 12(1)(c) admission schedules, and landmark Supreme Court directives.')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Link to="/resources/centre">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-label-sm"
                rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
              >
                {t('gazette_archive_link', 'Gazette Archive')}
              </Button>
            </Link>
            <Link to="/judgments">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-label-sm"
                rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
              >
                {t('nav_judgments', 'Judicial Orders')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. SPOTLIGHT BREAKING BANNER */}
      {showHeroBanner && spotlightItem && (
        <div className="bg-amber-50/70 border-b border-amber-200/80 p-3.5 sm:p-4.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-on-surface">
          <div className="flex items-start gap-3">
            <span className="p-1.5 rounded-[3px] bg-ochre text-white shrink-0 mt-0.5">
              <Bell className="w-4 h-4 animate-bounce" aria-hidden="true" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <span className="px-1.5 py-0.2 bg-ochre text-white rounded-[2px] font-sans text-[10px] font-bold uppercase tracking-wider">
                  {t('statutory_highlight', 'STATUTORY HIGHLIGHT')}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant font-semibold">
                  Ref: {spotlightItem.refNumber}
                </span>
                <span className="text-border-strong hidden sm:inline" aria-hidden="true">·</span>
                <span className="text-[11px] text-on-surface-variant font-sans">
                  Published: {spotlightItem.date}
                </span>
              </div>
              <h3 className="font-serif text-body-lg font-bold text-primary hover:text-ochre cursor-pointer transition-colors"
                onClick={() => setSelectedItem(spotlightItem)}
              >
                {spotlightItem.title}
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                {spotlightItem.summary}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <Button
              variant="urgent"
              size="sm"
              onClick={() => setSelectedItem(spotlightItem)}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {t('read_full_notice', 'Read Full Notice')}
            </Button>
          </div>
        </div>
      )}

      {/* 3. CONTROLS: CATEGORY TABS & SEARCH / TOGGLE */}
      <div className="p-4 sm:p-5 border-b border-border-subtle bg-surface-container-low/50 space-y-3">
        {/* Category Tabs */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: 'all', label: t('tab_all', 'All Updates'), count: countsByCategory.all },
              { id: 'release', label: t('tab_releases', 'New Releases'), count: countsByCategory.release },
              { id: 'announcement', label: t('tab_announcements', 'Announcements'), count: countsByCategory.announcement },
              { id: 'gazette', label: t('tab_gazettes', 'Gazettes'), count: countsByCategory.gazette },
              { id: 'order', label: t('tab_orders', 'Judicial Orders'), count: countsByCategory.order },
              { id: 'circular', label: t('tab_circulars', 'Circulars'), count: countsByCategory.circular },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as AnnouncementCategory)}
                  className={`px-3 py-1.5 rounded-[2px] font-sans text-label-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-2xs'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-[2px] text-[10px] font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode & Filter Toggles */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOnlyUrgent(!onlyUrgent)}
              className={`px-2.5 py-1 rounded-[2px] text-label-sm font-sans font-medium flex items-center gap-1.5 border transition-colors cursor-pointer ${
                onlyUrgent
                  ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                  : 'bg-surface-container-lowest text-on-surface-variant border-border-subtle hover:bg-surface-container'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>{t('urgent_only', 'Urgent Only')}</span>
            </button>

            <div className="hidden sm:flex items-center rounded-[2px] border border-border-subtle bg-surface-container-lowest p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-1 rounded-[2px] text-on-surface transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-surface-container text-primary font-bold' : 'text-outline hover:text-primary'
                }`}
                title="Card Grid View"
                aria-label="Card Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1 rounded-[2px] text-on-surface transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-surface-container text-primary font-bold' : 'text-outline hover:text-primary'
                }`}
                title="List Stream View"
                aria-label="List Stream View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Search input bar within announcements */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('search_announcements', 'Search by keywords, subject, issuing department, gazette code...')}
            className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest rounded-[4px] border border-border-subtle focus:border-primary font-sans text-body-sm text-on-surface placeholder:text-outline focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-label-sm font-sans text-outline hover:text-primary cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 4. CONTENT DISPLAY (CARDS OR LIST) */}
      <div className="p-4 sm:p-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-10 bg-surface-container-low/40 rounded-[4px] border border-border-subtle">
            <FileText className="w-8 h-8 text-outline mx-auto mb-2 opacity-50" />
            <p className="font-serif text-headline-sm font-semibold text-primary mb-1">
              No matching releases or announcements found
            </p>
            <p className="font-sans text-body-sm text-on-surface-variant mb-4">
              Try adjusting your search terms or selecting a different category tab.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
                setOnlyUrgent(false);
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : viewMode === 'cards' ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container-lowest rounded-[4px] border border-border-subtle hover:border-primary-container hover:shadow-card p-4 sm:p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Card Header Badges & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant={getCategoryBadgeVariant(item.category)}>
                        {item.categoryLabel}
                      </Badge>
                      {item.isNew && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[2px] bg-tertiary-container text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse" />
                          NEW
                        </span>
                      )}
                      {item.isUrgent && (
                        <Badge variant="warning">
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-sans text-on-surface-variant font-medium">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif text-headline-sm font-bold text-primary group-hover:text-secondary cursor-pointer leading-snug mb-2 transition-colors"
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.title}
                  </h3>

                  {/* Issuing Authority & Ref */}
                  <div className="space-y-1 mb-3 text-label-sm font-sans text-on-surface-variant">
                    <div className="flex items-start gap-1.5">
                      <Building className="w-3.5 h-3.5 text-outline shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.authority}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-outline">
                      <span>Ref:</span>
                      <span className="bg-surface-container-low px-1.5 py-0.2 rounded text-on-surface font-semibold">
                        {item.refNumber}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                </div>

                {/* Card Footer: Tags & Buttons */}
                <div className="pt-3 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-wrap items-center gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-on-surface-variant bg-surface-container-low px-1.5 py-0.5 rounded-[2px]"
                      >
                        #{tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="text-[10px] font-mono text-outline">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="font-sans text-label-sm font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t('read_more', 'Read More')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedItem(item)}
                      leftIcon={<Download className="w-3 h-3" />}
                    >
                      {item.fileFormat}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* STREAM / LIST VIEW */
          <div className="divide-y divide-border-subtle border border-border-subtle rounded-[4px] overflow-hidden bg-surface-container-lowest">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 sm:p-4 hover:bg-surface-container-low/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={getCategoryBadgeVariant(item.category)}>
                      {item.categoryLabel}
                    </Badge>
                    {item.isNew && (
                      <span className="px-1.5 py-0.2 rounded-[2px] bg-tertiary-container text-white font-mono text-[9px] font-bold">
                        NEW
                      </span>
                    )}
                    <span className="font-mono text-[11px] text-outline">
                      {item.date} · Ref: {item.refNumber}
                    </span>
                  </div>

                  <h4
                    className="font-serif text-body-lg font-bold text-primary group-hover:text-secondary cursor-pointer transition-colors"
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.title}
                  </h4>

                  <p className="font-sans text-body-sm text-on-surface-variant line-clamp-1">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedItem(item)}
                  >
                    {t('view_details', 'View Details')}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedItem(item)}
                    leftIcon={<Download className="w-3.5 h-3.5" />}
                  >
                    {item.fileFormat}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. BOTTOM REPOSITORY FOOTER */}
      <div className="bg-surface-container-low border-t border-border-subtle p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-label-sm font-sans text-on-surface-variant">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Scale className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
          <span>
            {t('checksum_note', 'Codified with verified gazette citations and checksum-authenticated downloads under Section 38.')}
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/resources/centre"
            className="font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <span>{t('all_gazettes_btn', 'All Gazette Notifications')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/archives"
            className="font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <span>{t('archives_dir_btn', 'Archives Directory')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Detail Modal */}
      <AnnouncementModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
