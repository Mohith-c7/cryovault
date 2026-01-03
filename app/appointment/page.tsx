import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import SiteFooter from '@/components/site-footer'
import AppointmentPage from '@/components/appointment-page'

export const metadata: Metadata = {
  title: 'Book Free Appointment | Cryovault Stem Cell Banking Consultation',
  description: 'Schedule a free consultation with Cryovault experts for stem cell banking services. Book your appointment for cord blood collection and preservation guidance across India.',
  keywords: [
    "book appointment cryovault",
    "stem cell banking appointment",
    "cord blood banking consultation",
    "free stem cell consultation",
    "cryovault appointment booking",
    "stem cell banking meeting",
    "cord blood collection appointment",
    "stem cell preservation consultation"
  ],
  openGraph: {
    title: 'Book Free Appointment | Cryovault Stem Cell Banking Consultation',
    description: 'Schedule a free consultation with Cryovault experts for stem cell banking services. Professional guidance for cord blood preservation.',
    url: 'https://cryovault.in/appointment',
    images: ['/logo-cryovault.jpg'],
  },
  alternates: {
    canonical: 'https://cryovault.in/appointment',
  },
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <AppointmentPage />
      <SiteFooter />
    </main>
  )
}
