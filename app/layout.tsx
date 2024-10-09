import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';

const scpro = Source_Code_Pro({
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
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
