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
    id: 'iso-certificate',
    name: 'ISO Certification',
    issuer: 'International Organization for Standardization',
    description: 'ISO certification demonstrating our commitment to maintaining international quality management standards in stem cell banking and laboratory operations, ensuring consistent quality and customer satisfaction.',
    image: '/accreditions/isologo.png',
    link: '/accreditions/ISO Certificate.pdf'
  },
  {
    id: 'glp-aqsr',
    name: 'GLP Certification',
    issuer: 'AQSR (Association for Quality & Safety Research)',
    description: 'Good Laboratory Practice certification from AQSR validating our adherence to international standards for laboratory operations, ensuring reliability, integrity, and quality of our research and testing procedures.',
    image: '/accreditions/glp.webp',
    link: '/accreditions/AQSR GLP-Cryovault Biotech India Pvt Ltd.pdf'
  },
  {
    id: 'who-gmp',
    name: 'WHO-GMP Certification',
    issuer: 'World Health Organization',
    description: 'Good Manufacturing Practice certification from WHO ensuring our manufacturing and preservation processes meet the highest international standards for quality, safety, and efficacy in stem cell banking.',
    image: '/accreditions/who-gmp-logo.jpg',
    link: '/accreditions/WHO-GMP.pdf'
  },
  {
    id: 'fda-aqsr',
    name: 'FDA Certification',
    issuer: 'AQSR - FDA Compliance',
    description: 'FDA compliance certification validating our adherence to Food and Drug Administration standards and regulations, ensuring our stem cell banking services meet stringent safety and quality requirements.',
    image: '/accreditions/FDA.jpg',
    link: '/accreditions/FDA-Cryovault Biotech India Pvt Ltd.pdf'
  },
  {
    id: 'form-28f',
    name: 'Form 28F Registration',
    issuer: 'Regulatory Compliance',
    description: 'Official Form 28F registration document demonstrating our compliance with regulatory requirements and legal authorization to operate stem cell banking services in accordance with applicable laws and regulations.',
    image: '/accreditions/form28f.png',
    link: '/accreditions/Form 28F.pdf'
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
            Our <span className="text-primary">Accreditations</span> & Certifications
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CryoVault Biotech India Pvt Ltd is recognized globally for its unwavering commitment to quality and regulatory compliance. Our comprehensive accreditations from ISO, WHO, FDA, and AQSR validate our dedication to maintaining the highest international standards in stem cell preservation and laboratory practices.
          </p>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
                    <a href={accred.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
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
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Standards</h3>
              <p className="text-muted-foreground text-sm">
                Certified by WHO, ISO, FDA, and AQSR - meeting the highest international quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Regulatory Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Full compliance with GLP, GMP, and FDA regulations ensuring safety and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Trusted Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Our multiple accreditations guarantee the highest level of care for your stem cells
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
