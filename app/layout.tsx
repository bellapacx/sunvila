// app/layout.tsx
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export const metadata = {
  title: 'SunvilaCoin',
  description: 'Eco initiative for community transformation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
