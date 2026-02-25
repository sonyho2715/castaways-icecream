import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blog-posts'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Castaways Ice Cream`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// Simple markdown parser for blog content
function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let currentParagraph: string[] = []
  let key = 0

  function flushParagraph() {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim()
      if (text) {
        // Handle italic text
        const parts = text.split(/(\*[^*]+\*)/)
        const rendered = parts.map((part, i) => {
          if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
            return <em key={i}>{part.slice(1, -1)}</em>
          }
          return part
        })
        elements.push(
          <p key={key++} className="text-secondary/70 text-lg leading-relaxed mb-6">
            {rendered}
          </p>
        )
      }
      currentParagraph = []
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed === '') {
      flushParagraph()
      continue
    }

    if (trimmed.startsWith('## ')) {
      flushParagraph()
      elements.push(
        <h2 key={key++} className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-secondary mt-10 mb-4">
          {trimmed.replace('## ', '')}
        </h2>
      )
      continue
    }

    if (trimmed.startsWith('# ')) {
      flushParagraph()
      // Skip the top-level heading since we render the title separately
      continue
    }

    currentParagraph.push(trimmed)
  }

  flushParagraph()
  return elements
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2)

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-black tracking-tight text-secondary mb-4">
          {post.title}<span className="text-accent">.</span>
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-10">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Cover image */}
        <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <div className="border-t border-slate200 pt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-8">
              More stories<span className="text-accent">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-[24px] overflow-hidden border border-slate200 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-playfair)] font-black text-lg text-secondary mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
