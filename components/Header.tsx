"use client"
import Link from 'next/link'
import { nav } from '@/content/site'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'backdrop-blur glass border-b border-white/10' : ''}`}>
      <div className="container-px max-w-screen-c flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-2 focus-ring" aria-label="FlexiStrategy.ai home">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent animate-pulseGlow" aria-hidden="true" />
          <span className="font-semibold tracking-tight">FlexiStrategy.ai</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link focus-ring">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* simple inline menu for mobile: anchors are visible in hero as CTAs */}
        </div>
      </div>
    </header>
  )
}

