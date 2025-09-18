import { SEOAnalyzerForm } from './_components/seo-analyzer-form';

export default function SEOAnalyzerPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
          Analizador SEO para Landing Pages
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Pega el contenido HTML de tu página y las palabras clave para recibir
          una lista de recomendaciones SEO accionables.
        </p>
      </div>
      <SEOAnalyzerForm />
    </div>
  );
}
