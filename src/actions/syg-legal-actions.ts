'use server';

import {
  generateABTestHeadlines,
  type GenerateABTestHeadlinesOutput,
} from '@/ai/flows/generate-ab-test-headlines';
import {
  generateAdCopy,
  type GenerateAdCopyInput,
  type GenerateAdCopyOutput,
} from '@/ai/flows/generate-ad-copy';
import {
  analyzeLandingPageForSEO,
  type AnalyzeLandingPageForSEOInput,
  type AnalyzeLandingPageForSEOOutput,
} from '@/ai/flows/analyze-landing-page-for-seo';
import { z } from 'zod';

interface FormState<T> {
  data: T | null;
  error: string | null;
}

export async function generateABTestHeadlinesAction(
  prevState: FormState<GenerateABTestHeadlinesOutput>,
  formData: FormData
): Promise<FormState<GenerateABTestHeadlinesOutput>> {
  const schema = z.object({
    prompt: z.string().min(1, 'El prompt no puede estar vacío.'),
  });
  
  const validatedFields = schema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const result = await generateABTestHeadlines(validatedFields.data);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error generating A/B test headlines:', error);
    return {
      data: null,
      error: 'Hubo un problema al generar las variantes. Inténtalo de nuevo.',
    };
  }
}

export async function generateAdCopyAction(
  prevState: FormState<GenerateAdCopyOutput>,
  formData: FormData
): Promise<FormState<GenerateAdCopyOutput>> {
  const schema = z.object({
    platform: z.enum(['Meta/IG', 'LinkedIn']),
    keyServices: z.string().min(1, 'Los servicios clave son requeridos.'),
    targetAudience: z.string().min(1, 'El público objetivo es requerido.'),
  });

  const validatedFields = schema.safeParse({
    platform: formData.get('platform'),
    keyServices: formData.get('keyServices'),
    targetAudience: formData.get('targetAudience'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const result = await generateAdCopy(validatedFields.data as GenerateAdCopyInput);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error generating ad copy:', error);
    return {
      data: null,
      error: 'Hubo un problema al generar los anuncios. Inténtalo de nuevo.',
    };
  }
}

export async function analyzeLandingPageForSEOAction(
  prevState: FormState<AnalyzeLandingPageForSEOOutput>,
  formData: FormData
): Promise<FormState<AnalyzeLandingPageForSEOOutput>> {
  const schema = z.object({
    landingPageContent: z.string().min(1, 'El contenido HTML es requerido.'),
    keywords: z.string().min(1, 'Las palabras clave son requeridas.'),
  });

  const validatedFields = schema.safeParse({
    landingPageContent: formData.get('landingPageContent'),
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: validatedFields.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const result = await analyzeLandingPageForSEO(validatedFields.data as AnalyzeLandingPageForSEOInput);
    return { data: result, error: null };
  } catch (error) {
    console.error('Error analyzing SEO:', error);
    return {
      data: null,
      error: 'Hubo un problema al analizar el SEO. Inténtalo de nuevo.',
    };
  }
}
