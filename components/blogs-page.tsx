'use client'

import { useState } from 'react'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, User } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Stem Cell Banking: Latest Medical Breakthroughs",
    excerpt: "Discover the latest advancements in stem cell research and how they're revolutionizing treatment options for families worldwide.",
    image: "/placeholder.jpg",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Medical Research",
    slug: "future-stem-cell-banking-breakthroughs"
  },
  {
    id: 2,
    title: "Understanding Cord Blood Banking: A Parent's Complete Guide",
    excerpt: "Everything expectant parents need to know about cord blood banking, from collection to storage and potential medical applications.",
    image: "/placeholder.jpg",
    author: "Dr. Michael Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Parent Guide",
    slug: "cord-blood-banking-parents-guide"
  },
  {
    id: 3,
    title: "Success Stories: How Stem Cells Saved Lives",
    excerpt: "Real stories from families whose lives were transformed by stem cell treatments, showcasing the life-saving potential of cord blood banking.",
    image: "/placeholder.jpg",
    author: "Dr. Emily Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Success Stories",
    slug: "stem-cells-success-stories"
  },
  {
    id: 4,
    title: "The Science Behind Stem Cell Preservation",
    excerpt: "Explore the advanced cryopreservation techniques that keep stem cells viable for decades, ensuring they're ready when needed.",
    image: "/placeholder.jpg",
    author: "Dr. James Wilson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Science",
    slug: "science-stem-cell-preservation"
  },
  {
    id: 5,
    title: "Comparing Private vs Public Cord Blood Banking",
    excerpt: "Understanding the differences between private and public cord blood banking to make the best decision for your family.",
    image: "/placeholder.jpg",
    author: "Dr. Lisa Thompson",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Education",
    slug: "private-vs-public-cord-blood-banking"
  },
  {
    id: 6,
    title: "Stem Cell Banking Costs: Investment in Your Family's Future",
    excerpt: "Breaking down the costs of stem cell banking and why it's a valuable investment in your family's long-term health security.",
    image: "/placeholder.jpg",
    author: "Dr. Robert Kim",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Financial Planning",
    slug: "stem-cell-banking-costs-investment"
  },
  {
    id: 7,
    title: "Pregnancy and Stem Cell Banking: What to Expect",
    excerpt: "A timeline guide for expectant parents on when and how to prepare for cord blood collection during pregnancy.",
    image: "/placeholder.jpg",
    author: "Dr. Amanda Foster",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Pregnancy",
    slug: "pregnancy-stem-cell-banking-timeline"
  },
  {
    id: 8,
    title: "Stem Cell Research: Current Clinical Trials and Future Possibilities",
    excerpt: "An overview of ongoing clinical trials using stem cells and the promising treatments on the horizon.",
    image: "/placeholder.jpg",
    author: "Dr. David Martinez",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Research",
    slug: "stem-cell-research-clinical-trials"
  },
  {
    id: 9,
    title: "Quality Standards in Stem Cell Banking: What to Look For",
    excerpt: "Understanding the quality standards and certifications that ensure your stem cells are stored safely and effectively.",
    image: "/placeholder.jpg",
    author: "Dr. Jennifer Lee",
    date: "2023-12-25",
    readTime: "5 min read",
    category: "Quality Assurance",
    slug: "quality-standards-stem-cell-banking"
  },
  {
    id: 10,
    title: "Sibling Compatibility: How Cord Blood Can Help Family Members",
    excerpt: "Learn about the compatibility rates between siblings and how stored cord blood can benefit the entire family.",
    image: "/placeholder.jpg",
    author: "Dr. Mark Anderson",
    date: "2023-12-22",
    readTime: "4 min read",
    category: "Family Health",
    slug: "sibling-compatibility-cord-blood"
  },
  {
    id: 11,
    title: "The Collection Process: Safe and Simple Cord Blood Banking",
    excerpt: "Step-by-step guide to the cord blood collection process, ensuring parents know what to expect on delivery day.",
    image: "/placeholder.jpg",
    author: "Dr. Rachel Green",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Process Guide",
    slug: "cord-blood-collection-process"
  },
  {
    id: 12,
    title: "International Standards: CryoVault's Global Certifications",
    excerpt: "Discover the international certifications and standards that make CryoVault a trusted leader in stem cell banking.",
    image: "/placeholder.jpg",
    author: "Dr. Thomas Brown",
    date: "2023-12-18",
    readTime: "7 min read",
    category: "Certifications",
    slug: "cryovault-international-certifications"
  }
]

const POSTS_PER_PAGE = 9

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
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
      {/* Blog Posts Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          
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
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
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
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
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
                    <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
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

          {/* Page Summary */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Showing page {currentPage} of {totalPages} ({blogPosts.length} total articles)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}