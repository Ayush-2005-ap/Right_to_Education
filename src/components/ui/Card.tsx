import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  surface?: 'lowest' | 'low' | 'standard';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  surface = 'lowest',
  ...props
}) => {
  const surfaceClasses = {
    lowest: 'bg-surface-container-lowest',
    low: 'bg-surface-container-low',
    standard: 'bg-surface-container',
  }[surface];

  return (
    <div
      className={`rounded-[4px] border border-border-subtle ${surfaceClasses} p-space-md shadow-subtle ${
        hoverable
          ? 'hover:shadow-card hover:border-border-strong hover:bg-white transition-all duration-150'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`flex flex-col gap-1 mb-space-sm ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3
    className={`font-serif text-headline-sm font-bold text-primary tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p
    className={`font-sans text-body-sm text-on-surface-variant leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`font-sans text-body-md text-on-surface ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div
    className={`mt-space-md pt-space-sm border-t border-border-subtle flex items-center justify-between gap-space-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);
