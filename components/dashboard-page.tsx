'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, User, Settings, Home, FileText, Phone, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { toast } from 'sonner'

interface FakeUser {
  email: string
  name: string
  loginTime: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<FakeUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      try {
        const userData = localStorage.getItem('cryovault_user')
        
        if (!userData) {
          router.push('/login')
          return
        }

        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
      } catch (err) {
        console.error('Auth check error:', err)
        router.push('/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    try {
      localStorage.removeItem('cryovault_user')
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
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Main Website Navbar */}
      <Navbar />
      
      {/* Customer Portal Header */}
      <div className="bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-foreground">Customer Portal</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Welcome, {user?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Welcome, {user?.name}!
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your stem cell banking services and view your stored samples
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            <Shield className="w-4 h-4" />
            Demo Mode Active
          </div>
        </div>

        {/* User Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg border border-border p-4 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-muted-foreground">Account Email</p>
                <p className="font-semibold text-foreground text-sm sm:text-base truncate">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-4 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Account Status</p>
                <p className="font-semibold text-green-600 text-sm sm:text-base">Active</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border p-4 sm:p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Portal Access</p>
                <p className="font-semibold text-blue-600 text-sm sm:text-base">Full Access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Samples Section */}
          <div className="bg-white rounded-lg border border-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Your Samples</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  View and manage your stored stem cell samples, including storage status and details.
                </p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cord Blood Sample</span>
                <span className="text-green-600 font-medium">Stored</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Storage Duration</span>
                <span className="text-foreground font-medium">2 years, 3 months</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              View Sample Details
            </Button>
          </div>

          {/* Documents Section */}
          <div className="bg-white rounded-lg border border-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Documents</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Access your consent forms, certificates, and other important documents.
                </p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Storage Certificate</span>
                <span className="text-green-600 font-medium">Available</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Consent Forms</span>
                <span className="text-green-600 font-medium">Complete</span>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              View Documents
            </Button>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-lg border border-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">24/7 Support</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Contact our support team for any questions or assistance with your account.
                </p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phone Support</span>
                <span className="text-green-600 font-medium">Available</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Response Time</span>
                <span className="text-foreground font-medium">&lt; 2 hours</span>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Contact Support
            </Button>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-lg border border-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Account Settings</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Update your profile information and manage your account preferences.
                </p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Profile Status</span>
                <span className="text-green-600 font-medium">Complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Notifications</span>
                <span className="text-foreground font-medium">Enabled</span>
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Manage Settings
            </Button>
          </div>
        </div>

        {/* Demo Info Banner */}
        <div className="mt-6 sm:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Demo Mode Information
          </h3>
          <p className="text-blue-800 text-sm mb-4">
            You're currently using the demo version of the CryoVault Customer Portal. All data shown is simulated for demonstration purposes. In the production version, you'll see your actual sample information, documents, and account details.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="border-blue-300 text-blue-900 hover:bg-blue-100"
              onClick={() => toast.info('Demo feature - Contact support for real assistance')}
            >
              Contact Real Support
            </Button>
            <Button
              variant="outline"
              className="border-blue-300 text-blue-900 hover:bg-blue-100"
              asChild
            >
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
