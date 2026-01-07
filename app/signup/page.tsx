import { Metadata } from 'next'
import SignupPage from '@/components/signup-page'

export const metadata: Metadata = {
  title: 'Sign Up | CryoVault',
  description: 'Create your CryoVault account to access stem cell banking services and manage your samples.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function Signup() {
  return <SignupPage />
}