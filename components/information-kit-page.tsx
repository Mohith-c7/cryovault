import { Heart, Award, Building, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'
import { Button } from '@/components/ui/button'

export default function InformationKitPage() {
  return (
    <>
      {/* Information Kit Form Section */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                  Information <span className="text-primary">Kit</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  In the event that you'd want to allow us to call you please fill in the form. Once we have received your contact details one of our stem cell expert will get back to you at your convenience.
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Expert Consultation</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Consultation</h3>
                    <p className="text-gray-600">Get personalized guidance from our stem cell banking experts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Information</h3>
                    <p className="text-gray-600">Receive detailed information about stem cell banking process and benefits</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">No Obligation</h3>
                    <p className="text-gray-600">Free consultation with no pressure or commitment required</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Your Information Kit</h2>
                  <p className="text-gray-600">Fill out the form below and we'll contact you soon</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Due Date
                    </label>
                    <input
                      type="date"
                      id="dueDate"
                      name="dueDate"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Contact Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Questions (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Any specific questions about stem cell banking?"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to being contacted by CryoVault regarding stem cell banking services and information. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Information Kit
                  </Button>
                </form>
              </div>

              {/* Floating Contact Info */}
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-4 shadow-xl text-white max-w-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-semibold">Quick Call</p>
                    <p className="text-xs opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="w-full px-5 md:px-8 py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-[#4845a9] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              OUR <span className="text-cyan-400">STORY</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. CryoVault has been pioneering stem cell banking solutions, helping families secure their future health with cutting-edge technology and compassionate care.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Happy Moms */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">9,800</div>
                <div className="text-cyan-400 font-semibold text-lg mb-1">HAPPY MOMS</div>
                <div className="text-blue-100 text-sm">Families we've helped secure their future</div>
              </div>
            </div>

            {/* Clinic Rooms */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                  <Building className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">462</div>
                <div className="text-cyan-400 font-semibold text-lg mb-1">CLINIC ROOMS</div>
                <div className="text-blue-100 text-sm">State-of-the-art facilities nationwide</div>
              </div>
            </div>

            {/* Awards */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">16</div>
                <div className="text-cyan-400 font-semibold text-lg mb-1">AWARDS</div>
                <div className="text-blue-100 text-sm">Recognition for excellence in healthcare</div>
              </div>
            </div>

            {/* Dedicated Doctors */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">DEDICATED</div>
                <div className="text-cyan-400 font-semibold text-lg mb-1">DOCTORS</div>
                <div className="text-blue-100 text-sm">Expert medical professionals</div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Leading the Future of <span className="text-cyan-400">Stem Cell Banking</span>
                </h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  For over two decades, CryoVault has been at the forefront of stem cell banking technology. Our journey began with a simple mission: to provide families with the most advanced and reliable stem cell preservation services available.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Today, we continue to innovate and expand our services, ensuring that every family has access to the life-saving potential of stem cells. Our commitment to excellence has earned us the trust of thousands of families and recognition from leading medical institutions worldwide.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <CTAButton href="/about">
                    Learn More About Us
                  </CTAButton>
                  <CTAButton href="/contact" variant="secondary">
                    Contact Our Team
                  </CTAButton>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/placeholder.jpg"
                    alt="CryoVault Laboratory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                </div>
                
                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-6 -right-6 bg-cyan-400 rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-xs text-primary font-semibold">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wavy Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity="0.9"></path>
          </svg>
        </div>
      </section>
    </>
  )
}