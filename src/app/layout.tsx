import { poppins } from '@/config/fonts';
import { META_DATA } from '@/config/metadata';
import { cn } from '@/lib/utils';
import SidebarProvider from '@/providers/SidebarProvider';
import '@/styles/global.css';
import '@/styles/reset.css';
import type { Metadata } from 'next';
import 'react-day-picker/dist/style.css';

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
      <body
        className={cn(
          poppins.className,
          'min-h-screen bg-background antialiased',
        )}
      >
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
