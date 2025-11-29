'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  duration?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  duration = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden [--gap:1rem]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      style={{ '--duration': `${duration}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          'flex shrink-0 gap-[--gap]',
          vertical ? 'flex-col' : 'flex-row',
          vertical
            ? reverse
              ? 'animate-marquee-vertical-reverse'
              : 'animate-marquee-vertical'
            : reverse
              ? 'animate-marquee-reverse'
              : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 gap-[--gap]',
          vertical ? 'flex-col' : 'flex-row',
          vertical
            ? reverse
              ? 'animate-marquee-vertical-reverse'
              : 'animate-marquee-vertical'
            : reverse
              ? 'animate-marquee-reverse'
              : 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
    </div>
  );
}
