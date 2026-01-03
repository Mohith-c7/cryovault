import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import SiteFooter from '@/components/site-footer'
import PricingPage from '@/components/pricing-page'

export const metadata: Metadata = {
  title: 'Plans & Pricing - CryoVault',
  description: 'Explore our flexible stem cell banking plans and pricing options designed for every family.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <PricingPage />
      <SiteFooter />
    </main>
  )
}
