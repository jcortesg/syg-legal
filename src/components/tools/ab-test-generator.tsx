'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { generateABTestHeadlinesAction } from '@/actions/syg-legal-actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/dictionaries';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton({
  dictionary,
}: {
  dictionary: Dictionary['tools']['abTest']['form'];
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? dictionary.submittingButton : dictionary.submitButton}
    </Button>
  );
}

export function ABTestGenerator({
  dictionary,
}: {
  dictionary: Dictionary['tools']['abTest'];
}) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(generateABTestHeadlinesAction, {
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
          <CardTitle>{dictionary.form.promptLabel}</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="prompt"
              placeholder={dictionary.form.promptPlaceholder}
              rows={4}
            />
            <SubmitButton dictionary={dictionary.form} />
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <Card>
          <CardHeader>
            <CardTitle>{dictionary.results.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{dictionary.results.headline}</TableHead>
                  <TableHead>{dictionary.results.subHeadline}</TableHead>
                  <TableHead>{dictionary.results.cta}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {state.data.map((variant, index) => (
                  <TableRow key={index}>
                    <TableCell>{variant.headline}</TableCell>
                    <TableCell>{variant.subHeadline}</TableCell>
                    <TableCell>{variant.cta}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
