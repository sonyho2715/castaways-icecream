import { ExternalLink, Newspaper } from 'lucide-react'
import { pressMentions } from '@/data/social'

const OUTLET_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  'KHON2':            { bg: 'bg-red-50',    text: 'text-red-700',    dot: 'bg-red-500' },
  'Honolulu Magazine':{ bg: 'bg-amber-50',  text: 'text-amber-700',  dot: 'bg-amber-500' },
  'Aloha State Daily':{ bg: 'bg-[#EFF6FA]', text: 'text-[#2C3E50]',  dot: 'bg-[#5BAED6]' },
}

export default function PressStrip() {
  return (
    <section className="py-14 bg-white border-y border-[#DFF0F7]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#DFF0F7]" />
          <div className="flex items-center gap-2 px-4">
            <Newspaper className="w-4 h-4 text-[#5BAED6]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
              As Featured In
            </span>
          </div>
          <div className="h-px flex-1 bg-[#DFF0F7]" />
        </div>

        {/* Press cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pressMentions.map((item) => {
            const style = OUTLET_STYLES[item.outlet] ?? { bg: 'bg-slate-50', text: 'text-slate-700', dot: 'bg-slate-400' }
            return (
              <a
                key={item.outlet}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col gap-3 p-6 rounded-[20px] ${style.bg} hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#DFF0F7]`}
              >
                {/* Outlet badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                    <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${style.text}`}>
                      {item.outlet}
                    </span>
                  </div>
                  <ExternalLink className={`w-3.5 h-3.5 ${style.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>

                {/* Headline */}
                <p className="font-[family-name:var(--font-playfair)] font-black text-[#2C3E50] text-base leading-snug group-hover:text-[#5BAED6] transition-colors">
                  &ldquo;{item.title}&rdquo;
                </p>

                <span className={`text-xs font-semibold ${style.text} underline underline-offset-2`}>
                  Read article →
                </span>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
