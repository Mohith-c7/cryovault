import { Navbar } from "@/components/navbar"
import SiteFooter from "@/components/site-footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import InformationKitPage from '@/components/information-kit-page'

export default function InformationKit() {
  return (
    <main>
      <Navbar />
      <InformationKitPage />
      <SiteFooter />
      <FloatingActionButton />
    </main>
  )
}

export const metadata = {
  title: 'Information Kit - CryoVault',
  description: 'Request your free stem cell banking information kit. Get expert guidance from our stem cell specialists.',
}