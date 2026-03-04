'use client'

import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready to Connect?'
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Contact Us'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="bg-gradient-to-r from-primary-800 to-primary-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-10 py-4 bg-accent-400 text-primary-900 rounded-full font-bold text-lg hover:bg-accent-300 transition-colors duration-200">{primaryLabel}</Link>
          <Link href="/about" className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-200">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  )
}
