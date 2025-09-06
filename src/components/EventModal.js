import { X, Calendar, Heart } from 'lucide-react';
import PhotoCarousel from './PhotoCarousel';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-romantic"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="card-romantic animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`${event.isSpecial ? 'timeline-dot-special' : 'timeline-dot'}`}>
                {event.isSpecial && (
                  <Heart className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-romantic text-gradient-romantic">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-rose-gold" />
                  <span className="text-sm font-elegant text-muted-foreground">
                    {event.date}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-muted hover:bg-rose-gold hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Photo Carousel */}
          {event.photos.length > 0 && (
            <div className="mb-6">
              <PhotoCarousel photos={event.photos} />
            </div>
          )}

          {/* Handwritten Message */}
          <div className="bg-warm-white rounded-xl p-6 border-l-4 border-rose-gold relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-rose-gold rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blush-deep rounded-full"></div>
            
            <div className="mb-4">
              <Heart className="w-5 h-5 text-rose-gold inline mr-2" />
              <span className="font-romantic text-lg text-rose-gold">My dearest love,</span>
            </div>
            
            <p className="font-elegant text-foreground leading-relaxed text-lg italic mb-4">
              {event.message}
            </p>
            
            <div className="text-right">
              <span className="font-romantic text-rose-gold text-lg">
                Forever yours ❤️
              </span>
            </div>
          </div>

          {/* Floating Hearts */}
          <div className="absolute -top-4 -right-4 text-rose-gold opacity-50">
            <Heart className="w-6 h-6 animate-heart-pulse floating-heart" />
          </div>
          <div className="absolute -bottom-2 -left-2 text-lavender opacity-40">
            <Heart className="w-4 h-4 animate-heart-pulse floating-heart" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;