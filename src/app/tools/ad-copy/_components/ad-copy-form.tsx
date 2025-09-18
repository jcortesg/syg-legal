'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { generateAdCopyAction } from '@/actions/syg-legal-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generando...' : 'Generar Anuncios'}
    </Button>
  );
}

export function AdCopyForm() {
  const [state, formAction] = useFormState(generateAdCopyAction, initialState);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">
              Configuración del Anuncio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div>
                <Label htmlFor="platform">Plataforma</Label>
                <Select name="platform" defaultValue="Meta/IG" required>
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="Selecciona una plataforma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Meta/IG">Meta / Instagram</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="keyServices">Servicios Clave</Label>
                <Input
                  id="keyServices"
                  name="keyServices"
                  placeholder="Ej: Contratos SaaS, due diligence"
                  required
                  defaultValue="contratos SaaS, due diligence, compliance datos personales"
                />
              </div>

              <div>
                <Label htmlFor="targetAudience">Público Objetivo</Label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  placeholder="Ej: Founders de startups B2B"
                  required
                  defaultValue="Founders de startups SaaS y fintech"
                />
              </div>

              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <div className="space-y-6">
          {state.error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          {!state.data && !state.error && (
             <div className="text-center p-8 border-2 border-dashed rounded-lg">
                <h3 className="font-headline text-lg">Resultados de Anuncios</h3>
                <p className="text-muted-foreground">Las variaciones de anuncios generadas aparecerán aquí.</p>
             </div>
          )}

          {state.data && (
             <>
               <h2 className="font-headline text-2xl font-bold text-center">
                 Variantes de Anuncios Generadas
               </h2>
                {state.data.map((ad, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="font-body text-lg font-bold">
                        {ad.headline}
                      </CardTitle>
                      <CardDescription>{ad.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-4">
                      <p className='whitespace-pre-wrap'>{ad.copy}</p>
                      <Button variant="link" className="p-0 h-auto">{ad.cta}</Button>
                    </CardContent>
                  </Card>
                ))}
             </>
          )}
        </div>
      </div>
    </div>
  );
}
