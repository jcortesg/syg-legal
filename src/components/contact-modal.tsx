'use client';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactModal({
  dictionary,
  trigger,
}: {
  dictionary: any;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setSubmitted(true);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset form on close
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {
              dictionary.contact?.title ??
                'Book a consultation'
            }
          </DialogTitle>
          <DialogDescription>
            {
              dictionary.contact?.description ??
                "Fill out the form below and we'll get back to you as soon as possible."
            }
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="py-4 text-center">
            <h3 className="text-lg font-medium text-foreground">
              ¡Gracias!
            </h3>
            <p className="text-muted-foreground">
              Hemos recibido tu mensaje y te contactaremos pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input id="name" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Empresa
              </Label>
              <Input id="company" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Mensaje
              </Label>
              <Textarea id="message" required className="col-span-3" />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}