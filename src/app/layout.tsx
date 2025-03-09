import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Handiyan Juansah | Data Analyst & Web Developer',
  description: 'Portfolio of Handiyan Juansah, a Data Analyst, Web Developer, and Software Engineer specializing in transforming raw data into valuable insights.',
  keywords: 'data analyst, web developer, software engineer, portfolio, SQL, Python, Next.js, data visualization',
  authors: [{ name: 'Handiyan Juansah' }],
  creator: 'Handiyan Juansah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} scroll-smooth`}
      style={{ scrollPaddingTop: '120px' }}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Handiyan Juansah. Built with Next.js and Tailwind CSS.
          </div>
        </footer>
      </body>
    </html>
  )
} 