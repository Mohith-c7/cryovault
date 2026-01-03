import { Navbar } from "@/components/navbar"
import StemCellBankingPage from "@/components/stem-cell-banking-page"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: 'Stem Cell Banking | CryoVault',
  description: 'Learn about stem cell banking, its benefits, and how CryoVault preserves your family\'s future health through advanced cryopreservation technology.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <StemCellBankingPage />
      <SiteFooter />
    </main>
  )
}