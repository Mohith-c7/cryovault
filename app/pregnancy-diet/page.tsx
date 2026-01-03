import { Navbar } from "@/components/navbar"
import SiteFooter from "@/components/site-footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import PregnancyDietPage from '@/components/pregnancy-diet-page'

export default function PregnancyDiet() {
  return (
    <main>
      <Navbar />
      <PregnancyDietPage />
      <SiteFooter />
      <FloatingActionButton />
    </main>
  )
}

export const metadata = {
  title: 'Pregnancy Diet Chart - CryoVault',
  description: 'Essential pregnancy diet chart with 4 food groups including Indian foods to meet your nutritional needs during pregnancy.',
}