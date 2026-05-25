import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Modernize cut our dashboard build time by 80%. The design is clean, the code is solid, and our clients love it.",
    name: 'Sarah Chen',
    role: 'CTO at Dataflow',
    avatar: 'SC',
    color: '#5D87FF',
  },
  {
    quote: "We evaluated 12 dashboard templates. Modernize was the only one that felt genuinely production-ready on day one.",
    name: 'James Okafor',
    role: 'Lead Engineer at Orbit Labs',
    avatar: 'JO',
    color: '#49BEFF',
  },
  {
    quote: "The component library is incredible. We customized the entire thing to match our brand in less than a week.",
    name: 'Maria Santos',
    role: 'Product Designer at Vantage',
    avatar: 'MS',
    color: '#13DEB9',
  },
  {
    quote: "Our investors literally commented on how professional our dashboard looked during the Series A demo. Worth every cent.",
    name: 'Alex Wright',
    role: 'Founder at Luminary AI',
    avatar: 'AW',
    color: '#FFAE1F',
  },
  {
    quote: "Dark mode, RTL support, accessibility — Modernize had everything we needed for our global enterprise rollout.",
    name: 'Priya Nair',
    role: 'Engineering Manager at Nexus',
    avatar: 'PN',
    color: '#FA896B',
  },
  {
    quote: "The real-time data support is flawless. We're running WebSocket streams for 10k users without a hitch.",
    name: 'Tom Nguyen',
    role: 'Backend Lead at StreamHQ',
    avatar: 'TN',
    color: '#5D87FF',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full border border-primary-200 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Loved by engineering teams worldwide
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Don't take our word for it — here's what real teams say about Modernize.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
