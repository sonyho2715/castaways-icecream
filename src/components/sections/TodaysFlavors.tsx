'use client'
import { useEffect, useState } from 'react'
import { IceCream as IceCream2, RefreshCw } from 'lucide-react'

interface DailyFlavor {
  id: string
  name: string
  description?: string
  tags: string[]
  soldOut: boolean
}

interface DailyMenu {
  date: string
  note?: string
  flavors: DailyFlavor[]
}

export default function TodaysFlavors() {
  const [menu, setMenu] = useState<DailyMenu | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/daily-menu')
      .then(r => r.json())
      .then(d => { setMenu(d.menu); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return (
    <section className="py-20 bg-[#F8FBFD]" id="today">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-48 bg-[#5BAED6]/20 rounded-full" />
          <div className="h-4 w-64 bg-[#5BAED6]/10 rounded-full" />
        </div>
      </div>
    </section>
  )

  if (!menu) return (
    <section className="py-20 bg-[#F8FBFD]" id="today">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#5BAED6] font-bold mb-3">Live Menu</p>
          <h2 className="text-5xl md:text-6xl font-black" style={{fontFamily: 'var(--font-playfair)'}}>
            {"Today's flavors."}
          </h2>
        </div>
        <div className="bg-white rounded-[32px] p-12 text-center border border-[#DFF0F7]">
          <IceCream2 className="w-16 h-16 text-[#5BAED6] mx-auto mb-4 opacity-50" />
          <p className="text-xl font-semibold text-[#2C3E50] mb-2">{"Menu updates daily"}</p>
          <p className="text-slate-500 mb-6">{"Follow us on Instagram for today's scoop lineup"}</p>
          <a
            href="https://www.instagram.com/castawaysicecream/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5BAED6] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#4A9DC5] transition-colors"
          >
            @castawaysicecream
          </a>
        </div>
      </div>
    </section>
  )

  const TAG_STYLES: Record<string, string> = {
    FAN_FAVORITE: 'bg-[#C8956A]/10 text-[#C8956A] border border-[#C8956A]/20',
    NEW: 'bg-[#5BAED6]/10 text-[#5BAED6] border border-[#5BAED6]/20',
    SEASONAL: 'bg-[#4A7A52]/10 text-[#4A7A52] border border-[#4A7A52]/20',
    DAIRY_FREE: 'bg-purple-50 text-purple-600 border border-purple-100',
    VEGAN: 'bg-green-50 text-green-600 border border-green-100',
    SOLD_OUT: 'bg-red-50 text-red-400 border border-red-100',
  }

  return (
    <section className="py-20 bg-[#F8FBFD]" id="today">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#4A7A52] rounded-full animate-ping" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#5BAED6] font-bold">Live Today</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-black" style={{fontFamily: 'var(--font-playfair)'}}>
              {"Today's flavors."}
            </h2>
            {menu.note && (
              <p className="mt-3 text-[#5BAED6] font-semibold text-lg">{menu.note}</p>
            )}
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-400 text-sm">
            <RefreshCw className="w-4 h-4" />
            Updated daily
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.flavors.map((flavor) => (
            <div
              key={flavor.id}
              className={`bg-white rounded-[24px] p-6 border transition-all hover:shadow-lg ${
                flavor.soldOut ? 'opacity-50' : 'border-[#DFF0F7] hover:border-[#5BAED6]/30'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-black text-[#2C3E50]" style={{fontFamily: 'var(--font-playfair)'}}>
                  {flavor.name}
                </h3>
                {flavor.soldOut && (
                  <span className="text-xs px-2 py-1 rounded-full bg-red-50 text-red-400 border border-red-100 shrink-0 ml-2">
                    Sold Out
                  </span>
                )}
              </div>
              {flavor.description && (
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{flavor.description}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {flavor.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded-full font-medium ${TAG_STYLES[tag] || 'bg-slate-50 text-slate-500'}`}>
                    {tag.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Follow{' '}
            <a href="https://www.instagram.com/castawaysicecream/" target="_blank" rel="noopener noreferrer" className="text-[#5BAED6] font-semibold hover:underline">
              @castawaysicecream
            </a>
            {' '}on Instagram for flavor drops and announcements
          </p>
        </div>
      </div>
    </section>
  )
}
