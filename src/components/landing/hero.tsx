import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Dictionary } from '@/dictionaries';

export function Hero({ dictionary }: { dictionary: Dictionary['hero'] }) {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container max-w-4xl">
          <h1 className="font-headline text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {dictionary.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            {dictionary.subheadline}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">{dictionary.cta1}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#pricing">{dictionary.cta2}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
