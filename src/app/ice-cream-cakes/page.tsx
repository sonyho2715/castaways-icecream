import { Metadata } from 'next'
import CakeOrderForm from './CakeOrderForm'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ice Cream Cakes | Castaways Ice Cream',
  description: 'Custom ice cream cakes made to order. Your flavors, your dedication. Available for pickup at our Honolulu location.',
}

const CAKE_SIZES = [
  { size: '6-inch', serves: 'Serves 6-8', price: '$45', popular: false },
  { size: '8-inch', serves: 'Serves 10-12', price: '$65', popular: true },
  { size: 'Quarter Sheet', serves: 'Serves 20-25', price: '$120', popular: false },
  { size: 'Half Sheet', serves: 'Serves 40-50', price: '$200', popular: false },
]

const GALLERY_IMAGES = [
  { src: '/images/yelp/photo-08-food-scoops.jpg', alt: 'Castaways ice cream scoops' },
  { src: '/images/yelp/photo-14-food-trio.jpg', alt: 'Three flavor scoops' },
  { src: '/images/yelp/photo-16-food-pandan-trio.jpg', alt: 'Pandan trio scoops' },
  { src: '/images/yelp/photo-10-food-pandan.jpg', alt: 'Pandan coconut ice cream' },
  { src: '/images/yelp/photo-11-food-matcha.jpg', alt: 'Matcha ice cream' },
  { src: '/images/yelp/photo-24-food-scoops-3.jpg', alt: 'Assorted scoops' },
]

export default function IceCreamCakesPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Made to Order</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black tracking-tight mb-4">
          Custom ice cream cakes<span className="text-accent">.</span>
        </h1>
        <p className="text-xl text-secondary/60 max-w-lg">
          Made to order. Your flavors. Your dedication.
        </p>
      </section>

      {/* Size options */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-8">
          Choose your size<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CAKE_SIZES.map(cake => (
            <div
              key={cake.size}
              className={`relative bg-white rounded-[24px] p-6 border text-center hover:shadow-lg transition-all ${
                cake.popular ? 'border-primary shadow-md' : 'border-slate200'
              }`}
            >
              {cake.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-primary mb-2">
                {cake.price}
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] font-black text-xl mb-1">{cake.size}</h3>
              <p className="text-slate-500 text-sm">{cake.serves}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-400 text-center">
          Prices are estimates. Final price confirmed by the shop.
        </p>
      </section>

      {/* Order Form */}
      <section className="max-w-3xl mx-auto px-6 mb-20" id="order-form">
        <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate200">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-2">
            Order your cake<span className="text-accent">.</span>
          </h2>
          <p className="text-slate-500 mb-8">3-day minimum lead time required. We will call to confirm your order.</p>
          <CakeOrderForm />
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-center mb-4">
          Our flavors, your cake<span className="text-accent">.</span>
        </h2>
        <p className="text-slate-500 text-center mb-8">
          Pick any two flavors from our rotating menu for your custom cake.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map(img => (
            <div key={img.src} className="relative aspect-square rounded-[20px] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
