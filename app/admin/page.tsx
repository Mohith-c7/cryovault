import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import AdminDashboard from "@/components/admin-dashboard"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: 'Admin Dashboard | CryoVault',
  description: 'Admin dashboard for managing CryoVault content and submissions.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <main>
      <Navbar />
      <AdminDashboard />
      <SiteFooter />
    </main>
  )
}