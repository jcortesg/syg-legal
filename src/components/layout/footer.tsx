import Link from 'next/link';
import { LogoImage } from '@/components/logo-image';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';

export async function AppFooter({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  const footerData = dictionary.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <LogoImage />
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              {footerData.description}
            </p>
          </div>

          <div>
            <p className="font-headline font-medium text-foreground">
              {dictionary.navigation.title}
            </p>
            <nav className="mt-4 flex flex-col space-y-2">
              {footerData.links.map((link) => (
                <Link
                  key={link.text}
                  href={`/${lang}${link.href}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-headline font-medium text-foreground">Social</p>
            <nav className="mt-4 flex flex-col space-y-2">
              {footerData.social.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 sm:flex sm:items-center sm:justify-between">
          <nav className="flex space-x-4">
            {footerData.policies.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
            {footerData.legal.replace('{YEAR}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}