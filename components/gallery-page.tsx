import { Images } from 'lucide-react'

interface GalleryImage {
  id: string
  title: string
  category: 'all' | 'mothers-day' | 'yoga' | '5k-run'
  image: string
  width: number
  height: number
}

const galleryImages: GalleryImage[] = [
  {
    id: 'img-1',
    title: 'Mother\'s Day Celebration',
    category: 'mothers-day',
    image: '/gallery/mothers-day-1.jpg',
    width: 600,
    height: 400
  },
  {
    id: 'img-2',
    title: 'Yoga Program Session',
    category: 'yoga',
    image: '/gallery/yoga-1.jpg',
    width: 800,
    height: 500
  },
  {
    id: 'img-3',
    title: '5K Run Event',
    category: '5k-run',
    image: '/gallery/5k-run-1.jpg',
    width: 700,
    height: 450
  },
  {
    id: 'img-4',
    title: 'Mother\'s Day Gathering',
    category: 'mothers-day',
    image: '/gallery/mothers-day-2.jpg',
    width: 650,
    height: 420
  },
  {
    id: 'img-5',
    title: 'Yoga Wellness',
    category: 'yoga',
    image: '/gallery/yoga-2.jpg',
    width: 750,
    height: 480
  },
  {
    id: 'img-6',
    title: '5K Run Finish Line',
    category: '5k-run',
    image: '/gallery/5k-run-2.jpg',
    width: 800,
    height: 500
  },
  {
    id: 'img-7',
    title: 'Family Event',
    category: 'mothers-day',
    image: '/gallery/mothers-day-3.jpg',
    width: 600,
    height: 450
  },
  {
    id: 'img-8',
    title: 'Meditation Session',
    category: 'yoga',
    image: '/gallery/yoga-3.jpg',
    width: 700,
    height: 420
  },
  {
    id: 'img-9',
    title: 'Marathon Participants',
    category: '5k-run',
    image: '/gallery/5k-run-3.jpg',
    width: 800,
    height: 480
  }
]

const categories = [
  { id: 'all', label: 'All Images' },
  { id: 'mothers-day', label: 'Mother\'s Day' },
  { id: 'yoga', label: 'Yoga Program' },
  { id: '5k-run', label: '5K Run' }
]

export default function ImagesPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Images className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Gallery</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Our <span className="text-primary">Gallery</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore moments from our community events, wellness programs, and celebrations that showcase the CryoVault family.
          </p>
        </div>
      </section>

      {/* Filter Buttons - Client Component */}
      <section className="w-full px-5 md:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-category={cat.id}
                className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border-2 hover:border-primary hover:bg-primary hover:text-white bg-white text-foreground border-border/50 data-[active=true]:bg-primary data-[active=true]:text-white data-[active=true]:border-primary"
                data-active={cat.id === 'all' ? 'true' : 'false'}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Layout */}
      <section className="w-full px-5 md:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                data-category={img.category}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid cursor-pointer bg-white border border-border/50 hover:border-primary/30"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={img.image}
                    alt={img.title}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const filterButtons = document.querySelectorAll('[data-category]');
              const galleryItems = document.querySelectorAll('[data-category]');

              filterButtons.forEach(button => {
                if (button.tagName === 'BUTTON') {
                  button.addEventListener('click', function() {
                    const selectedCategory = this.getAttribute('data-category');

                    // Update active button
                    filterButtons.forEach(btn => {
                      if (btn.tagName === 'BUTTON') {
                        btn.setAttribute('data-active', btn.getAttribute('data-category') === selectedCategory ? 'true' : 'false');
                      }
                    });

                    // Filter images
                    galleryItems.forEach(item => {
                      if (item.tagName !== 'BUTTON') {
                        const itemCategory = item.getAttribute('data-category');
                        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                          item.style.display = 'block';
                          item.style.animation = 'fadeIn 0.3s ease-in';
                        } else {
                          item.style.display = 'none';
                        }
                      }
                    });
                  });
                }
              });
            });
          `
        }}
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
