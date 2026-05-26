import { posts } from '../data/posts'
import type { Post } from '../data/posts'

interface ArchivePageProps {
  onArticle: (post: Post) => void
}

export default function ArchivePage({ onArticle }: ArchivePageProps) {
  return (
    <div className="pt-8">
      <div className="flex items-baseline gap-4 mb-6 border-b-2 border-ink pb-3">
        <h2 className="font-display font-bold text-2xl">Archive</h2>
        <p className="label">{posts.length} articles</p>
      </div>

      <div className="space-y-0">
        {posts.map((post, i) => (
          <article
            key={post.id}
            className={`grid grid-cols-1 sm:grid-cols-4 gap-6 py-8 ${i < posts.length - 1 ? 'border-b border-rule' : ''}`}
          >
            {/* Image */}
            <div className="sm:col-span-1">
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover cursor-pointer"
                style={{ height: '120px' }}
                onClick={() => onArticle(post)}
              />
            </div>

            {/* Text */}
            <div className="sm:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="label">{post.category}</span>
                <span className="text-rule">·</span>
                <span className="byline">{post.date}</span>
                <span className="text-rule">·</span>
                <span className="byline">{post.readTime}</span>
              </div>
              <h3
                className="font-display font-bold text-xl leading-tight mb-2 cursor-pointer hover:text-accent transition-colors"
                onClick={() => onArticle(post)}
              >
                {post.title}
              </h3>
              <p className="font-body italic text-muted text-sm mb-3">{post.subtitle}</p>
              <p className="font-body text-sm leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="byline">By {post.author}</p>
                <button
                  onClick={() => onArticle(post)}
                  className="font-ui text-xs uppercase tracking-widest text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Read →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
