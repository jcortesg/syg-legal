import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FINAL_CTA_DATA } from '@/lib/data';

export function FinalCta() {
  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {FINAL_CTA_DATA.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {FINAL_CTA_DATA.subheadline}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#">{FINAL_CTA_DATA.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
