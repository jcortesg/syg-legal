import { PROBLEM_SOLUTION_DATA } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="bg-secondary/50 py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
              {PROBLEM_SOLUTION_DATA.problem.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {PROBLEM_SOLUTION_DATA.problem.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-destructive/80" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-card p-8 shadow-lg">
            <h2 className="font-headline text-3xl font-bold text-primary">
              {PROBLEM_SOLUTION_DATA.solution.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {PROBLEM_SOLUTION_DATA.solution.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
