import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Poppins } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Cryovault | Trusted Stem Cell Banking in India",
  description: "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards.",
  keywords: [
    "stem cell banking India",
    "cord blood banking",
    "stem cell preservation",
    "cryovault",
    "umbilical cord stem cells",
    "stem cell storage",
    "cord blood storage India",
    "newborn stem cells",
    "cryogenic storage",
    "stem cell therapy",
    "cord blood collection",
    "stem cell bank",
    "umbilical cord blood",
    "stem cell treatment",
    "cord blood preservation"
  ],
  authors: [{ name: "Cryovault" }],
  creator: "Cryovault",
  publisher: "Cryovault",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cryovault.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cryovault | Trusted Stem Cell Banking in India",
    description: "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards.",
    url: 'https://cryovault.in',
    siteName: 'Cryovault',
    images: [
      {
        url: '/logo-cryovault.jpg',
        width: 1200,
        height: 630,
        alt: 'Cryovault - Trusted Stem Cell Banking in India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cryovault | Trusted Stem Cell Banking in India",
    description: "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards.",
    images: ['/logo-cryovault.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'healthcare',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#292c61" />
        <meta name="msapplication-TileColor" content="#292c61" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cryovault",
              "url": "https://cryovault.in",
              "logo": "https://cryovault.in/logo-cryovault.jpg",
              "description": "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/cryovault",
                "https://www.twitter.com/cryovault",
                "https://www.linkedin.com/company/cryovault"
              ]
            })
          }}
        />
        
        {/* Structured Data for Medical Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Cryovault",
              "url": "https://cryovault.in",
              "logo": "https://cryovault.in/logo-cryovault.jpg",
              "description": "Advanced stem cell banking and cord blood preservation services in India",
              "medicalSpecialty": "Stem Cell Banking",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
