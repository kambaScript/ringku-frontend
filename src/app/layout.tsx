import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/provider/theme-provider';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});
const description = '';
export const metadata: Metadata = {
  title: 'RingKu',
  description,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/flogoDark.svg',
        href: '/logoDark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/flogoLight.svg',
        href: '/logoLight.svg',
      },
    ],
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-AO" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${inter.className} bg-[#FFFFFF] dark:bg-zinc-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
