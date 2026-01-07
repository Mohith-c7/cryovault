'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  FileText, 
  MessageSquare, 
  Calendar, 
  Users, 
  TrendingUp, 
  Plus,
  Eye,
  Edit,
  Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import { getAllBlogs } from '@/lib/blogs'
import { getAllContactSubmissions, getAllAppointments } from '@/lib/contact'

interface DashboardStats {
  totalBlogs: number
  publishedBlogs: number
  totalContacts: number
  totalAppointments: number
}

export default function AdminDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalContacts: 0,
    totalAppointments: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Temporary development bypass - remove in production
    const isDevelopment = process.env.NODE_ENV === 'development'
    
    if (!loading && !user) {
      router.push('/login')
      return
    }

    if (!loading && user && user.profile?.role !== 'admin' && !isDevelopment) {
      router.push('/login')
      return
    }

    if (user) {
      loadDashboardStats()
    }
  }, [user, loading, router])

  const loadDashboardStats = async () => {
    try {
      const [blogsResult, contactsResult, appointmentsResult] = await Promise.all([
        getAllBlogs(),
        getAllContactSubmissions(),
        getAllAppointments()
      ])

      if (blogsResult.data) {
        setStats(prev => ({
          ...prev,
          totalBlogs: blogsResult.data.length,
          publishedBlogs: blogsResult.data.filter(blog => blog.published).length
        }))
      }

      if (contactsResult.data) {
        setStats(prev => ({
          ...prev,
          totalContacts: contactsResult.data.length
        }))
      }

      if (appointmentsResult.data) {
        setStats(prev => ({
          ...prev,
          totalAppointments: appointmentsResult.data.length
        }))
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  if (loading || isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user || user.profile?.role !== 'admin') {
    return null
  }

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <section className="w-full px-5 md:px-8 py-8 md:py-12 bg-white border-b">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {user.profile?.full_name || user.email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild>
                <Link href="/admin/blogs/new">
                  <Plus className="w-4 h-4 mr-2" />
                  New Blog Post
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="w-full px-5 md:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Blogs */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalBlogs}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Published Blogs */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.publishedBlogs}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            {/* Contact Submissions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Contact Forms</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Appointments */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manage Blogs */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Manage Blogs</h3>
                  <p className="text-sm text-gray-600">Create, edit, and publish blog posts</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin/blogs">
                    <Edit className="w-4 h-4 mr-2" />
                    View All
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/admin/blogs/new">
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Link>
                </Button>
              </div>
            </div>

            {/* View Submissions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Form Submissions</h3>
                  <p className="text-sm text-gray-600">View contact forms and appointments</p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/submissions">
                  <Eye className="w-4 h-4 mr-2" />
                  View Submissions
                </Link>
              </Button>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
                  <p className="text-sm text-gray-600">View website performance metrics</p>
                </div>
              </div>
              <Button variant="outline" size="sm" disabled>
                <TrendingUp className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}