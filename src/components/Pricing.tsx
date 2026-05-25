import { useState } from 'react'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for indie developers and side projects.',
    features: [
      '3 dashboards',
      '5 team members',
      '10k data points / month',
      'Community support',
      'Basic analytics',
      '7-day data retention',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited dashboards',
      '25 team members',
      '1M data points / month',
      'Priority email support',
      'Advanced analytics',
      '1-year data retention',
      'Custom themes',
      'API access',
    ],
    cta: 'Start free trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: 'For large teams that need SSO, SLAs, and dedicated support.',
    features: [
      'Unlimited everything',
      'Unlimited team members',
      'Unlimited data points',
      'Dedicated Slack support',
      'AI-powered insights',
      'Unlimited data retention',
      'SSO / SAML',
      'SLA guarantee',
      'Custom contract',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full border border-primary-200 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            No hidden fees. No credit card required to start.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${!yearly ? 'text-foreground' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? 'bg-primary-500' : 'bg-gray-200'}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${yearly ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? 'text-foreground' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-1.5 text-xs text-success font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary-500 border-primary-500 text-white shadow-card-lg scale-105'
                    : 'bg-white border-border/50 shadow-card hover:shadow-card-lg hover:-translate-y-1'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 bg-warning text-white text-xs font-semibold rounded-full shadow">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                )}

                <h3 className={`text-sm font-semibold mb-1 ${plan.highlighted ? 'text-primary-100' : 'text-gray-400'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                    ${price}
                  </span>
                  {price > 0 && (
                    <span className={`text-sm ${plan.highlighted ? 'text-primary-200' : 'text-gray-400'}`}>/mo</span>
                  )}
                </div>
                {yearly && price > 0 && (
                  <p className={`text-xs mt-0.5 ${plan.highlighted ? 'text-primary-200' : 'text-gray-400'}`}>
                    billed annually
                  </p>
                )}
                <p className={`text-sm mt-3 ${plan.highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <a
                  href="#"
                  className={`block text-center text-sm font-semibold py-3 px-6 rounded-xl mt-6 transition-all ${
                    plan.highlighted
                      ? 'bg-white text-primary-500 hover:bg-primary-50'
                      : 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-primary-200' : 'text-success'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-primary-100' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="#" className="text-primary-500 hover:underline">Compare all features →</a>
        </p>
      </div>
    </section>
  )
}
