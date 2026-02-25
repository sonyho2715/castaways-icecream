'use client'

import { useEffect } from 'react'
import { Instagram, Facebook } from 'lucide-react'
import { socialLinks } from '@/data/social'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export default function SocialFeed() {
  useEffect(() => {
    // Load Instagram embed script
    if (document.getElementById('instagram-embed-script')) {
      window.instgrm?.Embeds?.process()
      return
    }
    const script = document.createElement('script')
    script.id = 'instagram-embed-script'
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-[#F8FBFD]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#5BAED6] mb-3">Follow Along</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-[#2C3E50]">
            Find us online<span className="text-[#C8956A]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Instagram — native embeds */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#2C3E50] text-sm">{socialLinks.instagramHandle}</p>
                <p className="text-xs text-slate-400">Instagram</p>
              </div>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-bold text-[#5BAED6] hover:underline"
              >
                Follow →
              </a>
            </div>

            {/* Embed latest 3 posts */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
              {socialLinks.instagramPosts.slice(0, 3).map((postUrl) => (
                <blockquote
                  key={postUrl}
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '24px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    margin: '0',
                    maxWidth: '100%',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%',
                  }}
                />
              ))}
            </div>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#5BAED6] text-[#5BAED6] text-sm font-bold hover:bg-[#5BAED6] hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4" />
              See all posts on Instagram
            </a>
          </div>

          {/* Facebook — Page Plugin */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#2C3E50] text-sm">Castaways Ice Cream</p>
                <p className="text-xs text-slate-400">Facebook · 223 followers</p>
              </div>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-bold text-[#5BAED6] hover:underline"
              >
                Like Page →
              </a>
            </div>

            <div className="rounded-[24px] overflow-hidden border border-[#DFF0F7] bg-white shadow-sm w-full">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCastawaysIceCream%2F&tabs=timeline&width=500&height=580&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="100%"
                height="580"
                style={{ border: 'none', overflow: 'hidden', display: 'block' }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#1877F2] text-[#1877F2] text-sm font-bold hover:bg-[#1877F2] hover:text-white transition-all"
            >
              <Facebook className="w-4 h-4" />
              Follow on Facebook
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
