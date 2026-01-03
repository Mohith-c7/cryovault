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

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <img
                  src="/logo-cryovault.jpg"
                  alt="Cryovault Logo"
                  className="h-16 w-auto"
                />
                <h3 className="text-2xl font-bold text-white">
                  Cryovault
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  India's most trusted stem cell banking service, preserving hope for families with advanced cryogenic technology.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+91 1800-XXX-XXXX</p>
                    <p className="text-slate-400 text-sm">24/7 Support Available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">info@cryovault.in</p>
                    <p className="text-slate-400 text-sm">Quick Response Guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Nationwide Service</p>
                    <p className="text-slate-400 text-sm">28+ States Covered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">
                Our Services
              </h4>
              <nav className="space-y-4">
                <Link href="/stem-cell-banking" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Stem Cell Banking
                </Link>
                <Link href="/pricing" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Plans & Pricing
                </Link>
                <Link href="/appointment" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Book Appointment
                </Link>
                <Link href="/information-kit" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Information Kit
                </Link>
                <Link href="/pregnancy-diet" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Pregnancy Diet Chart
                </Link>
                <Link href="/immunization-chart" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Immunization Chart
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">
                Company
              </h4>
              <nav className="space-y-4">
                <Link href="/about" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
                <Link href="/leadership" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Leadership
                </Link>
                <Link href="/accreditations" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Accreditations
                </Link>
                <Link href="/careers" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
                <Link href="/franchise" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Franchise
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">
                Resources
              </h4>
              <nav className="space-y-4">
                <Link href="/blogs" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Blog & Insights
                </Link>
                <Link href="/gallery" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
                <Link href="/videos" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Videos
                </Link>
                <Link href="/privacy" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-slate-400 font-medium">Follow Us:</span>
              <div className="flex items-center gap-4">
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
                    className="w-10 h-10 bg-slate-800 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-slate-300 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-center md:text-right">
              <p>© {new Date().getFullYear()} Cryovault. All rights reserved.</p>
              <p className="text-sm mt-1">Made with care in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}