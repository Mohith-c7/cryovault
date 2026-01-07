'use client'

import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAnalytics } from '@/hooks/use-analytics'

interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}

interface BlogPostPageProps {
  post: BlogPost
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const { trackEvent } = useAnalytics()

  const handleShare = (platform: string) => {
    trackEvent('share', 'blog', `${platform} - ${post.title}`)
    
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(post.title)
    const text = encodeURIComponent(post.excerpt)
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    trackEvent('share', 'blog', `copy_link - ${post.title}`)
    // You could add a toast notification here
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23292c61' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="mx-auto max-w-4xl relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-600 font-medium">Share:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Copy link"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full px-5 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-16">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full px-5 md:px-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Secure Your Family's Future?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Learn more about our stem cell banking services and how we can help protect your family's health for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/appointment">Book Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Back to Blogs */}
          <div className="mt-12 text-center">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Blogs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}