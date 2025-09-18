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
import { ChevronDown, Menu, Languages } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';
import type { Dictionary } from '@/dictionaries';

export function AppHeader({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: Dictionary['navigation'];
}) {
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  const navLinks = [
    { text: dictionary.services, href: `/${lang}/#services` },
    { text: dictionary.pricing, href: `/${lang}/#pricing` },
    { text: dictionary.about, href: `/${lang}/#testimonials` },
    { text: dictionary.faq, href: `/${lang}/#faq` },
  ];

  const toolLinks = [
    {
      text: dictionary.legalClauseGenerator,
      href: `/${lang}/tools/clause-generator`,
    },
    {
      text: dictionary.contractAnalyzer,
      href: `/${lang}/tools/contract-analyzer`,
    },
    {
      text: dictionary.jurisprudenceFinder,
      href: `/${lang}/tools/jurisprudence-finder`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <Link href={`/${lang}`} className="flex items-center gap-2">
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
          <ToolsDropdown dictionary={dictionary} toolLinks={toolLinks} />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher lang={lang} />
          <Button asChild>
            <Link href={`/${lang}/#contact`}>{dictionary.contact}</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{dictionary.openMenu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <Link
                    href={`/${lang}`}
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
                    {dictionary.tools}
                  </span>
                  <div className="flex flex-col gap-4 border-l pl-4">
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

function ToolsDropdown({
  dictionary,
  toolLinks,
}: {
  dictionary: Dictionary['navigation'];
  toolLinks: { text: string; href: string }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1 px-2 font-medium text-foreground/60 transition-colors hover:text-foreground/80"
        >
          {dictionary.tools} <ChevronDown className="h-4 w-4" />
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

function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link href={redirectedPathName(locale)}>{locale.toUpperCase()}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
