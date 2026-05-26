import type { Page } from '../App'
import { posts } from '../data/posts'

interface ArchivePageProps {
  onNavigate: (page: Page) => void
}

export default function ArchivePage({ onNavigate: _onNavigate }: ArchivePageProps) {
  return (
    <div className="px-16 pt-12">
      <h2 className="text-[14px] font-normal uppercase tracking-widest text-gray-400 mb-8">
        Archive
      </h2>
      <div className="space-y-0">
        {posts.map((post, i) => (
          <article
            key={post.id}
            className={`flex gap-8 py-6 ${i < posts.length - 1 ? 'border-b border-[#d9d9d9]' : ''}`}
          >
            {/* Image placeholder */}
            <div className="w-[180px] h-[120px] bg-[#d9d9d9] shrink-0" />

            {/* Text */}
            <div className="flex-1">
              <p className="text-[12px] text-gray-400 mb-2">{post.date}</p>
              <h3 className="text-[18px] font-normal mb-3">{post.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {post.excerpt.slice(0, 200)}…
              </p>
              <p className="mt-3 text-[13px] underline cursor-pointer hover:text-gray-500 transition-colors inline-block">
                Read more →
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
