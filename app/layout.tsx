import './global.css'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const description = 'Andrés Romero, software engineer from Costa Rica.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Andresromero.dev',
    template: '%s · Andresromero.dev',
  },
  description,
  openGraph: {
    title: 'Andresromero.dev',
    description,
    url: baseUrl,
    siteName: 'Andresromero.dev',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Andrés Romero' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@andresromerodev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-neutral-900 bg-white dark:text-neutral-100 dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased px-6 mt-8 sm:mt-12">
        <main className="min-w-0 max-w-xl mx-auto flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
