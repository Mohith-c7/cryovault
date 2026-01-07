import { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import BlogEditor from "@/components/blog-editor"
import SiteFooter from "@/components/site-footer"

interface EditBlogPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Edit Blog | Admin Dashboard | CryoVault',
  description: 'Edit an existing blog post.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  return (
    <main>
      <Navbar />
      <BlogEditor blogId={params.id} />
      <SiteFooter />
    </main>
  )
}