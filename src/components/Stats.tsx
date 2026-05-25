const stats = [
  { value: '12K+', label: 'Active Teams', description: 'across 60+ countries' },
  { value: '99.9%', label: 'Uptime SLA', description: 'guaranteed reliability' },
  { value: '4.9/5', label: 'User Rating', description: 'from 3,200+ reviews' },
  { value: '< 50ms', label: 'Avg Response', description: 'lightning fast API' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-border/50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
