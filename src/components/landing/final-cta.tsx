import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/dictionaries';

export function FinalCta({
  dictionary,
}: {
  dictionary: Dictionary['finalCta'];
}) {
  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {dictionary.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {dictionary.subheadline}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#">{dictionary.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
