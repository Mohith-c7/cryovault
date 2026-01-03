import { Award, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Accreditation {
  id: string
  name: string
  issuer: string
  description: string
  image: string
  link: string
}

const accreditations: Accreditation[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    description: 'Quality Management System certification ensuring our commitment to consistent quality, customer satisfaction, and continuous improvement in all our processes and services.',
    image: '/accreditations/iso-9001.png',
    link: '#'
  },
  {
    id: 'glp',
    name: 'GLP (Good Lab Practice)',
    issuer: 'AQSR',
    description: 'Good Laboratory Practice certification demonstrating our adherence to international standards for laboratory operations, ensuring reliability and integrity of our research and testing procedures.',
    image: '/accreditations/glp.png',
    link: '#'
  },
  {
    id: 'who-gmp',
    name: 'WHO-GMP',
    issuer: 'World Health Organization',
    description: 'Good Manufacturing Practice certification from WHO ensuring our manufacturing processes meet the highest international standards for quality, safety, and efficacy of stem cell preservation.',
    image: '/accreditations/who-gmp.png',
    link: '#'
  },
  {
    id: 'fda',
    name: 'FDA Certification',
    issuer: 'AQSR',
    description: 'FDA certification by AQSR validating our compliance with Food and Drug Administration standards, ensuring our services meet stringent regulatory requirements for safety and quality.',
    image: '/accreditations/fda.png',
    link: '#'
  }
]

export default function AccreditationsPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Certifications</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Accreditations & <span className="text-primary">Certifications</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CryoVault is recognized globally for its unwavering commitment to quality and reliability. Our comprehensive accreditations and certifications from leading international organizations validate our dedication to maintaining the highest standards in stem cell preservation and laboratory practices.
          </p>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accreditations.map((accred) => (
              <div
                key={accred.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <img
                    src={accred.image}
                    alt={accred.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {accred.name}
                  </h3>

                  <p className="text-sm font-medium text-primary mb-4">
                    {accred.issuer}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {accred.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 rounded-lg transition-all duration-300"
                  >
                    <a href={accred.link}>View Certification</a>
                  </Button>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">International Standards</h3>
              <p className="text-muted-foreground text-sm">
                All our certifications meet or exceed international standards for quality and safety
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Verified Quality</h3>
              <p className="text-muted-foreground text-sm">
                Regular audits and inspections ensure our continued compliance with all standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Your Assurance</h3>
              <p className="text-muted-foreground text-sm">
                Our accreditations guarantee the highest level of care for your precious stem cells
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
