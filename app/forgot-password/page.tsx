import type { Metadata } from 'next'
import ForgotPasswordPage from '@/components/forgot-password-page'

export const metadata: Metadata = {
  title: 'Forgot Password - CryoVault Customers Portal',
  description: 'Reset your CryoVault customer account password.',
}

export default function Page() {
  return <ForgotPasswordPage />
}
