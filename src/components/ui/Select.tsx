import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  className?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, className = '', id, ...props }, ref) => {
    const generatedId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={generatedId}
            className="block font-sans text-label-sm font-semibold text-primary mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={generatedId}
            className={`w-full appearance-none py-2 pl-3 pr-8 bg-surface-container-lowest text-on-surface font-sans text-body-sm rounded-[4px] border border-border-strong focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container shadow-sm cursor-pointer ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-outline">
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';
