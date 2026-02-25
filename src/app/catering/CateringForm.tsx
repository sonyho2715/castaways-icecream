'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const EVENT_TYPES = [
  'Birthday',
  'Wedding',
  'Corporate',
  'School/UH',
  'Graduation',
  'Luau/Party',
  'Other',
]

const GUEST_RANGES = ['Under 25', '25-50', '50-100', '100-200', '200+']
const BUDGET_RANGES = ['Under $200', '$200-500', '$500-1,000', '$1,000+']

export default function CateringForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      eventType: (form.elements.namedItem('eventType') as HTMLSelectElement).value,
      eventDate: (form.elements.namedItem('eventDate') as HTMLInputElement).value,
      estimatedGuests: (form.elements.namedItem('estimatedGuests') as HTMLSelectElement).value,
      flavorPreferences: (form.elements.namedItem('flavorPreferences') as HTMLTextAreaElement).value,
      budgetRange: (form.elements.namedItem('budgetRange') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/catering', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2">Mahalo!</h3>
        <p className="text-slate-500">{"We'll be in touch within 24 hours to discuss your event."}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 text-red-600 p-4 rounded-2xl border border-red-100">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-secondary mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-secondary mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-secondary mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
            placeholder="(808) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-bold text-secondary mb-2">Event Type *</label>
          <select
            id="eventType"
            name="eventType"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select event type</option>
            {EVENT_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-bold text-secondary mb-2">Event Date *</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="estimatedGuests" className="block text-sm font-bold text-secondary mb-2">Estimated Guests *</label>
          <select
            id="estimatedGuests"
            name="estimatedGuests"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select range</option>
            {GUEST_RANGES.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-bold text-secondary mb-2">Budget Range</label>
          <select
            id="budgetRange"
            name="budgetRange"
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select range</option>
            {BUDGET_RANGES.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="flavorPreferences" className="block text-sm font-bold text-secondary mb-2">Flavor Preferences</label>
        <textarea
          id="flavorPreferences"
          name="flavorPreferences"
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Any specific flavors you'd like? (e.g., Pandan Coconut, Matcha, Madagascar Vanilla)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-secondary mb-2">Additional Details</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Any other details about your event..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Catering Request
          </>
        )}
      </button>
    </form>
  )
}
