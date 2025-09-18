'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoImage } from '@/components/logo-image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, Globe } from 'lucide-react';
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
import { ContactModal } from '../contact-modal';

function ColombianFlag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width="20"
      height="14"
    >
      <rect width="3" height="2" fill="#003893" />
      <rect width="3" height="1.5" fill="#fcd116" />
      <rect width="3" height="0.5" y="1.5" fill="#ce1126" />
      <rect width="3" height="1" fill="#fcd116" />
    </svg>
  );
}

function USFlag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 3"
      width="20"
      height="12"
    >
      <rect width="5" height="3" fill="#B22234" />
      <rect width="5" height="2" fill="#fff" />
      <rect width="5" height="1" fill="#B22234" />
      <rect width="2" height="1.5" fill="#3C3B6E" />
      <g fill="#fff">
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(0, .15) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.4, .15) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.8, .15) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.2, .15) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.6, .15) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(0, .45) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.4, .45) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.8, .45) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.2, .45) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.6, .45) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(0, .75) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.4, .75) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.8, .75) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.2, .75) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.6, .75) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(0, 1.05) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.4, 1.05) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(.8, 1.05) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.2, 1.05) scale(.2)" />
        <path d="M.2 0L.4.1.2.2.0.1z" transform="translate(1.6, 1.05) scale(.2)" />
      </g>
    </svg>
  );
}

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
      text: dictionary.abTest,
      href: `/${lang}/tools/ab-test-generator`,
    },
    {
      text: dictionary.adCopy,
      href: `/${lang}/tools/ad-copy-generator`,
    },
    {
      text: dictionary.seo,
      href: `/${lang}/tools/seo-analyzer`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-auto flex items-center">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <LogoImage />
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="font-medium text-accent transition-colors hover:text-accent/80"
            >
              {link.text}
            </Link>
          ))}
          <ToolsDropdown dictionary={dictionary} toolLinks={toolLinks} />
        </nav>

        <div className="ml-auto flex items-center justify-end gap-2">
          <LanguageSwitcher lang={lang} />
          <ContactModal
            dictionary={dictionary}
            trigger={
              <Button>
                <span>{dictionary.contact}</span>
              </Button>
            }
          />
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
                    <LogoImage />
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
  dictionary: Pick<Dictionary['navigation'], 'tools'>;
  toolLinks: { text: string; href: string }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1 px-2 font-medium text-accent transition-colors hover:text-accent/80"
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
        <Button variant="ghost" className="gap-2 px-2">
          <Globe className="h-5 w-5" />
          <span className="font-medium uppercase">{lang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={redirectedPathName(locale)}
              className="flex items-center gap-2"
            >
              {locale === 'es' ? <ColombianFlag /> : <USFlag />}
              {locale.toUpperCase()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}