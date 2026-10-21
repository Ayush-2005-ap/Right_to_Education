import React from 'react';
import { ExternalLink, FileText, Phone, Wallet } from 'lucide-react';
import { Badge } from './Badge';

export interface ResourceAttribute {
  icon?: 'description' | 'helpline' | 'reimbursement' | 'custom';
  customIcon?: React.ReactNode;
  label: string;
}

export interface ResourceCardProps {
  region: string;
  isLive?: boolean;
  statusLabel?: string;
  title: string;
  description: string;
  attributes?: ResourceAttribute[];
  portalUrl?: string;
  portalDomain?: string;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  region,
  isLive = true,
  statusLabel = 'Live Portal',
  title,
  description,
  attributes = [],
  portalUrl,
  portalDomain,
  className = '',
}) => {
  const getIcon = (type?: string, custom?: React.ReactNode) => {
    if (custom) return custom;
    switch (type) {
      case 'description':
        return <FileText className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />;
      case 'helpline':
        return <Phone className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />;
      case 'reimbursement':
        return <Wallet className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />;
      default:
        return <FileText className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <div
      className={`bg-surface-container-lowest rounded-[4px] p-space-md border border-border-subtle shadow-subtle hover:border-border-strong hover:shadow-card transition-all flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <Badge variant="neutral">{region}</Badge>
          {isLive && (
            <span className="inline-flex items-center gap-1.5 font-sans text-label-sm text-secondary font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true"></span>
              {statusLabel}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-headline-sm font-bold text-primary mb-1.5 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-body-sm text-on-surface-variant mb-3 leading-relaxed">
          {description}
        </p>

        {/* Key Statutory Attributes */}
        {attributes.length > 0 && (
          <ul className="font-sans text-label-sm space-y-1.5 text-on-surface-variant mb-4">
            {attributes.map((attr, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                {getIcon(attr.icon, attr.customIcon)}
                <span className="leading-tight">{attr.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer: Official Link */}
      {portalDomain && (
        <div className="mt-space-sm pt-space-sm bg-surface-container-low rounded-[4px] p-2 flex items-center justify-between border border-border-subtle">
          <span className="font-mono text-code-md font-semibold text-primary truncate max-w-[200px]">
            {portalDomain}
          </span>
          {portalUrl ? (
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors flex items-center p-0.5"
              title={`Visit official desk: ${portalDomain}`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Visit {portalDomain}</span>
            </a>
          ) : (
            <ExternalLink className="w-4 h-4 text-outline" aria-hidden="true" />
          )}
        </div>
      )}
    </div>
  );
};
