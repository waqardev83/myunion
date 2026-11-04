import React from 'react';

// Right Side Cream Swirl Graphic Image Import (Apna path verify kar lein)
import rightFooterSwirlImg from '../../assets/iamges/footer-img.png';

const Footer = () => {
  const popularSearches = [
    'Moisturizer for oily skin',
    'Sunscreen for oily skin',
    'Facewash for oily skin',
    'Moisturizer for dry skin',
    'Sunscreen for dry skin',
    'Facewash for dry skin',
  ];

  return (
    <footer className="w-full font-['Plus_Jakarta_Sans',sans-serif] bg-[#FCDCE2] text-gray-800 relative overflow-hidden">
      
      {/* Decorative swirl anchored at the lower-right of the footer */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[360px] opacity-80 sm:w-[480px] lg:w-[620px]">
        <img
          src={rightFooterSwirlImg}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full -scale-x-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:justify-items-stretch lg:gap-10">
          
          {/* Brand Info & Clickable Social Icons (Span 3) */}
          <div className="flex w-full max-w-[360px] flex-col items-center justify-between text-center lg:col-span-3 lg:max-w-none lg:items-start lg:text-left">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                Foxtale
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                Real Ingredients. <br />
                Real Results.
              </p>
            </div>

            {/* Clickable Social Media Links */}
            <div className="mt-6 flex items-start justify-center gap-3 lg:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group relative flex w-12 flex-col items-center sm:w-14"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.6" cy="6.7" r="1" className="fill-current stroke-none" />
                  </svg>
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-800 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  Instagram
                </span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group relative flex w-12 flex-col items-center sm:w-14"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M13.55 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.54 3.05 15.55 3 14.39 3c-2.42 0-4.08 1.48-4.08 4.2v2.4H7.57v3.2h2.74V21h3.24Z" />
                  </svg>
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-800 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  Facebook
                </span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="group relative flex w-12 flex-col items-center sm:w-14"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="3" />
                    <path d="m10 9 5 3-5 3z" className="fill-current stroke-none" />
                  </svg>
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-800 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  YouTube
                </span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="group relative flex w-12 flex-col items-center sm:w-14"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="m9 9 6 6m0-6-6 6" />
                  </svg>
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-800 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  X
                </span>
              </a>
            </div>
          </div>

          {/* Column 1: Order & Support (Span 2) */}
          <div className="w-full max-w-[360px] text-center lg:col-span-2 lg:max-w-none lg:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">
              ORDER & SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-gray-600 sm:text-sm">
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Track My Order</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Column 2: Information (Span 2) */}
          <div className="w-full max-w-[360px] text-center lg:col-span-2 lg:max-w-none lg:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">
              INFORMATION
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-gray-600 sm:text-sm">
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Ingredients Glossary</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us (Span 2) */}
          <div className="w-full max-w-[360px] text-center lg:col-span-2 lg:max-w-none lg:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-900">
              CONTACT US
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-gray-600 sm:text-sm">
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Get in touch</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-[#FA3B7B] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* App Download & Newsletter Subscribe (Span 3) */}
          <div className="flex w-full max-w-[360px] flex-col justify-between text-center lg:col-span-3 lg:max-w-none lg:text-left">
            <div className="w-full">
              <h4 className="mb-3 text-xs font-bold text-gray-900 sm:text-sm">
                Download the App now.
              </h4>

              {/* App Badges */}
              <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
                <a
                  href="#"
                  className="flex-1 bg-black text-white px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
                >
                  <div className="text-[10px] leading-tight text-left">
                    <span className="block text-gray-400">Download on the</span>
                    <span className="font-bold text-xs">App Store</span>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex-1 bg-black text-white px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
                >
                  <div className="text-[10px] leading-tight text-left">
                    <span className="block text-gray-400">GET IT ON</span>
                    <span className="font-bold text-xs">Google Play</span>
                  </div>
                </a>
              </div>

              <p className="mb-4 text-[11px] leading-relaxed text-gray-500">
                Stay up to date with our latest offers and product launches & be the first to get exclusive offers and sale information.
              </p>

              {/* Email Subscription Form */}
              <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-pink-200 shadow-sm focus-within:ring-2 focus-within:ring-[#FA3B7B]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 text-xs text-gray-800 outline-none rounded-full bg-transparent"
                />
                <button
                  type="button"
                  className="bg-[#FA3B7B] hover:bg-[#e0326e] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Popular Searches Horizontal List */}
        <div className="pt-10 mt-10 border-t border-pink-200/60">
          <h4 className="text-xs font-bold text-gray-900 mb-3">
            Popular Searches
          </h4>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {popularSearches.map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-2 bg-white/70 hover:bg-white text-gray-700 hover:text-[#FA3B7B] text-xs font-medium rounded-full border border-pink-200/60 transition-all shadow-2xs"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Caution Notice Banner */}
        <div className="pt-10 mt-10 border-t border-pink-200/60 text-center space-y-2">
          <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Caution Notice
          </h5>
          <p className="text-[11px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
            There's been an increase in scams through phone, SMS, WhatsApp, emails, and more.
          </p>
          <p className="text-[11px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Please Note: CharmsStudio <span className="font-bold text-gray-900">never asks for payments</span> for products or promotional activities outside our official platform. We <span className="font-bold text-gray-900">also do not ask for payments</span> to join contests, lucky draws, or to get free gifts.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;