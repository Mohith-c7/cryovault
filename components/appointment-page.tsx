import { Calendar, Phone, User, MapPin, CheckCircle2 } from 'lucide-react'

export default function AppointmentPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Book Your <span className="text-primary">Appointment</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a consultation with our expert doctors and take the first step towards preserving your family's future with advanced stem cell banking.
          </p>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Description */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
                Why Book an Appointment?
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expert team is dedicated to providing personalized guidance on stem cell banking. During your consultation, you'll learn about the latest advancements in cryopreservation technology and how it can benefit your family.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className="space-y-3 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Consultation</h3>
                    <p className="text-sm text-muted-foreground">Get personalized advice from our specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Advanced Technology</h3>
                    <p className="text-sm text-muted-foreground">Learn about our state-of-the-art facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                    <p className="text-sm text-muted-foreground">Choose a time that works best for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Bento Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-muted-foreground">
              Join families across India who trust Cryovault for their stem cell banking needs
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Happy Moms - Large Card */}
            <div className="md:col-span-1 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-4">👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-pink-900 mb-2">Happy Moms</h3>
                <p className="text-pink-800 text-sm mb-6">
                  Thousands of mothers trust us with their precious family's future
                </p>
              </div>
              <div className="text-4xl font-bold text-pink-900">9,800+</div>
            </div>

            {/* Clinic Rooms */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 flex flex-col justify-between">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Clinic Rooms</h3>
              <div className="text-3xl font-bold text-blue-900">462</div>
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200 flex flex-col justify-between">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Awards</h3>
              <div className="text-3xl font-bold text-yellow-900">16</div>
            </div>

            {/* Dedicated Doctors */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 flex flex-col justify-between">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Dedicated Doctors</h3>
              <div className="text-3xl font-bold text-green-900">98</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Appointment Form Component (Client Component)
function AppointmentForm() {
  return (
    <form className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground">Schedule Your Appointment</h3>

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

      {/* Phone No */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Phone No *
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Appointment Date */}
      <div className="space-y-2">
        <label htmlFor="appointmentDate" className="block text-sm font-medium text-foreground">
          Select Appointment Date *
        </label>
        <input
          id="appointmentDate"
          type="date"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Expected Delivery Date */}
      <div className="space-y-2">
        <label htmlFor="deliveryDate" className="block text-sm font-medium text-foreground">
          Expected Delivery Date *
        </label>
        <input
          id="deliveryDate"
          type="date"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Doctor Name */}
      <div className="space-y-2">
        <label htmlFor="doctorName" className="block text-sm font-medium text-foreground">
          Doctor Name *
        </label>
        <input
          id="doctorName"
          type="text"
          placeholder="Enter doctor's name"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Hospital Name */}
      <div className="space-y-2">
        <label htmlFor="hospitalName" className="block text-sm font-medium text-foreground">
          Hospital Name *
        </label>
        <input
          id="hospitalName"
          type="text"
          placeholder="Enter hospital name"
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          required
        />
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-foreground">
          Address *
        </label>
        <textarea
          id="address"
          placeholder="Enter your address"
          rows={3}
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          required
        ></textarea>
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
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Make an Appointment
      </button>

      {/* Success Message (Hidden by default) */}
      <div className="hidden p-4 bg-green-50 border border-green-200 rounded-lg text-green-900 text-sm">
        <p className="font-semibold">✓ Successfully Submitted!</p>
        <p className="text-xs mt-1">We will contact you shortly to confirm your appointment.</p>
      </div>
    </form>
  )
}
