import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export function SEOHead({
  title = "Cryovault | Trusted Stem Cell Banking in India",
  description = "Cryovault offers advanced stem cell banking services in India with ISO-certified labs, long-term cryogenic storage, and medical-grade safety standards.",
  keywords = ["stem cell banking India", "cord blood banking", "stem cell preservation"],
  canonical = "https://cryovault.in",
  ogImage = "/logo-cryovault.jpg",
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Cryovault" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Cryovault" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  )
}