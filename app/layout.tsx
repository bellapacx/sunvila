// app/layout.tsx
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'SunvilaCoin',
  description: 'Eco initiative for community transformation',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className="min-h-screen bg-white text-gray-800 flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}