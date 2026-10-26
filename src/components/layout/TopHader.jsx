import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Custom Icon Image Import (Apni image ka path yahan check kar lein)
import sparkleIcon from '../../assets/iamges/icon.png';

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-full bg-[#FF3378] text-white font-sans text-xs sm:text-sm font-medium relative z-50 overflow-hidden shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between">
            
            {/* Left Invisible Spacer (Desktop Center Align Balance) */}
            <div className="w-5 hidden lg:block" />

            {/* Center Content: Custom Sparkle Icon + Announcement Text */}
            <div className="flex items-center justify-center gap-2.5 text-center mx-auto pr-6 sm:pr-0">
              <img 
                src={sparkleIcon} 
                alt="Sparkle Icon" 
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain shrink-0 drop-shadow-sm" 
              />
              <span className="tracking-wide text-[11px] sm:text-xs md:text-sm leading-tight">
                We never ask for any payments outside our website or app.
              </span>
            </div>

            {/* Right Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200 shrink-0 focus:outline-none"
              aria-label="Close Announcement"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopHeader;