import { Metadata } from 'next'
import { pressMentions } from '@/data/social'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Download, Phone } from 'lucide-react'
import { COLORS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Press | Castaways Ice Cream',
  description: 'Castaways Ice Cream in the press. Featured in Honolulu Magazine, KHON2, and Aloha State Daily.',
}

const PRESS_DETAILS = [
  {
    outlet: 'Honolulu Magazine',
    title: 'Ultimate Guide to 12 Luscious Local Ice Cream Shops',
    quote: 'Castaways brings a fresh take on homemade ice cream to Honolulu, with standout Southeast Asian-inspired flavors and fresh waffle cones baked in-house.',
    color: 'bg-[#C8956A]',
  },
  {
    outlet: 'KHON2 News',
    title: 'Castaways Ice Cream will satisfy your sweet tooth',
    quote: 'With over 30 rotating flavors and everything made from scratch, Castaways is quickly becoming a neighborhood favorite in the heart of Honolulu.',
    color: 'bg-[#5BAED6]',
  },
  {
    outlet: 'Aloha State Daily',
    title: "Mo\u02BBili\u02BBili has a new ice cream shop",
    quote: "Robert Duong's homemade ice cream shop brings bold, creative flavors to the Mo\u02BBili\u02BBili neighborhood, steps from the University of Hawai\u02BBi campus.",
    color: 'bg-[#4A7A52]',
  },
]

export default function PressPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Press</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black tracking-tight mb-4">
          In the press<span className="text-accent">.</span>
        </h1>
        <p className="text-lg text-secondary/60 max-w-lg">
          Castaways Ice Cream has been featured in local and national media.
        </p>
      </section>

      {/* Press articles */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="space-y-8">
          {PRESS_DETAILS.map((article, i) => {
            const mention = pressMentions.find(m => m.outlet === article.outlet) || pressMentions[i]
            return (
              <div
                key={article.outlet}
                className="bg-white rounded-[32px] p-8 md:p-10 border border-slate200 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Outlet badge */}
                  <div className={`${article.color} text-white rounded-2xl px-6 py-4 text-center shrink-0 min-w-[160px]`}>
                    <p className="font-[family-name:var(--font-playfair)] font-black text-lg leading-tight">
                      {article.outlet}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-playfair)] font-black text-2xl text-secondary mb-3">
                      {article.title}
                    </h3>
                    <blockquote className="text-secondary/60 italic text-lg leading-relaxed mb-4 border-l-4 border-slate200 pl-4">
                      &ldquo;{article.quote}&rdquo;
                    </blockquote>
                    {mention && (
                      <a
                        href={mention.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                      >
                        Read the article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Press inquiry */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="bg-cream rounded-[32px] p-8 md:p-12 border border-slate200 text-center">
          <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-3">
            Press inquiries
          </h2>
          <p className="text-secondary/60 mb-4">
            For media requests, interviews, or high-res photos, reach us at:
          </p>
          <a
            href="tel:+18087441001"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
          >
            (808) 744-1001
          </a>
          <p className="text-sm text-slate-400 mt-4">
            High-res photos and fact sheet available upon request.
          </p>
        </div>
      </section>

      {/* Brand assets */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-center mb-8">
          Brand assets<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo */}
          <div className="bg-white rounded-[24px] p-8 border border-slate200 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/castaways-logo.jpg"
                alt="Castaways Ice Cream logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-secondary mb-2">Logo</h3>
            <a
              href="/images/castaways-logo.jpg"
              download
              className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:underline"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          {/* Color palette */}
          <div className="bg-white rounded-[24px] p-8 border border-slate200">
            <h3 className="font-bold text-secondary mb-4 text-center">Color Palette</h3>
            <div className="space-y-3">
              {[
                { name: 'Sky Blue', value: COLORS.primary, hex: '#5BAED6' },
                { name: 'Sandy Tan', value: COLORS.accent, hex: '#C8956A' },
                { name: 'Palm Green', value: COLORS.green, hex: '#4A7A52' },
                { name: 'Deep Navy', value: COLORS.secondary, hex: '#2C3E50' },
              ].map(c => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg shrink-0" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="text-sm font-bold text-secondary">{c.name}</p>
                    <p className="text-xs text-slate-400">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white rounded-[24px] p-8 border border-slate200 text-center">
            <h3 className="font-bold text-secondary mb-4">Typography</h3>
            <div className="space-y-4">
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-black">Playfair Display</p>
                <p className="text-xs text-slate-400 mt-1">Headings</p>
              </div>
              <div>
                <p className="text-xl font-bold">Plus Jakarta Sans</p>
                <p className="text-xs text-slate-400 mt-1">Body text</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
