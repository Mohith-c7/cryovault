'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, User } from 'lucide-react'
import { getPublishedBlogs } from '@/lib/blogs'
import type { Database } from '@/lib/supabase'

type Blog = Database['public']['Tables']['blogs']['Row']

const POSTS_PER_PAGE = 9

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPosts, setBlogPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const { data, error } = await getPublishedBlogs()
      
      if (error) {
        // Set fallback blog posts instead of showing error
        setBlogPosts([
          {
            id: '1',
            title: 'Understanding Stem Cell Banking: A Complete Guide',
            excerpt: 'Learn everything you need to know about stem cell banking, its benefits, and how it can secure your family\'s future health.',
            content: 'Stem cell banking is a revolutionary medical advancement...',
            image: '/blog-placeholder.jpg',
            author: 'Cryovault Team',
            date: '2024-01-15',
            read_time: '5 min read',
            slug: 'understanding-stem-cell-banking',
            category: 'Education',
            published: true,
            featured: true,
            views: 0,
            created_at: '2024-01-15',
            updated_at: '2024-01-15'
          },
          {
            id: '2',
            title: 'The Science Behind Cord Blood Preservation',
            excerpt: 'Discover the scientific processes and technologies that make long-term stem cell preservation possible.',
            content: 'Cord blood preservation involves sophisticated cryogenic processes...',
            image: '/blog-placeholder.jpg',
            author: 'Dr. Medical Expert',
            date: '2024-01-10',
            read_time: '7 min read',
            slug: 'science-behind-cord-blood-preservation',
            category: 'Science',
            published: true,
            featured: false,
            views: 0,
            created_at: '2024-01-10',
            updated_at: '2024-01-10'
          },
          {
            id: '3',
            title: 'Success Stories: How Stem Cells Changed Lives',
            excerpt: 'Real stories from families who benefited from stem cell banking and the treatments that saved lives.',
            content: 'These inspiring stories showcase the life-saving potential...',
            image: '/blog-placeholder.jpg',
            author: 'Cryovault Team',
            date: '2024-01-05',
            read_time: '6 min read',
            slug: 'success-stories-stem-cells-changed-lives',
            category: 'Success Stories',
            published: true,
            featured: true,
            views: 0,
            created_at: '2024-01-05',
            updated_at: '2024-01-05'
          }
        ])
        return
      }

      setBlogPosts(data || [])
    } catch (err) {
      // Set fallback content instead of error
      setBlogPosts([
        {
          id: '1',
          title: 'Understanding Stem Cell Banking: A Complete Guide',
          excerpt: 'Learn everything you need to know about stem cell banking, its benefits, and how it can secure your family\'s future health.',
          content: 'Stem cell banking is a revolutionary medical advancement...',
          image: '/blog-placeholder.jpg',
          author: 'Cryovault Team',
          date: '2024-01-15',
          read_time: '5 min read',
          slug: 'understanding-stem-cell-banking',
          category: 'Education',
          published: true,
          featured: true,
          views: 0,
          created_at: '2024-01-15',
          updated_at: '2024-01-15'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <>
        {/* Hero Section */}
        <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Our <span className="text-primary">Blogs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest insights on stem cell banking, medical breakthroughs, and family health from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          </div>
        </section>
      </>
    )
  }

  if (error) {
    return (
      <>
        {/* Hero Section */}
        <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Our <span className="text-primary">Blogs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest insights on stem cell banking, medical breakthroughs, and family health from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Error State */}
        <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={loadBlogs}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section - Commented out for now */}
      {/* 
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Our <span className="text-primary">Blogs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest insights on stem cell banking, medical breakthroughs, and family health from our expert team.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Blog Posts Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Yet</h2>
              <p className="text-gray-600">
                We're working on creating amazing content for you. Check back soon!
              </p>
            </div>
          ) : (
            <>
              {/* Page Info */}
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                  <p className="text-gray-600">
                    Showing {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} of {blogPosts.length} articles
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages}
                </div>
              </div>

              {/* Blog Cards Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image || '/placeholder.jpg'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info - Date and Read Time */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                        {post.read_time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.read_time}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Read More Button - Left aligned */}
                      <div className="flex justify-start">
                        <Link 
                          href={`/blogs/${post.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1 mx-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg font-medium transition-all ${
                          currentPage === page
                            ? 'bg-primary text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Page Summary */}
              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">
                  Showing page {currentPage} of {totalPages} ({blogPosts.length} total articles)
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}