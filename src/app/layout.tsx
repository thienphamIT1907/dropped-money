import { roboto } from '@/config/fonts';
import { META_DATA } from '@/config/metadata';
import '@/styles/global.css';
import '@/styles/reset.css';
import type { Metadata } from 'next';

export const metadata: Metadata = META_DATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/wallet-icon.png" rel="icon" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
