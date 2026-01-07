import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import BlogEditor from "@/components/blog-editor"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: 'Create New Blog | Admin Dashboard | CryoVault',
  description: 'Create a new blog post.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NewBlogPage() {
  return (
    <main>
      <Navbar />
      <BlogEditor />
      <SiteFooter />
    </main>
  )
}