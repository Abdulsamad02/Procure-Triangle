import React from 'react';
import { Container } from './container';
import { cn } from '../../lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  className,
  children,
  overlay = true,
}: HeroProps) {
  return (
    <div
      className={cn(
        'relative py-20 md:py-28 lg:py-32 flex items-center',
        backgroundImage ? 'text-white' : 'bg-primary-50',
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {backgroundImage && overlay && (
        <div
          className="absolute inset-0 bg-primary-900/70"
          aria-hidden="true"
        />
      )}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </div>
  );
} 