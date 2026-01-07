'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Calendar,
  User,
  Search,
  Filter
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/auth-context'
import { getAllBlogs, deleteBlog, updateBlog } from '@/lib/blogs'
import type { Database } from '@/lib/supabase'

type Blog = Database['public']['Tables']['blogs']['Row']

export default function AdminBlogsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    if (!loading && (!user || user.profile?.role !== 'admin')) {
      router.push('/login')
      return
    }

    if (user && user.profile?.role === 'admin') {
      loadBlogs()
    }
  }, [user, loading, router])

  useEffect(() => {
    filterBlogs()
  }, [blogs, searchTerm, statusFilter])

  const loadBlogs = async () => {
    try {
      const { data, error } = await getAllBlogs()
      if (error) {
        // Set empty array instead of showing error
        setBlogs([])
        return
      }
      setBlogs(data || [])
    } catch (error) {
      // Set empty array for graceful fallback
      setBlogs([])
    } finally {
      setIsLoading(false)
    }
  }

  const filterBlogs = () => {
    let filtered = blogs

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog =>
        statusFilter === 'published' ? blog.published : !blog.published
      )
    }

    setFilteredBlogs(filtered)
  }

  const handleTogglePublished = async (blog: Blog) => {
    try {
      const { error } = await updateBlog(blog.id, {
        published: !blog.published,
        published_at: !blog.published ? new Date().toISOString() : null
      })

      if (error) throw error

      setBlogs(prev =>
        prev.map(b =>
          b.id === blog.id
            ? { ...b, published: !b.published, published_at: !b.published ? new Date().toISOString() : null }
            : b
        )
      )
    } catch (error) {
      // Error updating blog
    }
  }

  const handleDeleteBlog = async (blog: Blog) => {
    if (!confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      return
    }

    try {
      const { error } = await deleteBlog(blog.id)
      if (error) throw error

      setBlogs(prev => prev.filter(b => b.id !== blog.id))
    } catch (error) {
      // Error deleting blog
    }
  }

  if (loading || isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
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
              <div className="flex items-center gap-2 mb-2">
                <Link href="/admin" className="text-primary hover:text-primary/80">
                  Admin
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">Blogs</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Manage Blogs
              </h1>
              <p className="text-gray-600">
                Create, edit, and manage your blog posts
              </p>
            </div>
            <Button asChild>
              <Link href="/admin/blogs/new">
                <Plus className="w-4 h-4 mr-2" />
                New Blog Post
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full px-5 md:px-8 py-6 bg-white border-b">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Posts</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs List */}
      <section className="w-full px-5 md:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No blogs found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first blog post'
                }
              </p>
              <Button asChild>
                <Link href="/admin/blogs/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Blog Post
                </Link>
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Views
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredBlogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900 line-clamp-2">
                                {blog.title}
                              </div>
                              <div className="text-sm text-gray-500 line-clamp-1">
                                {blog.excerpt}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <User className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-900">{blog.author}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {blog.category || 'Uncategorized'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleTogglePublished(blog)}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              blog.published
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {blog.published ? (
                              <>
                                <Eye className="w-3 h-3 mr-1" />
                                Published
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3 h-3 mr-1" />
                                Draft
                              </>
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {blog.view_count}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            {blog.published && (
                              <Button
                                variant="ghost"
                                size="sm"
                                asChild
                              >
                                <Link href={`/blogs/${blog.slug}`} target="_blank">
                                  <Eye className="w-4 h-4" />
                                </Link>
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                            >
                              <Link href={`/admin/blogs/edit/${blog.id}`}>
                                <Edit className="w-4 h-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteBlog(blog)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}