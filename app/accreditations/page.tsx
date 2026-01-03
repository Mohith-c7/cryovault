import { Navbar } from "@/components/navbar"
import AccreditationsPage from "@/components/accreditions-page"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: 'Accreditations & Certifications | CryoVault',
  description: 'Explore CryoVault\'s international accreditations and certifications including ISO 9001:2015, GLP, WHO-GMP, and FDA certification.',
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
