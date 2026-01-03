'use client'

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.3'%3E%3Cpath d='M40 0v80M0 40h80'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Company Info - Full width on mobile */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="/whitelogo.png"
                  alt="Cryovault Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Cryovault
                </h3>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  India's most trusted stem cell banking service, preserving hope for families with advanced cryogenic technology.
                </p>
              </div>

              {/* Contact Information - Optimized for mobile */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5">
                    <Phone className="w-full h-full text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base">+91 1800-XXX-XXXX</p>
                    <p className="text-slate-400 text-xs sm:text-sm">24/7 Support Available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5">
                    <Mail className="w-full h-full text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base break-all">info@cryovault.in</p>
                    <p className="text-slate-400 text-xs sm:text-sm">Quick Response Guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5">
                    <MapPin className="w-full h-full text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base">Pan India Service</p>
                    <p className="text-slate-400 text-xs sm:text-sm">Nationwide Coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services - Mobile optimized */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white border-b border-slate-700 pb-2">
                Our Services
              </h4>
              <nav className="space-y-2 sm:space-y-3">
                <Link href="/stem-cell-banking" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Stem Cell Banking
                </Link>
                <Link href="/pricing" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Plans & Pricing
                </Link>
                <Link href="/appointment" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Book Appointment
                </Link>
                <Link href="/information-kit" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Information Kit
                </Link>
                <Link href="/pregnancy-diet" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Pregnancy Diet Chart
                </Link>
                <Link href="/immunization-chart" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Immunization Chart
                </Link>
              </nav>
            </div>

            {/* Company - Mobile optimized */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white border-b border-slate-700 pb-2">
                Company
              </h4>
              <nav className="space-y-2 sm:space-y-3">
                <Link href="/about" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  About Us
                </Link>
                <Link href="/leadership" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Leadership
                </Link>
                <Link href="/accreditations" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Accreditations
                </Link>
                <Link href="/careers" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Careers
                </Link>
                <Link href="/franchise" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Franchise
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Resources - Mobile optimized */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white border-b border-slate-700 pb-2">
                Resources
              </h4>
              <nav className="space-y-2 sm:space-y-3">
                <Link href="/blogs" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Blog & Insights
                </Link>
                <Link href="/gallery" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Gallery
                </Link>
                <Link href="/videos" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Videos
                </Link>
                <Link href="/privacy" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base py-1 hover:pl-2 transition-all touch-manipulation">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section - Mobile optimized */}
        <div className="border-t border-slate-700 py-4 sm:py-6 md:py-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Social Media - Mobile first */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              <span className="text-slate-400 font-medium text-sm sm:text-base">Follow Us:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                {[
                  { Icon: Facebook, href: "#", name: "Facebook" },
                  { Icon: Instagram, href: "#", name: "Instagram" },
                  { Icon: Linkedin, href: "#", name: "LinkedIn" },
                  { Icon: Twitter, href: "#", name: "Twitter" },
                  { Icon: Youtube, href: "#", name: "YouTube" },
                ].map(({ Icon, href, name }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright - Mobile centered */}
            <div className="text-slate-400 text-center text-xs sm:text-sm md:text-base">
              <p>© {new Date().getFullYear()} Cryovault. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-1">Made with care in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}