// app/layout.tsx
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'SunvilaCoin',
  description: 'Eco initiative for community transformation',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Additional head tags can go here */}
      </head>
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}