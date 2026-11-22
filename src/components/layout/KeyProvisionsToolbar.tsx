import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { Container } from '../ui/Container';
import { KEY_PROVISIONS_TOPICS } from '../../data/keyProvisionsData';
import { useLanguage } from '../../context';

export const KeyProvisionsToolbar: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getTopicLabel = (slug: string, defaultLabel: string): string => {
    const key = `topic_${slug.replace(/-/g, '_')}`;
    return t(key, defaultLabel);
  };

  return (
    <div
      aria-label="Key Provisions Quick Navigation"
      className="w-full max-w-full bg-surface-container-low border-b border-border-subtle py-2 select-none overflow-hidden"
    >
      <Container className="flex items-center gap-2 max-w-full min-w-0">
        {/* Left Label */}
        <div className="flex items-center gap-1.5 shrink-0 pr-2 border-r border-border-strong text-primary">
          <Bookmark className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider whitespace-nowrap hidden sm:inline">
            {t('key_provisions_label', 'Key Provisions:')}
          </span>
          <span className="font-sans text-[11px] font-bold uppercase tracking-wider whitespace-nowrap sm:hidden">
            {t('provisions_short_label', 'Provisions:')}
          </span>
        </div>

        {/* Scroll Left Button */}
        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden sm:flex items-center justify-center p-1 rounded hover:bg-surface-container text-outline hover:text-primary transition-colors shrink-0 cursor-pointer"
          title="Scroll Left"
          aria-label="Scroll topics left"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Scrollable Topics Row */}
        <div
          ref={scrollContainerRef}
          className="flex-1 min-w-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {KEY_PROVISIONS_TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              to={`/resources?topic=${topic.slug}`}
              className="px-2.5 py-1 rounded-[2px] bg-surface-container-lowest hover:bg-surface-container hover:text-primary text-on-surface-variant font-sans text-label-sm whitespace-nowrap border border-border-subtle hover:border-border-strong transition-all shadow-2xs shrink-0"
            >
              {getTopicLabel(topic.slug, topic.label)}
            </Link>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden sm:flex items-center justify-center p-1 rounded hover:bg-surface-container text-outline hover:text-primary transition-colors shrink-0 cursor-pointer"
          title="Scroll Right"
          aria-label="Scroll topics right"
        >
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </Container>
    </div>
  );
};
