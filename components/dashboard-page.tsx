'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, User, Settings, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

interface UserData {
  email?: string
  user_metadata?: {
    name?: string
  }
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await supabase.auth.getSession()

        if (!data.session) {
          router.push('/login')
          return
        }

        setUser(data.session.user)
      } catch (err) {
        console.error('Auth check error:', err)
        router.push('/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      toast.success('Logged out successfully')
      router.push('/login')
    } catch (err) {
      toast.error('Failed to logout')
      console.error('Logout error:', err)
    }
  }

  if (isLoading) {
    return (
      <main className="w-full min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.avif"
              alt="CryoVault Logo"
              className="h-10 w-auto"
              width="174"
              height="48"
            />
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your stem cell banking services and view your stored samples
          </p>
        </div>

        {/* User Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-1 bg-white rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Email</p>
                <p className="font-semibold text-foreground break-all">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Status</p>
                <p className="font-semibold text-foreground">Active</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg border border-border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Portal Access</p>
                <p className="font-semibold text-foreground">Granted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Samples Section */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4">Your Samples</h2>
            <p className="text-muted-foreground mb-6">
              View and manage your stored stem cell samples, including storage status and details.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              View Samples
            </Button>
          </div>

          {/* Documents Section */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4">Documents</h2>
            <p className="text-muted-foreground mb-6">
              Access your consent forms, certificates, and other important documents.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              View Documents
            </Button>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4">Support</h2>
            <p className="text-muted-foreground mb-6">
              Contact our support team for any questions or assistance with your account.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Support
            </Button>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4">Account Settings</h2>
            <p className="text-muted-foreground mb-6">
              Update your profile information and manage your account preferences.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Go to Settings
            </Button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-800 text-sm mb-4">
            Our customer support team is available 24/7 to assist you with any questions about your account or services.
          </p>
          <Button
            variant="outline"
            className="border-blue-300 text-blue-900 hover:bg-blue-100"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </main>
  )
}
