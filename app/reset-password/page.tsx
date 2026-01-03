import type { Metadata } from 'next'
import ResetPasswordPage from '@/components/reset-password-page'

export const metadata: Metadata = {
  title: 'Reset Password - CryoVault Customers Portal',
  description: 'Reset your CryoVault customer account password.',
}

export default function Page() {
  return <ResetPasswordPage />
}
