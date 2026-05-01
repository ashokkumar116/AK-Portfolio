import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectCarousel({ images, autoScroll = false, interval = 4000, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoScroll || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoScroll, interval, images.length]);

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`project-carousel ${className}`}>
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Slide ${idx + 1}`} 
            className="carousel-image" 
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous image">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next image">
            <ChevronRight size={20} />
          </button>
          
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span 
                key={idx} 
                className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
