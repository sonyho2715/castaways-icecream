'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import type { GalleryPhoto } from './page'
import { socialLinks } from '@/data/social'

type Filter = 'all' | 'food' | 'interior' | 'storefront'

const FILTERS: { key: Filter; label: string; emoji: string }[] = [
  { key: 'all',        label: 'All photos',  emoji: '✦' },
  { key: 'food',       label: 'The scoops',  emoji: '🍦' },
  { key: 'interior',   label: 'Inside',      emoji: '🏠' },
  { key: 'storefront', label: 'Storefront',  emoji: '📍' },
]

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter)

  const openLightbox = (globalIdx: number) => {
    // find index in filtered array
    const filteredIdx = filtered.findIndex(p => p.src === photos[globalIdx].src)
    setLightbox(filteredIdx >= 0 ? filteredIdx : 0)
  }

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, prev, next])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              filter === f.key
                ? 'bg-[#2C3E50] text-white shadow-md'
                : 'bg-white text-slate-500 border border-[#DFF0F7] hover:border-[#5BAED6] hover:text-[#5BAED6]'
            }`}
          >
            <span>{f.emoji}</span>
            {f.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              filter === f.key ? 'bg-white/20 text-white' : 'bg-[#EFF6FA] text-[#5BAED6]'
            }`}>
              {f.key === 'all' ? photos.length : photos.filter(p => p.category === f.key).length}
            </span>
          </button>
        ))}
      </div>

      {/* Masonry grid using CSS columns */}
      <div
        className="gap-3"
        style={{
          columnCount: 1,
          columnGap: '12px',
        }}
      >
        <style>{`
          @media (min-width: 640px) { .masonry { column-count: 2; } }
          @media (min-width: 1024px) { .masonry { column-count: 3; } }
        `}</style>
        <div className="masonry" style={{ columnCount: 1, columnGap: '12px' }}>
          {filtered.map((photo, idx) => (
            <div
              key={photo.src}
              className="break-inside-avoid mb-3 group cursor-zoom-in"
              onClick={() => setLightbox(idx)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#EFF6FA]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#2C3E50]/0 group-hover:bg-[#2C3E50]/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-[#2C3E50] flex items-center gap-1.5">
                    <span>View</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Count + IG CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-[24px] border border-[#DFF0F7]">
        <p className="text-slate-500 text-sm">
          Showing <span className="font-bold text-[#2C3E50]">{filtered.length}</span> of{' '}
          <span className="font-bold text-[#2C3E50]">{photos.length}</span> photos.
          More daily on Instagram.
        </p>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shrink-0"
        >
          <Instagram className="w-4 h-4" />
          Follow {socialLinks.instagramHandle}
        </a>
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-4 py-1.5 text-white text-xs font-bold">
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              priority
            />
            {/* Caption */}
            <p className="text-center text-white/60 text-sm mt-3 capitalize">
              {filtered[lightbox].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}
