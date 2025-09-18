import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Dictionary } from '@/dictionaries';
import type { Plan } from '@/lib/data';

export function Pricing({ dictionary }: { dictionary: Dictionary['pricing'] }) {
  return (
    <section id="pricing" className="bg-secondary/50 py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-headline text-base font-semibold uppercase tracking-wider text-primary">
            {dictionary.title}
          </p>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {dictionary.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {dictionary.subheadline}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {dictionary.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} popularText={dictionary.popular} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, popularText }: { plan: Plan; popularText: string }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border bg-card p-8 shadow-sm',
        plan.isPopular ? 'border-primary ring-2 ring-primary' : ''
      )}
    >
      <div className="relative">
        <h3 className="font-headline text-2xl font-semibold">{plan.name}</h3>
        {plan.isPopular && (
          <Badge className="absolute -top-1 right-0">{popularText}</Badge>
        )}
      </div>
      <p className="mt-4 text-muted-foreground">
        <span className="font-headline text-4xl font-bold text-foreground">
          {plan.price}
        </span>
        <span className="text-base font-medium">{plan.priceDescription}</span>
      </p>
      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button
          asChild
          className="w-full"
          size="lg"
          variant={plan.isPopular ? 'default' : 'outline'}
        >
          <Link href="/#contact">{plan.cta}</Link>
        </Button>
      </div>
    </div>
  );
}
