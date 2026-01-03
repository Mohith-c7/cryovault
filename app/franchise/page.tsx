import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import SiteFooter from '@/components/site-footer'
import FranchisePage from '@/components/franchise-page'

export const metadata: Metadata = {
  title: 'Franchise Opportunities - CryoVault',
  description: 'Join the CryoVault franchise network and build a thriving stem cell banking business with proven technology and comprehensive support.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <FranchisePage />
      <SiteFooter />
    </main>
  )
}
