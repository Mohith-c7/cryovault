import { Play } from 'lucide-react'

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  thumbnail: string
}

const videos: Video[] = [
  {
    id: 'video-1',
    title: 'What is Stem Cell Banking?',
    description: 'Learn about the fundamentals of stem cell banking and how it can benefit your family\'s future health.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'video-2',
    title: 'CryoVault Facility Tour',
    description: 'Take a virtual tour of our state-of-the-art laboratory and storage facilities.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'video-3',
    title: 'Regenerative Medicine Explained',
    description: 'Discover the potential of regenerative medicine and stem cell therapy in treating various conditions.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'video-4',
    title: 'Patient Success Stories',
    description: 'Hear from families who have benefited from our stem cell banking services.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'video-5',
    title: 'The Science Behind Cryopreservation',
    description: 'Understand the advanced cryopreservation technology that keeps stem cells viable for decades.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'video-6',
    title: 'Why Choose CryoVault?',
    description: 'Learn what makes CryoVault the trusted choice for stem cell preservation in India.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  }
]

export default function VideosPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Video Library</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Video <span className="text-primary">Resources</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive video library to learn more about stem cell banking, regenerative medicine, and how CryoVault can help preserve your family's future health.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                {/* Video Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    12:34
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 bg-white">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>

                  {/* Watch Button */}
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Watch on YouTube
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Learn More About Stem Cell Banking
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our YouTube channel for regular updates on regenerative medicine, wellness tips, and CryoVault news.
          </p>
          <a
            href="https://www.youtube.com/@cryovault"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe to Our Channel
          </a>
        </div>
      </section>
    </main>
  )
}
