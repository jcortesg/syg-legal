import { ABTestForm } from './_components/ab-test-form';

export default function ABTestHeadlinesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
          Generador de Titulares para Tests A/B
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Crea múltiples variantes de titulares, subtítulos y CTAs para
          optimizar la conversión de tu landing page.
        </p>
      </div>
      <ABTestForm />
    </div>
  );
}
