import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import SiteFooter from '@/components/site-footer'
import CareersPage from '@/components/careers-page'

export const metadata: Metadata = {
  title: 'Careers - CryoVault',
  description: 'Join our team and be part of the future of stem cell banking and medical innovation.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <CareersPage />
      <SiteFooter />
    </main>
  )
}
