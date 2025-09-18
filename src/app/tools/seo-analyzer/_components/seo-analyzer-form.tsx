'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { analyzeLandingPageForSEOAction } from '@/actions/syg-legal-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Analizando...' : 'Analizar SEO'}
    </Button>
  );
}

export function SEOAnalyzerForm() {
  const [state, formAction] = useFormState(
    analyzeLandingPageForSEOAction,
    initialState
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <form action={formAction} className="space-y-4">
            <div>
              <Label htmlFor="landingPageContent" className="font-headline text-lg">
                Contenido de la Landing Page (HTML)
              </Label>
              <Textarea
                id="landingPageContent"
                name="landingPageContent"
                placeholder="Pega aquí el código HTML de tu landing page..."
                rows={10}
                required
              />
            </div>
            <div>
              <Label htmlFor="keywords" className="font-headline text-lg">
                Palabras Clave
              </Label>
              <p className="text-sm text-muted-foreground mb-2">
                Lista de palabras clave separadas por comas.
              </p>
              <Input
                id="keywords"
                name="keywords"
                placeholder="Ej: legaltech, abogados para startups, contratos saas"
                required
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
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Checklist de SEO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={['item-0', 'item-1']}>
              <AccordionItem value="item-0">
                <AccordionTrigger>Title Tag Recomendado</AccordionTrigger>
                <AccordionContent>{state.data.titleTag}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger>Meta Description Recomendada</AccordionTrigger>
                <AccordionContent>{state.data.metaDescription}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Estructura de Encabezados (H1-H6)</AccordionTrigger>
                <AccordionContent className="whitespace-pre-wrap">{state.data.headingStructure}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Optimización de Palabras Clave</AccordionTrigger>
                <AccordionContent className="whitespace-pre-wrap">{state.data.keywordOptimization}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Keywords Long-Tail</AccordionTrigger>
                <AccordionContent className="whitespace-pre-wrap">{state.data.longTailKeywords}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Mejoras de Velocidad</AccordionContent>
                <AccordionContent className="whitespace-pre-wrap">{state.data.speedImprovements}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Schema Markup (JSON-LD)</AccordionTrigger>
                <AccordionContent>
                  <pre className="mt-2 w-full rounded-md bg-muted p-4 text-sm overflow-x-auto">
                    <code>{JSON.stringify(JSON.parse(state.data.schemaMarkup), null, 2)}</code>
                  </pre>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
