import { Heart, Shield, Microscope, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

export default function StemCellBankingPage() {
  return (
    <main className="w-full">
      {/* About Stem Cell Banking Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                  About Stem Cell Banking
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
                  (Cord Blood Banking)
                </h2>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Future Health Protection</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Stem cell banking refers to the collection, processing, and cryopreservation of stem cells from umbilical cord blood and tissue at the time of birth. These precious cells have the remarkable ability to develop into various types of blood cells and tissues, offering potential treatments for numerous medical conditions.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Families who choose stem cell banking value medical advancement, scientific innovation, and long-term health security for their children and future generations.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-800 font-medium text-lg">Expectant Parents</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-800 font-medium text-lg">Health-Conscious Families</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-800 font-medium text-lg">Medical Professionals</span>
                </div>
              </div>
            </div>
            {/* Right Content - Image and Info Cards */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="/stemcellbanking.webp"
                  alt="Stem Cell Banking - Hands protecting life"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>

              {/* Mobile Info Cards - Stack below image */}
              <div className="block md:hidden space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Treatment Potential</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Stem cells can treat over 80+ blood disorders, immune system diseases, and metabolic conditions with proven medical applications.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Perfect Match</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your baby's stem cells are a 100% genetic match and may also be compatible with siblings and family members.
                  </p>
                </div>
              </div>

              {/* Desktop Info Cards - Positioned absolutely */}
              <div className="hidden md:block">
                {/* Top Right Info Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Treatment Potential</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Stem cells can treat over 80+ blood disorders, immune system diseases, and metabolic conditions with proven medical applications.
                  </p>
                </div>

                {/* Bottom Left Info Card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Perfect Match</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your baby's stem cells are a 100% genetic match and may also be compatible with siblings and family members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Stem Cell Banking - Problem-Solution Grid */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-[#4845a9] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Why Choose <span className="text-cyan-400">Stem Cell Banking?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Traditional medicine has limitations. Stem cell banking offers revolutionary solutions for your family's future health challenges.
            </p>
          </div>

          {/* Problems Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-red-400 mb-4">Medical Challenges Today</h3>
              <p className="text-lg text-blue-200">Current limitations families face with traditional treatments</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Limited Treatment Options</h4>
                <p className="text-blue-100 leading-relaxed">
                  Many blood disorders and genetic conditions have few or no effective treatments, leaving families with limited hope.
                </p>
              </div>
              {/* Problem 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Finding Compatible Donors</h4>
                <p className="text-blue-100 leading-relaxed">
                  Waiting for bone marrow matches can take months or years, and many patients never find a suitable donor.
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Treatment Complications</h4>
                <p className="text-blue-100 leading-relaxed">
                  Rejection risks, side effects, and complications from mismatched treatments can be life-threatening.
                </p>
              </div>
            </div>
          </div>

          
          {/* Solutions Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Stem Cell Banking Solutions</h3>
              <p className="text-lg text-blue-200">How stem cells address each challenge with proven results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">80+ Treatable Conditions</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stem cells can treat blood cancers, immune disorders, metabolic diseases, and many genetic conditions.
                </p>
                <div className="text-sm text-green-600 font-semibold">✓ Proven medical applications</div>
              </div>

              {/* Solution 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Perfect Genetic Match</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your baby's stem cells are 100% compatible, eliminating the need to search for donors.
                </p>
                <div className="text-sm text-blue-600 font-semibold">✓ Immediate availability</div>
              </div>

              {/* Solution 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Zero Rejection Risk</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Using your own stem cells eliminates rejection risks and reduces treatment complications.
                </p>
                <div className="text-sm text-purple-600 font-semibold">✓ Safer treatments</div>
              </div>
            </div>
          </div>
          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Don't Wait for Problems to Arise
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Secure your family's future health today. One-time collection, lifetime protection.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/appointment">
                  Schedule Collection
                </CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Ask Questions
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What is Umbilical Cord - Split Layout with Circular Images */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Wavy Top Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity="0.8"></path>
          </svg>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-200/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              What is <span className="text-indigo-600">Umbilical Cord?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the lifeline that connects mother and baby during pregnancy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Circular Images with Info */}
            <div className="relative">
              {/* Main Circular Image */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                  <img
                    src="/stemcell.avif"
                    alt="Umbilical Cord Anatomy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                </div>
                {/* Orbiting Info Cards */}
                <div className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-indigo-100 max-w-xs animate-float">
                  <h4 className="font-bold text-indigo-600 mb-1 text-sm">3 Blood Vessels</h4>
                  <p className="text-xs text-gray-600">2 arteries + 1 vein</p>
                </div>
                
                <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-purple-100 max-w-xs animate-float" style={{ animationDelay: '1s' }}>
                  <h4 className="font-bold text-purple-600 mb-1 text-sm">Rich in Stem Cells</h4>
                  <p className="text-xs text-gray-600">Powerful regenerative cells</p>
                </div>

                <div className="absolute top-1/2 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-blue-100 max-w-xs animate-float" style={{ animationDelay: '2s' }}>
                  <h4 className="font-bold text-blue-600 mb-1 text-sm">20 Inches Long</h4>
                  <p className="text-xs text-gray-600">Flexible tube structure</p>
                </div>
              </div>
            </div>

            {/* Right - Educational Content */}
            <div className="space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Vital Connection</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The umbilical cord is a flexible, tube-like structure that connects the developing baby to the placenta during pregnancy. This remarkable lifeline contains three blood vessels protected by Wharton's jelly.
                </p>
                
                {/* Key Functions with Circular Icons */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Nutrient Highway</h4>
                      <p className="text-gray-600">Delivers oxygen and nutrients from mother to baby</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Waste Removal</h4>
                      <p className="text-gray-600">Carries waste products away from the baby</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Stem Cell Source</h4>
                      <p className="text-gray-600">Contains valuable stem cells for future medical use</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Composition Breakdown with Circular Progress */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cord Composition</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">60%</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">Wharton's Jelly</div>
                  </div>
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">40%</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">Blood Vessels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="white" opacity="0.8"></path>
          </svg>
        </div>
      </section>

      {/* Cord Blood Banking - Before/After Comparison */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-[#4845a9] relative overflow-hidden">
        {/* Diagonal Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 0l80 80M20 0l60 60M40 0l40 40M60 0l20 20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-cyan-400">Cord Blood</span> Banking Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transforming traditional medicine limitations into future health possibilities
            </p>
          </div>

          {/* Before vs After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* BEFORE - Traditional Medicine */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400 mb-2">BEFORE</h3>
                  <h4 className="text-xl font-semibold text-sm">Traditional Medicine Challenges</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Limited Treatment Options</h5>
                      <p className="text-gray-600 text-sm">Many conditions have no effective treatments available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Long Wait Times</h5>
                      <p className="text-gray-600 text-sm">Months or years waiting for compatible donors</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Rejection Risks</h5>
                      <p className="text-gray-600 text-sm">High risk of complications from mismatched treatments</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✗</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Uncertain Outcomes</h5>
                      <p className="text-gray-600 text-sm">No guarantee of finding suitable matches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AFTER - Cord Blood Banking */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">AFTER</h3>
                  <h4 className="text-xl font-semibold text-sm">Cord Blood Banking Benefits</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">80+ Treatable Conditions</h5>
                      <p className="text-gray-600 text-sm">Proven treatments for blood cancers, immune disorders, and more</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Immediate Availability</h5>
                      <p className="text-gray-600 text-sm">Your stem cells are ready when you need them</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Perfect Match</h5>
                      <p className="text-gray-600 text-sm">100% genetic compatibility eliminates rejection risks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Family Benefits</h5>
                      <p className="text-gray-600 text-sm">May also help siblings and other family members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* Key Statistics */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">The Transformation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-red-500 mb-2">One-Time</div>
                <div className="text-gray-600">Collection Opportunity</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-500 mb-2">Lifetime</div>
                <div className="text-gray-600">Storage & Protection</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-500 mb-2">Family</div>
                <div className="text-gray-600">Health Security</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-500 mb-2">Future</div>
                <div className="text-gray-600">Medical Advances</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to Store with CryoVault - Step-by-Step Journey */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Wavy Top Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="white" opacity="0.9"></path>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-20 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute top-64 right-32 w-12 h-12 bg-blue-300/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-cyan-200/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Store with <span className="text-primary">CryoVault</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your journey from enrollment to lifelong storage in 4 simple steps
            </p>
          </div>

          {/* Step-by-Step Journey */}
          <div className="relative mb-20">
            {/* Connecting Path */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-green-200 via-blue-200 via-purple-200 to-primary/30 transform -translate-y-1/2 hidden lg:block rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              
              {/* Step 1: Enrollment */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">1</div>
                      <div className="text-xs text-green-100">STEP</div>
                    </div>
                  </div>
                  {/* Circular Image */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/placeholder.jpg" alt="Enrollment" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enrollment</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sign up during pregnancy and receive your collection kit with detailed instructions.
                  </p>
                  <div className="text-sm text-green-600 font-semibold">✓ Easy online process</div>
                </div>
              </div>
              {/* Step 2: Collection Kit */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">2</div>
                      <div className="text-xs text-blue-100">STEP</div>
                    </div>
                  </div>
                  {/* Circular Image */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/placeholder.jpg" alt="Collection Kit" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Collection Kit</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Receive sterile collection materials and coordinate with your healthcare provider.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">✓ Sterile & safe materials</div>
                </div>
              </div>

              {/* Step 3: Birth Day Collection */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">3</div>
                      <div className="text-xs text-purple-100">STEP</div>
                    </div>
                  </div>
                  {/* Circular Image */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/placeholder.jpg" alt="Birth Day" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Birth Day Collection</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Safe, painless collection after delivery takes just 5-10 minutes.
                  </p>
                  <div className="text-sm text-purple-600 font-semibold">✓ Quick & painless</div>
                </div>
              </div>

              {/* Step 4: Lifetime Storage */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">4</div>
                      <div className="text-xs text-blue-100">STEP</div>
                    </div>
                  </div>
                  {/* Circular Image */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/placeholder.jpg" alt="Storage" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Storage</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Secure cryopreservation at -196°C with 24/7 monitoring and backup systems.
                  </p>
                  <div className="text-sm text-primary font-semibold">✓ Lifetime protection</div>
                </div>
              </div>
            </div>
          </div>
          {/* Facility Features with Circular Images */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">World-Class Facilities</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20 shadow-lg">
                  <img src="/accreditions/isologo.png" alt="Laboratory" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">ISO Certified Lab</h4>
                <p className="text-gray-600">International quality standards and rigorous testing protocols</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-200 shadow-lg">
                  <img src="/lab.png" alt="Storage" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cryogenic Storage</h4>
                <p className="text-gray-600">Advanced liquid nitrogen systems with redundant backup</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-200 shadow-lg">
                  <img src="/247.avif" alt="Monitoring" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Monitoring</h4>
                <p className="text-gray-600">Continuous surveillance and automated alert systems</p>
              </div>
            </div>
          </div>

          {/* Storage Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl p-6 text-center border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">25+</span>
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50K+</span>
              </div>
              <div className="text-sm text-gray-600">Samples Stored</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">99.9%</span>
              </div>
              <div className="text-sm text-gray-600">Viability Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits of Stem Cells - Medical Conditions Grid with Circular Images */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-[#4845a9] relative overflow-hidden">
        

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-12 h-12 bg-cyan-400/20 rounded-full animate-float flex items-center justify-center">
            <Heart className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="absolute top-48 right-24 w-16 h-16 bg-blue-300/20 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
            <Shield className="w-8 h-8 text-blue-300" />
          </div>
          <div className="absolute bottom-40 left-1/4 w-14 h-14 bg-white/20 rounded-full animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
            <Microscope className="w-7 h-7 text-white" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-cyan-400">Benefits</span> of Stem Cells
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Proven treatments and promising research for over 80 medical conditions
            </p>
          </div>

          {/* Current Treatments Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Currently Approved Treatments</h3>
              <p className="text-lg text-blue-200">FDA-approved stem cell therapies available today</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Blood Cancers */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-red-200 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="/treatments/bloodcancer.jpg" alt="Blood Cancers" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 text-center">Blood Cancers</h4>
                <ul className="space-y-3 text-blue-100 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Leukemia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Lymphoma</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Multiple Myeloma</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/20 rounded-full">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm font-semibold text-cyan-400">FDA Approved</span>
                  </div>
                </div>
              </div>
              {/* Blood Disorders */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-200 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="/treatments/blooddisorders.jpeg" alt="Blood Disorders" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Blood Disorders</h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Sickle Cell Disease</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Thalassemia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Aplastic Anemia</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700">FDA Approved</span>
                  </div>
                </div>
              </div>

              {/* Immune Disorders */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-200 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="/treatments/immune.webp" alt="Immune Disorders" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Immune Disorders</h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>SCID</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Wiskott-Aldrich</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Chronic Granulomatous</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700">FDA Approved</span>
                  </div>
                </div>
              </div>
              {/* Metabolic Disorders */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-orange-200 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="/treatments/metabolicdisorder.jpg" alt="Metabolic Disorders" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Metabolic Disorders</h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Hurler Syndrome</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Krabbe Disease</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Adrenoleukodystrophy</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700">FDA Approved</span>
                  </div>
                </div>
              </div>

              {/* Bone Marrow Failure */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-200 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="/treatments/bone-marrow.jpeg" alt="Bone Marrow Failure" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Bone Marrow Failure</h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>Fanconi Anemia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>Diamond-Blackfan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>Shwachman-Diamond</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700">FDA Approved</span>
                  </div>
                </div>
              </div>

              {/* Future Research */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-200 shadow-lg group-hover:scale-110 transition-transform">
                    <img src="/treatments/future.jpeg" alt="Future Research" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto -mt-10 relative z-10 border-4 border-white">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Future Potential</h4>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Diabetes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Heart Disease</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Neurological Disorders</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-yellow-700">In Clinical Trials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Treatment Success Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Treatment Success Statistics</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">80+</span>
                </div>
                <div className="text-blue-100 font-semibold">Treatable Conditions</div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">40K+</span>
                </div>
                <div className="text-blue-100 font-semibold">Successful Transplants</div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-[#4845a9] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">85%</span>
                </div>
                <div className="text-blue-100 font-semibold">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#4845a9] to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">25%</span>
                </div>
                <div className="text-blue-100 font-semibold">Sibling Match Rate</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Invest in Your Family's Future Health
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                With proven treatments available today and promising research for tomorrow, stem cell banking is a valuable investment in your family's health security.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/appointment">
                  Start Your Journey
                </CTAButton>
                <CTAButton href="/pricing" variant="secondary">
                  View Pricing Plans
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}