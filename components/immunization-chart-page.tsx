'use client'

import { Shield, Syringe, Calendar, Baby, Heart, AlertCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

const immunizationSchedule = [
  {
    age: "Birth",
    vaccines: "BCG, OPV-0, Hep-B1",
    description: "T.B. Oral Polio Vaccine, Hepatitis-B Vaccine"
  },
  {
    age: "6 Weeks",
    vaccines: "DTwP1 or DTaP1, IPV1, Hib 1, Hep-B2, Rotavirus 1, PCV 1",
    description: "Diphtheria, Pertussis (Whooping Cough) and Tetanus, Inactivated Injectable Polio Vaccine, H.Influenzae Type B, Hepatitis-B vaccine, Pneumococcal Conjugate Vaccine for Pneumonia"
  },
  {
    age: "10 Weeks",
    vaccines: "DTwP2 or DTaP2, IPV2, Hib 2, Hep-B2, Rotavirus 2, PCV 2",
    description: "Diphtheria, Pertussis (Whooping Cough) and Tetanus, Inactivated Injectable Polio Vaccine, H.Influenzae Type B, Hepatitis-B vaccine, Pneumococcal Conjugate Vaccine for Pneumonia"
  },
  {
    age: "14 Weeks",
    vaccines: "DTwP3 or DTaP3, IPV3, Hib 3, Hep-B3, Rotavirus 3, PCV 3",
    description: "Diphtheria, Pertussis (Whooping Cough) and Tetanus, Inactivated Injectable Polio Vaccine, H.Influenzae Type B, Hepatitis-B vaccine, Pneumococcal Conjugate Vaccine for Pneumonia"
  },
  {
    age: "6 Months",
    vaccines: "Hep-B3, OPV1",
    description: "Hepatitis-B vaccine, Measle, Mumps, Rubella"
  },
  {
    age: "9 Months",
    vaccines: "OPV2, MMR1",
    description: "Oral Polio Vaccine, Measle, Mumps, Rubella"
  },
  {
    age: "12 Months",
    vaccines: "Hepatitis A1, Typhoid",
    description: "Hepatitis A, Typhoid Vaccine"
  },
  {
    age: "15 Months",
    vaccines: "MMR2, Varicella 1, PCV Booster",
    description: "Measle, Mumps, Rubella, Chicken Pox, Pneumococcal Conjugate Vaccine for Pneumonia"
  },
  {
    age: "16-18 Months",
    vaccines: "DTwP Booster 1 or DTaP Booster1, IPV Booster 1, Hib Booster 1",
    description: "Diphtheria, Pertussis (Whooping Cough) and Tetanus, Inactivated Injectable Polio Vaccine, H.Influenzae Type B"
  },
  {
    age: "18 Months",
    vaccines: "Hepatitis A2, Typhoid Booster",
    description: "Hepatitis A, Typhoid Vaccine"
  },
  {
    age: "2 Years",
    vaccines: "Typhoid 2",
    description: "Typhoid Vaccine"
  },
  {
    age: "4 1/2 Years",
    vaccines: "DTwP Booster 2 or DTaP Booster2, OPV3",
    description: "Diphtheria, Pertussis (Whooping Cough) and Tetanus, Oral Polio Vaccine"
  },
  {
    age: "5 Years",
    vaccines: "Varicella 2",
    description: "Chicken Pox"
  },
  {
    age: "10 to 12 Years",
    vaccines: "Tdap or Td, HPV",
    description: "Tetanus, Diphtheria, Pertussis (Whooping Cough), Human papilloma Virus Vaccine For Cervical Cancer in Girls Only"
  }
]

const vaccineBenefits = [
  {
    icon: Shield,
    title: "Disease Prevention",
    description: "Protects against serious and potentially life-threatening diseases"
  },
  {
    icon: Heart,
    title: "Community Health",
    description: "Helps create herd immunity to protect vulnerable populations"
  },
  {
    icon: Baby,
    title: "Child Development",
    description: "Ensures healthy growth and development without disease interruptions"
  },
  {
    icon: AlertCircle,
    title: "Early Protection",
    description: "Provides immunity before exposure to dangerous diseases"
  }
]

export default function ImmunizationChartPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Cpath d='M30 15l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Syringe className="w-4 h-4" />
              Vaccination Schedule
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Complete <span className="text-primary">Immunization</span> Chart
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Essential vaccination schedule for children from birth to 12 years. Follow this comprehensive immunization chart to protect your child against serious diseases.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">14</div>
                <div className="text-sm text-gray-600">Age Groups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-gray-600">Vaccines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-gray-600">Years Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immunization Schedule Table */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Vaccination <span className="text-primary">Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this detailed immunization schedule to ensure your child receives all necessary vaccines at the right time for optimal protection.
            </p>
          </div>

          {/* Immunization Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-700">
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Age</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Vaccine</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Description</th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody>
                  {immunizationSchedule.map((schedule, index) => (
                    <tr key={index} className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-lg font-bold text-gray-900">{schedule.age}</div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-gray-900 font-semibold leading-relaxed">
                          {schedule.vaccines}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-gray-700 leading-relaxed">
                          {schedule.description}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                <p className="text-yellow-700 leading-relaxed">
                  This immunization schedule is based on standard recommendations. Always consult with your pediatrician for personalized vaccination advice. Some vaccines may be given in combination, and timing may vary based on individual circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Benefits Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-[#4845a9] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Why <span className="text-cyan-400">Vaccination</span> Matters
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Vaccines are one of the most effective ways to prevent serious diseases and protect your child's health throughout their life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vaccineBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Keep Your Child <span className="text-primary">Protected</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Schedule your child's vaccinations with our expert pediatricians. We follow the latest immunization guidelines to ensure your child receives the best protection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/appointment">
              Schedule Vaccination
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Consult Pediatrician
            </CTAButton>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📋 Vaccination Reminder</h3>
            <p className="text-gray-700">
              Keep track of your child's vaccination schedule and never miss an important immunization. Download our vaccination tracker or set up reminders with our healthcare team.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}