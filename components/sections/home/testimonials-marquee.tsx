'use client';

import { useTranslations } from 'next-intl';
import { Marquee } from '@/components/ui/marquee';
import { Star } from 'lucide-react';

export function TestimonialsMarquee() {
  const t = useTranslations('testimonials');

  const testimonials = t.raw('items') as Array<{
    name: string;
    role: string;
    quote: string;
    avatar: string;
  }>;

  return (
    <section className="py-20 lg:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          {t('sectionLabel')}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {t('sectionTitle')}
        </h2>
      </div>

      <Marquee className="mb-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="w-[350px] p-6 rounded-2xl bg-card border border-border mx-4"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                {item.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-muted-foreground text-xs">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <Marquee reverse>
        {[...testimonials].reverse().map((item, i) => (
          <div
            key={i}
            className="w-[350px] p-6 rounded-2xl bg-card border border-border mx-4"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                {item.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-muted-foreground text-xs">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
