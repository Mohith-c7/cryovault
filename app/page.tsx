/**
 * CryoVault Homepage (SSR)
 *
 * - This page is an async Server Component (no 'use client').
 * - Images for the hero carousel are fetched on the server using:
 *   fetch(..., { cache: 'no-store' })
 * - The data is rendered to HTML on the server and sent to the client.
 */

import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import WhyPreserveSection from "@/components/why-preserve-section"
import ThreeStepsSection from "@/components/three-steps-section"
import AppointmentFormSection from "@/components/appointment-form-section"
import BestInIndiaSection from "@/components/best-in-india"
import VisionMapSection from "@/components/vision-map"
import SiteFooter from "@/components/site-footer"
import BlogsIntro from "@/components/blogs-intro"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FloatingActionButton } from "@/components/floating-action-button"

export const metadata: Metadata = {
  title: "Cryovault | Trusted Stem Cell Banking in India",
  description: "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards. Secure your baby's future health today.",
  keywords: [
    "stem cell banking India",
    "cord blood banking",
    "stem cell preservation",
    "cryovault",
    "umbilical cord stem cells",
    "newborn stem cell storage",
    "cord blood collection India",
    "stem cell therapy",
    "cryogenic storage",
    "ISO certified stem cell bank"
  ],
  openGraph: {
    title: "Cryovault | Trusted Stem Cell Banking in India",
    description: "Secure your baby's future with India's most trusted stem cell banking service. ISO-certified labs, 99.9% success rate, nationwide coverage.",
    images: ['/logo-cryovault.jpg'],
  },
  alternates: {
    canonical: 'https://cryovault.in',
  },
}

type Photo = {
  id: number
  title: string
  url: string
  thumbnailUrl?: string
}

export const dynamic = "force-dynamic" // ensure SSR in Next.js

export default async function Page() {
  // Local placeholder images for the hero carousel
  const photos: Photo[] = [
    {
      id: 1,
      title: "Stem Cell Banking",
      url: "/placeholder.jpg",
      thumbnailUrl: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Expert Care",
      url: "/placeholder.jpg",
      thumbnailUrl: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Secure Storage",
      url: "/placeholder.jpg",
      thumbnailUrl: "/placeholder.jpg"
    },
    {
      id: 4,
      title: "Nationwide Service",
      url: "/placeholder.jpg",
      thumbnailUrl: "/placeholder.jpg"
    },
    {
      id: 5,
      title: "Future-Ready Solutions",
      url: "/placeholder.jpg",
      thumbnailUrl: "/placeholder.jpg"
    }
  ]

  const testimonials = [
    {
      author: {
        name: "Priya Sharma",
        handle: "@priyasharma",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "CryoVault's team was incredibly professional during the cord blood collection. The entire process was seamless and gave us peace of mind for our baby's future health security.",
      href: "https://twitter.com",
    },
    {
      author: {
        name: "Rajesh Kumar",
        handle: "@rajeshkumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text: "The expert guidance from CryoVault. We’ve reduced our development time significantly.",
      href: "https://twitter.com",
    },
    {
      author: {
        name: "Dr. Meera Patel",
        handle: "@drmeerapatel",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "As a pediatrician, I recommend CryoVault to my patients. Their international standards and DCGI licensing ensure the highest quality stem cell preservation for families.",
    },
  ]

  // Pass SSR data down into server components (no client hooks)
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cryovault | Trusted Stem Cell Banking in India",
            "description": "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards.",
            "url": "https://cryovault.in"
          })
        }}
      />
      
      <main>
      <Navbar />
      <HeroCarousel photos={photos} />
      <AboutSection />
      <WhyPreserveSection />
      <ThreeStepsSection />
      <AppointmentFormSection />
      <BestInIndiaSection />
      <BlogsIntro />
      <TestimonialsSection
        title="Trusted by families and clinicians"
        description="Real voices on why our service matters. Our community’s feedback keeps us improving."
        testimonials={testimonials}
      />
      <VisionMapSection />
      <SiteFooter />
      <FloatingActionButton />
      </main>
    </>
  )
}
