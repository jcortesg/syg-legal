import Image from 'next/image';
import { TRUSTED_BY_LOGOS } from '@/lib/data';

export function TrustedBy() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-headline text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Con la confianza de startups líderes
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {TRUSTED_BY_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="relative flex justify-center"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                data-ai-hint={logo.imageHint}
                width={158}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
