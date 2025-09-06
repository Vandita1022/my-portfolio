import { useState, useEffect } from 'react';
import TimelineEvent from './TimelineEvent.js';
import EventModal from './EventModal.js';
import FloatingHearts from './FloatingHearts.js';
import { Heart, Music, Sparkles } from 'lucide-react';

import image1 from '../assets/1.1.jpg';
import image2 from '../assets/1.2.jpg';
import photo2_1 from '../assets/2.1.jpg';
import photo2_2 from '../assets/2.2.jpg';
import photo2_3 from '../assets/2.3.jpg';
import photo2_4 from '../assets/2.4.jpg';
import photo2_5 from '../assets/2.5.jpg';
import photo2_6 from '../assets/2.6.jpg';
import photo2_7 from '../assets/2.7.jpg';
import photo2_8 from '../assets/2.8.jpg';
import photo2_9 from '../assets/2.9.jpg';
import photo2_10 from '../assets/2.10.jpg';
import photo2_11 from '../assets/2.11.jpg';
import photo2_12 from '../assets/2.12.jpg';
import photo2_13 from '../assets/2.13.jpg';
import photo2_14 from '../assets/2.14.jpg';
import photo2_15 from '../assets/2.15.jpg';
import photo2_16 from '../assets/2.16.jpg';
import photo2_17 from '../assets/2.17.jpg';
import photo2_18 from '../assets/2.18.jpg';
import photo2_19 from '../assets/2.19.jpg';
import photo2_20 from '../assets/2.20.jpg';
import photo2_21 from '../assets/2.21.jpg';
import photo2_22 from '../assets/2.22.jpg';
import extra1 from '../assets/e1.jpg';
import extra2 from '../assets/e2.jpg';
import extra3 from '../assets/e3.jpg';
import photo3_1 from '../assets/3.1.jpg';
import photo3_2 from '../assets/3.2.jpg';
import photo3_3 from '../assets/3.3.jpg';
import photo3_4 from '../assets/3.4.jpg';
import photo3_5 from '../assets/3.5.jpg';
import photo3_6 from '../assets/3.6.jpg';
import photo3_7 from '../assets/3.7.jpg';
import photo3_8 from '../assets/3.8.jpg';
import photo3_9 from '../assets/3.9.jpg';
import photo3_10 from '../assets/3.10.jpg';
import photo3_11 from '../assets/3.11.jpg';
import photo3_12 from '../assets/3.12.jpg';
import photo3_13 from '../assets/3.13.jpg';
import photo3_14 from '../assets/3.14.jpg';

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
      date: 'September 5th, 2024',
      title: 'Tea or Coffee??',
      description: 'Our first conversation',
      photos: [image1, image2],
      message: 'Naive me thought we were really having a work conversation but it was anything but that. We swayed to talking about clubs, sports and then the final mic drop - you actually asked me "tea or coffee". An unforgettable conversation, the start of us.',
      isSpecial: true,
      position: 'right'
    },
    {
      id: '2',
      date: 'October 2024 - May 4th, 2025',
      title: 'The 7 months',
      description: 'A blur of endless "getting to know you."',
      photos: [photo2_1, photo2_2, photo2_3, photo2_4, photo2_5, photo2_6, photo2_7, photo2_8, photo2_9, photo2_10, photo2_11, photo2_12, extra1, extra2, photo2_13, extra3, photo2_14, photo2_15, photo2_16, photo2_17, photo2_18, photo2_19, photo2_20, photo2_21, photo2_22],
      message: 'These were the months of getting to know each other, the side glances, the highly curated whatsapp texts to going on walks, eating together, getting on video calls and going to city together. I truly truly fell for you somewhere in these months. We shared so many "firsts" together...going on an actual walk, holding hands, hugging you, cheek kisses and going on dates to city - when oh when will I get this all again',
      isSpecial: true,
      position: 'left'
    },
    {
      id: '3',
      date: 'April 13, 2025',
      title: 'Farewell',
      description: '',
      photos: [photo3_1, photo3_2, photo3_3, photo3_4, photo3_5, photo3_6, photo3_7, photo3_8, photo3_9, photo3_10, photo3_11, photo3_12, photo3_13, photo3_14],
      message: 'It wasn’t about farewell to me cause I still had some time before goodbye. It was about getting the cutest clicks of us that day. And it was all about how jaw - droppingly beautifully handsome you were looking...Can we once make out with you suited up onceeeeee...please...pretty pleaseeee :)',
      isSpecial: false,
      position: 'right'
    },
    {
      id: '4',
      date: 'May 4, 2025',
      title: 'The Best Proposal',
      description: 'The start of our life together',
      photos: [movingInImg, movingInImg, beachSunsetImg],
      message: 'Coming home to you every day has been the greatest blessing. You\'ve made our house a true home filled with love and laughter.',
      isSpecial: true,
      position: 'left'
    },
    {
      id: '5',
      date: 'May - July, 2025',
      title: 'Summer Vacations',
      description: 'A magical holiday season',
      photos: [christmasImg, christmasImg],
      message: 'Waking up on Christmas morning with you by my side... it was everything I ever dreamed Christmas could be.',
      position: 'right'
    },
    {
      id: '6',
      date: 'July, 2025',
      title: 'Delhi Yatra',
      description: 'The start of our life together',
      photos: [movingInImg, movingInImg, beachSunsetImg],
      message: 'Coming home to you every day has been the greatest blessing. You\'ve made our house a true home filled with love and laughter.',
      isSpecial: true,
      position: 'left'
    },
    {
      id: '7',
      date: 'August, 2025',
      title: 'Jodhpur Yatra',
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