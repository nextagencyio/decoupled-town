'use client'

import Link from 'next/link'
import Image from 'next/image'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80&fit=crop" alt="Hero background" fill className="object-cover" priority unoptimized />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-accent-400 font-display text-lg md:text-xl tracking-widest uppercase mb-4">Trusted Service</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-800 text-white rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-bold text-lg tracking-wide shadow-lg">Explore Services</Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white rounded-full hover:bg-white/10 transition-all duration-300 font-bold text-lg tracking-wide">Contact Us</Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}
