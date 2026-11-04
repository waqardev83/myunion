import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Droplet,
  Flower2,
  ShieldCheck,
  Wind,
  Sprout,
} from 'lucide-react';

// Apni category images ke paths yahan import kar lein
import glowPicksImg from '../assets/iamges/img-1.png';
import serumsImg from '../assets/iamges/img-2.png';
import bodycareImg from '../assets/iamges/img-3.png';
import masksImg from '../assets/iamges/img-4.png';
import cleansersImg from '../assets/iamges/img-5.png';
import moisturizersImg from '../assets/iamges/img-6.png';

const categories = [
  {
    id: 1,
    title: 'Glow Picks',
    image: glowPicksImg,
    badgeIcon: Sparkles,
    bgColor: 'from-pink-100/60 to-white',
  },
  {
    id: 2,
    title: 'Serums',
    image: serumsImg,
    badgeIcon: Droplet,
    bgColor: 'from-rose-100/50 to-white',
  },
  {
    id: 3,
    title: 'Bodycare',
    image: bodycareImg,
    badgeIcon: Flower2,
    bgColor: 'from-amber-100/40 to-white',
  },
  {
    id: 4,
    title: 'Masks',
    image: masksImg,
    badgeIcon: ShieldCheck,
    bgColor: 'from-purple-100/50 to-white',
  },
  {
    id: 5,
    title: 'Cleansers',
    image: cleansersImg,
    badgeIcon: Wind,
    bgColor: 'from-pink-100/40 to-white',
  },
  {
    id: 6,
    title: 'Moisturizers',
    image: moisturizersImg,
    badgeIcon: Sprout,
    bgColor: 'from-rose-100/40 to-white',
  },
];

const ShopByCategory = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return undefined;

    updateScrollButtons();
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
    const scrollAmount = (firstCard?.getBoundingClientRect().width ?? container.clientWidth) + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full bg-[#FFF5F7] py-16 px-4 sm:px-6 lg:px-12 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-pink-200 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#FA3B7B]" />
          <span className="text-xs font-normal text-[#FA3B7B] uppercase tracking-widest">
            Shop By Category
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FA3B7B]" />
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight mb-2">
          Find Your Skincare Essentials
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base font-normal max-w-md">
          Explore our most-loved categories and find what your skin needs.
        </p>
      </div>

      {/* Cards Container with Scroll Controls */}
      <div className="relative max-w-7xl mx-auto flex items-center">
        
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll Left"
          disabled={!canScrollLeft}
          className="absolute -left-3 sm:-left-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#FA3B7B] text-white shadow-lg transition-all hover:bg-[#e0326e] disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA3B7B] focus-visible:ring-offset-2 top-1/2 -translate-y-1/2"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Scrollable Cards Wrapper */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex items-stretch gap-5 sm:gap-6 lg:gap-4 overflow-x-auto scrollbar-hide scroll-smooth w-full py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat, index) => {
            const IconComponent = cat.badgeIcon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="min-w-[240px] sm:min-w-[270px] lg:min-w-0 lg:basis-[calc((100%-4rem)/5)] lg:shrink-0 rounded-3xl bg-white border-2 border-pink-200/60 hover:border-[#FA3B7B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer relative"
              >
                {/* Full-bleed product image */}
                <div className={`relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b ${cat.bgColor}`}>
                  <motion.img
                    src={cat.image}
                    alt={cat.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Bottom Content Box */}
                <div className="relative flex h-24 w-full flex-col items-center justify-between bg-white p-3 pt-5">
                  
                  {/* Floating Center Icon Button with Hover Effect */}
                  <div className="absolute -top-5 w-9 h-9 rounded-full bg-white border border-pink-100 shadow-md flex items-center justify-center text-[#FA3B7B] group-hover:bg-[#FA3B7B] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-3 group-hover:text-[#FA3B7B] transition-colors">
                    {cat.title}
                  </h3>

                  {/* Bottom Action Icon */}
                  <div className="w-8 h-8 rounded-full bg-pink-50 text-[#FA3B7B] flex items-center justify-center group-hover:bg-[#FA3B7B] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll Right"
          disabled={!canScrollRight}
          className="absolute -right-3 sm:-right-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#FA3B7B] text-white shadow-lg transition-all hover:bg-[#e0326e] disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA3B7B] focus-visible:ring-offset-2 top-1/2 -translate-y-1/2"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

      </div>
    </section>
  );
};

export default ShopByCategory;