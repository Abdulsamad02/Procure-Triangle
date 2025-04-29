import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-10 w-full',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground  text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
} 