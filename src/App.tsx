import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import AboutPage from './pages/AboutPage'

export type Page = 'home' | 'archive' | 'about'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="px-16 pt-6 pb-0">
        <p
          className="text-[21px] font-normal cursor-pointer"
          onClick={() => setPage('home')}
        >
          xilancia Test
        </p>
      </header>
      <Navbar current={page} onNavigate={setPage} />
      <main>
        {page === 'home' && <HomePage onNavigate={setPage} />}
        {page === 'archive' && <ArchivePage onNavigate={setPage} />}
        {page === 'about' && <AboutPage />}
      </main>
    </div>
  )
}
