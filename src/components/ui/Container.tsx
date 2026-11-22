import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

/**
 * Shared Centered Container Primitive
 * Default max width is 1280px with responsive margins and gutters
 * per the RTE Statutory Archival design specification.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1280px]',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  }[size];

  return (
    <div
      className={`mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
