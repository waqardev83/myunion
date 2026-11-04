import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, ArrowRight, Heart, Star, Wind, Lightbulb } from 'lucide-react';

// Product & Prize Images Import (Apni images ke path yahan check kar lein)
import brushImg from '../assets/iamges/visual-area1.png';
import organizerImg from '../assets/iamges/visual-area2.png';
import massagerImg from '../assets/iamges/visual-area3.png';
import cupImg from '../assets/iamges/visual-area4.png';
import laserImg from '../assets/iamges/visual-area5.png';
import mirrorImg from '../assets/iamges/visual-area6.png';

const dailyWinsData = [
  {
    id: '01',
    title: 'BLOW DRY BRUSH',
    desc: 'Salon like blowout, every single day.',
    image: brushImg,
    icon: Wind,
    iconColor: 'text-amber-500 bg-amber-50',
    bgColor: 'from-amber-50 to-white',
  },
  {
    id: '02',
    title: 'SKINCARE ORGANIZER',
    desc: 'Keep your skincare neat & beautiful.',
    image: organizerImg,
    icon: Heart,
    iconColor: 'text-teal-500 bg-teal-50',
    bgColor: 'from-teal-50 to-white',
  },
  {
    id: '03',
    title: 'FACE SCULPTING LED',
    desc: 'Sculpt, lift & glow with every use.',
    image: massagerImg,
    icon: Star,
    iconColor: 'text-pink-500 bg-pink-50',
    bgColor: 'from-pink-50 to-white',
  },
  {
    id: '04',
    title: 'STANELY CUP',
    desc: 'Your style, your way, everyday.',
    image: cupImg,
    icon: Gift,
    iconColor: 'text-violet-500 bg-violet-50',
    bgColor: 'from-purple-50 to-white',
  },
  {
    id: '05',
    title: 'LASER HAIR REMOVAL',
    desc: 'Smooth skin, painless confidence.',
    image: laserImg,
    icon: Sparkles,
    iconColor: 'text-amber-500 bg-amber-50',
    bgColor: 'from-amber-50/70 to-white',
  },
  {
    id: '06',
    title: 'MAKEUP VANITY MIRROR',
    desc: 'Perfect lighting for your perfect look.',
    image: mirrorImg,
    icon: Lightbulb,
    iconColor: 'text-cyan-500 bg-cyan-50',
    bgColor: 'from-cyan-50 to-white',
  },
];

const DailyWins = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFBFD] px-4 py-12 font-['Plus_Jakarta_Sans',sans-serif] sm:px-6 lg:px-12">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          
          <div className="flex flex-col items-start">
            {/* Top Pill Tag */}
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
              <Gift className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                DAILY SURPRISES
              </span>
            </div>

            {/* Main Heading with Yellow Underline */}
            <div className="relative">
              <h2 className="text-6xl font-bold tracking-tight text-[#0E0616] sm:text-5xl">
                Daily <span className="text-[#FA3B7B]">Wins</span>
              </h2>
              {/* Yellow Underline Accent */}
              <div className="absolute -bottom-2 left-0 h-1 w-28 rounded-full bg-amber-400" />
            </div>

            {/* Subtitle */}
            <p className="mt-4 text-sm font-normal text-gray-600 ">
              Play every day and unlock exciting gifts. <span className="font-bold text-gray-900">Your next win could be <span className="text-[#FA3B7B]">amazing!</span></span>
            </p>
          </div>

          {/* Top Right "View all Gifts" Button */}
          <div>
            <motion.a
              href="#all-gifts"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FA3B7B] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-[#e0326e]"
            >
              <span>View all Gifts</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

        </div>

        {/* Gift cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {dailyWinsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(15,23,42,0.13)]"
            >
              {/* Product artwork already includes its number badge. */}
              <div className={`relative aspect-square w-full overflow-hidden bg-gradient-to-b ${item.bgColor}`}>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full object-cover"
                />
                <div
                  role="note"
                  aria-label="Daily surprises"
                  className="absolute right-2 top-2 w-24 overflow-hidden rounded-full border border-white/80 bg-white/90 py-1 text-[8px] font-extrabold tracking-wider text-[#FA3B7B] shadow-sm backdrop-blur-sm"
                >
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
                    className="flex w-max whitespace-nowrap"
                  >
                    <span className="px-2">DAILY SURPRISES ✦ DAILY SURPRISES ✦ </span>
                    <span className="px-2">DAILY SURPRISES ✦ DAILY SURPRISES ✦ </span>
                  </motion.div>
                </div>
              </div>

              {/* Static card details */}
              <div className="flex flex-1 flex-col p-3">
                <div className="mb-2 flex min-w-0 items-center gap-1.5">
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${item.iconColor}`}>
                    <item.icon className="h-3 w-3" />
                  </span>
                  <h3 className="min-w-0 truncate text-[10px] font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-[#FA3B7B] sm:text-[11px]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[10px] leading-snug text-gray-500">
                  {item.desc}
                </p>
                <div className="mt-auto flex justify-end pt-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-50 text-[#FA3B7B] transition-all group-hover:bg-[#FA3B7B] group-hover:text-white">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom announcement */}
        <div className="flex justify-center w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-4 py-2 text-center shadow-sm">
            <Sparkles className="h-4 w-4 shrink-0 text-[#FA3B7B]" />
            <p className="text-[11px] font-bold tracking-wide text-gray-800 sm:text-xs">
              New gifts. New chances. Every single day!
            </p>
            <Sparkles className="h-4 w-4 shrink-0 text-amber-400" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DailyWins;