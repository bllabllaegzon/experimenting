import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Ready to modernize your workflow?
        </h2>
        <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
          Join 12,000+ teams who ship faster with Modernize. Start free — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary-500 bg-white hover:bg-primary-50 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  )
}
