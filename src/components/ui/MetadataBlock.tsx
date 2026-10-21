import React from 'react';

export interface MetadataItem {
  label: string;
  value: React.ReactNode;
  isCode?: boolean;
}

export interface MetadataBlockProps {
  items: MetadataItem[];
  title?: string;
  className?: string;
  layout?: 'ribbon' | 'grid';
}

export const MetadataBlock: React.FC<MetadataBlockProps> = ({
  items,
  title,
  className = '',
  layout = 'ribbon',
}) => {
  if (layout === 'grid') {
    return (
      <div
        className={`bg-surface-container-low rounded-[4px] p-space-md border border-border-subtle ${className}`}
      >
        {title && (
          <h4 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-2.5 pb-1 border-b border-border-strong">
            {title}
          </h4>
        )}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <dt className="font-sans text-label-sm text-on-surface-variant font-medium">
                {item.label}
              </dt>
              <dd
                className={`mt-0.5 ${
                  item.isCode
                    ? 'font-mono text-code-md text-primary font-semibold'
                    : 'font-sans text-body-sm text-on-surface font-medium'
                }`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  // Ribbon layout (horizontal compact strip)
  return (
    <div
      className={`bg-surface-container-low rounded-[4px] px-3.5 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sans text-label-sm text-on-surface-variant border border-border-subtle ${className}`}
    >
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-1.5">
            <span className="text-on-surface font-semibold">{item.label}:</span>
            <span
              className={
                item.isCode
                  ? 'font-mono text-code-md text-primary font-semibold'
                  : 'text-on-surface'
              }
            >
              {item.value}
            </span>
          </div>
          {idx < items.length - 1 && (
            <span className="text-border-strong hidden sm:inline" aria-hidden="true">
              ·
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
