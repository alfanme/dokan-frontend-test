import type { Metadata } from 'next';
import Header from '@dokan/components/Header';
import Footer from '@dokan/components/Footer';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Dokan Front End Test',
  description: 'A Next.js application with Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* Setup phosphor-icons */}
      <Script src='https://unpkg.com/@phosphor-icons/web@2.1.1'></Script>
      <body className='antialiased min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
