import { Calendar, Heart, MapPin } from 'lucide-react';

const TimelineEvent = ({ event, index, onEventClick }) => {
  const animationDelay = `${index * 0.2}s`;

  return (
    <div className={`relative flex items-center ${event.position === 'left' ? 'flex-row-reverse' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className={`${event.isSpecial ? 'timeline-dot-special' : 'timeline-dot'} ${event.isSpecial ? 'animate-heart-pulse' : ''}`}>
          {event.isSpecial && (
            <Heart className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>

      {/* Event Card */}
      <div 
        className={`w-5/12 cursor-pointer ${event.position === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
        style={{ animationDelay }}
        onClick={() => onEventClick(event)}
      >
        <div className="card-romantic group">
          {/* Date Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-rose-gold" />
            <span className="text-sm font-elegant text-muted-foreground">
              {event.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-romantic text-gradient-romantic mb-2 group-hover:scale-105 transition-transform duration-300">
            {event.title}
          </h3>

          {/* Description */}
          <p className="font-elegant text-muted-foreground mb-4 leading-relaxed">
            {event.description}
          </p>

          {/* Photos Preview */}
          <div className="flex gap-2 mb-4">
            {event.photos.slice(0, 3).map((photo, photoIndex) => (
              <div 
                key={photoIndex}
                className="w-16 h-16 rounded-lg overflow-hidden border-2 border-blush group-hover:scale-105 transition-transform duration-300"
                style={{ transitionDelay: `${photoIndex * 0.1}s` }}
              >
                <img 
                  src={photo} 
                  alt={`Memory ${photoIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {event.photos.length > 3 && (
              <div className="w-16 h-16 rounded-lg bg-blush flex items-center justify-center text-sm font-elegant text-blush-deep">
                +{event.photos.length - 3}
              </div>
            )}
          </div>

          {/* Click Hint */}
          <div className="flex items-center gap-2 text-rose-gold text-sm font-elegant">
            <Heart className="w-4 h-4" />
            <span>Click to read our memory</span>
          </div>
        </div>
      </div>

      {/* Empty space for opposite side */}
      <div className="w-5/12"></div>
    </div>
  );
};

export default TimelineEvent;