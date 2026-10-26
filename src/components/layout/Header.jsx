import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  User, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';

// Logo Image Import
import logoImg from '../../assets/iamges/logoimg.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const navLinks = [
    {
      id: 'skincare',
      name: 'Skincare',
      hasDropdown: true,
      items: ['Cleansers', 'Toners & Serums', 'Sunscreen', 'Face Masks', 'Lip Care'],
    },
    {
      id: 'moisturizers',
      name: 'Moisturizers',
      hasDropdown: true,
      badge: 'NEW',
      badgeStyle: 'bg-[#31C48D] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider',
      items: ['Gel Moisturizer', 'Night Cream', 'Barrier Repair', 'Hydrating Lotion'],
    },
    {
      id: 'bodycare',
      name: 'Bodycare',
      hasDropdown: false,
    },
    {
      id: 'giftsets',
      name: 'Gift Sets',
      hasDropdown: true,
      badge: 'HULA HOOP',
      badgeStyle: 'bg-[#FFD700] text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm',
      items: ['Mini Combos', 'Birthday Hampers', 'Luxury Gift Sets'],
    },
    {
      id: 'about',
      name: 'About',
      hasDropdown: false,
    },
    {
      id: 'blogs',
      name: 'Blogs',
      hasDropdown: false,
    },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 font-['Plus_Jakarta_Sans',sans-serif] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: Brand Logo Image */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2">
            <img 
              src={logoImg} 
              alt="Foxtale"
              className="h-12 sm:h-14 w-auto shrink-0 object-contain"
            />
           
          </a>
        </div>

        {/* Center: Desktop Navigation Bar with Hover Button Effect */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              {/* Nav Item Button Style on Hover */}
              <div className="flex items-center gap-1.5 cursor-pointer px-3 py-2 rounded-lg text-[#333333] hover:bg-[#FA3B7B] hover:text-white transition-all duration-200 group">
                <span className="text-[14px] font-medium tracking-tight">
                  {link.name}
                </span>

                {/* Badge */}
                {link.badge && (
                  <span className={link.badgeStyle}>
                    {link.badge}
                  </span>
                )}

                {/* Dropdown Chevron Arrow */}
                {link.hasDropdown && (
                  <ChevronDown 
                    className={`w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-transform duration-200 ${
                      activeDropdown === link.id ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </div>

              {/* Desktop Dropdown Submenu */}
              <AnimatePresence>
                {link.hasDropdown && activeDropdown === link.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 min-w-[200px] bg-white border border-gray-200 rounded-xl shadow-xl p-3 z-50 mt-1"
                  >
                    <div className="flex flex-col space-y-1">
                      {link.items?.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="px-3 py-2 text-xs text-gray-700 hover:text-white hover:bg-[#FA3B7B] rounded-lg transition-colors duration-150"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Side: Search, Profile, Cart Icons & Mobile Toggler */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#FA3B7B]" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden items-center gap-3 lg:flex">
            <button aria-label="Search" className="p-1 lg:p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>

            <button aria-label="Profile" className="p-1 lg:p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <User className="w-5 h-5" />
            </button>

            <button aria-label="Cart" className="relative p-1 lg:p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#FA3B7B] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-x-0 top-20 bottom-0 z-40 bg-black/30 lg:hidden"
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed left-0 top-20 bottom-0 z-50 w-[min(85vw,360px)] overflow-y-auto border-r border-gray-200 bg-white px-6 py-4 shadow-2xl lg:hidden"
            >
              <div className="mb-3 flex items-center justify-end gap-3 border-b border-gray-100 pb-3">
                <button aria-label="Search" className="p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">
                  <Search className="h-5 w-5" />
                </button>
                <button aria-label="Profile" className="p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">
                  <User className="h-5 w-5" />
                </button>
                <button aria-label="Cart" className="relative p-2 text-gray-700 hover:text-black transition-colors rounded-full hover:bg-gray-100">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute top-1 right-1 bg-[#FA3B7B] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                    0
                  </span>
                </button>
              </div>
              <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.id} className="border-b border-gray-100 pb-2 pt-1">
                  <div
                    onClick={() => {
                      if (link.hasDropdown) {
                        setMobileActiveDropdown(
                          mobileActiveDropdown === link.id ? null : link.id
                        );
                      }
                    }}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-pink-50 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 text-sm font-medium">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className={link.badgeStyle}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    {link.hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          mobileActiveDropdown === link.id ? 'rotate-180 text-[#FA3B7B]' : ''
                        }`} 
                      />
                    )}
                  </div>

                  {link.hasDropdown && mobileActiveDropdown === link.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 pt-2 flex flex-col space-y-2 text-xs text-gray-600"
                    >
                      {link.items?.map((subItem, idx) => (
                        <a key={idx} href="#" className="hover:text-[#FA3B7B] py-1">
                          • {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;