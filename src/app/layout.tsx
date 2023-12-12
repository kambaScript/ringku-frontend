import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const description = '';
export const metadata: Metadata = {
  title: 'RingKu',
  description,
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-AO" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
