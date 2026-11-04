import React from 'react';
import { motion } from 'framer-motion';

import creamOverlayImg from '../assets/iamges/last-11.png';
import rightGlowImg from '../assets/iamges/last-12.png';

const FeaturedIn = () => {
  const mediaLogos = [
    { id: 1, name: 'GRAZIA', style: 'font-serif font-extrabold italic tracking-widest' },
    { id: 2, name: 'VOGUE', style: 'font-sans font-extrabold tracking-wider' },
    { id: 3, name: 'FEMINA', style: 'font-sans font-black tracking-widest' },
    { id: 4, name: 'allure', style: 'font-serif font-bold lowercase tracking-normal' },
  ];

  return (
    <section className="relative w-full overflow-hidden border-b border-pink-200/60 bg-[#FCF3F4] px-4 py-4 font-['Plus_Jakarta_Sans',sans-serif] sm:px-6 sm:py-5 lg:px-16 lg:py-4">
      
      {/* Left Cream Swirl Graphic Background Overlay */}
      <div className="absolute top-0 left-0 h-full w-48 sm:w-64 lg:w-80  opacity-70 z-0">
        <img
          src={creamOverlayImg}
          alt="Cream Swirl Left Overlay"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 lg:min-h-[55px] lg:flex-row lg:gap-6">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-2xl font-extrabold leading-none tracking-tight text-[#111111] sm:text-3xl">
            Featured In
          </h3>
          <p className="mt-1 text-xs font-normal text-gray-500 sm:text-sm">
            Beauty’s most trusted voices
          </p>
        </motion.div>

        {/* Right Media Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center lg:flex-nowrap"
        >
          {mediaLogos.map((item, index) => (
            <React.Fragment key={item.id}>
              {item.name === 'allure' ? (
                <span className="relative flex h-12 shrink-0 items-center sm:h-14">
                  <img
                    src={rightGlowImg}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 top-1/2 z-0 w-20 -translate-y-1/2 opacity-30 sm:-right-12 sm:w-24"
                  />
                  <span className={`relative z-10 text-lg text-[#111111] transition-transform hover:scale-105 sm:text-xl lg:text-[22px] ${item.style}`}>
                    {item.name}
                  </span>
                </span>
              ) : (
                <span className={`cursor-pointer select-none text-lg text-[#222222] transition-transform hover:scale-105 sm:text-xl lg:text-[22px] ${item.style}`}>
                  {item.name}
                </span>
              )}

              {/* Vertical Separator Line */}
              {index !== mediaLogos.length - 1 && (
                <span className="mx-4 hidden h-6 w-px bg-pink-300/60 sm:inline-block lg:mx-6" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedIn;