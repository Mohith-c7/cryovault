import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from "@/components/navbar"
import BlogPostPage from "@/components/blog-post-page"
import SiteFooter from "@/components/site-footer"
import { getBlogBySlug, incrementBlogViews } from '@/lib/blogs'

interface BlogPageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  try {
    const { data, error } = await getBlogBySlug(slug)
    
    if (error || !data) {
      return null
    }

    // Increment view count
    await incrementBlogViews(data.id)
    
    return data
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | CryoVault',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.meta_title || `${post.title} | CryoVault Blog`,
    description: post.meta_description || post.excerpt || 'Read the latest insights on stem cell banking and medical breakthroughs.',
    keywords: [
      'stem cell banking',
      'cord blood banking',
      'medical research',
      ...(post.tags || []),
      'cryovault'
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt || 'Read the latest insights on stem cell banking and medical breakthroughs.',
      url: `https://cryovault.in/blogs/${post.slug}`,
      images: post.image ? [post.image] : ['/placeholder.jpg'],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || 'Read the latest insights on stem cell banking and medical breakthroughs.',
      images: post.image ? [post.image] : ['/placeholder.jpg'],
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Convert database format to component format
  const formattedPost = {
    id: post.id,
    title: post.title,
    content: post.content,
    excerpt: post.excerpt || '',
    image: post.image || '/placeholder.jpg',
    author: post.author,
    date: post.date,
    readTime: post.read_time || '',
    category: post.category || '',
    slug: post.slug
  }

  return (
    <main>
      <Navbar />
      <BlogPostPage post={formattedPost} />
      <SiteFooter />
    </main>
  )
}