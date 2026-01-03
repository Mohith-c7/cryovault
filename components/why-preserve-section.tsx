import { Button } from '@/components/ui/button'

// Server Component (no 'use client')
export default async function WhyPreserveSection() {
  // SSR-only component: no client hooks, no JS events
  return (
    <section className="px-5 md:px-8 my-16">
      <div className="rounded-3xl bg-primary text-primary-foreground p-6 md:p-10 lg:p-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left copy */}
          <div className="max-w-xl flex flex-col h-full">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance leading-tight">
              Why Should You Preserve Your Baby’s Stem Cells ?
            </h2>
            <p className="mt-4 leading-relaxed opacity-90">
              {
                "Your newborn’s umbilical cord contains life-saving stem cells. They can be used to treat over 80 different diseases, including cancer, blood disorders, and immune system disorders. Banking your baby’s cord blood gives your child a chance to receive life-saving treatment with their stem cells, but may also give a chance to treat their siblings, parents, and other close relatives."
              }
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full px-8 py-3"
              >
                <a href="#start-preservation">
                  <span className="mr-2">Start Preservation</span>
                  <span aria-hidden>→</span>
                </a>
              </Button>
            </div>

            {/* Key Benefits / Stats to fill space */}
            <div className="mt-12 md:mt-auto grid grid-cols-1 sm:grid-cols-2 gap-6 pt-0 md:pt-10">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/20 backdrop-blur text-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div>
                  <div className="font-bold text-lg">50,000+</div>
                  <div className="text-sm opacity-80 leading-snug">Parents Trusted</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/20 backdrop-blur text-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div>
                  <div className="font-bold text-lg">99.9%</div>
                  <div className="text-sm opacity-80 leading-snug">Success Rate</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/20 backdrop-blur text-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-microscope"><path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></svg>
                </div>
                <div>
                  <div className="font-bold text-lg">State-of-art</div>
                  <div className="text-sm opacity-80 leading-snug">Lab Technology</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/20 backdrop-blur text-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                </div>
                <div>
                  <div className="font-bold text-lg">Accredited</div>
                  <div className="text-sm opacity-80 leading-snug">Internationally</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image grid */}
          <div className="flex flex-col gap-4 h-full">
            {/* Top large image - flex-1 to fill space */}
            <div className="relative flex-1 overflow-hidden rounded-2xl min-h-[300px]">
              <img
                src="/lifelong.png"
                alt="Lifelong Health Protection"
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={500}
              />
              <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-background/95 px-4 py-2 text-sm font-semibold text-center text-primary shadow">
                  Lifelong Health Protection
                </div>
              </div>
            </div>

            {/* Bottom two small images (placeholders) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/safe.png"
                  alt="Safe and painless collection"
                  className="h-44 w-full object-cover md:h-56"
                  width={360}
                  height={220}
                />
                <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-center text-primary shadow">
                    Safe & Painless Collection
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/onceinalifetime.png"
                  alt="Once in a lifetime opportunity"
                  className="h-44 w-full object-cover md:h-56"
                  width={360}
                  height={220}
                />
                <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-center text-primary shadow">
                    Once in a lifetime Opportunity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
