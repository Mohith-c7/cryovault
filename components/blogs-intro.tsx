'use client'

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Clock, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

export default function BlogsIntro() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true })
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true })

  const blogs = [
    {
      id: 1,
      title: "Understanding Cord Blood Banking",
      subtitle: "A Complete Guide for Expecting Parents",
      description: "Learn everything you need to know about cord blood banking - the process, benefits, and how it can potentially save lives.",
      image: "/placeholder.jpg",
      category: "Guide",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "The Science Behind Stem Cell Therapy",
      description: "Explore how stem cells are revolutionizing modern medicine and treating blood disorders.",
      image: "/placeholder.jpg",
      category: "Science",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Why Families Choose Private Banking",
      description: "Discover the advantages of private cord blood banking versus public donation.",
      image: "/placeholder.jpg",
      category: "Insights",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Latest Research in Regenerative Medicine",
      description: "Stay updated with breakthrough discoveries in stem cell applications.",
      image: "/placeholder.jpg",
      category: "Research",
      readTime: "7 min read",
    },
  ]

  return (
    <section aria-labelledby="blogs-intro-heading" className="relative px-5 md:px-8 py-20 overflow-hidden">
      {/* Clean medical gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 -z-10" />
      
      {/* DNA Helix SVG Pattern */}
      <div className="absolute inset-0 opacity-[0.08] -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dna-helix" x="0" y="0" width="200" height="400" patternUnits="userSpaceOnUse">
              {/* Left strand */}
              <path
                d="M 50 0 Q 30 50 50 100 T 50 200 T 50 300 T 50 400"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              {/* Right strand */}
              <path
                d="M 150 0 Q 170 50 150 100 T 150 200 T 150 300 T 150 400"
                stroke="url(#gradient2)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
              {/* Connecting base pairs */}
              <line x1="50" y1="25" x2="150" y2="25" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="75" x2="150" y2="75" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="125" x2="150" y2="125" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="175" x2="150" y2="175" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="225" x2="150" y2="225" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="275" x2="150" y2="275" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="325" x2="150" y2="325" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="375" x2="150" y2="375" stroke="url(#gradient3)" strokeWidth="2" opacity="0.4" />
              
              {/* Base pair nodes */}
              <circle cx="50" cy="25" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="150" cy="25" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="50" cy="75" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="150" cy="75" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="50" cy="125" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="150" cy="125" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="50" cy="175" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="150" cy="175" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="50" cy="225" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="150" cy="225" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="50" cy="275" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="150" cy="275" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="50" cy="325" r="4" fill="#3b82f6" opacity="0.6" />
              <circle cx="150" cy="325" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="50" cy="375" r="4" fill="#8b5cf6" opacity="0.6" />
              <circle cx="150" cy="375" r="4" fill="#3b82f6" opacity="0.6" />
            </pattern>
            
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#dna-helix)" />
        </svg>
      </div>
      
      {/* Floating molecular structures */}
      <div className="absolute top-20 right-[15%] w-32 h-32 opacity-[0.06] -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
          <circle cx="50" cy="50" r="8" fill="#3b82f6" />
          <circle cx="30" cy="30" r="6" fill="#6366f1" />
          <circle cx="70" cy="30" r="6" fill="#8b5cf6" />
          <circle cx="30" cy="70" r="6" fill="#8b5cf6" />
          <circle cx="70" cy="70" r="6" fill="#6366f1" />
          <line x1="50" y1="50" x2="30" y2="30" stroke="#3b82f6" strokeWidth="2" />
          <line x1="50" y1="50" x2="70" y2="30" stroke="#3b82f6" strokeWidth="2" />
          <line x1="50" y1="50" x2="30" y2="70" stroke="#3b82f6" strokeWidth="2" />
          <line x1="50" y1="50" x2="70" y2="70" stroke="#3b82f6" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-[10%] w-40 h-40 opacity-[0.06] -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-float" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="8" fill="#8b5cf6" />
          <circle cx="25" cy="40" r="6" fill="#6366f1" />
          <circle cx="75" cy="40" r="6" fill="#3b82f6" />
          <circle cx="35" cy="75" r="6" fill="#3b82f6" />
          <circle cx="65" cy="75" r="6" fill="#6366f1" />
          <line x1="50" y1="50" x2="25" y2="40" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="50" y1="50" x2="75" y2="40" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="50" y1="50" x2="35" y2="75" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="50" y1="50" x2="65" y2="75" stroke="#8b5cf6" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Subtle glow orbs for depth */}
      <div className="absolute top-40 left-[20%] w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-[25%] w-80 h-80 bg-purple-400/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <header 
          ref={headerRef}
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Latest Insights</span>
          </div>
          
          <h2 id="blogs-intro-heading" className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-foreground">
            Latest Insights on
            <br />
            <span className="text-primary">
              Stem Cell Banking
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Stay informed with expert articles and resources about stem cell preservation
          </p>
        </header>

        {/* Asymmetric Magazine Grid - Unique Dimensions */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6"
        >
          {/* Card 1 - Large Featured (spans 8 cols, taller) */}
          <article 
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-6 lg:col-span-8 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Image Section */}
            <div className="relative h-80 lg:h-96 overflow-hidden">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                <span>{blogs[0].readTime}</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                {blogs[0].title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {blogs[0].description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Read Article
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </article>

          {/* Card 2 - Tall Vertical (spans 4 cols) */}
          <article 
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-3 lg:col-span-4 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={blogs[1].image}
                alt={blogs[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                <span>{blogs[1].readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {blogs[1].title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                {blogs[1].description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Card 3 - Medium Square (spans 4 cols) */}
          <article 
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-3 lg:col-span-4 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={blogs[2].image}
                alt={blogs[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                <span>{blogs[2].readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {blogs[2].title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
                {blogs[2].description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Card 4 - Wide Horizontal (spans 8 cols) */}
          <article 
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-6 lg:col-span-8 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex flex-col sm:flex-row h-full">
              <div className="relative sm:w-1/2 h-64 sm:h-auto overflow-hidden">
                <img
                  src={blogs[3].image}
                  alt={blogs[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="sm:w-1/2 p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{blogs[3].readTime}</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                  {blogs[3].title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {blogs[3].description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Explore Now
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* View All Button */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CTAButton href="/blogs">
            View All Articles
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
