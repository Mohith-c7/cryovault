import { Navbar } from "@/components/navbar"
import SiteFooter from "@/components/site-footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import ImmunizationChartPage from '@/components/immunization-chart-page'

export default function ImmunizationChart() {
  return (
    <main>
      <Navbar />
      <ImmunizationChartPage />
      <SiteFooter />
      <FloatingActionButton />
    </main>
  )
}

export const metadata = {
  title: 'Immunization Chart - CryoVault',
  description: 'Complete immunization schedule and vaccination chart for children from birth to 12 years with detailed vaccine descriptions.',
}