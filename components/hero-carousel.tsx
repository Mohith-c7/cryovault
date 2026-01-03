import { HeroCarouselClient } from './hero-carousel-client';

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
};

export function HeroCarousel({ photos }: { photos: Photo[] }) {
  return (
    <section 
      aria-label="Featured images" 
      className="w-full bg-card aspect-video md:h-[90vh] md:min-h-[700px] md:max-h-[1000px]"
    >
      <HeroCarouselClient photos={photos} />
    </section>
  );
}
