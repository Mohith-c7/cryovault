import { Navbar } from "@/components/navbar"
import LeadershipPage from "@/components/leadership-page"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: 'Our Leadership Team | CryoVault',
  description: 'Meet the visionary leaders and experts driving CryoVault\'s mission to advance stem cell banking and regenerative medicine.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <LeadershipPage />
      <SiteFooter />
    </main>
  )
}
