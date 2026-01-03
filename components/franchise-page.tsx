import { Cog, Brain, Telescope, CheckCircle2, ChevronDown } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

export default function FranchisePage() {
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ]

  const benefits = [
    {
      icon: '⚙️',
      headline: 'CAPITAL EFFICIENCY',
      coreValue: 'Grow fast by leveraging external capital.',
      keyPoints: ['Low Setup Cost', 'Steady Royalties', 'Risk Mitigation'],
      hoverEffect: 'rotate'
    },
    {
      icon: '🧠',
      headline: 'DECENTRALIZED POWER',
      coreValue: 'Empowered partners ensure superior local performance.',
      keyPoints: ['Motivated Local Partners', 'Reduced Corporate Overheads', 'Shared Responsibility'],
      hoverEffect: 'color'
    },
    {
      icon: '🔭',
      headline: 'FUTURE-PROOF MODEL',
      coreValue: 'Constant feedback drives market leadership.',
      keyPoints: ['Real-Time Market Insights', 'Brand Loyalty & Network Strength', 'Scalable & Uniform Standards'],
      hoverEffect: 'zoom'
    }
  ]

  const faqs = [
    {
      question: 'What is the CryoVault Franchise Model?',
      answer: 'CryoVault offers a comprehensive franchise model that allows entrepreneurs to establish stem cell banking centers with our proven technology, brand support, and operational expertise.'
    },
    {
      question: 'What are the Initial Investment Requirements?',
      answer: 'Our franchise model is designed with capital efficiency in mind. We offer flexible investment options starting from a competitive base amount with various support packages available.'
    },
    {
      question: 'What Training and Support Do You Provide?',
      answer: 'We provide comprehensive training covering operations, customer service, regulatory compliance, and business management. Ongoing support includes marketing assistance, technology updates, and operational guidance.'
    },
    {
      question: 'What is the Royalty Structure?',
      answer: 'We maintain a transparent and competitive royalty structure based on revenue. Details are customized based on location, market potential, and franchise tier.'
    },
    {
      question: 'Are There International Franchise Opportunities?',
      answer: 'Currently, CryoVault focuses on expanding within India. We are exploring international opportunities and welcome inquiries from qualified partners.'
    },
    {
      question: 'What Support is Available for Marketing and Brand Building?',
      answer: 'We provide comprehensive marketing support including digital marketing strategies, brand guidelines, promotional materials, and co-branded campaigns to ensure your center\'s success.'
    },
    {
      question: 'What Qualifications Do Franchisees Need?',
      answer: 'Ideal franchisees have business acumen, entrepreneurial spirit, and commitment to excellence. Experience in healthcare or stem cell banking is beneficial but not mandatory.'
    },
    {
      question: 'How Long Does the Franchise Application Process Take?',
      answer: 'The application review process typically takes 2-4 weeks. We conduct thorough due diligence to ensure mutual compatibility and long-term success.'
    },
    {
      question: 'What Happens After My Application is Approved?',
      answer: 'After approval, you\'ll work with our franchise team to finalize agreements, complete training, set up your center, and launch operations with full support.'
    },
    {
      question: 'Still have a question for us?',
      answer: 'Write to us at franchise@cryovault.com or call our franchise team for personalized assistance.'
    }
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Join the <span className="text-primary">CryoVault</span> Franchise Network
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Build a thriving stem cell banking business with proven technology, comprehensive support, and unlimited growth potential.
          </p>
        </div>
      </section>

      {/* Benefits Section - 3D Component Breakdown */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Why Choose CryoVault Franchise?
            </h2>
            <p className="text-lg text-muted-foreground">
              A high-tech machinery model that drives exceptional output
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Angled background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`text-5xl transition-transform duration-300 ${
                    benefit.hoverEffect === 'rotate' ? 'group-hover:rotate-12' : ''
                  } ${
                    benefit.hoverEffect === 'zoom' ? 'group-hover:scale-110' : ''
                  }`}>
                    {benefit.icon}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold text-foreground tracking-wider">
                    {benefit.headline}
                  </h3>

                  {/* Core Value */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.coreValue}
                  </p>

                  {/* Key Points */}
                  <ul className="space-y-3">
                    {benefit.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Application Form Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Ready to Grow With Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our mission to connect the right talent with the right opportunity
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
            <FranchiseForm states={states} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the CryoVault franchise opportunity
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Equal Opportunity Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🤝</div>
                  <p className="text-sm font-semibold">Equal Opportunity Employer</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold">
                We are CryoVault!
              </h2>

              <p className="text-lg font-semibold opacity-90">
                We deliver on our promise to patients around the world!
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Equal Opportunity</h3>

                <p className="leading-relaxed opacity-90">
                  CryoVault maintains a work environment free from discrimination and is an equal opportunity employer. The company is committed to equal employment opportunity and employs all qualified persons without regard to race, color, religion, national origin, sex, age, disability status, genetics, sexual orientation, gender identity or expression, marital status, citizenship, or any other characteristic or classification protected by the applicable law(s) of the countries we operate in.
                </p>

                <p className="leading-relaxed opacity-90">
                  We apply these principles in all aspects of employment, including recruitment, hiring, placement, promotion, termination, lay off, transfer, leaves of absence, training, and compensation. If you feel you have not been treated in accordance with these principles, you should contact your local Human Resources Department.
                </p>

                <p className="leading-relaxed opacity-90">
                  The company assures all employees that no individual filing a complaint will be discriminated against as a result of their complaint. For more details, you can refer to our Human Rights policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// FAQ Item Component (SSR)
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-lg border border-border p-6 hover:border-primary/50 transition-colors cursor-pointer">
      <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors">
        <span>{question}</span>
        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        {answer}
      </p>
    </details>
  )
}

