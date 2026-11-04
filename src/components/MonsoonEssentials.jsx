import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ShoppingBag, ArrowRight } from 'lucide-react';

// Product Images Import (Apni images ke path yahan check kar lein)
import product1Img from '../assets/iamges/images1.png';
import product2Img from '../assets/iamges/images2.png';
import product3Img from '../assets/iamges/images3.png';

const monsoonProducts = [
  {
    id: 1,
    title: '12% Niacinamide Clarifying Serum',
    description: 'Deletes 7 signs of acne & acne marks',
    rating: 4.8,
    reviewsCount: 'See Reviews',
    price: 645,
    code: 'GLOW20',
    isBestseller: true,
    image: product1Img,
    bgColor: 'bg-[#FBE4DD]',
  },
  {
    id: 2,
    title: 'Oil Balancing Moisturizer with Niacinamide & ...',
    description: '8+ hours of oil control + pearlescent glow',
    rating: 4.8,
    reviewsCount: 'See Reviews',
    price: 445,
    code: 'GLOW20',
    isBestseller: false,
    image: product2Img,
    bgColor: 'bg-[#F8E2E8]',
  },
  {
    id: 3,
    title: 'Oil & Acne Control Face Wash',
    description: 'Oil & acne-free skin in 3 days',
    rating: 4.9,
    reviewsCount: 'See Reviews',
    price: 249,
    code: 'GLOW20',
    isBestseller: false,
    image: product3Img,
    bgColor: 'bg-[#FBE4DD]',
  },
];

const MonsoonEssentials = () => {
  useEffect(() => {
    const initializeAos = () => {
      window.AOS?.init({
        duration: 2000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      });
    };
    const aosScript = document.querySelector('[data-aos-script]');

    if (window.AOS) {
      initializeAos();
      return undefined;
    }

    aosScript?.addEventListener('load', initializeAos);
    return () => aosScript?.removeEventListener('load', initializeAos);
  }, []);

  return (
    <section className="w-full bg-[#FFFBFD] px-4 py-12 font-['Plus_Jakarta_Sans',sans-serif] sm:px-6 lg:px-12 lg:py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:mb-6">
          <div>
            {/* Top Tag */}
            <div className="inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FA3B7B]" />
              <span className="text-xs font-bold text-[#FA3B7B] tracking-wider uppercase">
                HUMID SEASON CARE
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-3xl">
              Monsoon Essentials
            </h2>
          </div>

          {/* Right Side Link */}
          <a
            href="#all-monsoon"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#FA3B7B] hover:text-[#e0326e] transition-colors"
          >
            <span>See All Monsoon Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Products Grid (1 col sm, 2 col md, 3 col lg) */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {monsoonProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              data-aos="flip-right"
              data-aos-delay={idx * 120}
              className="group mx-auto flex w-full max-w-[360px] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl lg:max-w-none"
            >
              {/* Full-width landscape product image, matching the reference cards */}
              <div
                className={`relative aspect-[1.36/1] w-full overflow-hidden ${product.bgColor}`}
                style={{ perspective: '900px' }}
              >
                
                {/* Bestseller Badge */}
                {product.isBestseller && (
                  <span className="absolute top-4 left-4 z-10 bg-[#FA3B7B] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    BESTSELLER
                  </span>
                )}

                <motion.img
                  src={product.image}
                  alt={product.title}
                  whileHover={{ scale: 1.08, rotateY: -8, x: -3 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </div>

              {/* Bottom Details Section */}
              <div className="flex flex-grow flex-col justify-between p-3 sm:p-4 lg:p-3">
                <div>
                  {/* Product Title */}
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#FA3B7B] transition-colors leading-snug line-clamp-1">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating & Reviews Link */}
                  <div className="mt-2 flex items-center gap-1.5 lg:mt-1.5">
                    <div className="flex items-center text-amber-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                    <a href="#reviews" className="text-xs text-pink-600 font-semibold hover:underline">
                      {product.reviewsCount}
                    </a>
                  </div>
                </div>

                {/* Price, Coupon Code & Button */}
                <div className="mt-3 border-t border-gray-100 pt-3 lg:mt-2 lg:pt-2">
                  <div className="mb-3 flex items-center justify-between lg:mb-2">
                    <div className="text-xl font-extrabold text-gray-900 sm:text-2xl lg:text-xl">
                      ₹{product.price}
                    </div>

                    {/* Code Badge */}
                    <div className="border border-dashed border-pink-300 bg-pink-50/50 px-2.5 py-1 rounded-md">
                      <span className="text-[10px] font-bold text-[#FA3B7B] uppercase tracking-wide">
                        CODE: {product.code}
                      </span>
                    </div>
                  </div>

                  {/* Add to Bag Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FA3B7B] px-4 py-3 text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:bg-[#e0326e] sm:text-sm lg:py-2.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MonsoonEssentials;