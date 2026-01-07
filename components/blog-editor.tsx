'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, Calendar, Tag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/contexts/auth-context'
import { createBlog, updateBlog, getAllBlogs } from '@/lib/blogs'
import type { Database } from '@/lib/supabase'

type Blog = Database['public']['Tables']['blogs']['Row']

interface BlogEditorProps {
  blogId?: string
}

export default function BlogEditor({ blogId }: BlogEditorProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [blog, setBlog] = useState<Partial<Blog>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    read_time: '',
    category: '',
    tags: [],
    published: false,
    featured: false,
    meta_title: '',
    meta_description: ''
  })

  useEffect(() => {
    if (!loading && (!user || user.profile?.role !== 'admin')) {
      router.push('/login')
      return
    }

    if (blogId && user && user.profile?.role === 'admin') {
      loadBlog()
    }
  }, [user, loading, router, blogId])

  const loadBlog = async () => {
    if (!blogId) return

    setIsLoading(true)
    try {
      const { data, error } = await getAllBlogs()
      if (error) throw error

      const existingBlog = data?.find(b => b.id === blogId)
      if (existingBlog) {
        setBlog(existingBlog)
      } else {
        router.push('/admin/blogs')
      }
    } catch (error) {
      router.push('/admin/blogs')
    } finally {
      setIsLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setBlog(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      meta_title: title
    }))
  }

  const handleSave = async (publish: boolean = false) => {
    if (!blog.title || !blog.content || !blog.author) {
      alert('Please fill in all required fields (title, content, author)')
      return
    }

    setIsSaving(true)
    try {
      const blogData = {
        ...blog,
        published: publish,
        published_at: publish ? new Date().toISOString() : null,
        tags: typeof blog.tags === 'string' 
          ? blog.tags.split(',').map(tag => tag.trim()).filter(Boolean)
          : blog.tags || []
      }

      if (blogId) {
        const { error } = await updateBlog(blogId, blogData)
        if (error) throw error
      } else {
        const { error } = await createBlog(blogData as any)
        if (error) throw error
      }

      router.push('/admin/blogs')
    } catch (error) {
      alert('Error saving blog. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  if (loading || isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
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
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link href="/admin" className="text-primary hover:text-primary/80">
                  Admin
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/admin/blogs" className="text-primary hover:text-primary/80">
                  Blogs
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">{blogId ? 'Edit' : 'New'}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {blogId ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => handleSave(false)}
                disabled={isSaving}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave(true)}
                disabled={isSaving}
              >
                <Eye className="w-4 h-4 mr-2" />
                {isSaving ? 'Publishing...' : 'Publish'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Editor Form */}
      <section className="w-full px-5 md:px-8 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <Input
                  value={blog.title || ''}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter blog title..."
                  className="text-lg"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug
                </label>
                <Input
                  value={blog.slug || ''}
                  onChange={(e) => setBlog(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-slug"
                />
                <p className="text-sm text-gray-500 mt-1">
                  URL: /blogs/{blog.slug}
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <Textarea
                  value={blog.excerpt || ''}
                  onChange={(e) => setBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of the blog post..."
                  rows={3}
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <Textarea
                  value={blog.content || ''}
                  onChange={(e) => setBlog(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your blog content here... You can use HTML tags for formatting."
                  rows={15}
                  className="font-mono text-sm"
                />
                <p className="text-sm text-gray-500 mt-1">
                  You can use HTML tags for formatting (h2, h3, p, ul, li, strong, em, etc.)
                </p>
              </div>

              {/* Meta Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Author *
                  </label>
                  <Input
                    value={blog.author || ''}
                    onChange={(e) => setBlog(prev => ({ ...prev, author: e.target.value }))}
                    placeholder="Dr. John Doe"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Publication Date
                  </label>
                  <Input
                    type="date"
                    value={blog.date || ''}
                    onChange={(e) => setBlog(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Read Time
                  </label>
                  <Input
                    value={blog.read_time || ''}
                    onChange={(e) => setBlog(prev => ({ ...prev, read_time: e.target.value }))}
                    placeholder="5 min read"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Input
                    value={blog.category || ''}
                    onChange={(e) => setBlog(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="Medical Research"
                  />
                </div>
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image URL
                </label>
                <Input
                  value={blog.image || ''}
                  onChange={(e) => setBlog(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="/blog-images/image.jpg"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-1" />
                  Tags
                </label>
                <Input
                  value={Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags || ''}
                  onChange={(e) => setBlog(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="stem cells, research, medical"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Separate tags with commas
                </p>
              </div>

              {/* SEO Fields */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title
                    </label>
                    <Input
                      value={blog.meta_title || ''}
                      onChange={(e) => setBlog(prev => ({ ...prev, meta_title: e.target.value }))}
                      placeholder="SEO title for search engines"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description
                    </label>
                    <Textarea
                      value={blog.meta_description || ''}
                      onChange={(e) => setBlog(prev => ({ ...prev, meta_description: e.target.value }))}
                      placeholder="SEO description for search engines"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Options</h3>
                
                <div className="flex items-center gap-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={blog.featured || false}
                      onChange={(e) => setBlog(prev => ({ ...prev, featured: e.target.checked }))}
                      className="mr-2"
                    />
                    Featured Post
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}