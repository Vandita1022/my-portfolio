import { useState, useEffect } from 'react';
import TimelineEvent from './TimelineEvent.js';
import EventModal from './EventModal.js';
import FloatingHearts from './FloatingHearts.js';
import { Heart, Music, Sparkles } from 'lucide-react';

// You can replace these with your own images later!
const firstMeetingImg = "https://via.placeholder.com/600x400?text=First+Meeting";
const valentinesImg = "https://via.placeholder.com/600x400?text=Valentine's+Day";
const beachSunsetImg = "https://via.placeholder.com/600x400?text=Beach+Sunset";
const movingInImg = "https://via.placeholder.com/600x400?text=Moving+In";
const christmasImg = "https://via.placeholder.com/600x400?text=First+Christmas";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSurprise, setShowSurprise] = useState(false);

  // Sample timeline data - you can replace this with your actual memories
  const timelineEvents = [
    {
      id: '1',
      date: 'January 15, 2023',
      title: 'First Meeting ✨',
      description: 'The day our eyes first met',
      photos: [firstMeetingImg, firstMeetingImg],
      message: 'I knew there was something magical about you from the very first moment. Your smile lit up the entire room and made my heart skip a beat.',
      isSpecial: true,
      position: 'right'
    },
    {
      id: '2',
      date: 'February 14, 2023',
      title: 'First Valentine\'s Day 💕',
      description: 'Our first Valentine\'s together',
      photos: [valentinesImg, valentinesImg, firstMeetingImg],
      message: 'You made my first Valentine\'s Day with you absolutely perfect. Every moment felt like a dream come true.',
      position: 'left'
    },
    {
      id: '3',
      date: 'March 22, 2023',
      title: 'Weekend Getaway 🏖️',
      description: 'Our romantic weekend escape',
      photos: [beachSunsetImg, beachSunsetImg],
      message: 'Those sunset walks on the beach, holding your hand, watching the waves... I felt like the luckiest person alive.',
      position: 'right'
    },
    {
      id: '4',
      date: 'June 10, 2023',
      title: 'Moving In Together 🏠',
      description: 'The start of our life together',
      photos: [movingInImg, movingInImg, beachSunsetImg],
      message: 'Coming home to you every day has been the greatest blessing. You\'ve made our house a true home filled with love and laughter.',
      isSpecial: true,
      position: 'left'
    },
    {
      id: '5',
      date: 'December 25, 2023',
      title: 'First Christmas Together 🎄',
      description: 'A magical holiday season',
      photos: [christmasImg, christmasImg],
      message: 'Waking up on Christmas morning with you by my side... it was everything I ever dreamed Christmas could be.',
      position: 'right'
    }
  ];

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setShowSurprise(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <div className="relative text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-romantic text-gradient-romantic mb-6 animate-fade-in-up">
            Our Love Story
          </h1>
          <p className="text-xl md:text-2xl font-elegant text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A Beautiful Journey Through Our Precious Memories
          </p>
          <div className="flex justify-center items-center gap-4 text-rose-gold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Heart className="w-6 h-6 animate-heart-pulse" />
            <Sparkles className="w-5 h-5" />
            <Heart className="w-6 h-6 animate-heart-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-line h-full rounded-full"></div>
        
        {/* Timeline Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.id}
              event={event}
              index={index}
              onEventClick={setSelectedEvent}
            />
          ))}
        </div>

        {/* Surprise Section */}
        {showSurprise && (
          <div className="text-center mt-20 animate-fade-in-up">
            <div className="card-romantic max-w-md mx-auto">
              <Heart className="w-12 h-12 text-rose-gold mx-auto mb-4 animate-heart-pulse" />
              <h3 className="text-2xl font-romantic text-gradient-romantic mb-4">
                Surprise Message! 💕
              </h3>
              <p className="font-elegant text-muted-foreground leading-relaxed">
                Every day with you is a new page in our beautiful love story.
                I can't wait to create countless more memories together.
                You are my everything, my heart, my home.
                I love you more than words could ever express. ❤️
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Background Music Toggle */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-romantic rounded-full flex items-center justify-center text-white shadow-glow hover:scale-110 transition-all duration-300">
        <Music className="w-6 h-6" />
      </button>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Timeline;