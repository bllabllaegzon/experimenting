import { useState } from 'react'
import Masthead from './components/Masthead'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import type { Post } from './data/posts'

export type Page = 'home' | 'archive' | 'about' | 'article'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [activePost, setActivePost] = useState<Post | null>(null)

  function openArticle(post: Post) {
    setActivePost(post)
    setPage('article')
    window.scrollTo(0, 0)
  }

  function goHome() {
    setPage('home')
    setActivePost(null)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Masthead onHome={goHome} />
      <Navbar
        current={page === 'article' ? 'home' : page}
        onNavigate={(p) => { setPage(p); setActivePost(null); window.scrollTo(0, 0) }}
      />
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {page === 'home' && <HomePage onArticle={openArticle} />}
        {page === 'archive' && <ArchivePage onArticle={openArticle} />}
        {page === 'about' && <AboutPage />}
        {page === 'article' && activePost && <ArticlePage post={activePost} onBack={goHome} />}
      </main>
      <footer className="border-t-2 border-ink mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display italic text-lg text-ink">xilancia News</p>
          <p className="label">© 2026 · AI &amp; Technology · All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
