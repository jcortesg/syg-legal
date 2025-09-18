'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { analyzeLandingPageForSEOAction } from '@/actions/syg-legal-actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import type { Dictionary } from '@/dictionaries';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton({
  dictionary,
}: {
  dictionary: Dictionary['tools']['seo']['form'];
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? dictionary.submittingButton : dictionary.submitButton}
    </Button>
  );
}

export function SEOAnalyzer({
  dictionary,
}: {
  dictionary: Dictionary['tools']['seo'];
}) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(analyzeLandingPageForSEOAction, {
    data: null,
    error: null,
  });

  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state.error, toast]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {dictionary.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {dictionary.description}
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{dictionary.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="landingPageContent">
                {dictionary.form.contentLabel}
              </Label>
              <Textarea
                id="landingPageContent"
                name="landingPageContent"
                placeholder={dictionary.form.contentPlaceholder}
                rows={10}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="keywords">{dictionary.form.keywordsLabel}</Label>
              <Input
                id="keywords"
                name="keywords"
                placeholder={dictionary.form.keywordsPlaceholder}
              />
            </div>
            <SubmitButton dictionary={dictionary.form} />
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <Card>
          <CardHeader>
            <CardTitle>{dictionary.results.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResultItem
              title={dictionary.results.titleTag}
              content={state.data.titleTag}
            />
            <ResultItem
              title={dictionary.results.metaDescription}
              content={state.data.metaDescription}
            />
            <ResultItem
              title={dictionary.results.headingStructure}
              content={state.data.headingStructure}
            />
            <ResultItem
              title={dictionary.results.keywordOptimization}
              content={state.data.keywordOptimization}
            />
            <ResultItem
              title={dictionary.results.longTailKeywords}
              content={state.data.longTailKeywords}
            />
            <ResultItem
              title={dictionary.results.speedImprovements}
              content={state.data.speedImprovements}
            />
            <div>
              <h3 className="font-semibold">
                {dictionary.results.schemaMarkup}
              </h3>
              <pre className="mt-2 w-full overflow-auto rounded-md bg-secondary p-4 text-sm">
                <code>{state.data.schemaMarkup}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function ResultItem({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}
