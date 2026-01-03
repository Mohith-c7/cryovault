import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import AboutPage from "@/components/about-page"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Cryovault | Leading Stem Cell Banking Company in India",
  description: "Learn about Cryovault's mission to provide world-class stem cell banking services in India. Discover our ISO-certified facilities, expert team, and commitment to preserving your family's future health.",
  keywords: [
    "about cryovault",
    "stem cell banking company India",
    "cord blood banking company",
    "stem cell preservation company",
    "ISO certified stem cell bank",
    "cryogenic storage facility India",
    "stem cell banking mission",
    "cord blood storage company"
  ],
  openGraph: {
    title: "About Cryovault | Leading Stem Cell Banking Company in India",
    description: "Learn about Cryovault's mission to provide world-class stem cell banking services in India with ISO-certified facilities and expert team.",
    url: 'https://cryovault.in/about',
    images: ['/logo-cryovault.jpg'],
  },
  alternates: {
    canonical: 'https://cryovault.in/about',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Cryovault",
            "description": "Learn about Cryovault's mission to provide world-class stem cell banking services in India",
            "url": "https://cryovault.in/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Cryovault",
              "foundingDate": "2010",
              "description": "Leading stem cell banking company in India providing ISO-certified cryogenic storage services",
              "url": "https://cryovault.in"
            }
          })
        }}
      />
      
      <main>
        <Navbar />
        <AboutPage />
        <SiteFooter />
      </main>
    </>
  )
}
