'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
};

export function HeroCarouselClient({ photos }: { photos: Photo[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = photos.length;

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  if (!photos?.length) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {photos.map((slide, idx) => (
          <div
            key={slide.id}
            className="hero-slide absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{
              opacity: idx === currentSlide ? 1 : 0,
              zIndex: idx === currentSlide ? 1 : 0,
            }}
            data-index={idx}
          >
            <img
              src={slide.url || "/placeholder.jpg"}
              alt={slide.title || "CryoVault Stem Cell Banking"}
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            
            {/* Gradient overlay for better button visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          </div>
        ))}

        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10 flex justify-center gap-2 md:gap-3">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => showSlide(idx)}
              aria-label={`View slide ${idx + 1}`}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70 hover:scale-110'
              }`}
              data-dot
              data-index={idx}
              aria-current={idx === currentSlide ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
