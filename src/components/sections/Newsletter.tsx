'use client'

import { useState, FormEvent } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      name: (form.elements.namedItem('subscriberName') as HTMLInputElement).value || undefined,
      newFlavors: (form.elements.namedItem('newFlavors') as HTMLInputElement).checked,
      weeklyDigest: (form.elements.namedItem('weeklyDigest') as HTMLInputElement).checked,
    }

    try {
      const res = await fetch('/api/subscribe', {
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
      setErrorMsg(err instanceof Error ? err.message : 'Failed to subscribe. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="py-20" id="newsletter">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate200 text-center">
            <CheckCircle className="w-16 h-16 text-green mx-auto mb-4" />
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-2">
              {"You're on the list!"}
            </h3>
            <p className="text-slate-500">
              {"We'll let you know when something delicious drops."}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20" id="newsletter">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-primary/5 border border-primary/10 rounded-[32px] p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black mb-2">
              Never miss a flavor drop<span className="text-accent">.</span>
            </h2>
            <p className="text-secondary/60">
              Get notified when new flavors hit the counter.
            </p>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-50 text-red-600 p-4 rounded-2xl border border-red-100 mb-6">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="subscriberName"
                placeholder="First name (optional)"
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate200 text-secondary focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            {/* Preference checkboxes */}
            <div className="flex flex-col sm:flex-row gap-4 px-1">
              <label className="flex items-center gap-2 text-sm text-secondary/70 cursor-pointer">
                <input
                  type="checkbox"
                  name="newFlavors"
                  defaultChecked
                  className="w-4 h-4 rounded border-slate200 text-primary focus:ring-primary"
                />
                Notify me when new flavors drop
              </label>
              <label className="flex items-center gap-2 text-sm text-secondary/70 cursor-pointer">
                <input
                  type="checkbox"
                  name="weeklyDigest"
                  className="w-4 h-4 rounded border-slate200 text-primary focus:ring-primary"
                />
                Weekly menu digest
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
