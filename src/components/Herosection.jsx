import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, ArrowRight, Gift, ShieldCheck, Heart, Clock } from 'lucide-react';

// Hero Product Showcase Image Import (Apni image ka path yahan check kar lein)
import heroBgImage from '../assets/iamges/BGimg.png';

const HeroSection = () => {
  const [activeBenefit, setActiveBenefit] = useState(null);
  const benefits = [
    {
      id: 'surprises',
      title: 'Daily Surprises',
      description: "Come back each day to discover the latest surprise.",
      icon: Gift,
    },
    {
      id: 'gifts',
      title: 'Assured Gifts',
      description: 'Enjoy a special gift with qualifying offers.',
      icon: ShieldCheck,
    },
    {
      id: 'orders',
      title: 'For Every Order',
      description: 'Find a little something extra with your order.',
      icon: Heart,
    },
    {
      id: 'limited',
      title: 'Limited Time Only',
      description: "Explore the offer while it's available.",
      icon: Clock,
    },
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-[#FCE4EC] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] flex items-center">
      
      {/* Background Glow / Neon Lighting Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Animated Scrollable Text Content (Span 6) */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left">
          
          {/* Top Live Sale Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-pink-200 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FA3B7B]" />
            <span className="text-xs sm:text-sm font-bold text-[#FA3B7B] tracking-wide">
              WTFox Sale is Live!
            </span>
          </motion.div>

          {/* Auto Scrollable / Animated Text Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-h-[420px] overflow-y-auto pr-2 custom-scrollbar space-y-3"
          >
            {/* Main Headings */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1]">
              DAILY GIFTS <br />
              <span className="text-[#FA3B7B]">WORTH UP TO</span>
            </h1>

            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight pb-1">
              ₹10,000*
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-700 text-sm sm:text-base font-normal max-w-lg leading-relaxed pt-2">
              Effective skincare made to target real skin concerns from acne and pigmentation to dullness, dryness and uneven texture.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FA3B7B] hover:bg-[#e0326e] text-white font-semibold text-sm rounded-full shadow-lg shadow-pink-500/30 transition-all"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#explore"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm rounded-full border border-gray-300 shadow-sm transition-all"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom 4 Feature Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-4 gap-3 sm:gap-6 pt-10 border-t border-pink-200/60 mt-8 w-full"
          >
            {benefits.map(({ id, title, description, icon: Icon }) => (
              <motion.div
                key={id}
                className="relative flex flex-col items-center text-center"
                onMouseEnter={() => setActiveBenefit(id)}
                onMouseLeave={() => setActiveBenefit(null)}
              >
                <motion.button
                  type="button"
                  aria-label={title}
                  aria-expanded={activeBenefit === id}
                  aria-describedby={activeBenefit === id ? `benefit-${id}` : undefined}
                  onFocus={() => setActiveBenefit(id)}
                  onBlur={() => setActiveBenefit(null)}
                  onClick={() => setActiveBenefit(activeBenefit === id ? null : id)}
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  whileTap={{ scale: 0.94 }}
                  className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FA3B7B] shadow-sm ring-1 ring-pink-100 transition-shadow hover:shadow-lg hover:shadow-pink-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA3B7B] focus-visible:ring-offset-2"
                >
                  <Icon className="h-5 w-5" />
                </motion.button>
                <span className="text-[11px] font-semibold text-gray-800 sm:text-xs">{title}</span>
                <AnimatePresence>
                  {activeBenefit === id && (
                    <motion.div
                      id={`benefit-${id}`}
                      role="tooltip"
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full z-20 mt-2 w-40 rounded-xl border border-pink-100 bg-white p-3 text-center text-[11px] leading-relaxed text-gray-600 shadow-xl sm:w-48"
                    >
                      <span className="mb-1 block font-bold text-gray-900">{title}</span>
                      {description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Background Product Image (Hidden on 'sm', Visible & Fixed on 'md' & 'lg') */}
        <div className="hidden md:flex lg:col-span-6 items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full flex items-center justify-center"
          >
            <img
              src={heroBgImage}
              alt="WTFox Skincare and Merchandise Products Showcase"
              className="w-full max-w-xl lg:max-w-2xl object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;