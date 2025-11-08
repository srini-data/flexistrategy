import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlexiStrategy.ai — Future‑ready AI, Data & Cloud Strategy',
  description: 'FlexiStrategy.ai is a consulting firm delivering end‑to‑end cloud, data, and AI strategy, implementation, and advisory. Start small, scale fast, stay future‑ready.',
  keywords: ['AI consulting', 'data consulting', 'cloud strategy', 'MLOps', 'FinOps', 'technology advisory'],
  openGraph: {
    title: 'FlexiStrategy.ai — AI, Data & Cloud Strategy',
    description: 'Vendor‑neutral advisory and implementation across cloud, data, and AI.',
    url: 'https://flexistrategy.ai',
    siteName: 'FlexiStrategy.ai',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'FlexiStrategy.ai' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlexiStrategy.ai',
    description: 'Future‑ready AI, Data & Cloud Strategy',
    images: ['/og.png'],
  },
  metadataBase: new URL('https://flexistrategy.ai'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-ink">
      <body className={`${inter.className} bg-ink text-white antialiased`}>        
        <Header />
        <main className="container-px max-w-screen-c">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

