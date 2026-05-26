export default function AboutPage() {
  return (
    <div className="pt-8 max-w-2xl mx-auto">
      <div className="border-b-2 border-ink pb-4 mb-8">
        <h2 className="font-display font-bold text-3xl">About</h2>
      </div>

      {/* Portrait image */}
      <figure className="mb-8">
        <img
          src="https://picsum.photos/seed/xilancia-about/900/400"
          alt="The Xilancia editorial team"
          className="w-full object-cover"
          style={{ height: '280px' }}
        />
        <figcaption className="font-ui text-2xs text-muted mt-2 italic">
          The editorial team at work, somewhere between the first draft and the deadline.
        </figcaption>
      </figure>

      <div className="space-y-6 font-body text-base leading-relaxed">
        <p className="drop-cap">
          The Xilancia was founded in 2026 with a single conviction: that the most consequential
          technology of our time deserves more than press releases and product announcements.
          We write about artificial intelligence the way good newspapers write about politics —
          with scepticism, rigour, and a genuine interest in consequence.
        </p>
        <p>
          Our writers come from science, philosophy, medicine, and journalism. We do not have
          a unified view of whether AI is good or bad for humanity. We think that question is
          not yet answerable, and that anyone who claims otherwise is selling something. What we
          do believe is that the decisions being made right now — in laboratories, boardrooms,
          and legislatures — will shape the world for generations.
        </p>
        <p>
          We publish weekly. We do not accept advertising from AI companies. We are supported
          entirely by readers, which means we can say things that others cannot.
        </p>
      </div>

      <div className="border-t border-rule mt-10 pt-8">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="font-display font-bold text-lg">Our contributors</h3>
          <div className="flex-1 border-t border-rule" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: 'Eleanor Voss', beat: 'Language models & knowledge work', image: 'about-eleanor' },
            { name: 'Marcus Obi', beat: 'AI safety & governance', image: 'about-marcus' },
            { name: 'Dr. Priya Nair', beat: 'AI in healthcare', image: 'about-priya' },
            { name: 'Lena Brandt', beat: 'Creative AI & culture', image: 'about-lena' },
            { name: 'James Okafor', beat: 'AI infrastructure & climate', image: 'about-james' },
            { name: 'Sofia Reyes', beat: 'Machine learning science', image: 'about-sofia' },
          ].map(c => (
            <div key={c.name} className="flex items-center gap-4">
              <img
                src={`https://picsum.photos/seed/${c.image}/80/80`}
                alt={c.name}
                className="w-14 h-14 object-cover shrink-0 grayscale"
              />
              <div>
                <p className="font-display font-bold text-sm">{c.name}</p>
                <p className="label mt-0.5">{c.beat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
