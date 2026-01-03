'use client'

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2, freezeOnceVisible: true })
  const [cardsRef, cardsVisible] = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: true })

  return (
    <section aria-labelledby="about-title" className="w-full px-3 md:px-5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div 
          ref={headerRef}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            id="about-title"
            className="font-semibold text-primary text-2xl md:text-3xl text-balance lg:text-5xl text-left"
          >
            Making Stem Cell Preservation Accessible, Reliable, and Future-Ready
          </h2>

          <p className="text-foreground max-w-2xl leading-relaxed text-base mt-[18px] text-left">
            We care for your baby's future as deeply as you do, making stem cell banking affordable and trustworthy.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10"
        >
          {/* Card 1 */}
          <article className={`rounded-2xl bg-card shadow-sm overflow-hidden hover-lift transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="overflow-hidden">
              <img
                src="/elevenyears.png"
                alt="10+ years of Expertise"
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                width={400}
                height={240}
              />
            </div>
            <div className="p-4 shadow-none px-5 py-5">
              <h3 className="font-semibold text-primary text-xl">10+ years of Expertise</h3>
              <p className="text-sm text-foreground/70 mt-1">Trusted by thousands of families with proven stem cell banking expertise and advanced preservation techniques</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className={`rounded-2xl bg-card shadow-sm overflow-hidden hover-lift transition-all duration-700 delay-150 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="overflow-hidden">
              <img
                src="/lab.png"
                alt="ISO Certified Laboratory"
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                width={400}
                height={240}
              />
            </div>
            <div className="p-4 px-5 py-5">
              <h3 className="font-semibold text-primary text-xl">ISO Certified Laboratory</h3>
              <p className="text-sm text-foreground/70 mt-1">State-of-the-art facilities meeting international quality standards for safe and reliable stem cell storage</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className={`rounded-2xl bg-card shadow-sm overflow-hidden hover-lift transition-all duration-700 delay-300 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="overflow-hidden">
              <img
                src="/nationwide.png"
                alt="Nationwide Service"
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                width={400}
                height={240}
              />
            </div>
            <div className="p-4 px-5 py-5">
              <h3 className="font-semibold text-primary text-xl">Nationwide Service</h3>
              <p className="text-sm text-foreground/70 mt-1">Comprehensive collection and storage services available across India with dedicated support teams</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
