import type { Post } from '../data/posts'
import { posts } from '../data/posts'

interface ArticlePageProps {
  post: Post
  onBack: () => void
}

export default function ArticlePage({ post, onBack }: ArticlePageProps) {
  const related = posts.filter(p => p.id !== post.id).slice(0, 3)

  return (
    <article className="pt-8">
      {/* Back link */}
      <button
        onClick={onBack}
        className="font-ui text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors mb-6 flex items-center gap-1"
      >
        ← Front Page
      </button>

      {/* Article header */}
      <div className="border-b-2 border-ink pb-6 mb-8">
        <p className="label mb-3">{post.category}</p>
        <h1 className="font-display font-black text-3xl sm:text-4xl leading-tight mb-4">
          {post.title}
        </h1>
        <p className="font-body italic text-muted text-lg leading-relaxed mb-6">
          {post.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="byline">By <span className="text-ink font-medium">{post.author}</span></p>
          <span className="text-rule text-xs">·</span>
          <p className="byline">{post.date}</p>
          <span className="text-rule text-xs">·</span>
          <p className="byline">{post.readTime}</p>
        </div>
      </div>

      {/* Hero image */}
      <figure className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover"
          style={{ maxHeight: '480px' }}
        />
        <figcaption className="font-ui text-2xs text-muted mt-2 italic">
          {post.imageCaption}
        </figcaption>
      </figure>

      {/* Body text — two-column on desktop, newspaper style */}
      <div className="max-w-2xl mx-auto">
        <div className="font-body text-base leading-relaxed space-y-5">
          {post.body.trim().split('\n\n').map((para, i) => (
            <p key={i} className={i === 0 ? 'drop-cap' : ''}>
              {para}
            </p>
          ))}
        </div>

        {/* Inline pull quote from excerpt */}
        <blockquote className="my-8 border-l-2 border-accent pl-5">
          <p className="font-display italic text-xl leading-relaxed text-ink">
            "{post.subtitle}"
          </p>
          <footer className="mt-2 label">— {post.author}</footer>
        </blockquote>

        {/* Inline mid-article image */}
        <figure className="my-8">
          <img
            src={`https://picsum.photos/seed/${post.slug}-mid/700/350`}
            alt="Illustration"
            className="w-full object-cover"
          />
          <figcaption className="font-ui text-2xs text-muted mt-2 italic">
            Related imagery — illustrative purposes only.
          </figcaption>
        </figure>
      </div>

      {/* Related articles */}
      <div className="border-t-2 border-ink pt-8 mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="font-display font-bold text-xl">More to read</h3>
          <div className="flex-1 border-t border-rule" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map(r => (
            <button
              key={r.id}
              className="text-left group"
              onClick={() => { window.scrollTo(0, 0); window.location.reload() }}
            >
              <img
                src={r.image}
                alt={r.title}
                className="w-full object-cover mb-2"
                style={{ height: '120px' }}
              />
              <p className="label mb-1">{r.category}</p>
              <p className="font-display font-bold text-sm leading-tight group-hover:text-accent transition-colors">
                {r.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}
