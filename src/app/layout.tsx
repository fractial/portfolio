import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fractial',
  description: 'My web developer portfolio webpage',
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
