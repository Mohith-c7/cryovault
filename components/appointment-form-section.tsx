'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AppointmentFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    expectedDeliveryDate: '',
    doctorName: '',
    hospitalName: '',
    address: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/placeholder.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Glassmorphic Form Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl my-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
              Book Your
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
              Free Consultation
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/80 text-sm font-light tracking-wide">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white/80 text-sm font-light tracking-wide">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 text-sm font-light tracking-wide">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/80 text-sm font-light tracking-wide">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="appointmentDate" className="text-white/80 text-sm font-light tracking-wide">
                    Preferred Appointment Date
                  </Label>
                  <Input
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedDeliveryDate" className="text-white/80 text-sm font-light tracking-wide">
                    Expected Delivery Date
                  </Label>
                  <Input
                    id="expectedDeliveryDate"
                    name="expectedDeliveryDate"
                    type="date"
                    value={formData.expectedDeliveryDate}
                    onChange={handleInputChange}
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="doctorName" className="text-white/80 text-sm font-light tracking-wide">
                    Doctor Name
                  </Label>
                  <Input
                    id="doctorName"
                    name="doctorName"
                    value={formData.doctorName}
                    onChange={handleInputChange}
                    placeholder="Dr. Name"
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hospitalName" className="text-white/80 text-sm font-light tracking-wide">
                    Hospital Name
                  </Label>
                  <Input
                    id="hospitalName"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleInputChange}
                    placeholder="Hospital Name"
                    className="h-14 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white/80 text-sm font-light tracking-wide">
                  Complete Address
                </Label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:bg-white/10 focus:border-white/40 transition-all duration-300 resize-none focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full h-16 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 text-white font-light text-lg tracking-wide rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </Button>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-4">
              <p className="text-white/60 text-sm font-light">
                Our team will contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}