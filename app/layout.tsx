import type {Metadata} from 'next';
import { Inter, Outfit, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'JG University | Excellence by Choice',
  description: 'Welcome to JG University, where innovation meets tradition. Transform your future with our world-class educational programs.',
};


import FloatingContact from '@/components/FloatingContact';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-white">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
