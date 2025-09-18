'use server';
/**
 * @fileOverview Analyzes landing page content and generates an SEO checklist.
 *
 * - analyzeLandingPageForSEO - A function that analyzes the landing page and generates an SEO checklist.
 * - AnalyzeLandingPageForSEOInput - The input type for the analyzeLandingPageForSEO function.
 * - AnalyzeLandingPageForSEOOutput - The return type for the analyzeLandingPageForSEO function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeLandingPageForSEOInputSchema = z.object({
  landingPageContent: z
    .string()
    .describe('The HTML content of the landing page to analyze.'),
  keywords: z
    .string()
    .describe(
      'A comma-separated list of keywords relevant to the landing page.'
    ),
});
export type AnalyzeLandingPageForSEOInput = z.infer<
  typeof AnalyzeLandingPageForSEOInputSchema
>;

const AnalyzeLandingPageForSEOOutputSchema = z.object({
  titleTag: z
    .string()
    .describe('Recommended title tag for the landing page.'),
  metaDescription: z
    .string()
    .describe('Recommended meta description for the landing page.'),
  headingStructure: z
    .string()
    .describe(
      'Analysis of the heading structure (H1-H6) and recommendations.'
    ),
  keywordOptimization: z
    .string()
    .describe('Recommendations for keyword optimization within the content.'),
  schemaMarkup: z
    .string()
    .describe('Example FAQ schema markup (JSON-LD) for the landing page.'),
  longTailKeywords: z
    .string()
    .describe('A list of long-tail keywords to target.'),
  speedImprovements: z
    .string()
    .describe('Suggestions for improving the landing page loading speed.'),
});

export type AnalyzeLandingPageForSEOOutput = z.infer<
  typeof AnalyzeLandingPageForSEOOutputSchema
>;

export async function analyzeLandingPageForSEO(
  input: AnalyzeLandingPageForSEOInput
): Promise<AnalyzeLandingPageForSEOOutput> {
  return analyzeLandingPageForSEOFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeLandingPageForSEOPrompt',
  input: {schema: AnalyzeLandingPageForSEOInputSchema},
  output: {schema: AnalyzeLandingPageForSEOOutputSchema},
  prompt: `You are an SEO specialist tasked with analyzing a landing page and providing recommendations for improvement.

  Analyze the following landing page content:
  {{landingPageContent}}

  Consider these keywords:
  {{keywords}}

  Provide the following SEO checklist items:
  - Recommended title tag
  - Recommended meta description
  - Analysis of the heading structure (H1-H6) and recommendations
  - Recommendations for keyword optimization within the content
  - Example FAQ schema markup (JSON-LD) for the landing page
  - A list of long-tail keywords to target
  - Suggestions for improving the landing page loading speed

  Format the output as a JSON object.`,
});

const analyzeLandingPageForSEOFlow = ai.defineFlow(
  {
    name: 'analyzeLandingPageForSEOFlow',
    inputSchema: AnalyzeLandingPageForSEOInputSchema,
    outputSchema: AnalyzeLandingPageForSEOOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
