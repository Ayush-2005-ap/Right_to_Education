import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info, Megaphone, ArrowRight } from 'lucide-react';

export type AlertVariant = 'statutory' | 'info' | 'warning' | 'error' | 'success';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  badgeText?: string;
  children: React.ReactNode;
  gazetteRef?: string;
  publishedDate?: string;
  actionText?: string;
  actionUrl?: string;
  onActionClick?: () => void;
  scopeLabel?: string;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'statutory',
  title,
  badgeText,
  children,
  gazetteRef,
  publishedDate,
  actionText,
  actionUrl,
  onActionClick,
  scopeLabel = 'Valid Across 28 States & 8 UTs',
  className = '',
}) => {
  const getStripeColor = () => {
    switch (variant) {
      case 'statutory':
        return 'bg-ochre';
      case 'warning':
        return 'bg-amber-600';
      case 'error':
        return 'bg-error';
      case 'success':
        return 'bg-secondary';
      case 'info':
      default:
        return 'bg-secondary';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'statutory':
        return <Megaphone className="w-5 h-5 text-ochre shrink-0 mt-0.5" aria-hidden="true" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" aria-hidden="true" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />;
    }
  };

  return (
    <aside
      aria-label={title || 'Official Notice'}
      className={`relative w-full bg-surface-container-low rounded-[4px] p-4 pl-5 mb-space-lg shadow-subtle border border-border-subtle overflow-hidden ${className}`}
    >
      {/* 4px Left Accent Stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${getStripeColor()}`} />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Main Content with Icon aligned to top */}
        <div className="flex items-start gap-3 min-w-0 flex-1">
          {getIcon()}
          <div className="font-sans text-body-sm text-on-surface leading-normal">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
              {badgeText && (
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider bg-ochre/15 text-ochre px-2 py-0.5 rounded-[2px]">
                  {badgeText}
                </span>
              )}
              {(gazetteRef || publishedDate) && (
                <span className="text-on-surface-variant font-mono text-code-md">
                  {gazetteRef ? `Ref: ${gazetteRef}` : ''}{' '}
                  {publishedDate ? `· Published: ${publishedDate}` : ''}
                </span>
              )}
            </div>
            <div className="font-medium text-on-surface text-[14px]">
              {children}
            </div>
          </div>
        </div>

        {/* Action and Scope */}
        <div className="flex items-center gap-3 shrink-0 lg:self-center font-sans text-label-sm pl-8 lg:pl-0">
          {actionText && (
            <a
              href={actionUrl || '#'}
              onClick={(e) => {
                if (onActionClick) {
                  e.preventDefault();
                  onActionClick();
                }
              }}
              className="inline-flex items-center gap-1 font-semibold text-ochre hover:text-tertiary-container hover:underline"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
          {scopeLabel && (
            <>
              <span className="text-border-strong hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span className="bg-surface-container-lowest px-2.5 py-1 rounded-[2px] text-on-surface-variant font-medium text-label-sm border border-border-subtle whitespace-nowrap">
                {scopeLabel}
              </span>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
