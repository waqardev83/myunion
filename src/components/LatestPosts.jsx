import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CalendarDays, X } from 'lucide-react';

import teaTreeImage from '../assets/iamges/CARD-11.png';
import serumImage from '../assets/iamges/CARD-2.png';
import pimpleGelImage from '../assets/iamges/CARD-3.png';

const posts = [
  {
    title: 'Tea Tree vs Salicylic Acid Face Wash for Oily and Acne-Prone Skin',
    date: 'September 4, 2026',
    author: 'Foxtale Research & Development Team',
    excerpt:
      'The age-old question: Tea Tree or Salicylic Acid? is sure to have crossed your mind at...',
    image: teaTreeImage,
    alt: 'Tea tree wash and salicylic acid cleanser bottles',
    content:
      'Tea tree and salicylic acid can both be useful ingredients in a skincare routine for oily, blemish-prone skin. Tea tree is known for its clarifying feel, while salicylic acid helps exfoliate inside pores. Choose a cleanser based on your skin’s tolerance, introduce active ingredients gradually, and follow with a moisturizer.',
  },
  {
    title: 'How to Use Salicylic Acid at Night: Can You Leave It On Overnight?',
    date: 'September 4, 2026',
    author: 'Foxtale Research & Development Team',
    excerpt:
      'Salicylic Acid is a beta-hydroxy acid (BHA) commonly used for oily and acne-prone...',
    image: serumImage,
    alt: 'A dropper applying serum to a pearl shell',
    content:
      'Salicylic acid is a beta-hydroxy acid that can help loosen dead skin cells and clear excess oil from pores. Start with a low concentration and use it as directed on the product label. Some leave-on formulas are designed for overnight use, but avoid layering multiple strong actives and apply sunscreen during the day.',
  },
  {
    title: 'How to Use Pimple Gel: Benefits, How to Apply & When to Use It?',
    date: 'September 4, 2026',
    author: 'Foxtale Research & Development Team',
    excerpt:
      'A pimple that shows up the night before something important is one of the more...',
    image: pimpleGelImage,
    alt: 'Woman applying a skincare spot treatment to her cheek',
    content:
      'A spot gel is usually applied in a thin layer to clean, dry skin, following the product directions. Patch test first, avoid the eye area, and discontinue use if irritation develops. Pair your routine with a gentle cleanser and moisturizer rather than applying extra product for faster results.',
  },
];

const LatestPosts = () => {
  const [dialog, setDialog] = useState(null);

  return (
    <section id="latest-posts" className="w-full bg-white px-5 py-12 font-['Plus_Jakarta_Sans',sans-serif] sm:px-8 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#FA3B7B]">
              OUR BLOG
            </p>
            <h2 className="mb-1 text-[30px] font-bold leading-tight tracking-tight text-[#1B1B1B] sm:text-[34px]">
              Latest <span className="text-[#E93570]">Posts</span>
            </h2>
            <p className="text-[12px] text-[#69666A]">
              Skincare tips, ingredient guides and expert advice.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDialog({ type: 'all' })}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF1F4] px-5 py-3 text-[10px] font-semibold text-[#E93570] transition-colors hover:bg-[#FFE3EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E93570]"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col rounded-[18px] border border-[#F8E8EB] bg-white p-2.5"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="aspect-[1.6/1] w-full rounded-[12px] object-cover"
              />
              <div className="flex flex-1 flex-col px-0.5 pb-1 pt-4">
                <p className="mb-2 flex items-center gap-1.5 text-[10px] text-[#88848A]">
                  <CalendarDays className="h-3 w-3 text-[#E93570]" />
                  {post.date}
                </p>
                <h3 className="mb-2 text-[15px] font-bold leading-[1.35] tracking-tight text-[#191719]">
                  {post.title}
                </h3>
                <p className="mb-2 text-[10px] text-[#8B878D]">By {post.author}</p>
                <p className="mb-4 text-[10px] leading-[1.55] text-[#777279]">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => setDialog({ type: 'post', post })}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 text-[10px] font-bold uppercase text-[#E93570] hover:text-[#C92A5D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E93570]"
                >
                  Read More <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {dialog && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setDialog(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="blog-dialog-title"
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
            >
              <button
                type="button"
                onClick={() => setDialog(null)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-pink-50 hover:text-[#E93570]"
              >
                <X className="h-5 w-5" />
              </button>

              {dialog.type === 'all' ? (
                <>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#FA3B7B]">
                    OUR BLOG
                  </p>
                  <h3 id="blog-dialog-title" className="mb-5 pr-8 text-2xl font-bold text-[#1B1B1B]">
                    All Latest Posts
                  </h3>
                  <div className="space-y-3">
                    {posts.map((post) => (
                      <button
                        key={post.title}
                        type="button"
                        onClick={() => setDialog({ type: 'post', post })}
                        className="flex w-full items-center gap-4 rounded-xl border border-pink-100 p-3 text-left transition-colors hover:bg-pink-50"
                      >
                        <img src={post.image} alt="" className="h-16 w-20 rounded-lg object-cover" />
                        <span className="min-w-0 flex-1">
                          <span className="mb-1 block text-[10px] text-gray-500">{post.date}</span>
                          <span className="block text-sm font-semibold text-gray-900">{post.title}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-[#E93570]" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <article>
                  <img
                    src={dialog.post.image}
                    alt={dialog.post.alt}
                    className="mb-5 aspect-[1.8/1] w-full rounded-xl object-cover"
                  />
                  <p className="mb-2 text-[10px] text-[#88848A]">{dialog.post.date}</p>
                  <h3 id="blog-dialog-title" className="mb-3 pr-6 text-xl font-bold leading-tight text-[#1B1B1B] sm:text-2xl">
                    {dialog.post.title}
                  </h3>
                  <p className="mb-4 text-xs text-[#8B878D]">By {dialog.post.author}</p>
                  <p className="text-sm leading-7 text-[#555158]">{dialog.post.content}</p>
                </article>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LatestPosts;
