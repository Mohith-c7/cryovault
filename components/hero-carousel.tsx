import { HeroCarouselClient } from './hero-carousel-client';

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
};

export function HeroCarousel({ photos }: { photos: Photo[] }) {
  return (
    <section aria-label="Featured images" className="w-full bg-card h-[90vh] min-h-[700px] max-h-[1000px]">
      <HeroCarouselClient photos={photos} />
    </section>
  );
}
