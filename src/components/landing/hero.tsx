import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/dictionaries';
import { ContactModal } from '../contact-modal';
import { HeroBackground } from './hero-background';

export function Hero({ dictionary }: { dictionary: Dictionary['hero'] }) {
  return (
    <section className="relative overflow-hidden bg-primary text-foreground">
      <div className="absolute inset-0">
        <HeroBackground className="h-full w-full object-cover" />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="font-headline text-4xl font-bold text-slate-50 sm:text-5xl md:text-6xl">
            {dictionary.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
            {dictionary.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ContactModal
              dictionary={dictionary}
              trigger={
                <Button size="lg" className="bg-gradient-primary font-bold text-white transition-all hover:brightness-110">
                  <span>{dictionary.cta1}</span>
                </Button>
              }
            />
            <Button asChild variant="outline" size="lg" className="border-brand-navy-500 bg-transparent text-brand-navy-300 hover:border-tech-teal-500 hover:bg-brand-navy-700/50 hover:text-white">
              <Link href="/#pricing">{dictionary.cta2}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
