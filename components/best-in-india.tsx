'use client'

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { TrendingUp, Users, Sparkles } from "lucide-react"

export default function BestInIndiaSection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true })
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true })

  const achievements = [
    { icon: Users, label: "Families Trust", value: "50K+" },
    { icon: TrendingUp, label: "Success Rate", value: "99.9%" },
  ]

  return (
    <section
      aria-labelledby="best-in-india-title"
      className="relative w-full overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d4a] via-[#292c61] to-[#4845a9]">
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            id="best-in-india-title"
            className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 50%, #9ca3af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            India's Most Trusted
            <br />
            Stem Cell Bank
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Honored with the prestigious award for excellence in stem cell preservation
          </p>
        </div>

        {/* Main content grid */}
        <div 
          ref={contentRef}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          {/* Left: Image with elegant decorative elements */}
          <div className={`relative transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            {/* Elegant glow ring */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-[2.5rem] blur-2xl" />
            
            {/* Corner sparkles */}
            <Sparkles className="absolute -top-4 -left-4 h-8 w-8 text-cyan-400 animate-pulse" style={{ animationDelay: '0s' }} />
            <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="absolute -bottom-4 -left-4 h-8 w-8 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
            <Sparkles className="absolute -bottom-4 -right-4 h-8 w-8 text-cyan-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
            
            {/* Decorative corner lines */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400/60 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-400/60 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/60 rounded-br-3xl" />
            
            <div className="relative">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/30 shadow-2xl">
                <img
                  src="/award.jpg"
                  alt="CryoVault receiving Best Stem Cell Bank in India award"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="space-y-8">
              {/* Award title card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-cyan-400/50 transition-all duration-500 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative space-y-4">
                  <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    HMTV Healthcare Awards 2023
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Best Stem Cell Bank
                    <br />
                    <span className="text-cyan-400">in India</span>
                  </h3>
                  
                  <p className="text-white/80 text-base leading-relaxed">
                    Awarded by Telangana Health Minister Harish Rao in recognition of our commitment to excellence, innovation, and the highest standards in stem cell preservation.
                  </p>
                </div>
              </div>

              {/* Achievement stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon
                  return (
                    <div
                      key={idx}
                      className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 group"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                      
                      <Icon className="h-7 w-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform relative z-10" />
                      <div className="text-3xl font-bold text-white mb-1 relative z-10">{achievement.value}</div>
                      <div className="text-sm text-white/70 font-medium relative z-10">{achievement.label}</div>
                    </div>
                  )
                })}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#read-more"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full px-8 py-4 font-bold hover:bg-white/20 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
                >
                  Read Full Story
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
