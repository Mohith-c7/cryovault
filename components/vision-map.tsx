'use client'

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useEffect, useState } from "react"
import { TrendingUp, Users, Globe, Target } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

type Stat = { value: string; label: string; icon: any; color: string }

export default function VisionMapSection({
  stats = [
    { value: "50K+", label: "Families Trust Us", icon: Users, color: "from-blue-500 to-cyan-500" },
    { value: "99.9%", label: "Success Rate", icon: Target, color: "from-purple-500 to-pink-500" },
    { value: "28+", label: "States Covered", icon: Globe, color: "from-emerald-500 to-teal-500" },
    { value: "1.5B", label: "Lives by 2030", icon: TrendingUp, color: "from-orange-500 to-red-500" },
  ],
}: {
  stats?: Stat[]
}) {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true })
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true })

  return (
    <section aria-labelledby="vision-map-title" className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20">
      {/* Modern hexagonal pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%234845a9' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px',
      }} />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            id="vision-map-title"
            className="text-4xl md:text-5xl font-semibold mb-4 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #292c61 0%, #4845a9 50%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Vision for India's Future
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming healthcare accessibility across the nation, one family at a time
          </p>
        </div>

        {/* Main Grid: Stats Left, Map Right */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT: Stats Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <AnimatedStatCard 
                  key={idx} 
                  stat={stat} 
                  isVisible={contentVisible} 
                  delay={idx * 100}
                  Icon={Icon}
                />
              )
            })}
          </div>

          {/* RIGHT: India Map (Free, No Box) */}
          <div 
            className={`relative transition-all duration-1000 ${
              contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Decorative glow behind map */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10" />
            
            {/* Map Image - Free floating */}
            <div className="relative">
              <img
                src="/nationwide2.png"
                alt="India map showing our nationwide presence"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CTAButton href="/about">
            Learn About Our Mission
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function AnimatedStatCard({ stat, isVisible, delay, Icon }: { stat: Stat; isVisible: boolean; delay: number; Icon: any }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''))
  const hasNumber = !isNaN(numericValue) && numericValue > 0

  useEffect(() => {
    if (!isVisible || !hasNumber) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericValue, hasNumber])

  return (
    <div 
      className={`group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Value with animation */}
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          {hasNumber ? (
            <>
              {count > 0 && count}
              {stat.value.includes('K') && count > 0 && 'K'}
              {stat.value.includes('B') && count > 0 && 'B'}
              {stat.value.includes('+') && '+'}
              {stat.value.includes('%') && '%'}
            </>
          ) : (
            stat.value
          )}
        </div>
        <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
