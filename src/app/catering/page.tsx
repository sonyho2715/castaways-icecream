import { Metadata } from 'next'
import CateringForm from './CateringForm'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ClipboardList, Phone, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Catering | Castaways Ice Cream',
  description: 'Bring Castaways Ice Cream to your next event. Birthdays, weddings, corporate events, graduations, and luaus in Honolulu.',
}

const PAST_EVENTS = [
  {
    title: 'Birthday Parties',
    description: 'From keiki to kapuna, we bring the scoops to your celebration.',
    image: '/images/yelp/photo-03-interior.jpg',
  },
  {
    title: 'Corporate Events',
    description: 'Team building never tasted so good. Custom menus for any office event.',
    image: '/images/yelp/photo-12-interior-spacious.jpg',
  },
  {
    title: 'Graduation Celebrations',
    description: 'Celebrate your grad with a custom ice cream spread they will never forget.',
    image: '/images/yelp/photo-05-interior-2.jpg',
  },
]

export default function CateringPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Catering</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black tracking-tight mb-6">
                Bring the scoop to your event<span className="text-accent">.</span>
              </h1>
              <p className="text-xl text-secondary/60 max-w-lg leading-relaxed">
                Birthdays, weddings, corporate events, graduations, luaus. We do it all.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
              <Image
                src="/images/yelp/photo-12-interior-spacious.jpg"
                alt="Castaways Ice Cream catering setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black text-center mb-12">
          How it works<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ClipboardList, step: '01', title: 'Fill out the form', description: 'Tell us about your event, date, guest count, and any flavor preferences.' },
            { icon: Phone, step: '02', title: "We'll reach out", description: "Within 24 hours, we'll call or email to discuss your custom menu." },
            { icon: PartyPopper, step: '03', title: 'Enjoy the party', description: 'We show up with fresh scoops, cones, and everything you need.' },
          ].map(item => (
            <div key={item.step} className="bg-white rounded-[24px] p-8 border border-slate200 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs text-primary font-bold tracking-widest mb-2">STEP {item.step}</p>
              <h3 className="font-[family-name:var(--font-playfair)] font-black text-xl mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catering Form */}
      <section className="max-w-3xl mx-auto px-6 mb-20" id="catering-form">
        <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate200">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-2">
            Request a quote<span className="text-accent">.</span>
          </h2>
          <p className="text-slate-500 mb-8">Fill out the form and we will get back to you within 24 hours.</p>
          <CateringForm />
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black text-center mb-12">
          Events we love<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAST_EVENTS.map(event => (
            <div key={event.title} className="bg-white rounded-[24px] overflow-hidden border border-slate200 hover:shadow-lg transition-all">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] font-black text-xl mb-2">{event.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
