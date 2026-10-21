import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`bg-surface-container-low rounded-[4px] border border-dashed border-border-strong p-space-lg text-center flex flex-col items-center justify-center my-4 ${className}`}
    >
      <div className="w-12 h-12 rounded-[4px] bg-surface-container flex items-center justify-center text-outline mb-3">
        {icon || <SearchX className="w-6 h-6" aria-hidden="true" />}
      </div>
      <h4 className="font-serif text-headline-sm font-bold text-primary mb-1">
        {title}
      </h4>
      <p className="font-sans text-body-sm text-on-surface-variant max-w-md mb-4 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
