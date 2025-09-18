'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { generateABTestHeadlinesAction } from '@/actions/syg-legal-actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb } from 'lucide-react';

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Generando...' : 'Generar Variantes'}
    </Button>
  );
}

export function ABTestForm() {
  const [state, formAction] = useFormState(
    generateABTestHeadlinesAction,
    initialState
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <form action={formAction} className="space-y-4">
            <div>
              <Label htmlFor="prompt" className="font-headline text-lg">
                Describe tu landing page
              </Label>
              <p className="text-sm text-muted-foreground mb-2">
                Incluye el producto, público objetivo y tono deseado. La IA
                generará 10 variantes.
              </p>
              <Textarea
                id="prompt"
                name="prompt"
                placeholder="Ej: Landing para un SaaS de gestión de proyectos para agencias creativas. Tono directo y enfocado en productividad."
                rows={4}
                required
                defaultValue="Landing de Syg Legal (legaltech para startups). Tono claro y pro-crecimiento. Máx. 12 palabras. Evita jerga."
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-bold text-center">
            Variantes Generadas
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {state.data.map((variation, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 mt-1 text-accent shrink-0" />
                    <span className="font-body text-xl font-bold">
                      {variation.headline}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow space-y-4">
                  <p className="text-muted-foreground flex-grow">
                    {variation.subHeadline}
                  </p>
                  <Button variant="outline" className="w-full">
                    {variation.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
