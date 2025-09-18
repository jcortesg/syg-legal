'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';

const navLinks = [
  { text: 'Servicios', href: '/#services' },
  { text: 'Planes', href: '/#pricing' },
  { text: 'Nosotros', href: '/#testimonials' },
  { text: 'FAQ', href: '/#faq' },
];

const toolLinks = [
  { text: 'A/B Test Headlines', href: '/tools/ab-test-headlines' },
  { text: 'Generador de Anuncios', href: '/tools/ad-copy' },
  { text: 'Analizador SEO', href: '/tools/seo-analyzer' },
];

export function AppHeader() {
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-medium text-foreground">
              Syg Legal
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.text}
            </Link>
          ))}
          <ToolsDropdown />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild>
            <Link href="/#contact">Agenda Asesoría</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setSheetOpen(false)}
                  >
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-medium text-foreground">
                      Syg Legal
                    </span>
                  </Link>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.text}
                      href={link.href}
                      className="font-medium text-foreground"
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                  <span className="font-medium text-foreground">
                    Herramientas AI
                  </span>
                  <div className="flex flex-col gap-4 pl-4 border-l">
                    {toolLinks.map((link) => (
                      <Link
                        key={link.text}
                        href={link.href}
                        className="text-foreground/80"
                        onClick={() => setSheetOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function ToolsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1 px-2 font-medium text-foreground/60 transition-colors hover:text-foreground/80"
        >
          Herramientas AI <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {toolLinks.map((link) => (
          <DropdownMenuItem key={link.text} asChild>
            <Link href={link.href}>{link.text}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
