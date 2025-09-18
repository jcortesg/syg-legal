import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Services } from '@/components/landing/services';
import { Testimonials } from '@/components/landing/testimonials';
import { Pricing } from '@/components/landing/pricing';
import { Faq } from '@/components/landing/faq';
import { FinalCta } from '@/components/landing/final-cta';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero dictionary={dictionary.hero} />
      <ProblemSolution dictionary={dictionary.problemSolution} />
      <Services dictionary={dictionary.services} />
      <Testimonials dictionary={dictionary.testimonials} />
      <Pricing dictionary={dictionary.pricing} />
      <Faq dictionary={dictionary.faq} />
      <FinalCta dictionary={dictionary.finalCta} />
    </>
  );
}
