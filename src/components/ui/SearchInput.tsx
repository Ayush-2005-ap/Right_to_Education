import React, { useRef } from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  showShortcut?: boolean;
  shortcutKey?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  showShortcut = true,
  shortcutKey = 'Ctrl K',
  placeholder = 'Search acts, notifications, court orders, policy briefs, state rules...',
  className = '',
  id = 'statutory-search-input',
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    if (onClear) onClear();
    inputRef.current?.focus();
  };

  return (
    <div
      className={`relative flex items-center bg-surface-container-low rounded-[4px] border border-border-strong focus-within:border-primary-container focus-within:bg-white transition-all shadow-inner ${className}`}
    >
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <div className="pl-3 pr-2 text-outline flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-outline" aria-hidden="true" />
      </div>

      <input
        ref={inputRef}
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent py-2 px-1 font-sans text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
        {...props}
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="p-1 mr-1 text-outline hover:text-primary transition-colors rounded"
          title="Clear search"
          aria-label="Clear search query"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      )}

      {showShortcut && !value && (
        <span className="hidden sm:inline-block font-mono text-code-md bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded-[2px] mr-2 border border-border-strong select-none">
          {shortcutKey}
        </span>
      )}
    </div>
  );
};
