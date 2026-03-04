'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Compass } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) return item.name
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className={clsx('bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300', scrolled ? 'shadow-md' : 'shadow-sm')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-accent-400" />
            </div>
            <span className="font-display text-xl font-bold text-primary-900 hidden sm:block tracking-tight">Frontier Office</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href} className={clsx('px-4 py-2 rounded-full text-sm font-medium transition-all duration-200', activeTab === item.name ? 'bg-primary-100 text-primary-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100')}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button type="button" className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={clsx('px-4 py-3 rounded-full text-sm font-medium transition-all duration-200', activeTab === item.name ? 'bg-primary-100 text-primary-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
