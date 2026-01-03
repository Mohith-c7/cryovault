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
    <section className="relative w-full min-h-screen py-16 md:py-24 overflow-hidden">
      {/* Attractive Kids Toys Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-50 to-yellow-100" />
        
        {/* Floating Toy Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Teddy Bears */}
          <div className="absolute top-10 left-10 w-16 h-16 text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            🧸
          </div>
          <div className="absolute top-32 right-20 w-12 h-12 text-5xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            🧸
          </div>
          <div className="absolute bottom-20 left-32 w-14 h-14 text-5xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            🧸
          </div>

          {/* Baby Items */}
          <div className="absolute top-20 right-10 w-12 h-12 text-4xl animate-pulse" style={{ animationDelay: '0.5s' }}>
            🍼
          </div>
          <div className="absolute bottom-32 right-16 w-14 h-14 text-5xl animate-pulse" style={{ animationDelay: '1.5s' }}>
            🍼
          </div>
          <div className="absolute top-1/2 left-8 w-12 h-12 text-4xl animate-pulse" style={{ animationDelay: '2.5s' }}>
            👶
          </div>

          {/* Toys */}
          <div className="absolute top-40 left-1/4 w-10 h-10 text-4xl animate-spin" style={{ animationDuration: '8s' }}>
            🎈
          </div>
          <div className="absolute bottom-40 right-1/4 w-12 h-12 text-4xl animate-spin" style={{ animationDuration: '6s' }}>
            🎈
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>
            🎀
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 text-4xl animate-bounce" style={{ animationDelay: '2s' }}>
            🎀
          </div>

          {/* Building Blocks */}
          <div className="absolute top-16 left-1/2 w-8 h-8 text-3xl animate-pulse" style={{ animationDelay: '0.8s' }}>
            🧩
          </div>
          <div className="absolute bottom-16 right-1/2 w-10 h-10 text-4xl animate-pulse" style={{ animationDelay: '1.8s' }}>
            🧩
          </div>

          {/* Hearts and Stars */}
          <div className="absolute top-24 left-2/3 w-6 h-6 text-2xl animate-ping" style={{ animationDelay: '0.3s' }}>
            💖
          </div>
          <div className="absolute bottom-24 left-1/4 w-8 h-8 text-3xl animate-ping" style={{ animationDelay: '1.3s' }}>
            💖
          </div>
          <div className="absolute top-1/4 right-1/4 w-6 h-6 text-2xl animate-ping" style={{ animationDelay: '2.3s' }}>
            ⭐
          </div>
          <div className="absolute bottom-1/4 right-2/3 w-8 h-8 text-3xl animate-ping" style={{ animationDelay: '0.7s' }}>
            ⭐
          </div>

          {/* Pacifiers */}
          <div className="absolute top-48 right-32 w-10 h-10 text-4xl animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2.5s' }}>
            🍭
          </div>
          <div className="absolute bottom-48 left-16 w-8 h-8 text-3xl animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '3s' }}>
            🍭
          </div>

          {/* Baby Clothes */}
          <div className="absolute top-36 left-20 w-8 h-8 text-3xl animate-pulse" style={{ animationDelay: '1.7s' }}>
            👕
          </div>
          <div className="absolute bottom-36 right-24 w-10 h-10 text-4xl animate-pulse" style={{ animationDelay: '0.9s' }}>
            👕
          </div>

          {/* Floating Bubbles Effect */}
          <div className="absolute top-12 left-1/3 w-4 h-4 bg-pink-200/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-20 right-1/3 w-6 h-6 bg-blue-200/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-12 left-1/2 w-5 h-5 bg-yellow-200/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/2 w-3 h-3 bg-purple-200/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-12 w-4 h-4 bg-green-200/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-12 w-6 h-6 bg-orange-200/30 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Soft overlay for better form readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          
          {/* Left Side - Pregnant Lady Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <img
                src="/lady2.png"
                alt="Pregnant lady - Stem cell banking for expecting mothers"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
              />
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-200/50 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-200/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-6 w-4 h-4 bg-yellow-200/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="order-1 lg:order-2">
            <div className="backdrop-blur-xl bg-white/90 border border-white/40 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-3 tracking-wide">
                  Book Your
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-primary mb-4">
                  Free Consultation
                </h3>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
              </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 text-sm font-medium tracking-wide">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700 text-sm font-medium tracking-wide">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 text-sm font-medium tracking-wide">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 text-sm font-medium tracking-wide">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appointmentDate" className="text-gray-700 text-sm font-medium tracking-wide">
                    Preferred Appointment Date
                  </Label>
                  <Input
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedDeliveryDate" className="text-gray-700 text-sm font-medium tracking-wide">
                    Expected Delivery Date
                  </Label>
                  <Input
                    id="expectedDeliveryDate"
                    name="expectedDeliveryDate"
                    type="date"
                    value={formData.expectedDeliveryDate}
                    onChange={handleInputChange}
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorName" className="text-gray-700 text-sm font-medium tracking-wide">
                    Doctor Name
                  </Label>
                  <Input
                    id="doctorName"
                    name="doctorName"
                    value={formData.doctorName}
                    onChange={handleInputChange}
                    placeholder="Dr. Name"
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hospitalName" className="text-gray-700 text-sm font-medium tracking-wide">
                    Hospital Name
                  </Label>
                  <Input
                    id="hospitalName"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleInputChange}
                    placeholder="Hospital Name"
                    className="h-12 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-gray-700 text-sm font-medium tracking-wide">
                  Complete Address
                </Label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  className="w-full p-3 bg-white/80 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-primary transition-all duration-300 resize-none focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-medium text-lg tracking-wide rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </Button>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-3">
              <p className="text-gray-600 text-sm font-light">
                Our team will contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}