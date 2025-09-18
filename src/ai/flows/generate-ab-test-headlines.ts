'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating multiple headline variations for A/B testing on a landing page.
 *
 * The flow takes a prompt as input and returns an array of headline variations along with corresponding sub-headlines and CTAs.
 *
 * @interface GenerateABTestHeadlinesInput - The input type for the generateABTestHeadlines function.
 * @interface GenerateABTestHeadlinesOutput - The output type for the generateABTestHeadlines function.
 * @function generateABTestHeadlines - The main function that orchestrates the headline generation process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateABTestHeadlinesInputSchema = z.object({
  prompt: z
    .string()
    .describe(
      'A prompt describing the desired headlines, target audience, and brand tonality.'
    ),
});
export type GenerateABTestHeadlinesInput = z.infer<
  typeof GenerateABTestHeadlinesInputSchema
>;

const HeadlineVariationSchema = z.object({
  headline: z
    .string()
    .describe('A headline variation for the landing page (≤12 words).'),
  subHeadline: z
    .string()
    .describe('An alternative sub-headline for the headline (≤20 words).'),
  cta: z
    .string()
    .describe(
      'A compatible call to action for the headline (e.g., \'Agenda asesoría\', \'Ver planes\', \'Hablar con un abogado\').'
    ),
});

const GenerateABTestHeadlinesOutputSchema = z.array(
  HeadlineVariationSchema
);

export type GenerateABTestHeadlinesOutput = z.infer<
  typeof GenerateABTestHeadlinesOutputSchema
>;

export async function generateABTestHeadlines(
  input: GenerateABTestHeadlinesInput
): Promise<GenerateABTestHeadlinesOutput> {
  return generateABTestHeadlinesFlow(input);
}

const headlineGeneratorPrompt = ai.definePrompt({
  name: 'headlineGeneratorPrompt',
  input: {schema: GenerateABTestHeadlinesInputSchema},
  output: {schema: GenerateABTestHeadlinesOutputSchema},
  prompt: `{{prompt}} Generate 10 headline variations for a landing page, each with a corresponding sub-headline and CTA. Return a JSON array of objects with 'headline', 'subHeadline', and 'cta' keys.

Example output:
[
  {
    "headline": "Headline 1",
    "subHeadline": "Sub-headline 1",
    "cta": "CTA 1"
  },
  {
    "headline": "Headline 2",
    "subHeadline": "Sub-headline 2",
    "cta": "CTA 2"
  }
]
`,
});

const generateABTestHeadlinesFlow = ai.defineFlow(
  {
    name: 'generateABTestHeadlinesFlow',
    inputSchema: GenerateABTestHeadlinesInputSchema,
    outputSchema: GenerateABTestHeadlinesOutputSchema,
  },
  async input => {
    const {output} = await headlineGeneratorPrompt(input);
    return output!;
  }
);
