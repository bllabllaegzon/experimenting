import { BarChart3, Bell, Globe, Lock, Puzzle, Zap } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time dashboards with beautiful charts, custom KPIs, and exportable reports your whole team will love.',
    color: 'text-primary-500',
    bg: 'bg-primary-50',
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    description: 'Built on React 19 and Vite 6 — your dashboard loads instantly and stays snappy even with thousands of data points.',
    color: 'text-warning',
    bg: 'bg-amber-50',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Role-based access control, SSO via OAuth 2.0, audit logs, and SOC 2 Type II compliance out of the box.',
    color: 'text-success',
    bg: 'bg-emerald-50',
  },
  {
    icon: Puzzle,
    title: '50+ Integrations',
    description: 'Connect Slack, GitHub, Stripe, Salesforce, and 50+ other tools with one-click setup and zero code.',
    color: 'text-secondary',
    bg: 'bg-sky-50',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Ship your dashboard in 30+ languages with built-in i18n support and automatic RTL layout for Arabic and Hebrew.',
    color: 'text-error',
    bg: 'bg-rose-50',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Set threshold-based alerts and get notified via email, Slack, or webhook when metrics go out of bounds.',
    color: 'text-primary-500',
    bg: 'bg-primary-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full border border-primary-200 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Everything you need to build faster
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Modernize ships with every feature your team needs — no plugins, no config hell.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-border/50 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
