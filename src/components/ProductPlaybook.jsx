import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Activity, Sun, Percent, Heart } from 'lucide-react';

import playbookImg1 from '../assets/iamges/Vector -1.png';
import playbookImg2 from '../assets/iamges/image 20.png';
import playbookImg3 from '../assets/iamges/image 20 (1).png';

const playbookCards = [
  {
    id: 1,
    title: 'Source through surface',
    description: 'For us, skincare isn’t about piling things on. It’s about working where it all begins.',
    image: playbookImg1,
    imageClass: 'w-[68%] -right-[8%] -bottom-2',
    bgColor: 'bg-[#FFF5F4]',
    numberBg: 'bg-[#FFD9E2] text-[#FA3B7B]',
    featureColor: 'text-[#FA3B7B] bg-[#FFD9E2]',
    features: [
      { icon: Leaf, text: 'Every product is designed to work from the source, through the surface.' },
      { icon: Activity, text: 'Targeted care for healthier, stronger skin over time.' },
    ],
  },
  {
    id: 2,
    title: 'Uncovering your glow',
    description: 'Your glow isn’t something we create — it’s already there, just hidden.',
    image: playbookImg2,
    imageClass: 'w-[90%] -right-[8%] bottom-[72px]',
    bgColor: 'bg-[#FFE5EB]',
    numberBg: 'bg-[#FFD9E2] text-[#FA3B7B]',
    featureColor: 'text-[#FA3B7B] bg-white/70',
    features: [
      { icon: Sparkles, text: 'Our products help remove what stands in its way.' },
      { icon: Sun, text: 'Revealing your natural, healthy glow.' },
    ],
  },
  {
    id: 3,
    title: 'Ingredient chemistry',
    description: 'Skincare, for us, isn’t about higher percentages. It’s about combining the right ingredients.',
    image: playbookImg3,
    imageClass: 'w-[76%] -right-[8%] bottom-[72px]',
    bgColor: 'bg-[#F5F6E8]',
    numberBg: 'bg-[#E3F0D8] text-emerald-700',
    featureColor: 'text-emerald-700 bg-[#E3F0D8]',
    features: [
      { icon: Percent, text: 'Thoughtfully formulated combinations that work together.' },
      { icon: Heart, text: 'Effective results without overwhelming your skin.' },
    ],
  },
];

const ProductPlaybook = () => (
  <section className="w-full bg-[#FFF6F7] px-5 py-12 font-['Plus_Jakarta_Sans',sans-serif] sm:py-14 md:px-10">
    <div className="mx-auto w-full max-w-[1120px]">
      <header className="mb-9 flex flex-col items-center text-center sm:mb-10">
        <span className="mb-3 rounded-full border border-pink-100 bg-white/60 px-3 py-1 text-[9px] font-semibold leading-none text-[#FA3B7B]">
          OUR APPROACH
        </span>
        <h2 className="mb-2 text-[30px] font-bold leading-tight tracking-tight text-[#1B1B1B] sm:text-4xl">
          Our Product <span className="text-[#E93570]">Playbook</span>
        </h2>
        <p className="text-[11px] leading-relaxed text-[#646064] sm:text-xs">
          Thoughtful steps. Meaningful results. Skincare, the right way.
        </p>
      </header>

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-3">
        {playbookCards.map((card, idx) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.12 }}
            className={`relative flex min-h-[378px] flex-col overflow-hidden rounded-xl border-2 border-white px-6 pb-6 pt-6 shadow-sm ${card.bgColor}`}
          >
            <motion.img
              src={card.image}
              alt=""
              aria-hidden="true"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className={`pointer-events-none absolute z-0 h-auto max-w-none object-contain ${card.imageClass}`}
            />

            <div className="relative z-10 max-w-[82%]">
              <span className={`mb-3 inline-flex h-[19px] min-w-[22px] items-center justify-center rounded-md px-1 text-[9px] font-bold ${card.numberBg}`}>
                01
              </span>
              <h3 className="mb-2 text-[21px] font-bold leading-[1.14] tracking-tight text-[#1B1B1B]">
                {card.title}
              </h3>
              <p className="text-[10px] leading-[1.55] text-[#69666A]">
                {card.description}
              </p>
            </div>

            <ul className="relative z-10 mt-auto space-y-3 pt-5">
              {card.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.text} className="flex items-start gap-2.5">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${card.featureColor}`}>
                      <Icon className="h-3 w-3" />
                    </span>
                    <p className="max-w-[190px] pt-0.5 text-[9px] leading-[1.4] text-[#252327]">
                      {feature.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductPlaybook;
