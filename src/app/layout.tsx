import { ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: 'Seckr',
};

const openSans = Open_Sans({ subsets: ['latin'] });

/**
 * @function RootLayout
 * @param {ReactNode} children
 * @return {JSX.Element}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
