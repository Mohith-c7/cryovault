import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import AdminBlogsPage from "@/components/admin-blogs-page"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: 'Manage Blogs | Admin Dashboard | CryoVault',
  description: 'Create, edit, and manage blog posts.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminBlogsPageRoute() {
  return (
    <main>
      <Navbar />
      <AdminBlogsPage />
      <SiteFooter />
    </main>
  )
}