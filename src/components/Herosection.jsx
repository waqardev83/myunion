import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, ArrowRight, Gift, ShieldCheck, Heart, Clock } from 'lucide-react';

// Background Image Import (Apni image ka path yahan check kar lein)
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
    <section 
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[#FCE4EC] font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-contain bg-top bg-no-repeat md:block lg:bg-cover lg:bg-center"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      />
      
      {/* Light Overlay taaki text par readability achi ho */}
      <div className="absolute inset-0 bg-[#FCE4EC]/50 sm:bg-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14 relative z-10">
        
        {/* Text Content Column */}
        <div className="max-w-[390px] flex flex-col items-start justify-center text-left">
          
          {/* Top Live Sale Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/65 backdrop-blur-sm border border-pink-200/70 shadow-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#FA3B7B]" />
            <span className="text-xs sm:text-sm font-semibold text-[#FA3B7B] tracking-wide">
              WTFox Sale is Live!
            </span>
          </motion.div>

          {/* Auto Scrollable / Animated Text Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full space-y-3"
          >
            {/* Main Headings */}
            <h1 className="text-4xl sm:text-[44px] lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.08]">
              DAILY GIFTS <br />
              <span className="text-[#FA3B7B]">WORTH UP TO</span>
            </h1>

            <div className="text-5xl sm:text-[54px] lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-none pb-1">
              ₹10,000*
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-900 text-xs sm:text-[13px] font-medium max-w-[350px] leading-relaxed pt-1">
              Effective skincare made to target real skin concerns from acne and pigmentation to dullness, dryness and uneven texture.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#FA3B7B] hover:bg-[#e0326e] text-white font-semibold text-xs rounded-full shadow-lg shadow-pink-500/30 transition-all"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#explore"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm hover:bg-gray-50 text-gray-900 font-semibold text-xs rounded-full border border-white shadow-sm transition-all"
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
            className="grid grid-cols-4 gap-2 sm:gap-5 mt-6 w-full max-w-[390px]"
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
                  className="mb-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#FA3B7B] bg-white/20 text-[#FA3B7B] transition-shadow hover:bg-white/70 hover:shadow-md hover:shadow-pink-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA3B7B] focus-visible:ring-offset-2"
                >
                  <Icon className="h-3.5 w-3.5" />
                </motion.button>
                <span className="text-[9px] font-medium leading-tight text-gray-900 sm:text-[10px]">{title}</span>
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

      </div>
    </section>
  );
};

export default HeroSection;