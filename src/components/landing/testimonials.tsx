import Image from 'next/image';
import { TESTIMONIALS_DATA, type Testimonial } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-headline text-base font-semibold uppercase tracking-wider text-primary">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Historias de éxito y crecimiento
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-4xl"
        >
          <CarouselContent>
            {TESTIMONIALS_DATA.map((testimonial) => (
              <CarouselItem key={testimonial.author} className="md:basis-1/2">
                <div className="p-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <blockquote className="italic text-foreground/80">
          {testimonial.quote}
        </blockquote>
        <div className="mt-6 flex items-center gap-4">
          <Image
            src={testimonial.avatar}
            alt={`Avatar de ${testimonial.author}`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-headline font-semibold text-foreground">
              {testimonial.author}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
