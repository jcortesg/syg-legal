import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Dictionary } from '@/dictionaries';

export function Faq({ dictionary }: { dictionary: Dictionary['faq'] }) {
  return (
    <section id="faq" className="bg-secondary/50 py-20 sm:py-28">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-headline text-base font-semibold uppercase tracking-wider text-primary">
            {dictionary.title}
          </p>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dictionary.headline}
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {dictionary.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-headline text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
