interface MastheadProps {
  onHome: () => void
}

export default function Masthead({ onHome }: MastheadProps) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="border-b-2 border-ink">
      {/* Top strip */}
      <div className="max-w-5xl mx-auto px-6 pt-4 pb-2 flex items-center justify-between">
        <p className="label hidden sm:block">{today}</p>
        <p className="label">Est. 2026 · Vol. I, No. 1</p>
        <p className="label hidden sm:block">AI &amp; Technology</p>
      </div>

      {/* Thick accent rule */}
      <div className="border-t-2 border-accent mx-6" />

      {/* Masthead title */}
      <div className="max-w-5xl mx-auto px-6 py-6 text-center border-b border-rule">
        <button onClick={onHome} className="group">
          <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight text-ink group-hover:opacity-80 transition-opacity">
            xilancia News
          </h1>
          <p className="font-body italic text-muted text-sm mt-1 tracking-widest">
            Thoughtful writing on artificial intelligence &amp; the future
          </p>
        </button>
      </div>
    </div>
  )
}
