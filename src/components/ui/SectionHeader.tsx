import React from 'react';

export interface SectionHeaderProps {
  title: string;
  category?: string;
  description?: string;
  accentTone?: 'primary' | 'secondary' | 'ochre';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  category,
  description,
  accentTone = 'primary',
  action,
  className = '',
}) => {
  const accentClasses = {
    primary: 'bg-primary-container',
    secondary: 'bg-secondary',
    ochre: 'bg-ochre',
  }[accentTone];

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm mb-space-md ${className}`}
    >
      <div className="flex-1">
        {category && (
          <span className="block font-sans text-label-sm font-bold text-secondary uppercase tracking-widest mb-1">
            {category}
          </span>
        )}
        <div className="flex items-center gap-2.5">
          {/* 4px Vertical Accent Bar */}
          <div className={`w-1 h-6 sm:h-7 ${accentClasses} rounded-full shrink-0`} aria-hidden="true" />
          <h2 className="font-serif text-headline-lg sm:text-headline-xl font-bold text-primary tracking-tight">
            {title}
          </h2>
        </div>
        {description && (
          <p className="font-sans text-body-sm text-on-surface-variant mt-1.5 ml-3.5 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 sm:self-end">{action}</div>}
    </div>
  );
};
