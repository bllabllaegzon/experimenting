import type { Page } from '../App'
import { posts } from '../data/posts'

interface HomePageProps {
  onNavigate: (page: Page) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featured = posts[0]

  return (
    <div className="px-16 pt-12">
      {/* Featured post — matches mockup layout exactly */}
      <div className="flex gap-8">
        {/* Left: text */}
        <div className="w-[335px] shrink-0">
          <p className="text-[14px] font-normal leading-normal whitespace-pre-wrap">
            {featured.excerpt}
          </p>
          <button
            className="mt-6 text-[14px] underline hover:text-gray-600 transition-colors"
            onClick={() => onNavigate('archive')}
          >
            Read more →
          </button>
        </div>

        {/* Right: image placeholder */}
        <div className="flex-1 bg-[#d9d9d9] h-[258px]" />
      </div>

      {/* Recent posts strip */}
      <div className="mt-16 border-t border-[#d9d9d9] pt-8">
        <h2 className="text-[14px] font-normal mb-6 uppercase tracking-widest text-gray-500">
          Recent posts
        </h2>
        <div className="space-y-6">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="flex gap-6 pb-6 border-b border-[#d9d9d9] cursor-pointer group"
              onClick={() => onNavigate('archive')}
            >
              <div className="w-24 h-16 bg-[#d9d9d9] shrink-0" />
              <div>
                <p className="text-[12px] text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-[14px] font-normal group-hover:underline">{post.title}</h3>
                <p className="text-[13px] text-gray-500 mt-1 line-clamp-2">{post.excerpt.slice(0, 100)}…</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
