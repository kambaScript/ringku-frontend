import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/provider/theme-provider';

const inter = Inter({ subsets: ['latin'] });
const description = '';
export const metadata: Metadata = {
  title: 'RingKu',
  description,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/faviconDark.svg',
        href: '/faviconDark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/faviconDark.svg',
        href: '/faviconDark.svg',
      },
    ],
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-AO" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
