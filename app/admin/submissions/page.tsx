import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import AdminSubmissionsPage from "@/components/admin-submissions-page"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: 'Form Submissions | Admin Dashboard | CryoVault',
  description: 'View and manage contact form submissions and appointments.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminSubmissionsPageRoute() {
  return (
    <main>
      <Navbar />
      <AdminSubmissionsPage />
      <SiteFooter />
    </main>
  )
}