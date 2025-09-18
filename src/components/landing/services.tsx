import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Dictionary } from '@/dictionaries';
import {
  Briefcase,
  FileText,
  Globe,
  Lightbulb,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Briefcase,
  FileText,
  Globe,
  Lightbulb,
  Scale,
  ShieldCheck,
};

export function Services({ dictionary }: { dictionary: Dictionary['services'] }) {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
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
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.items.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: Dictionary['services']['items'][number];
}) {
  const Icon = ICONS[service.icon];
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="font-headline text-lg font-bold">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="pt-4 text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
