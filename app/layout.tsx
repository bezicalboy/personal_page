import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const scpro = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-scpro',
});

export const metadata: Metadata = {
  title: 'Bezical Portfolio',
  description: 'my personal page',
};

import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${scpro.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
