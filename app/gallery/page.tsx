import { Navbar } from "@/components/navbar"
import GalleryPage from "@/components/gallery-page"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: 'Gallery | CryoVault',
  description: 'Explore our photo gallery featuring community events, wellness programs, and celebrations from the CryoVault family.',
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <GalleryPage />
      <SiteFooter />
    </main>
  )
}
