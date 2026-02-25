'use client'

import { useState } from 'react'
import { flavors } from '@/data/flavors'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const ALL_TAGS = ['All', 'Fan Favorite', 'Seasonal', 'Tropical', 'Classic', 'Unique', 'Fruity', 'Nutty', 'Fun'] as const

const TAG_COLORS: Record<string, string> = {
  'Fan Favorite': 'bg-[#C8956A]/10 text-[#C8956A] border-[#C8956A]/20',
  'Seasonal': 'bg-[#4A7A52]/10 text-[#4A7A52] border-[#4A7A52]/20',
  'Tropical': 'bg-[#5BAED6]/10 text-[#5BAED6] border-[#5BAED6]/20',
  'Classic': 'bg-slate-50 text-slate-600 border-slate-200',
  'Unique': 'bg-purple-50 text-purple-600 border-purple-100',
  'Fruity': 'bg-pink-50 text-pink-600 border-pink-100',
  'Nutty': 'bg-amber-50 text-amber-700 border-amber-200',
  'Fun': 'bg-yellow-50 text-yellow-600 border-yellow-200',
  'Premium': 'bg-[#C8956A]/10 text-[#C8956A] border-[#C8956A]/20',
  'Colorful': 'bg-pink-50 text-pink-500 border-pink-100',
  'Bold': 'bg-red-50 text-red-600 border-red-100',
  'Rich': 'bg-amber-50 text-amber-800 border-amber-200',
  'Loaded': 'bg-orange-50 text-orange-600 border-orange-100',
  'Refreshing': 'bg-teal-50 text-teal-600 border-teal-100',
  'Asian-Inspired': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'Hawaiian': 'bg-[#4A7A52]/10 text-[#4A7A52] border-[#4A7A52]/20',
  'Award-Winning': 'bg-[#C8956A]/10 text-[#C8956A] border-[#C8956A]/20',
}

// Map flavor images to appropriate yelp photos by type
const FLAVOR_IMAGE_MAP: Record<string, string> = {
  'Pandan Coconut': '/images/yelp/photo-10-food-pandan.jpg',
  'Matcha Green Tea': '/images/yelp/photo-11-food-matcha.jpg',
  'Dark Chocolate': '/images/yelp/photo-02-food-choc-cherry.jpg',
  'Salted Caramel': '/images/yelp/photo-08-food-scoops.jpg',
  'Birthday Cake': '/images/yelp/photo-14-food-trio.jpg',
  'Blackberry Pie': '/images/yelp/photo-09-food-scoops-2.jpg',
  'Vanilla Bean': '/images/yelp/photo-01-food-cookies-cream.jpg',
  'Chocolate Chip Cookie': '/images/yelp/photo-23-food-pb-strawberry-cookie.jpg',
  'Rum Raisin': '/images/yelp/photo-24-food-scoops-3.jpg',
  'Mint Chocolate Chip': '/images/yelp/photo-22-food-choc-chip-cherry.jpg',
  'Pistachio': '/images/yelp/photo-25-food-scoops-4.jpg',
  'Strawberry Banana': '/images/yelp/photo-38-food-5.jpg',
  'Payday': '/images/yelp/photo-08-food-scoops.jpg',
  'Mango': '/images/yelp/photo-09-food-scoops-2.jpg',
  'Lychee Mochi': '/images/yelp/photo-16-food-pandan-trio.jpg',
  'Ube Coconut': '/images/yelp/photo-36-food-pandan-coconut-2.jpg',
  'Cookie Monster': '/images/yelp/photo-21-food-cookies-cream-sizes.jpg',
  'Castaway Coffee': '/images/yelp/photo-19-food-coffee-small.jpg',
  'Cotton Candy': '/images/yelp/photo-14-food-trio.jpg',
  'Grilled Pineapple': '/images/yelp/photo-24-food-scoops-3.jpg',
  'Peanut Butter': '/images/yelp/photo-23-food-pb-strawberry-cookie.jpg',
  'Cookie Dough': '/images/yelp/photo-01-food-cookies-cream.jpg',
  'Madagascar Vanilla': '/images/yelp/photo-25-food-scoops-4.jpg',
  'Macadamia Caramel': '/images/yelp/photo-08-food-scoops.jpg',
  'Bubble Gum': '/images/yelp/photo-14-food-trio.jpg',
  'Lime Breeze': '/images/yelp/photo-38-food-5.jpg',
  'Banana Oreo': '/images/yelp/photo-06-food-banana-choc.jpg',
  'Coconut Chocolate Chip': '/images/yelp/photo-22-food-choc-chip-cherry.jpg',
}

export default function FlavorsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered = activeFilter === 'All'
    ? flavors
    : flavors.filter(f => f.tags.includes(activeFilter))

  return (
    <main className="pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Full Archive</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black tracking-tight mb-4">
          The Flavors<span className="text-accent">.</span>
        </h1>
        <p className="text-xl text-secondary/60 max-w-lg">
          30+ rotating flavors. Homemade. Never factory-made.
        </p>
      </section>

      {/* Filter pills */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === tag
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-secondary/60 border border-slate200 hover:border-primary hover:text-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Showing {filtered.length} flavor{filtered.length !== 1 ? 's' : ''}
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(flavor => {
            const imgSrc = FLAVOR_IMAGE_MAP[flavor.name] || flavor.image
            return (
              <div
                key={flavor.id}
                className="bg-white rounded-[24px] overflow-hidden border border-slate200 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={flavor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {flavor.featured && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-playfair)] font-black text-lg text-secondary mb-1">
                    {flavor.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {flavor.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {flavor.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${
                          TAG_COLORS[tag] || 'bg-slate-50 text-slate-500 border-slate-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom note */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate200">
          <p className="text-2xl font-[family-name:var(--font-playfair)] font-black text-secondary mb-3">
            Flavors rotate daily.
          </p>
          <p className="text-slate-500 mb-6">
            Not every flavor is available every day. Follow us on Instagram to see today&apos;s lineup.
          </p>
          <a
            href="https://www.instagram.com/castawaysicecream/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Follow @castawaysicecream
          </a>
        </div>
      </section>
    </main>
  )
}
