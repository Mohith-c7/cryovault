import { Navbar } from "@/components/navbar"
import SiteFooter from "@/components/site-footer"
import { FloatingActionButton } from "@/components/floating-action-button"
import BlogsPage from '@/components/blogs-page'

export default function Blogs() {
  return (
    <main>
      <Navbar />
      <BlogsPage />
      <SiteFooter />
      <FloatingActionButton />
    </main>
  )
}

export const metadata = {
  title: 'Blogs - CryoVault',
  description: 'Stay informed with the latest insights on stem cell banking, medical breakthroughs, and family health from CryoVault experts.',
}