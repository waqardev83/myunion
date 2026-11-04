import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, HeartHandshake } from 'lucide-react';

import bannerBgImage from '../assets/iamges/last-10.png';

const BodyCareBanner = () => {
  const features = [
    {
      id: 1,
      title: 'Gentle Care',
      icon: Leaf,
    },
    {
      id: 2,
      title: 'Real Ingredients',
      icon: Droplets,
    },
    {
      id: 3,
      title: 'Healthier You',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="w-full overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div
        className="relative isolate flex min-h-[360px] w-full flex-col items-center justify-center gap-7 overflow-hidden px-5 py-9 sm:min-h-[390px] sm:px-8 lg:aspect-[3/1] lg:min-h-0 lg:flex-row lg:justify-between lg:gap-6 lg:px-[7vw] lg:py-10"
      >
        <img
          src={bannerBgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover lg:object-fill"
        />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-md text-center text-white lg:text-left"
        >
          <h2 className="mb-2 text-[1.7rem] font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[clamp(2rem,3vw,3rem)]">
            A Fresh New Home
            <br />
            For Body Care
          </h2>
          <p className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
            Discover self-care essentials for healthier, happier skin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex w-full max-w-sm items-start justify-center gap-4 border-y border-white/30 py-4 sm:gap-8 lg:w-auto lg:max-w-none lg:gap-6 lg:border-y-0 lg:border-x lg:px-8 lg:py-0"
        >
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="flex min-w-0 flex-1 flex-col items-center text-center lg:flex-none">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FA3B7B] shadow-md transition-transform hover:scale-110 sm:h-12 sm:w-12">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="max-w-[84px] text-[10px] font-bold leading-tight text-white sm:text-xs">
                  {item.title}
                </span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 text-center lg:text-right"
        >
          <h3 className="text-3xl font-black leading-none tracking-widest text-white sm:text-4xl lg:text-[clamp(2rem,3vw,3rem)]">
            HULA
            <br />
            HOOD
          </h3>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-white/80 sm:text-xs">
            by CharmsStudio
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BodyCareBanner;