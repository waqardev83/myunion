import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Award, CheckCircle2, ArrowRight } from 'lucide-react';

// Images Import (Apni images ke path yahan check kar lein)
import modelImg from '../assets/iamges/left-collage-container.png';
import productBottleImg from '../assets/iamges/secrenimg.png';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#FFF5F7] py-12 sm:py-20 px-4 sm:px-6 lg:px-12 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      
      {/* Background Dot Pattern (Top Left Deco) */}
      <div className="absolute top-8 left-8 text-pink-300 opacity-60 pointer-events-none hidden sm:block">
        <div className="grid grid-cols-4 gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-pink-300" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Reference collage image (Span 6) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[440px]"
          >
            <img
              src={modelImg}
              alt="Skincare model and Foxtale community collage with real results badge"
              className="block h-auto w-full object-contain"
            />
          </motion.div>
        </div>

        {/* Right Column: Text Content & Cards (Span 6) */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center">
          
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FA3B7B]" />
            <span className="text-xs font-normal text-[#FA3B7B] uppercase tracking-wider">
              ABOUT CHARMSSTUDIO
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-gray-900 tracking-tight leading-[1.25] mb-4"
          >
            High Performing  <br />  Skincare, Inspired by <br /> wonder women
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed mb-8"
          >
            CharmsStudio is a skincare brand built on trust, transparency and real results. We create effective formulas that are easy to use, gentle on skin and made for real life.
          </motion.p>

          {/* Two Top Small Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
            
            {/* Local Trends */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-pink-100/80 flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center mb-3 shadow-md shadow-pink-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Local Trends</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  Get skin insights into your neighborhood.
                </p>
              </div>
            </motion.div>

            {/* Our Expertise */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-pink-100/80 flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center mb-3 shadow-md shadow-pink-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Our Expertise</h3>
                <p className="text-xs text-gray-500 leading-normal">
                  Decades of combined skincare research.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Bottom Banner Card: Exclusive Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full bg-white/80 rounded-3xl p-6 shadow-sm border border-pink-100/80 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
          >
            <div className="flex-1 space-y-3">
              <h3 className="text-base font-bold text-gray-900">
                Exclusive CharmsStudio Updates
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stay ahead of the curve with our newest launches, expert tips & special offers.
              </p>

              {/* Checklist */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FA3B7B]" />
                  <span>Be the first to know</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FA3B7B]" />
                  <span>Tips for healthy, glowing skin</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FA3B7B]" />
                  <span>Exclusive offers & early access</span>
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FA3B7B] hover:bg-[#e0326e] text-white text-xs font-bold rounded-full shadow-md transition-all"
                >
                  <span>Join The Glow Club</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>

            {/* Product Side Image */}
            <div className="w-full sm:w-36 h-36 rounded-2xl overflow-hidden shrink-0">
              <img
                src={productBottleImg}
                alt="Product Showcase"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;