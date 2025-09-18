'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { generateAdCopyAction } from '@/actions/syg-legal-actions';
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import type { Dictionary } from '@/dictionaries';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton({
  dictionary,
}: {
  dictionary: Dictionary['tools']['adCopy']['form'];
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? dictionary.submittingButton : dictionary.submitButton}
    </Button>
  );
}

export function AdCopyGenerator({
  dictionary,
}: {
  dictionary: Dictionary['tools']['adCopy'];
}) {
  const { toast } = useToast();
  const [platform, setPlatform] = useState('Meta/IG');
  const [state, formAction] = useFormState(generateAdCopyAction, {
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="platform">
                  {dictionary.form.platformLabel}
                </Label>
                <Select
                  name="platform"
                  defaultValue="Meta/IG"
                  onValueChange={setPlatform}
                >
                  <SelectTrigger id="platform">
                    <SelectValue placeholder={dictionary.form.platformLabel} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Meta/IG">Meta/IG</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keyServices">
                  {dictionary.form.servicesLabel}
                </Label>
                <Input
                  id="keyServices"
                  name="keyServices"
                  placeholder={dictionary.form.servicesPlaceholder}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAudience">
                {dictionary.form.audienceLabel}
              </Label>
              <Input
                id="targetAudience"
                name="targetAudience"
                placeholder={dictionary.form.audiencePlaceholder}
              />
            </div>
            <SubmitButton dictionary={dictionary.form} />
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <Card>
          <CardHeader>
            <CardTitle>
              {dictionary.results.title.replace('{platform}', platform)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{dictionary.results.headline}</TableHead>
                  <TableHead>{dictionary.results.copy}</TableHead>
                  <TableHead>{dictionary.results.description}</TableHead>
                  <TableHead>{dictionary.results.cta}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {state.data.map((ad, index) => (
                  <TableRow key={index}>
                    <TableCell>{ad.headline}</TableCell>
                    <TableCell>{ad.copy}</TableCell>
                    <TableCell>{ad.description}</TableCell>
                    <TableCell>{ad.cta}</TableCell>
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
