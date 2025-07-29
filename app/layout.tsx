// src/app/layout.tsx
import './globals.css'
import { Metadata } from 'next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export const metadata: Metadata = {
  title: 'SunvilaCoin | GDHRP Platform',
  description: 'Turning remittances into sustainable investments and green jobs through blockchain.',
  icons: {
    icon: '/logo.png',}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
