import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Services } from '@/components/landing/services';
import { Pricing } from '@/components/landing/pricing';
import { Faq } from '@/components/landing/faq';
import { Testimonials } from '@/components/landing/testimonials';
import { TrustedBy } from '@/components/landing/trusted-by';
import { FinalCta } from '@/components/landing/final-cta';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
    </div>
  );
}