// Franchise Form Component (Client Component)
function FranchiseForm({ states }: { states: string[] }) {
  return (
    <form className="space-y-6">
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

      {/* Contact Number */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Contact Number *
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your contact number"
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

      {/* State Selection */}
      <div className="space-y-2">
        <label htmlFor="state" className="block text-sm font-medium text-foreground">
          Select State *
        </label>
        <select
          id="state"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none bg-white cursor-pointer"
          required
        >
          <option value="">Choose a state...</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Office Space */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-foreground">
          Do you have office space? *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="officeSpace" value="yes" className="w-4 h-4" required />
            <span className="text-sm text-foreground">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="officeSpace" value="no" className="w-4 h-4" required />
            <span className="text-sm text-foreground">No</span>
          </label>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="space-y-2">
        <label htmlFor="experience" className="block text-sm font-medium text-foreground">
          Professional Experience *
        </label>
        <textarea
          id="experience"
          placeholder="Enter your professional experience that you have till now"
          rows={4}
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          required
        ></textarea>
      </div>

      {/* Stem Cell Banking Experience */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-foreground">
          Experience in Stem Cell Banking? *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="stemCellExp" value="yes" className="w-4 h-4" required />
            <span className="text-sm text-foreground">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="stemCellExp" value="no" className="w-4 h-4" required />
            <span className="text-sm text-foreground">No</span>
          </label>
        </div>
      </div>

      {/* Comments */}
      <div className="space-y-2">
        <label htmlFor="comments" className="block text-sm font-medium text-foreground">
          Additional Comments
        </label>
        <textarea
          id="comments"
          placeholder="Any additional information you'd like to share..."
          rows={4}
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
        ></textarea>
      </div>

      {/* reCAPTCHA Note */}
      <div className="p-4 bg-muted rounded-lg border border-border text-sm text-muted-foreground">
        <p>🔒 This site is protected by reCAPTCHA and the Google</p>
        <p className="text-xs mt-1">
          <a href="#" className="underline hover:text-foreground">Privacy Policy</a> and{' '}
          <a href="#" className="underline hover:text-foreground">Terms of Service</a> apply.
        </p>
      </div>

      {/* Submit Button */}
      <CTAButton href="/contact" className="w-full">
        Submit Application
      </CTAButton>
    </form>
  )
}
