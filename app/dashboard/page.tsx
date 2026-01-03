import type { Metadata } from 'next'
import DashboardPage from '@/components/dashboard-page'

export const metadata: Metadata = {
  title: 'Dashboard - CryoVault Customers Portal',
  description: 'Manage your CryoVault account and view your stem cell banking services.',
}

export default function Page() {
  return <DashboardPage />
}
