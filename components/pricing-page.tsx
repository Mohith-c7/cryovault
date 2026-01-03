import { Check, Plus, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CTAButton } from '@/components/ui/cta-button'

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: 25000,
      cta: 'Get Started',
      description: '1 Year Storage & Processing',
      features: [
        'Umbilical Cord Blood Collection',
        '1 Year Cryogenic Storage',
        'Processing & Testing',
        'Basic Documentation',
        'Annual Renewal Option',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 60000,
      cta: 'Get Started',
      description: '21 Years Storage & Processing',
      features: [
        'Umbilical Cord Blood Collection',
        '21 Years Cryogenic Storage',
        'Advanced Processing & Testing',
        'Comprehensive Documentation',
        'Family Access Portal',
        'Annual Renewal Option',
        'Priority Support',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: 86998,
      cta: 'Get Started',
      description: 'Premium + 54 Years Additional Storage, NBS, CFU & Grand Parents',
      features: [
        'Umbilical Cord Blood Collection',
        '21 Years + 54 Years Additional Storage',
        'Premium Processing & Testing',
        'New Born Screening (NBS)',
        'CFU Assay Testing',
        'Grand Parents Coverage',
        'Comprehensive Documentation',
        'Family Access Portal',
        'VIP Support',
        'Annual Renewal Option',
      ],
      highlighted: false,
    },
  ]

  const additionalServices = [
    { name: 'Additional storage for 54 years', price: 21999 },
    { name: 'HLA Typing', price: 14999 },
    { name: 'CFU Assay', price: 8999 },
    { name: 'New Born Screening (NBS)', price: 4999 },
    { name: 'Annual Storage Fee', price: 5000 },
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Stem Cell Banking <span className="text-primary">Plans & Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your family's future. Flexible options designed to meet every need and budget.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group ${
                  plan.highlighted
                    ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl scale-105'
                    : 'border-border bg-white shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Badge for highlighted plan */}
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Plan Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">₹{plan.price.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Enrollment Fee: ₹5,000 | GST Applicable</p>
                  </div>

                  {/* CTA Button */}
                  <CTAButton 
                    href="/contact" 
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </CTAButton>

                  {/* Features */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-8">Additional Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <Plus className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{service.name}</span>
                  </div>
                  <span className="font-bold text-primary">₹{service.price.toLocaleString()}/-</span>
                </div>
              ))}
            </div>

            {/* Fees Info */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
              <p className="font-semibold mb-2">Important Information:</p>
              <ul className="space-y-1 text-xs">
                <li>• Enrollment Fee: ₹5,000/-</li>
                <li>• GST Applicable on all services</li>
                <li>• Prices are subject to change without notice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Planning Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Plan?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team can create a personalized plan tailored to your specific needs
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
            <CustomPlanForm />
          </div>
        </div>
      </section>

      {/* Know More Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Want to Know More About Stem Cell Banking?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive guide on stem cell banking, its benefits, and how it can secure your family's health future.
            </p>
            <Link
              href="/stem-cell-banking"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Know More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// Custom Plan Form Component
function CustomPlanForm() {
  return (
    <form className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground">Tell Us Your Requirements</h3>

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="space-y-2">
        <label htmlFor="mobile" className="block text-sm font-medium text-foreground">
          Mobile Number *
        </label>
        <input
          id="mobile"
          type="tel"
          placeholder="Enter your mobile number"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email *
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* reCAPTCHA Notice */}
      <div className="p-4 bg-muted rounded-lg border border-border text-sm text-muted-foreground">
        <p>🔒 This site is protected by reCAPTCHA and the Google</p>
        <p className="text-xs mt-1">
          <a href="#" className="underline hover:text-foreground">Privacy Policy</a> and{' '}
          <a href="#" className="underline hover:text-foreground">Terms of Service</a> apply.
        </p>
      </div>

      {/* Submit Button */}
      <CTAButton href="/contact" className="w-full">
        Get Custom Quote
      </CTAButton>
    </form>
  )
}
