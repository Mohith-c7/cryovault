'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OfficeInfo {
  city: string
  address: string
  phone: string
  whatsapp: string
  emails: string[]
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  recaptcha?: string
}

const offices: OfficeInfo[] = [
  {
    city: 'Bengaluru',
    address: 'No.:52/65, Swami Vivekananda road, Srinivasa layout, Bagalur, North Bengaluru, Karnataka- 562149.',
    phone: '+91 73311 61886',
    whatsapp: '+91 73311 61886',
    emails: ['info@cryovault.in', 'contacts@cryovault.in'],
    hours: '24/7 Hours',
    coordinates: { lat: 13.1939, lng: 77.5937 }
  },
  {
    city: 'Hyderabad',
    address: 'Plot no. 9D, First Floor, Road no. 9, Durga Bhavani Nagar, Film Nagar, Hyderabad, Telangana – 500096, India',
    phone: '+91 73311 61886',
    whatsapp: '+91 73311 61886',
    emails: ['admin@cryovault.in', 'contacts@cryovault.in'],
    hours: '24/7 Hours',
    coordinates: { lat: 17.3850, lng: 78.4867 }
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('')

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please verify that you are not a robot'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token)
      setErrors(prev => ({
        ...prev,
        recaptcha: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', formData)
      setSubmitted(true)
      
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setRecaptchaToken('')
        setSubmitted(false)
      }, 4000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="w-full">
      {/* Banner Section */}
      <section className="relative w-full py-16 md:py-24 px-5 md:px-8 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10"></div>

        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're here to answer your questions and help you on your journey to preserving your child's future
          </p>
        </div>
      </section>

      {/* Offices Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 text-center">
            Our <span className="text-primary">Offices</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16">
            Visit us at either of our locations across India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-border/50 bg-card p-8 md:p-10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-primary rounded-full group-hover:w-20 transition-all duration-300"></div>

                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-4 mb-6">
                  {office.city}
                </h3>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Address</p>
                      <p className="text-foreground leading-relaxed">{office.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <a href={`tel:${office.phone}`} className="text-foreground hover:text-primary transition">
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${office.whatsapp.replace(/\s+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition"
                      >
                        {office.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <div className="space-y-1">
                        {office.emails.map((email, i) => (
                          <a
                            key={i}
                            href={`mailto:${email}`}
                            className="block text-foreground hover:text-primary transition"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Working Hours</p>
                      <p className="text-foreground">{office.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/3 via-background to-background">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Post us an <span className="text-primary">Enquiry</span>
            </h2>
            <p className="text-muted-foreground">
              We'd love to hear from you. Fill out the form below and we'll respond within 24 hours.
            </p>
          </div>

          {/* Form Container with Shadow */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                    errors.name
                      ? 'border-red-500 bg-red-50/30 focus:ring-red-200'
                      : 'border-border bg-background focus:ring-primary/20'
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      errors.email
                        ? 'border-red-500 bg-red-50/30 focus:ring-red-200'
                        : 'border-border bg-background focus:ring-primary/20'
                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/30 focus:ring-red-200'
                        : 'border-border bg-background focus:ring-primary/20'
                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                    errors.subject
                      ? 'border-red-500 bg-red-50/30 focus:ring-red-200'
                      : 'border-border bg-background focus:ring-primary/20'
                  } text-foreground focus:outline-none focus:ring-2`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="pricing">Pricing & Plans</option>
                  <option value="appointment">Book an Appointment</option>
                  <option value="support">Support & Assistance</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                    errors.message
                      ? 'border-red-500 bg-red-50/30 focus:ring-red-200'
                      : 'border-border bg-background focus:ring-primary/20'
                  } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 resize-none`}
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
                {errors.message && (
                  <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </div>
                )}
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <div 
                  className="g-recaptcha" 
                  data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  data-callback="handleRecaptchaChange"
                ></div>
              </div>
              {errors.recaptcha && (
                <div className="flex items-center gap-2 justify-center text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.recaptcha}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 rounded-lg transition-all duration-300 text-base"
                >
                  {isLoading ? 'Sending...' : 'Send Enquiry'}
                </Button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-700 font-medium">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 text-center">
            Find Us on the <span className="text-primary">Map</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16">
            Locate our offices in Bengaluru and Hyderabad
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden shadow-lg border border-border/50">
                <iframe
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDYWlzPEEis970xy5TiZUDtu_4b-9yBVAc&q=${encodeURIComponent(office.address)}`}
                ></iframe>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Note: Replace the Google Maps API key in the iframe src with your actual API key
          </p>
        </div>
      </section>
    </main>
  )
}
