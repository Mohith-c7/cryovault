import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import ContactPage from "@/components/contact-page"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Contact Cryovault | Get in Touch for Stem Cell Banking Services",
  description: "Contact Cryovault for stem cell banking inquiries, appointments, and support. Reach our expert team for cord blood banking consultation and information across India.",
  keywords: [
    "contact cryovault",
    "stem cell banking contact",
    "cord blood banking inquiry",
    "cryovault phone number",
    "stem cell banking consultation",
    "cord blood collection appointment",
    "cryovault customer support",
    "stem cell banking India contact"
  ],
  openGraph: {
    title: "Contact Cryovault | Get in Touch for Stem Cell Banking Services",
    description: "Contact Cryovault for stem cell banking inquiries, appointments, and support. Expert consultation available across India.",
    url: 'https://cryovault.in/contact',
    images: ['/logo-cryovault.jpg'],
  },
  alternates: {
    canonical: 'https://cryovault.in/contact',
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
            "@type": "ContactPage",
            "name": "Contact Cryovault",
            "description": "Contact Cryovault for stem cell banking inquiries and appointments",
            "url": "https://cryovault.in/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Cryovault",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "IN"
              }
            }
          })
        }}
      />
      
      <main>
        <Navbar />
        <ContactPage />
        <SiteFooter />
      </main>
    </>
  )
}
