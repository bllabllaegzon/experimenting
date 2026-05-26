import type { Page } from '../App'

interface NavbarProps {
  current: Page
  onNavigate: (page: Page) => void
}

const links: { label: string; page: Page }[] = [
  { label: 'Front Page', page: 'home' },
  { label: 'Archive', page: 'archive' },
  { label: 'About', page: 'about' },
]

export default function Navbar({ current, onNavigate }: NavbarProps) {
  return (
    <nav className="border-b border-rule mb-0">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-0">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`font-ui text-xs uppercase tracking-widest px-5 py-3 border-b-2 transition-colors ${
                current === page
                  ? 'border-accent text-accent font-semibold'
                  : 'border-transparent text-muted hover:text-ink hover:border-rule'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
