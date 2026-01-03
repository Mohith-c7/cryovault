import { Briefcase, ArrowRight } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  expertise: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Dr. Rajesh Kumar',
    role: 'Managing Director & Founder',
    bio: 'Visionary leader with 15+ years of experience in stem cell research and biotech innovation. Pioneering the future of regenerative medicine.',
    image: '/team/rajesh-kumar.jpg',
    expertise: ['Stem Cell Research', 'Biotech Innovation', 'Strategic Leadership']
  },
  {
    id: 'member-2',
    name: 'Dr. Priya Sharma',
    role: 'Chief Scientific Officer',
    bio: 'Leading researcher with expertise in cryopreservation and cellular biology. Committed to advancing scientific excellence.',
    image: '/team/priya-sharma.jpg',
    expertise: ['Cryopreservation', 'Cellular Biology', 'Research Development']
  },
  {
    id: 'member-3',
    name: 'Amit Patel',
    role: 'Chief Operating Officer',
    bio: 'Operations expert ensuring seamless execution and quality across all processes. Driving operational excellence.',
    image: '/team/amit-patel.jpg',
    expertise: ['Operations Management', 'Quality Assurance', 'Process Optimization']
  },
  {
    id: 'member-4',
    name: 'Dr. Neha Gupta',
    role: 'Head of Quality & Compliance',
    bio: 'Regulatory specialist ensuring adherence to international standards. Maintaining our commitment to quality.',
    image: '/team/neha-gupta.jpg',
    expertise: ['Regulatory Compliance', 'Quality Management', 'ISO Standards']
  },
  {
    id: 'member-5',
    name: 'Vikram Singh',
    role: 'Head of Customer Relations',
    bio: 'Customer-focused leader dedicated to exceptional service delivery. Building lasting relationships with families.',
    image: '/team/vikram-singh.jpg',
    expertise: ['Customer Service', 'Relationship Management', 'Support Excellence']
  },
  {
    id: 'member-6',
    name: 'Dr. Anjali Desai',
    role: 'Head of Research & Development',
    bio: 'Innovation driver pushing the boundaries of stem cell technology. Shaping the future of regenerative medicine.',
    image: '/team/anjali-desai.jpg',
    expertise: ['R&D Innovation', 'Technology Development', 'Scientific Advancement']
  }
]

export default function LeadershipPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Team</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Meet Our <span className="text-primary">Leadership</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our leadership team comprises industry veterans and visionary innovators dedicated to advancing stem cell banking. With decades of combined experience, they are committed to excellence and driving the future of regenerative medicine.
          </p>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>

                  <p className="text-primary font-semibold text-sm mb-4">
                    {member.role}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Join Our <span className="text-primary">Team</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We're always looking for talented individuals passionate about advancing stem cell banking and regenerative medicine. If you share our vision and values, we'd love to hear from you.
                </p>
                <CTAButton href="/careers">
                  View Open Positions
                </CTAButton>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Dedicated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
