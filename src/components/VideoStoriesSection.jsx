import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Sparkles, X, Volume2, VolumeX } from 'lucide-react';

// Thumbnails & Product Icons Import (Apne paths check kar lein)
import storyThumb1 from '../assets/iamges/vidimg1.png';
import storyThumb2 from '../assets/iamges/vidimg2.png';
import storyThumb3 from '../assets/iamges/vidimg3.png';
import storyThumb4 from '../assets/iamges/vidimg4.png';

import prodIcon1 from '../assets/iamges/image-container (1).png';
import prodIcon2 from '../assets/iamges/image-container.png';
import prodIcon3 from '../assets/iamges/image-container (3).png';
import prodIcon4 from '../assets/iamges/image-container (2).png';

// Locally bundled clips include voice narration tailored to each story.
const storiesData = [
  {
    id: 1,
    duration: '0:11',
    thumbnail: storyThumb1,
    productImg: prodIcon1,
    title: '12% Niacinamide Clarifying Serum',
    desc: 'Clearer, smoother skin',
    videoUrl: '/videos/story-1.mp4',
  },
  {
    id: 2,
    duration: '0:10',
    thumbnail: storyThumb2,
    productImg: prodIcon2,
    title: 'Vitamin C & Papaya Enzyme Moi...',
    desc: 'Brighter, even-toned skin',
    videoUrl: '/videos/story-2.mp4',
  },
  {
    id: 3,
    duration: '0:11',
    thumbnail: storyThumb3,
    productImg: prodIcon3,
    title: 'Super Glow De-tan Face Wash',
    desc: 'Cleanse, refresh, glow',
    videoUrl: '/videos/story-3.mp4',
  },
  {
    id: 4,
    duration: '0:10',
    thumbnail: storyThumb4,
    productImg: prodIcon4,
    title: 'Vitamin C & Papaya Enzyme Moi...',
    desc: 'Healthy, radiant skin',
    videoUrl: '/videos/story-4.mp4',
  },
];

const VideoStoriesSection = () => {
  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const orderedStories = [
    ...storiesData.slice(carouselStartIndex),
    ...storiesData.slice(0, carouselStartIndex),
  ];

  const scroll = (direction) => {
    const offset = direction === 'left' ? -1 : 1;
    const nextIndex = (activeStoryIndex + offset + storiesData.length) % storiesData.length;
    scrollToStory(nextIndex);
  };

  const scrollToStory = (index) => {
    setCarouselStartIndex(index);
    setActiveStoryIndex(index);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [carouselStartIndex]);

  const updateActiveStory = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children);
    const firstCardOffset = cards[0]?.offsetLeft ?? 0;
    const closestCardIndex = cards.reduce((closestIndex, card, index) => {
      const closestCard = cards[closestIndex];
      const cardDistance = Math.abs(card.offsetLeft - firstCardOffset - container.scrollLeft);
      const closestDistance = Math.abs(
        closestCard.offsetLeft - firstCardOffset - container.scrollLeft
      );
      return cardDistance < closestDistance ? index : closestIndex;
    }, 0);

    setActiveStoryIndex((carouselStartIndex + closestCardIndex) % storiesData.length);
  };

  return (
    <section className="w-full bg-[#FFFBFD] py-16 px-4 sm:px-6 lg:px-12 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          
          <div className="flex flex-col items-start">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FA3B7B]" />
              <span className="text-xs  text-[10px] text-[#FA3B7B] tracking-wider uppercase">
                REAL PEOPLE. REAL RESULTS.
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              See The Glow For <span className="text-[#FA3B7B]">Yourself</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base font-normal mt-2">
              Real stories. Real routines. Real results.
            </p>
          </div>

          {/* Top Right Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#more-stories"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-pink-50 hover:bg-pink-100 text-[#FA3B7B] text-xs sm:text-sm font-bold rounded-full border border-pink-200 transition-all shadow-sm"
            >
              <span>Watch More Stories</span>
              <span className="text-base">→</span>
            </motion.a>

            <button
              onClick={() => scroll('left')}
              aria-label="Previous Story"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-pink-50 hover:border-pink-300 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              aria-label="Next Story"
              className="w-10 h-10 rounded-full bg-[#FA3B7B] text-white flex items-center justify-center hover:bg-[#e0326e] transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Video Cards Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={updateActiveStory}
          className="flex items-center gap-4 overflow-x-auto scrollbar-hide scroll-smooth w-full py-4 px-1 lg:overflow-x-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {orderedStories.map((story, idx) => (
            <motion.div
              key={story.id}
              layout="position"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => {
                setIsVideoMuted(false);
                setActiveVideo(story);
              }}
              className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 lg:w-[calc((100%-3rem)/4)] lg:flex-none h-[440px] sm:h-[480px] lg:h-[360px] rounded-[2rem] overflow-hidden relative shadow-lg group cursor-pointer flex flex-col justify-between p-4"
            >
              {/* Background Thumbnail Image */}
              <div className="absolute inset-0 w-full h-full z-0">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              </div>

              {/* Top Duration Badge */}
              <div className="relative z-10 flex justify-end">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-wider">
                  {story.duration}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-xl group-hover:bg-[#FA3B7B] transition-colors"
                >
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </motion.div>
              </div>

              {/* Bottom Product Info Box */}
              <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center gap-3">
                <img
                  src={story.productImg}
                  alt="Product"
                  className="w-9 h-9 rounded-xl object-cover bg-white shrink-0 p-0.5"
                />
                <div className="overflow-hidden">
                  <h4 className="text-white text-xs font-bold truncate">
                    {story.title}
                  </h4>
                  <p className="text-gray-300 text-[11px] truncate">
                    {story.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom story navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {storiesData.map((story, index) => (
            <button
              key={story.id}
              type="button"
              onClick={() => scrollToStory(index)}
              aria-label={`Go to story ${index + 1}: ${story.title}`}
              aria-current={activeStoryIndex === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA3B7B] focus-visible:ring-offset-2 ${
                activeStoryIndex === index
                  ? 'w-5 bg-[#FA3B7B]'
                  : 'w-2.5 bg-pink-200 hover:bg-pink-300'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Video Modal Popup (Plays specific video on click) */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0E0616] rounded-3xl overflow-hidden shadow-2xl border border-pink-500/30 flex flex-col items-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-[#FA3B7B] text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Active Video Player */}
              <div className="w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-black relative mb-4">
                <video
                  src={activeVideo.videoUrl}
                  poster={activeVideo.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  muted={isVideoMuted}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                  aria-label={isVideoMuted ? 'Turn sound on' : 'Mute video'}
                  aria-pressed={!isVideoMuted}
                  className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-[#FA3B7B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {isVideoMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>

              {/* Video Details */}
              <div className="w-full flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <img
                  src={activeVideo.productImg}
                  alt="Product"
                  className="w-10 h-10 rounded-xl object-cover bg-white"
                />
                <div className="text-left">
                  <h4 className="text-white text-xs sm:text-sm font-bold">
                    {activeVideo.title}
                  </h4>
                  <p className="text-pink-400 text-xs">
                    {activeVideo.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default VideoStoriesSection;