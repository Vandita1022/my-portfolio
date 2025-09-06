import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const PhotoCarousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!photos.length) return null;

  return (
    <div className="relative rounded-xl overflow-hidden group">
      {/* Main Image */}
      <div className="relative bg-muted">
        <img 
          src={photos[currentIndex]} 
          alt={`Memory ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Romantic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent">
          <div className="absolute top-4 right-4">
            <Heart className="w-5 h-5 text-white/80 floating-heart" />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Thumbnail Indicators */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-12 h-8 rounded overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-white scale-110' 
                  : 'border-white/50 hover:border-white/80'
              }`}
            >
              <img 
                src={photos[index]} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Photo Counter */}
      <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-elegant">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PhotoCarousel;