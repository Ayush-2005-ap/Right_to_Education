import React, { useState, useEffect } from 'react';
import {
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
} from 'lucide-react';
import { ANNOUNCEMENT_ITEMS, type AnnouncementItem } from '../../data/announcementsData';
import { Container } from '../ui/Container';
import { AnnouncementModal } from './AnnouncementModal';
import { useLanguage } from '../../context';

export const TopAnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem | null>(null);
  const { t } = useLanguage();

  // Take the most relevant 5 pinned or newest announcements for the ticker
  const tickerItems = ANNOUNCEMENT_ITEMS.slice(0, 5);

  useEffect(() => {
    if (isPaused || tickerItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, tickerItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tickerItems.length) % tickerItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
  };

  const handleScrollToSection = () => {
    const el = document.getElementById('announcements-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, open the first item's modal or view all
      setSelectedAnnouncement(tickerItems[0]);
    }
  };

  const currentItem = tickerItems[currentIndex];

  if (!currentItem) return null;

  return (
    <>
      <div
        aria-label="Latest Releases and Announcements Ticker"
        className="w-full bg-primary text-on-primary border-b border-border-strong/40 py-1.5 select-none transition-colors"
      >
        <Container className="flex items-center justify-between gap-2 text-[12px] font-sans">
          {/* Left Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-ochre text-white font-bold text-[11px] uppercase tracking-wider shadow-2xs">
              <Megaphone className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t('latest_bulletin', 'Latest Bulletin')}</span>
              <span className="sm:hidden">{t('updates_label', 'Updates')}</span>
            </span>

            {/* Pulsing indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ochre opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron"></span>
            </span>
          </div>

          {/* Middle: Active ticker item */}
          <div
            className="flex-1 min-w-0 overflow-hidden cursor-pointer group px-1.5 sm:px-2"
            onClick={() => setSelectedAnnouncement(currentItem)}
            title="Click to view details"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 truncate">
              <span className="hidden md:inline-block font-mono text-[11px] text-primary-fixed-dim shrink-0">
                [{currentItem.date}]
              </span>

              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-[2px] bg-primary-container text-primary-fixed text-[10px] font-bold uppercase shrink-0">
                {currentItem.categoryLabel}
              </span>

              <p className="truncate text-[11.5px] sm:text-[12px] font-medium text-white group-hover:text-primary-fixed transition-colors">
                {currentItem.title}
              </p>

              <span className="text-[11px] text-primary-fixed-dim underline group-hover:text-white shrink-0 hidden lg:inline">
                {t('read_notice', 'Read Notice →')}
              </span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 shrink-0 text-primary-fixed">
            {/* Prev */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-1 rounded hover:bg-primary-container text-primary-fixed hover:text-white transition-colors cursor-pointer"
              title="Previous bulletin"
              aria-label="Previous bulletin"
            >
              <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {/* Pause / Play */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 rounded hover:bg-primary-container text-primary-fixed hover:text-white transition-colors cursor-pointer"
              title={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
              aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Pause className="w-3.5 h-3.5" aria-hidden="true" />
              )}
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              className="p-1 rounded hover:bg-primary-container text-primary-fixed hover:text-white transition-colors cursor-pointer"
              title="Next bulletin"
              aria-label="Next bulletin"
            >
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <span className="text-outline mx-1 hidden sm:inline" aria-hidden="true">|</span>

            {/* View All Button */}
            <button
              type="button"
              onClick={handleScrollToSection}
              className="hidden sm:inline-flex items-center gap-1 font-medium text-[11px] text-primary-fixed hover:text-white transition-colors px-1.5 py-0.5 rounded hover:bg-primary-container cursor-pointer"
              title="Jump to All Releases & Announcements"
            >
              <span>{t('all_releases_btn', 'All Releases')} ({ANNOUNCEMENT_ITEMS.length})</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </div>

      {/* Detail Modal */}
      <AnnouncementModal
        item={selectedAnnouncement}
        isOpen={Boolean(selectedAnnouncement)}
        onClose={() => setSelectedAnnouncement(null)}
      />
    </>
  );
};
