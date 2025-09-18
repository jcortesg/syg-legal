import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/dictionaries';
import { ContactModal } from '../contact-modal';

export function Hero({ dictionary }: { dictionary: Dictionary['hero'] }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-bold sm:text-5xl md:text-6xl">
          {dictionary.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
          {dictionary.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ContactModal
            dictionary={dictionary}
            trigger={
              <Button size="lg" variant="secondary">
                <span>{dictionary.cta1}</span>
              </Button>
            }
          />
          <Button asChild variant="outline" size="lg">
            <Link href="/#pricing">{dictionary.cta2}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
