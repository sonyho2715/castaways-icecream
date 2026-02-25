import { Metadata } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Castaways Ice Cream',
  description: 'Stories behind the scoops, the people, and the process at Castaways Ice Cream in Honolulu.',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-3">Blog</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black tracking-tight mb-4">
          Flavor Stories<span className="text-accent">.</span>
        </h1>
        <p className="text-xl text-secondary/60 max-w-lg">
          Behind the scoops, the people, and the process.
        </p>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-[24px] overflow-hidden border border-slate200 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              {/* Cover image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tag badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] font-black text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
