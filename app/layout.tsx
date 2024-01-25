
import type { Metadata } from 'next';
import AppService from './provider/AppService';

import './globals.css';

export const metadata: Metadata = {
  title: 'RD Card Generator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppService>
        <body>{children}</body>
      </AppService>
    </html>
  );
}
