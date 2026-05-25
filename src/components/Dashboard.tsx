import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Drag-and-drop widget builder',
  'Dark mode + 10 color themes',
  'Responsive on every device',
  'One-click data export (CSV, PDF)',
  'Real-time collaboration',
  'Unlimited custom dashboards',
]

const tableRows = [
  { name: 'Alice Johnson', email: 'alice@acme.io', role: 'Admin', status: 'Active', joined: 'Jan 14, 2025' },
  { name: 'Bob Martinez', email: 'bob@acme.io', role: 'Editor', status: 'Active', joined: 'Feb 2, 2025' },
  { name: 'Carol Lee', email: 'carol@acme.io', role: 'Viewer', status: 'Pending', joined: 'Mar 8, 2025' },
  { name: 'David Kim', email: 'david@acme.io', role: 'Editor', status: 'Active', joined: 'Mar 20, 2025' },
]

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full border border-primary-200 mb-4">
              Live Dashboard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              A dashboard that{' '}
              <span className="gradient-text">works the way you think</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Stop wrestling with spreadsheets. Modernize gives you a beautiful, interactive dashboard
              that updates in real time — so your team always has the data they need.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5"
            >
              Start building
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-card-lg bg-background">
              {/* Header */}
              <div className="bg-white px-5 py-4 border-b border-border flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">Team Members</h3>
                <button className="text-xs font-medium text-primary-500 hover:text-primary-600 transition-colors">
                  + Invite
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50 border-b border-border">
                      <th className="text-left px-5 py-3 font-semibold text-gray-400">Name</th>
                      <th className="text-left px-5 py-3 font-semibold text-gray-400 hidden sm:table-cell">Role</th>
                      <th className="text-left px-5 py-3 font-semibold text-gray-400">Status</th>
                      <th className="text-left px-5 py-3 font-semibold text-gray-400 hidden md:table-cell">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr key={row.email} className={`border-b border-border/50 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? '' : ''}`}>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                              style={{ backgroundColor: ['#5D87FF','#49BEFF','#13DEB9','#FFAE1F'][i] }}
                            >
                              {row.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{row.name}</p>
                              <p className="text-gray-400 hidden sm:block">{row.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{row.role}</td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              row.status === 'Active'
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'bg-amber-50 text-amber-600'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-gray-400 hidden md:table-cell">{row.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mini chart */}
              <div className="bg-white px-5 py-4 border-t border-border">
                <p className="text-xs font-semibold text-gray-400 mb-3">Weekly Signups</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[30, 55, 40, 70, 60, 85, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: i === 5 ? 'linear-gradient(to top, #5D87FF, #49BEFF)' : '#E8F0FF',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                    <span key={d} className="text-[9px] text-gray-300">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
