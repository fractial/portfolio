import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fractial',
  description: 'My portfolio page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-monasans">{children}</body>
    </html>
  );
}
