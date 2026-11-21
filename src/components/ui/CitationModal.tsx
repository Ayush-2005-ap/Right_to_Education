import React, { useState } from 'react';
import { X, Copy, Check, Quote } from 'lucide-react';
import { Button } from './Button';

export interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  statuteTitle?: string;
  actNo?: string;
  year?: string;
}

export const CitationModal: React.FC<CitationModalProps> = ({
  isOpen,
  onClose,
  statuteTitle = 'The Right of Children to Free and Compulsory Education Act, 2009',
  actNo = 'Act No. 35 of 2009',
  year = '2009',
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const citations = [
    {
      key: 'bluebook',
      label: 'Bluebook / Indian Law Journal',
      content: `${statuteTitle}, No. 35, Acts of Parliament, ${year} (India).`,
    },
    {
      key: 'oscola',
      label: 'OSCOLA Citation Format',
      content: `Right of Children to Free and Compulsory Education Act ${year} (India).`,
    },
    {
      key: 'bibtex',
      label: 'BibTeX Record',
      content: `@misc{rte_act_${year},\n  title={${statuteTitle}},\n  author={Parliament of India},\n  year={${year}},\n  note={${actNo}}\n}`,
    },
  ];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="citation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-container/70 p-3 sm:p-4 backdrop-blur-xs"
    >
      <div className="bg-surface-container-lowest max-w-lg w-full max-h-[92vh] overflow-y-auto rounded-[4px] border border-border-strong p-4 sm:p-6 shadow-modal flex flex-col gap-space-sm animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-secondary" aria-hidden="true" />
            <h3 id="citation-modal-title" className="font-serif text-headline-sm font-bold text-primary">
              Legal &amp; Academic Citation
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-outline hover:text-primary rounded transition-colors"
            aria-label="Close citation modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <p className="font-sans text-body-sm text-on-surface-variant">
          Standard academic and jurisprudential citation formats for research, petitions, and policy filings.
        </p>

        {/* Citations List */}
        <div className="space-y-3.5 my-2">
          {citations.map((c) => (
            <div key={c.key} className="flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <span className="font-sans text-label-sm font-bold text-primary uppercase">
                  {c.label}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(c.key, c.content)}
                  className="inline-flex items-center gap-1 text-label-sm text-secondary hover:text-primary transition-colors font-medium"
                >
                  {copiedKey === c.key ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-surface-container-low p-2.5 rounded-[2px] font-mono text-code-md text-on-surface border border-border-subtle select-all whitespace-pre-wrap leading-relaxed">
                {c.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2 border-t border-border-subtle">
          <Button variant="primary" size="sm" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
