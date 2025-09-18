import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'SygLegal Landing Optimizer',
  description: 'Tu socio legal para crecer sin miedo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Belleza&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          <main className="flex-1">{children}</main>
          <AppFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
