import type { Page } from '../App'

interface NavbarProps {
  current: Page
  onNavigate: (page: Page) => void
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Archive', page: 'archive' },
  { label: 'About', page: 'about' },
]

export default function Navbar({ current, onNavigate }: NavbarProps) {
  return (
    <nav className="bg-[#d9d9d9] mx-14 mt-3 px-4 py-2 flex items-center justify-end gap-2">
      {links.map(({ label, page }) => (
        <button
          key={page}
          onClick={() => onNavigate(page)}
          className={`px-6 py-1 text-[14px] font-normal transition-opacity ${
            current === page
              ? 'bg-[#e3a1a1] opacity-100'
              : 'bg-[#e3a1a1] opacity-75 hover:opacity-100'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
