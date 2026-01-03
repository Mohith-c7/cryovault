import { Navbar } from "@/components/navbar"
import VideosPage from "@/components/videos-page"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: 'Video Resources | CryoVault',
  description: 'Watch our comprehensive video library about stem cell banking, regenerative medicine, and CryoVault\'s services.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <VideosPage />
      <SiteFooter />
    </main>
  )
}
