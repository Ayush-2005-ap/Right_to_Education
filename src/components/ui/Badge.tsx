import React from 'react';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'light-blue'
  | 'high-priority'
  | 'verified'
  | 'warning'
  | 'error'
  | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  uppercase?: boolean;
}

/**
 * Institutional Status & Metadata Badge Primitive
 * Adheres strictly to the 2px (0.125rem) rectilinear mechanical specification.
 * Pill/circular styles are explicitly disallowed for statutory documentation.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  icon,
  uppercase = true,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center gap-1 px-2 py-0.5 rounded-[2px] font-sans text-label-sm font-semibold tracking-wider select-none';

  const variantClasses: Record<BadgeVariant, string> = {
    primary: 'bg-primary-container text-on-primary',
    secondary: 'bg-secondary text-on-secondary',
    neutral: 'bg-surface-container text-on-surface border border-border-subtle',
    'light-blue': 'bg-secondary-container text-on-secondary-fixed-variant',
    'high-priority': 'bg-tertiary-fixed text-on-tertiary-fixed font-bold',
    verified: 'bg-surface-container-low text-secondary font-bold border border-secondary/20',
    warning: 'bg-amber-100 text-amber-900 font-bold border border-amber-200',
    error: 'bg-error text-on-error font-bold',
    outline: 'bg-transparent text-on-surface-variant border border-border-strong',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${
        uppercase ? 'uppercase' : ''
      } ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
