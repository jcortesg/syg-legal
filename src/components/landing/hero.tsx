import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HERO_DATA } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
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
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container max-w-4xl">
          <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            {HERO_DATA.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
            {HERO_DATA.subheadline}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">{HERO_DATA.cta1}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/#pricing">{HERO_DATA.cta2}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
