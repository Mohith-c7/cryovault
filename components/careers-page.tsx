import { Plus, ChevronDown, Mail } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

export default function CareersPage() {
  // No job postings - empty array
  const mockJobs: any[] = []

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Join Our <span className="text-primary">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a team revolutionizing the future of medicine and life preservation. We're looking for passionate professionals who want to make a difference.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Preserving Possibilities. Advancing Science.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Join the team building the future of life extension and medical innovation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Our Unique Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <span className="text-foreground">
                        <strong>Providing another chance at life</strong> through advanced stem cell banking
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <span className="text-foreground">
                        <strong>Pioneering research</strong> in vitrification and reanimation techniques
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <span className="text-foreground">
                        <strong>Ensuring future cures</strong> for today's diseases are realized
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">What Makes Us Different</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Working at Cryovault is different from a typical lab or medical facility. We blend high-tech engineering, advanced biology, ethical responsibility, and long-term facility maintenance into a unique environment where every team member contributes to preserving human potential.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team combines cutting-edge technology with compassionate service, ensuring that every sample is treated with the utmost care and scientific rigor.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🔬</div>
                  <p className="text-sm font-semibold text-foreground">Innovation & Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Jobs Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting career opportunities and join our growing team
            </p>
          </div>

          <div className="space-y-4">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* No Jobs Message (shown when jobs array is empty) */}
          {mockJobs.length === 0 && (
            <div className="text-center p-12 bg-white rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">No open positions at the moment.</p>
              <p className="text-sm text-muted-foreground">
                Check back soon or subscribe to our job alerts for future opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-12 text-center space-y-6">
            <Mail className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl font-bold text-foreground">
              Interested in Other Opportunities?
            </h2>
            <p className="text-lg text-muted-foreground">
              If you don't see a position that matches your skills, we'd still love to hear from you. Send your resume and inquiry to:
            </p>
            <a
              href="mailto:info@cryovault.in"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
              info@cryovault.in
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// Job Card Component with Accordion
function JobCard({ job }: { job: any }) {
  return (
    <details className="group bg-white rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
      <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors p-6">
        <div className="text-left">
          <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {job.department} • {job.location}
          </p>
        </div>
        <Plus className="w-6 h-6 transition-transform group-open:rotate-45" />
      </summary>

      <div className="px-6 pb-6 border-t border-border pt-6 space-y-6">
        {/* Description */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">About the Role</h4>
          <p className="text-muted-foreground leading-relaxed">{job.description}</p>
        </div>

        {/* Key Responsibilities */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Lead and execute assigned projects with excellence</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Collaborate with cross-functional teams</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Contribute to innovation and continuous improvement</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Maintain highest standards of quality and safety</span>
            </li>
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">What We're Looking For</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Relevant degree and professional experience</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Strong technical and analytical skills</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Excellent communication and teamwork abilities</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>Passion for innovation and scientific excellence</span>
            </li>
          </ul>
        </div>

        {/* Apply Button */}
        <CTAButton href="/contact" className="w-full">
          Apply Now
        </CTAButton>
      </div>
    </details>
  )
}
