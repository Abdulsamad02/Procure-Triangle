import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export function Container({
  children,
  className,
  fluid = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6',
        {
          'max-w-7xl': !fluid,
          'w-full': fluid,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 