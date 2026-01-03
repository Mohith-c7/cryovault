'use client'

import { useEffect, useRef, useState } from "react"
import { CTAButton } from "@/components/ui/cta-button"

export default function ThreeStepsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-16 px-5 md:px-8 overflow-hidden"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
                        3 easy steps to get started
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Cryovault provides 3 easy steps to preserve your child's cord blood stem cells
                    </p>
                </div>

                {/* Video */}
                <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover cursor-pointer"
                            onClick={() => window.open('https://youtu.be/KjzJqTuM0Jc?si=3D6ns-67V1l3yOqA', '_blank')}
                        >
                            <source src="/lab.mp4" type="video/mp4" />
                            {/* Fallback image if video doesn't load */}
                            <img
                                src="/threesteps.png"
                                alt="Three easy steps to stem cell banking - Enrollment, Collection, Storage"
                                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                        </video>
                        
                        {/* YouTube button overlay - Always visible */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a 
                                href="https://youtu.be/KjzJqTuM0Jc?si=3D6ns-67V1l3yOqA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                aria-label="Watch video on YouTube"
                            >
                                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                                    <svg className="h-5 w-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-900">View on YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3 Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Step 1 */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-sm font-semibold text-muted-foreground mb-2">STEP 1</div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            Quick and Easy Enrollment
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Register online in just a few minutes through our simple enrollment page. Once completed, your Cryovault Collection Kit will be shipped directly to your doorstep.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-sm font-semibold text-muted-foreground mb-2">STEP 2</div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            Safe Collection at Birth
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            At the time of delivery, your doctor safely collects the umbilical cord blood and tissue (if selected). The process is completely painless and risk-free for both mother and baby.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-sm font-semibold text-muted-foreground mb-2">STEP 3</div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            Secure Storage for Life
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Our medical courier transports the kit to the laboratory immediately after collection. The stem cells are carefully processed and preserved under safety standards for lifelong protection.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <CTAButton href="/appointment">
                        Get Started
                    </CTAButton>
                    <CTAButton href="/about" variant="secondary">
                        Learn More
                    </CTAButton>
                </div>
            </div>
        </section>
    )
}
