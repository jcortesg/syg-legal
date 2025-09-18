'use server';

/**
 * @fileOverview A flow for generating ad copy variations for different platforms.
 *
 * - generateAdCopy - A function that generates ad copy based on the input.
 * - GenerateAdCopyInput - The input type for the generateAdCopy function.
 * - GenerateAdCopyOutput - The return type for the generateAdCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdCopyInputSchema = z.object({
  platform: z
    .enum(['Meta/IG', 'LinkedIn'])
    .describe('The platform for which to generate ad copy.'),
  keyServices: z
    .string()
    .describe(
      'A comma-separated list of key services to emphasize in the ad copy.'
    ),
  targetAudience: z.string().describe('The target audience for the ad copy.'),
});
export type GenerateAdCopyInput = z.infer<typeof GenerateAdCopyInputSchema>;

const AdCopySchema = z.object({
  headline: z.string().describe('The headline for the ad.'),
  copy: z.string().describe('The main copy for the ad.'),
  description: z.string().describe('The description for the ad.'),
  cta: z.string().describe('The call to action for the ad.'),
});

const GenerateAdCopyOutputSchema = z.array(AdCopySchema).describe(
  'An array of ad copy variations.'
);
export type GenerateAdCopyOutput = z.infer<typeof GenerateAdCopyOutputSchema>;

export async function generateAdCopy(
  input: GenerateAdCopyInput
): Promise<GenerateAdCopyOutput> {
  return generateAdCopyFlow(input);
}

const adCopyPrompt = ai.definePrompt({
  name: 'adCopyPrompt',
  input: {schema: GenerateAdCopyInputSchema},
  output: {schema: GenerateAdCopyOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating
high-converting ad copy for various platforms.

  Based on the key services and target audience provided, generate 3 ad copy
  variations for the specified platform. Each variation should include a
  headline, main copy, description, and call to action.

  Platform: {{{platform}}}
  Key Services: {{{keyServices}}}
  Target Audience: {{{targetAudience}}}

  Ad Copy Variations (JSON array):
  `,
});

const generateAdCopyFlow = ai.defineFlow(
  {
    name: 'generateAdCopyFlow',
    inputSchema: GenerateAdCopyInputSchema,
    outputSchema: GenerateAdCopyOutputSchema,
  },
  async input => {
    const {output} = await adCopyPrompt(input);
    return output!;
  }
);
