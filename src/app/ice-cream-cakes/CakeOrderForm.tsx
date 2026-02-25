'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { flavors } from '@/data/flavors'

const CAKE_SIZES = ['6-inch ($45)', '8-inch ($65)', 'Quarter Sheet ($120)', 'Half Sheet ($200)']

export default function CakeOrderForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [dedicationText, setDedicationText] = useState('')

  // Minimum date is 3 days from today
  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 3)
  const minDateStr = minDate.toISOString().split('T')[0]

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      pickupDate: (form.elements.namedItem('pickupDate') as HTMLInputElement).value,
      cakeSize: selectedSize,
      flavor1: (form.elements.namedItem('flavor1') as HTMLSelectElement).value,
      flavor2: (form.elements.namedItem('flavor2') as HTMLSelectElement).value,
      dedication: dedicationText,
      specialInstructions: (form.elements.namedItem('specialInstructions') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/cake-order', {
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
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2">Order received!</h3>
        <p className="text-slate-500 mb-4">{"We'll call to confirm within 24 hours."}</p>
        <div className="inline-flex items-center gap-2 text-primary font-bold">
          <Phone className="w-4 h-4" />
          <span>Questions? Call (808) 744-1001</span>
        </div>
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
          <label htmlFor="phone" className="block text-sm font-bold text-secondary mb-2">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
            placeholder="(808) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="pickupDate" className="block text-sm font-bold text-secondary mb-2">Pickup Date * (3-day minimum)</label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            required
            min={minDateStr}
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Cake size selector */}
      <div>
        <label className="block text-sm font-bold text-secondary mb-3">Cake Size *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CAKE_SIZES.map(size => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all border ${
                selectedSize === size
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                  : 'bg-cream text-secondary border-slate200 hover:border-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="flavor1" className="block text-sm font-bold text-secondary mb-2">Flavor 1 *</label>
          <select
            id="flavor1"
            name="flavor1"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select a flavor</option>
            {flavors.map(f => (
              <option key={f.id} value={f.name}>{f.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="flavor2" className="block text-sm font-bold text-secondary mb-2">Flavor 2 *</label>
          <select
            id="flavor2"
            name="flavor2"
            required
            className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select a flavor</option>
            {flavors.map(f => (
              <option key={f.id} value={f.name}>{f.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="dedication" className="block text-sm font-bold text-secondary mb-2">
          Dedication Text <span className="text-slate-400 font-normal">(max 50 characters)</span>
        </label>
        <input
          type="text"
          id="dedication"
          name="dedication"
          maxLength={50}
          value={dedicationText}
          onChange={e => setDedicationText(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors"
          placeholder='e.g., "Happy Birthday, Kai!"'
        />
        <p className="text-xs text-slate-400 mt-1">{dedicationText.length}/50 characters</p>
      </div>

      <div>
        <label htmlFor="specialInstructions" className="block text-sm font-bold text-secondary mb-2">Special Instructions</label>
        <textarea
          id="specialInstructions"
          name="specialInstructions"
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-cream border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Allergies, dietary needs, design requests..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || !selectedSize}
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
            Submit Cake Order
          </>
        )}
      </button>
    </form>
  )
}
