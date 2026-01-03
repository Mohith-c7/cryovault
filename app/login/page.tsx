import type { Metadata } from 'next'
import LoginPage from '@/components/login-page'

export const metadata: Metadata = {
  title: 'Login - CryoVault Customers Portal',
  description: 'Sign in to your CryoVault customer account to manage your stem cell banking services.',
}

export default function Page() {
  return <LoginPage />
}
