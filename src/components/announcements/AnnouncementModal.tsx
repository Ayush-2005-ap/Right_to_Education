import React, { useEffect, useState } from 'react';
import {
  X,
  Calendar,
  Building,
  Scale,
  Download,
  Share2,
  Check,
} from 'lucide-react';
import type { AnnouncementItem } from '../../data/announcementsData';
import { Badge, type BadgeVariant } from '../ui/Badge';
import { Button } from '../ui/Button';

interface AnnouncementModalProps {
  item: AnnouncementItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

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

  const handleCopyCitation = () => {
    const citation = `${item.title} | Ref: ${item.refNumber} | Issued by: ${item.authority} (${item.date})`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-announcement-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-primary/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-surface-container-lowest rounded-[4px] border border-border-strong shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-surface-container-low border-b border-border-subtle p-4 sm:p-5 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
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
                  Urgent Notice
                </Badge>
              )}
              <span className="text-border-strong hidden sm:inline" aria-hidden="true">|</span>
              <span className="font-mono text-code-sm text-on-surface-variant font-medium">
                Ref: {item.refNumber}
              </span>
            </div>

            <h2
              id="modal-announcement-title"
              className="font-serif text-headline-sm sm:text-headline-md font-bold text-primary leading-snug"
            >
              {item.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-[4px] text-outline hover:text-primary hover:bg-surface-container transition-colors shrink-0"
            title="Close modal (Esc)"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-on-surface">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3.5 bg-surface-container-low/60 rounded-[4px] border border-border-subtle text-label-sm font-sans">
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="block text-on-surface-variant text-[11px]">Date Published</span>
                <span className="font-semibold text-primary">{item.date}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="block text-on-surface-variant text-[11px]">Issuing Authority</span>
                <span className="font-semibold text-primary">{item.authority}</span>
              </div>
            </div>

            {item.statutorySection && (
              <div className="flex items-start gap-2">
                <Scale className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block text-on-surface-variant text-[11px]">Statutory Mandate</span>
                  <span className="font-semibold text-primary">{item.statutorySection}</span>
                </div>
              </div>
            )}
          </div>

          {/* Executive Overview */}
          <div>
            <h4 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-1.5">
              Executive Overview
            </h4>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Full Official Description */}
          <div>
            <h4 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-1.5">
              Official Text &amp; Scope
            </h4>
            <div className="bg-surface-container-lowest p-4 rounded-[4px] border border-border-subtle font-sans text-body-sm text-on-surface leading-relaxed">
              {item.fullDescription}
            </div>
          </div>

          {/* Key Mandates / Provisions */}
          {item.keyPoints && item.keyPoints.length > 0 && (
            <div>
              <h4 className="font-sans text-label-md font-bold text-primary uppercase tracking-wider mb-2">
                Key Mandates &amp; Operational Takeaways
              </h4>
              <ul className="space-y-2 font-sans text-body-sm text-on-surface">
                {item.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-1.5">
              <span className="font-sans text-[11px] text-on-surface-variant mr-1">Tags:</span>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-[2px] bg-surface-container text-on-surface-variant font-mono text-[11px] border border-border-subtle"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-surface-container-low border-t border-border-subtle p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 safe-padding-bottom">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
              leftIcon={copied ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Share2 className="w-3.5 h-3.5" />}
              onClick={handleCopyCitation}
            >
              {copied ? 'Citation Copied!' : 'Copy Official Citation'}
            </Button>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 sm:flex-initial"
              onClick={onClose}
            >
              Close
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="flex-2 sm:flex-initial"
              leftIcon={downloadSuccess ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              onClick={handleDownload}
            >
              {downloadSuccess
                ? 'Official Copy Downloaded'
                : `Download Official ${item.fileFormat} (${item.fileSize})`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
