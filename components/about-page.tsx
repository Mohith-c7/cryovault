'use client'

import { Play, Lightbulb, Target, Heart, MapPin, Award, Users, Shield } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section with Description and Video */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                  Preserving <span className="text-primary">Tomorrow's</span> Health Today
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CryoVault is a leading stem cell banking service provider in India, specializing in the preservation of umbilical cord blood stem cells. Established in 2015, CryoVault has rapidly become a trusted name in the field, offering a range of services to ensure the highest standards of quality and safety for stored stem cells.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">10+ Years of Excellence</h3>
                    <p className="text-sm text-muted-foreground">Trusted by thousands of families across India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Strategic Location</h3>
                    <p className="text-sm text-muted-foreground">Located in Bangalore, India's Silicon Valley</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">ISO Certified</h3>
                    <p className="text-sm text-muted-foreground">Highest standards of quality and safety</p>
                  </div>
                </div>
              </div>

              <CTAButton href="/contact">
                Learn More
              </CTAButton>
            </div>

            {/* Right: Video Placeholder */}
            <div className="relative group">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <img
                  src="/placeholder.jpg"
                  alt="CryoVault Stem Cell Banking"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-primary/10">
                  <Lightbulb className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our vision at CryoVault is to be the leading provider of stem cell preservation services globally, ensuring every family has access to the highest quality of stem cell banking. We aim to advance the field of regenerative medicine by providing innovative and reliable stem cell storage solutions, thereby contributing to the future health and well-being of families worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Main Circular Image - Larger */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl z-20">
                  <img
                    src="/onceinalifetime.png"
                    alt="CryoVault Laboratory Facility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20"></div>
                </div>

                {/* Floating Circles - Smaller than main image */}
                {/* Innovation Circle - Top Left */}
                <div className="absolute top-12 left-8 w-32 h-32 bg-gradient-to-br from-[#292c61] to-[#4845a9] rounded-full flex items-center justify-center text-white shadow-xl z-10">
                  <div className="text-center px-3">
                    <h4 className="font-bold text-sm mb-1">Innovation</h4>
                    <p className="text-xs leading-tight">Advanced cryopreservation technology for optimal stem cell viability</p>
                  </div>
                </div>

                {/* Trust Circle - Bottom Left */}
                <div className="absolute bottom-16 left-4 w-36 h-36 bg-gradient-to-br from-[#292c61] to-[#4845a9] rounded-full flex items-center justify-center text-white shadow-xl z-10">
                  <div className="text-center px-4">
                    <h4 className="font-bold text-sm mb-1">Trust</h4>
                    <p className="text-xs leading-tight">ISO certified processes ensure highest quality standards and family confidence</p>
                  </div>
                </div>

                {/* Excellence Circle - Bottom Right */}
                <div className="absolute bottom-12 right-8 w-32 h-32 bg-gradient-to-br from-[#292c61] to-[#4845a9] rounded-full flex items-center justify-center text-white shadow-xl z-10">
                  <div className="text-center px-3">
                    <h4 className="font-bold text-sm mb-1">Excellence</h4>
                    <p className="text-xs leading-tight">24/7 monitoring and state-of-the-art storage facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full relative overflow-hidden">
        {/* Wavy Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>

        {/* Main Content Area */}
        <div className="bg-gradient-to-br from-[#1a1d4a] via-[#292c61] to-[#4845a9] text-white relative py-24 md:py-32">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }} />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/10 to-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

          <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
            {/* Central Heading at top of section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                Our <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">Purpose</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <img
                    src="/happyfamily.png"
                    alt="CryoVault Mission"
                    className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
                </div>
              </div>

              {/* Right: Minimalistic Cards */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Quality & Safety Excellence</h3>
                      <p className="text-white/80 leading-relaxed">
                        By maintaining the highest standards in stem cell preservation, we ensure that every sample is stored with precision, utilizing advanced cryopreservation technology and rigorous quality control protocols.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Comprehensive Family Support</h3>
                      <p className="text-white/80 leading-relaxed">
                        By providing exceptional service throughout the entire preservation process, we guide families with expert consultation, seamless collection procedures, and ongoing support for their stem cell banking journey.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Advanced Medical Innovation</h3>
                      <p className="text-white/80 leading-relaxed">
                        By utilizing cutting-edge research and technology, we continuously advance our preservation methods, ensuring optimal stem cell viability and contributing to the future of regenerative medicine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wavy Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-border/50 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We operate with complete transparency and honesty in all our dealings, ensuring trust and reliability.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-border/50 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We pursue the highest standards in everything we do, from research to customer service.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-border/50 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compassion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We genuinely care about our families' futures and approach every case with empathy and dedication.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-border/50 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We continuously invest in research and technology to advance regenerative medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Location Advantage Section with Parallax */}
      <section className="relative w-full px-5 md:px-8 py-16 md:py-24 overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 -z-10"
          style={{
            backgroundImage: 'url(/placeholder.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background -z-10"></div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Strategic <span className="text-primary">Location Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in Bangalore, India's Silicon Valley
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Infrastructure Hub</h3>
              <p className="text-muted-foreground">
                Proximity to world-class infrastructure, hospitals, and research institutions ensures seamless operations and collaborations.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation Ecosystem</h3>
              <p className="text-muted-foreground">
                Access to cutting-edge technology, research facilities, and top talent in the biotech industry.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Connectivity</h3>
              <p className="text-muted-foreground">
                Well-connected to major cities across India with excellent transportation and logistics networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promises Section - Circular/Radial Layout */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle stroke='%23292c61' stroke-width='0.5' cx='50' cy='50' r='40'/%3E%3Ccircle stroke='%23292c61' stroke-width='0.3' cx='50' cy='50' r='30'/%3E%3Ccircle stroke='%23292c61' stroke-width='0.2' cx='50' cy='50' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }} />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-primary/5 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Promises</span> to Patients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Commitments that define our relationship with every family
            </p>
          </div>

          {/* Radial Layout Container */}
          <div className="relative w-full max-w-5xl mx-auto aspect-square md:aspect-[4/3]">
            
            {/* Central Circle - Image */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl z-20 group hover:scale-105 transition-all duration-500 overflow-hidden border-4 border-white">
              <img
                src="/lady1.png"
                alt="CryoVault Promise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Connecting Lines SVG - Behind cards */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#292c61" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#292c61" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="lineGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#292c61" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="lineGrad4" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#292c61" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="lineGrad5" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#292c61" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Lines from center to each promise - positioned for each card */}
              <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDuration: '3s' }} />
              <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
              <line x1="50%" y1="50%" x2="5%" y2="60%" stroke="url(#lineGrad3)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDuration: '4s' }} />
              <line x1="50%" y1="50%" x2="95%" y2="60%" stroke="url(#lineGrad4)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDuration: '4.5s' }} />
              <line x1="50%" y1="50%" x2="50%" y2="95%" stroke="url(#lineGrad5)" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDuration: '5s' }} />
            </svg>

            {/* Promise 1 - Top Left */}
            <div className="absolute left-0 top-0 md:left-[5%] md:top-[5%] w-40 h-40 md:w-48 md:h-48 group z-10">
              <div className="w-full h-full bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="text-center p-4 relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-foreground mb-1">Safety First</h4>
                  <p className="text-xs text-muted-foreground leading-tight">24/7 Monitoring & Security</p>
                </div>
              </div>
            </div>

            {/* Promise 2 - Top Right */}
            <div className="absolute right-0 top-0 md:right-[5%] md:top-[5%] w-40 h-40 md:w-48 md:h-48 group z-10">
              <div className="w-full h-full bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="text-center p-4 relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-foreground mb-1">Quality Assured</h4>
                  <p className="text-xs text-muted-foreground leading-tight">ISO Certified Excellence</p>
                </div>
              </div>
            </div>

            {/* Promise 3 - Middle Left */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 md:left-[-5%] w-40 h-40 md:w-48 md:h-48 group z-10">
              <div className="w-full h-full bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="text-center p-4 relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-foreground mb-1">Expert Support</h4>
                  <p className="text-xs text-muted-foreground leading-tight">Dedicated Care Team</p>
                </div>
              </div>
            </div>

            {/* Promise 4 - Middle Right */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:right-[-5%] w-40 h-40 md:w-48 md:h-48 group z-10">
              <div className="w-full h-full bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="text-center p-4 relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-foreground mb-1">Innovation</h4>
                  <p className="text-xs text-muted-foreground leading-tight">Cutting-Edge Technology</p>
                </div>
              </div>
            </div>

            {/* Promise 5 - Bottom Center */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 md:bottom-[-5%] w-44 h-44 md:w-52 md:h-52 group z-10">
              <div className="w-full h-full bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="text-center p-4 relative z-10">
                  <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-1">Lifetime Commitment</h4>
                  <p className="text-xs text-muted-foreground leading-tight">Generations of Care</p>
                </div>
              </div>
            </div>

            {/* Decorative Outer Ring */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-primary/10 rounded-full pointer-events-none"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-dashed border-primary/5 rounded-full pointer-events-none"></div>

          </div>
        </div>
      </section>

      {/* Message from Managing Director */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  "At CryoVault, we believe that every family deserves access to the transformative power of stem cell preservation. Our mission is not just to store cells, but to preserve hope and possibilities for future generations. We are committed to maintaining the highest standards of excellence while making our services accessible and affordable for families across India."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Dr. Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Managing Director, CryoVault</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
