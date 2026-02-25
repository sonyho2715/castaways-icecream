import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Gift, MapPin, Phone, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gift Cards | Castaways Ice Cream',
  description: 'Give the gift of homemade ice cream. Castaways Ice Cream gift cards available in-store in Honolulu.',
}

const GIFT_AMOUNTS = [
  { amount: '$10', tagline: 'A taste of aloha', accent: 'from-[#5BAED6]/80 to-[#5BAED6]' },
  { amount: '$25', tagline: 'The island sampler', accent: 'from-[#4A7A52]/80 to-[#4A7A52]' },
  { amount: '$50', tagline: 'Scoop season pass', accent: 'from-[#C8956A]/80 to-[#C8956A]' },
  { amount: '$100', tagline: 'The ultimate castaway', accent: 'from-[#2C3E50]/80 to-[#2C3E50]' },
]

export default function GiftCardsPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <div className="flex items-center gap-3 mb-3">
          <Gift className="w-5 h-5 text-accent" />
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Gift Cards</p>
        </div>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black tracking-tight mb-4">
          Give the gift of a scoop<span className="text-accent">.</span>
        </h1>
        <p className="text-xl text-secondary/60 max-w-lg">
          Perfect for birthdays, graduations, and anyone who deserves a little aloha.
        </p>
      </section>

      {/* Gift card options */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {GIFT_AMOUNTS.map(card => (
            <div
              key={card.amount}
              className={`relative bg-gradient-to-br ${card.accent} rounded-[24px] p-6 md:p-8 text-white overflow-hidden group hover:shadow-xl transition-all`}
            >
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 opacity-20">
                <Image
                  src="/images/castaways-logo.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

              <p className="text-xs font-bold tracking-widest uppercase opacity-80 mb-4">Castaways</p>
              <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black mb-2">
                {card.amount}
              </p>
              <p className="text-sm opacity-80">{card.tagline}</p>
            </div>
          ))}
        </div>

        {/* Custom amount */}
        <div className="mt-6 bg-white rounded-[24px] p-6 border border-slate200 text-center">
          <p className="font-[family-name:var(--font-playfair)] font-black text-xl text-secondary mb-1">
            Custom amount
          </p>
          <p className="text-slate-500 text-sm">Any amount you choose. Just ask at the register.</p>
        </div>
      </section>

      {/* Purchase CTA */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="bg-accent/5 border border-accent/20 rounded-[32px] p-8 md:p-12 text-center">
          <CreditCard className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-3">
            Purchase in-store
          </h2>
          <div className="flex flex-col items-center gap-3 text-secondary/70 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>2346 South King St, Honolulu, HI 96826</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+18087441001" className="hover:text-primary transition-colors">(808) 744-1001</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-accent/10">
            <p className="text-sm text-slate-500">
              Online gift cards coming soon. Call <a href="tel:+18087441001" className="text-primary font-semibold">(808) 744-1001</a> to arrange a gift card purchase by phone.
            </p>
          </div>
        </div>
      </section>

      {/* How to redeem */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-center mb-8">
          How to redeem<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: CreditCard, title: 'Present at register', description: 'Show your gift card when you order. Physical card or confirmation email both work.' },
            { icon: Gift, title: 'Valid for everything', description: 'Scoops, cones, cakes, pints, milkshakes. All menu items are fair game.' },
            { icon: MapPin, title: 'Never expires', description: 'No expiration date, no hidden fees. Use it whenever you want.' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-[24px] p-8 border border-slate200 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] font-black text-lg mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
