import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Sparkles } from 'lucide-react';

// Product Images Import (Apni images ke paths yahan check kar lein)
import vitCImg from '../assets/iamges/image-container.png';
import niacinamideImg from '../assets/iamges/image-container (1).png';
import moisturizerImg from '../assets/iamges/image-container (2).png';
import sunscreenImg from '../assets/iamges/image-container (3).png';

const products = [
  {
    id: 1,
    title: '10% Vitamin C + Glutathione Serum',
    description: 'Brightens dull skin and helps reduce the appearance of dark spots.',
    rating: 4.8,
    reviews: '2.4k',
    price: 699,
    originalPrice: 899,
    isBestseller: true,
    image: vitCImg,
    bgColor: 'bg-[#FBE4DD]',
  },
  {
    id: 2,
    title: '12% Niacinamide Clarifying Serum',
    description: 'Helps control excess oil, breakouts and the look of acne marks.',
    rating: 4.7,
    reviews: '1.8k',
    price: 645,
    originalPrice: 799,
    isBestseller: true,
    image: niacinamideImg,
    bgColor: 'bg-[#F6E3DB]',
  },
  {
    id: 3,
    title: 'Barrier+ Hydrating Moisturizer',
    description: 'Long-lasting hydration for soft, healthy-looking skin.',
    rating: 4.8,
    reviews: '1.2k',
    price: 599,
    originalPrice: 749,
    isBestseller: false,
    image: moisturizerImg,
    bgColor: 'bg-[#EBDCF9]',
  },
  {
    id: 4,
    title: 'Glow Shield SPF 50 Sunscreen',
    description: 'Daily broad-spectrum protection with a lightweight, glow-friendly finish.',
    rating: 4.9,
    reviews: '3.1k',
    price: 549,
    originalPrice: 699,
    isBestseller: true,
    image: sunscreenImg,
    bgColor: 'bg-[#F9E2D8]',
  },
];

const GlowSpotlight = () => {
  return (
    <section className="w-full bg-[#FFFBFD] py-16 px-4 sm:px-6 lg:px-12 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FA3B7B]" />
            <span className="text-xs font-bold text-[#FA3B7B] tracking-widest uppercase">
              GLOW SPOTLIGHT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight leading-tight">
            The Products Everyone's <br className="hidden sm:block" />
            <span className="text-[#FA3B7B]">Talking About</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-xs sm:text-sm  font-normal max-w-lg mt-3">
            Our most-loved formulas, chosen for visible results and everyday routines.
          </p>
        </div>

        {/* Product Grid Responsive Layout (1 col sm, 2 col md, 4 col lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_0_16px_rgba(250,59,123,0.12)] hover:shadow-[0_0_28px_rgba(250,59,123,0.3)] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Full-bleed product image */}
              <div className={`relative aspect-square w-full ${product.bgColor} overflow-hidden`}>
                <motion.img
                  src={product.image}
                  alt={product.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Details Section */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Product Title */}
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#FA3B7B] transition-colors leading-snug line-clamp-1">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 mt-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                {/* Price & Bestseller Badge */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-gray-900">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>

                    {product.isBestseller && (
                      <span className="text-[10px] font-bold text-[#FA3B7B] bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Action Buttons: Add to Bag + Heart Wishlist */}
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 bg-[#FA3B7B] hover:bg-[#e0326e] text-white text-xs font-semibold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </motion.button>

                    <button
                      aria-label="Add to Wishlist"
                      className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-[#FA3B7B] hover:border-pink-300 hover:bg-pink-50 transition-all flex items-center justify-center"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlowSpotlight;