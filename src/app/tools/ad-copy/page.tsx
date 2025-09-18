import { AdCopyForm } from './_components/ad-copy-form';

export default function AdCopyPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
          Generador de Anuncios
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Crea textos de anuncios optimizados para Meta (Facebook/Instagram) y
          LinkedIn. Define tu público y servicios clave para obtener los mejores
          resultados.
        </p>
      </div>
      <AdCopyForm />
    </div>
  );
}
