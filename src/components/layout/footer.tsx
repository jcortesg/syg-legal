import Link from 'next/link';
import { Logo } from '@/components/logo';
import { FOOTER_DATA } from '@/lib/data';

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-medium text-foreground">
                Syg Legal
              </span>
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div>
            <p className="font-headline font-medium text-foreground">
              Navegación
            </p>
            <nav className="mt-4 flex flex-col space-y-2">
              {FOOTER_DATA.links.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
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
              {FOOTER_DATA.social.map((link) => (
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
            {FOOTER_DATA.policies.map((link) => (
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
            {FOOTER_DATA.legal.replace('{YEAR}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
