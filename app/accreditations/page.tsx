import { Navbar } from "@/components/navbar"
import AccreditationsPage from "@/components/accreditions-page"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: 'Accreditations & Certifications | CryoVault Biotech India',
  description: 'CryoVault Biotech India Pvt Ltd holds prestigious accreditations from ISO, WHO-GMP, FDA, AQSR-GLP, and regulatory compliance certifications ensuring the highest standards in stem cell banking.',
  keywords: [
    'CryoVault accreditations',
    'stem cell banking certifications',
    'ISO certification India',
    'WHO-GMP certification',
    'FDA compliance stem cell',
    'AQSR GLP certification',
    'stem cell bank quality standards',
    'laboratory accreditations India'
  ],
  openGraph: {
    title: 'Accreditations & Certifications | CryoVault Biotech India',
    description: 'Explore CryoVault\'s international accreditations from ISO, WHO, FDA, and AQSR ensuring the highest quality standards in stem cell preservation.',
    url: 'https://cryovault.in/accreditations',
    images: ['/accreditions/isologo.png'],
  },
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <AccreditationsPage />
      <SiteFooter />
    </main>
  )
}
