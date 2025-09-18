import type { Metadata } from 'next';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';

export const metadata: Metadata = {
  title: 'SYG Legal Landing Optimizer',
  description: 'Your legal partner to grow without fear.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <AppHeader lang={lang} dictionary={dictionary.navigation} />
          <main className="flex-1">{children}</main>
          <AppFooter lang={lang} />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
