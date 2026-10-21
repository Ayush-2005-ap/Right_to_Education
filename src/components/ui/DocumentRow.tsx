import { Download, Eye, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export interface DocumentRowProps {
  id?: string;
  title: string;
  category: string;
  docType: string;
  badgeTone?: 'primary' | 'secondary' | 'light-blue' | 'high-priority';
  gazetteRef?: string;
  citation?: string;
  authority: string;
  date: string;
  jurisdiction: string;
  summary: string;
  tags?: string[];
  fileFormat?: string;
  fileSize?: string;
  checksumVerified?: boolean;
  isVerified?: boolean;
  verificationLabel?: string;
  onDownload?: () => void;
  onView?: () => void;
  className?: string;
}

export const DocumentRow: React.FC<DocumentRowProps> = ({
  id,
  title,
  category,
  docType,
  badgeTone = 'primary',
  gazetteRef,
  citation,
  authority,
  date,
  jurisdiction,
  summary,
  tags = [],
  fileFormat = 'PDF',
  fileSize,
  checksumVerified = true,
  isVerified = true,
  verificationLabel = 'Verified Gazette Copy',
  onDownload,
  onView,
  className = '',
}) => {
  return (
    <article
      id={id}
      className={`bg-surface-container-lowest p-space-md sm:p-5 rounded-[4px] border border-border-subtle shadow-subtle hover:border-border-strong hover:shadow-card transition-all ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md">
        {/* Left Column: Metadata & Narrative Abstract */}
        <div className="flex-1 min-w-0">
          {/* Taxonomy Tags Header */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant={badgeTone}>{category}</Badge>
            <Badge variant="neutral">{docType}</Badge>
            {gazetteRef && (
              <span className="font-mono text-code-md text-on-surface-variant font-medium">
                Gazette Ref: {gazetteRef}
              </span>
            )}
            {citation && (
              <span className="font-mono text-code-md text-secondary font-medium">
                Citation: {citation}
              </span>
            )}
          </div>

          {/* Document Title */}
          <h3 className="font-serif text-headline-sm sm:text-headline-md text-primary font-bold hover:text-secondary cursor-pointer leading-snug">
            {title}
          </h3>

          {/* Administrative Metadata Ribbon */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-label-sm text-on-surface-variant mt-2 mb-2">
            <span>
              <strong className="text-on-surface font-semibold">Issuing Authority:</strong> {authority}
            </span>
            <span className="text-border-strong" aria-hidden="true">·</span>
            <span>
              <strong className="text-on-surface font-semibold">Date:</strong> {date}
            </span>
            <span className="text-border-strong" aria-hidden="true">·</span>
            <span>
              <strong className="text-on-surface font-semibold">Jurisdiction:</strong> {jurisdiction}
            </span>
          </div>

          {/* Analytical Summary / Abstract */}
          <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed max-w-4xl line-clamp-3 sm:line-clamp-none">
            {summary}
          </p>

          {/* Statutory Provision Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-code-md bg-surface-container-low px-2 py-0.5 rounded-[2px] text-on-surface border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Verification & Action Cluster */}
        <div className="lg:w-64 flex flex-col justify-between items-start lg:items-end gap-space-sm pt-2 lg:pt-0 shrink-0 border-t lg:border-t-0 border-border-subtle">
          {/* Verification Badge */}
          {isVerified && (
            <div className="flex items-center gap-1.5 text-label-sm bg-surface-container-low px-2.5 py-1 rounded-[2px] text-secondary font-semibold border border-secondary/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
              <span>{verificationLabel}</span>
            </div>
          )}

          {/* File Metadata */}
          <div className="text-left lg:text-right font-mono text-code-md text-on-surface-variant">
            <span>
              {fileFormat} Document {fileSize ? `· ${fileSize}` : ''}
            </span>
            {checksumVerified && (
              <div className="text-[11px] text-emerald-800 font-sans">SHA-256 Validated</div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row lg:flex-col w-full gap-2 pt-1">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Download className="w-4 h-4" aria-hidden="true" />}
              onClick={onDownload}
              className="flex-1 lg:w-full"
            >
              {fileSize ? `Download (${fileSize})` : 'Download File'}
            </Button>
            <Button
              variant="secondary"
              size="md"
              leftIcon={<Eye className="w-4 h-4" aria-hidden="true" />}
              onClick={onView}
              className="flex-1 lg:w-full"
            >
              View Full Record
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
