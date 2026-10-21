import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'teal' | 'urgent' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-sans font-semibold rounded-[4px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        'bg-primary-container text-on-primary hover:bg-surface-tint active:bg-primary shadow-sm border border-transparent',
      secondary:
        'bg-surface-container hover:bg-surface-container-high text-primary active:bg-surface-container-highest border border-border-subtle',
      teal:
        'bg-secondary text-on-secondary hover:bg-on-secondary-container active:bg-primary border border-transparent shadow-sm',
      urgent:
        'bg-ochre text-white hover:opacity-95 active:bg-tertiary-container shadow-sm border border-transparent',
      outline:
        'bg-transparent hover:bg-surface-container-low text-primary border border-border-strong active:bg-surface-container',
      ghost:
        'bg-transparent hover:bg-surface-container text-on-surface hover:text-primary active:bg-surface-container-high',
    };

    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'text-label-sm px-2.5 py-1 gap-1 min-h-[28px]',
      md: 'text-label-md px-3.5 py-2 gap-1.5 min-h-[36px]',
      lg: 'text-body-md px-5 py-2.5 gap-2 min-h-[44px]',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
        ) : (
          leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 flex items-center">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
