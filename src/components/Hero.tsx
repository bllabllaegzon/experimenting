import { ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary-200/30 to-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-success/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-600 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            New: Analytics 2.0 is now live
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
            The modern dashboard{' '}
            <span className="gradient-text">your team deserves</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Modernize gives your team a beautiful, fast, and fully customizable dashboard — built with
            the latest tech stack and ready to deploy in minutes.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:shadow-primary-500/40 hover:-translate-y-0.5"
          >
            Start for free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-white hover:bg-gray-50 border border-border rounded-xl shadow-sm transition-all hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 text-primary-500 fill-primary-500" />
            See it live
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-warning fill-warning" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#5D87FF','#49BEFF','#13DEB9','#FFAE1F','#FA896B'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-foreground">12,000+</span> teams trust Modernize
            </p>
          </div>
        </div>

        {/* Hero image / dashboard preview */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-card-lg border border-border/50 bg-background">
            <div className="bg-white border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error/70" />
                <div className="w-3 h-3 rounded-full bg-warning/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-400 w-64">
                  app.modernize.io/dashboard
                </div>
              </div>
            </div>
            <DashboardPreview />
          </div>
          {/* Floating cards */}
          <div className="absolute -left-6 top-20 bg-white rounded-xl shadow-card p-4 border border-border/50 hidden lg:block">
            <p className="text-xs text-gray-400 font-medium mb-1">Monthly Revenue</p>
            <p className="text-2xl font-bold text-foreground">$48,295</p>
            <p className="text-xs text-success font-medium mt-1">↑ 23.5% vs last month</p>
          </div>
          <div className="absolute -right-6 bottom-20 bg-white rounded-xl shadow-card p-4 border border-border/50 hidden lg:block">
            <p className="text-xs text-gray-400 font-medium mb-1">Active Users</p>
            <p className="text-2xl font-bold text-foreground">12,847</p>
            <p className="text-xs text-success font-medium mt-1">↑ 8.2% this week</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <div className="bg-background p-6 min-h-80">
      <div className="flex gap-4">
        {/* Sidebar mini */}
        <div className="w-14 hidden sm:block">
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-8 h-8 rounded-lg ${i === 0 ? 'bg-primary-500' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Revenue', value: '$48.2k', color: 'text-primary-500', bg: 'bg-primary-50' },
              { label: 'Users', value: '12,847', color: 'text-secondary', bg: 'bg-sky-50' },
              { label: 'Growth', value: '+23.5%', color: 'text-success', bg: 'bg-emerald-50' },
              { label: 'Orders', value: '1,284', color: 'text-warning', bg: 'bg-amber-50' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-3 border border-border/50">
                <div className={`w-8 h-8 rounded-lg ${stat.bg} mb-2`} />
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="lg:col-span-2 bg-white rounded-lg p-3 border border-border/50">
              <p className="text-xs font-semibold text-gray-400 mb-3">Revenue Overview</p>
              <div className="flex items-end gap-1 h-24">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 11 ? 'linear-gradient(to top, #5D87FF, #49BEFF)' : '#E8F0FF',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-border/50">
              <p className="text-xs font-semibold text-gray-400 mb-3">Traffic</p>
              <div className="flex items-center justify-center h-24">
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E8F0FF" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#5D87FF" strokeWidth="3" strokeDasharray="70 30" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#49BEFF" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-70" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">68%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
