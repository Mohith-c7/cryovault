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
// import BlogsIntro from "@/components/blogs-intro"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FloatingActionButton } from "@/components/floating-action-button"

export const metadata: Metadata = {
  title: "Cryovault | Most Trusted Stem Cell Bank in India",
  description: "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards. Secure your baby's future health today.",
  keywords: [
    "stem cell banking India",
    "cord blood banking",
    "stem cell preservation",
    "cryovault",
    "cryovault biotech india",
    "cryovault india",
    "cryovault stemcell banking",
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

export default async function Page() {
  // Hero carousel banner images
  const photos: Photo[] = [
    {
      id: 1,
      title: "CryoVault Stem Cell Banking - Banner 1",
      url: "/banner1.png",
      thumbnailUrl: "/banner1.png"
    },
    {
      id: 2,
      title: "CryoVault Stem Cell Banking - Banner 2",
      url: "/banner2.png",
      thumbnailUrl: "/banner2.png"
    },
    {
      id: 3,
      title: "CryoVault Stem Cell Banking - Banner 3",
      url: "/banner3.png",
      thumbnailUrl: "/banner3.png"
    },
    {
      id: 4,
      title: "CryoVault Stem Cell Banking - Banner 4",
      url: "/banner4.png",
      thumbnailUrl: "/banner4.png"
    }
  ]

  const testimonials = [
    {
      author: {
        name: "Thiruvenkataraja Karthikeyan",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "Great effort done by the team.. Starting from agreement to taking over the kit after delivery, Everything made easy n simple.",
      href: "https://twitter.com",
    },
    {
      author: {
        name: "Keerthi Priya",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text: "Cryovault's service was excellent. They were available round the clock, explained everything clearly about stem cell storage, and the prices were reasonable. Happy customer here!",
      href: "https://twitter.com",
    },
    {
      author: {
        name: "Rituraj Raman",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "Yesterday we had baby delivery. Customer service so good. They were so much proactive even in midnight or early morning hrs.. They were able to reach before time. Thanks much for all good service.",
    },
    {
      author: {
        name: "kola mallikarjunarao",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "We had high expectations when it came to preserving our baby's cord blood, and this facility exceeded them. The professional approach and care given to this vital process are truly impressive.",
    },
    {
      author: {
        name: "Bharathi K",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "The decision to store our baby's cord blood was made easy thanks to the knowledgeable and supportive team at the Cryovault facility. We feel confident knowing we've safeguarded our child's well-being.",
    },
    {
      author: {
        name: "Amgoth Laxmi",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "Being first-time parents, we were grateful for the guidance and seamless experience provided by the cryovault cord blood storage service. It's a relief to know we've taken a significant step for our baby's future health.",
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
      {/* <BlogsIntro /> */}
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
