import { SERVICES_DATA, type Service } from '@/lib/data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-headline text-base font-semibold uppercase tracking-wider text-primary">
            Nuestros Servicios
          </p>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Un departamento legal completo para tu startup
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Desde la constitución hasta la expansión global, cubrimos todas las
            necesidades legales de tu negocio tecnológico.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <service.icon className="h-6 w-6" />
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
