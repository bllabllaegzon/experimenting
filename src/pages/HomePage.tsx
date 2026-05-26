import { featuredPost, secondaryPosts } from '../data/posts'
import type { Post } from '../data/posts'

interface HomePageProps {
  onArticle: (post: Post) => void
}

export default function HomePage({ onArticle }: HomePageProps) {
  const [col1, col2, col3, col4, col5] = secondaryPosts

  return (
    <div className="pt-8">

      {/* ── LEAD STORY ────────────────────────────────────────── */}
      <article className="border-b-2 border-ink pb-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

          {/* Left col: headline + excerpt */}
          <div className="md:col-span-2 flex flex-col justify-between h-full">
            <div>
              <p className="label mb-2">{featuredPost.category}</p>
              <h2
                className="font-display font-bold text-3xl leading-tight mb-4 cursor-pointer hover:text-accent transition-colors"
                onClick={() => onArticle(featuredPost)}
              >
                {featuredPost.title}
              </h2>
              <p className="font-body italic text-muted text-base leading-relaxed mb-4">
                {featuredPost.subtitle}
              </p>
            </div>
            <p className="byline">{featuredPost.author} · {featuredPost.date}</p>
          </div>

          {/* Center col: featured image */}
          <div className="md:col-span-3">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full object-cover cursor-pointer"
              style={{ height: '340px' }}
              onClick={() => onArticle(featuredPost)}
            />
            <p className="font-ui text-2xs text-muted mt-1 italic">{featuredPost.imageCaption}</p>
          </div>
        </div>

        {/* Lead excerpt below */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <p className="md:col-span-2 font-body text-base leading-relaxed drop-cap">
            {featuredPost.excerpt}
          </p>
          <div className="md:col-span-1 flex items-end">
            <button
              onClick={() => onArticle(featuredPost)}
              className="font-ui text-xs uppercase tracking-widest text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity"
            >
              Continue reading →
            </button>
          </div>
        </div>
      </article>

      {/* ── THREE-COLUMN SECONDARY STORIES ───────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-rule mb-8">
        {[col1, col2, col3].map((post, i) => (
          <article
            key={post.id}
            className={`pb-8 ${i < 2 ? 'md:border-r md:pr-6 md:mr-0' : ''} ${i > 0 ? 'md:pl-6' : ''} ${i === 1 ? 'md:pr-6' : ''}`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover mb-3 cursor-pointer"
              style={{ height: '160px' }}
              onClick={() => onArticle(post)}
            />
            <p className="label mb-1">{post.category}</p>
            <h3
              className="font-display font-bold text-lg leading-tight mb-2 cursor-pointer hover:text-accent transition-colors"
              onClick={() => onArticle(post)}
            >
              {post.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted line-clamp-3 mb-3">
              {post.excerpt}
            </p>
            <p className="byline">{post.author} · {post.date}</p>
          </article>
        ))}
      </div>

      {/* ── DIVIDER WITH SECTION LABEL ───────────────────────── */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 border-t border-rule" />
        <span className="label shrink-0">Also this week</span>
        <div className="flex-1 border-t border-rule" />
      </div>

      {/* ── TWO-COLUMN TERTIARY STORIES ──────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {[col4, col5].map((post, i) => (
          <article
            key={post.id}
            className={`flex gap-4 pb-8 ${i === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'}`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-28 h-20 object-cover shrink-0 cursor-pointer"
              onClick={() => onArticle(post)}
            />
            <div>
              <p className="label mb-1">{post.category}</p>
              <h3
                className="font-display font-bold text-base leading-tight mb-1 cursor-pointer hover:text-accent transition-colors"
                onClick={() => onArticle(post)}
              >
                {post.title}
              </h3>
              <p className="byline">{post.author} · {post.readTime}</p>
            </div>
          </article>
        ))}
      </div>

    </div>
  )
}
