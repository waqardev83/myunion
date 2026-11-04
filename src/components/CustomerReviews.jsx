import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

import reviewBackground from '../assets/iamges/BGIMAGE.png';
import reviewImageOne from '../assets/iamges/card-meta2.png';
import reviewImageTwo from '../assets/iamges/before-after1.png';

const reviews = [
  {
    quote:
      '“I’d been looking for a serum that gives me a glow without irritation, and this does just that. In just a few days, my skin looked brighter, clearer, and more even. Lightweight, quick-absorbing, and a glow that appears visibly fast. Love this!”',
    name: 'Shambhavi',
    city: 'Mumbai',
    initials: 'S',
    image: reviewImageOne,
  },
  {
    quote:
      '“My skin looks so much brighter & hydrated from day 1! Plus, this moisturizer feels very lightweight! It has replaced expensive facials for me!”',
    name: 'Gargi',
    city: 'Mumbai',
    initials: 'G',
    image: reviewImageTwo,
  },
];

const CustomerReviews = () => (
  <section id="reviews" className="w-full bg-white px-5 py-12 font-['Plus_Jakarta_Sans',sans-serif] sm:px-8 sm:py-14 lg:px-10">
    <div className="mx-auto max-w-[1200px]">
      <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#FA3B7B]">
            REAL STORIES
          </p>
          <h2 className="text-[27px] font-bold leading-tight tracking-tight text-[#1B1B1B] sm:text-[30px]">
            What Our Customers Say
          </h2>
        </div>
        <a
          href="#reviews"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF1F4] px-5 py-3 text-[10px] font-bold text-[#1B1B1B] transition-colors hover:bg-[#FFE3EA]"
        >
          See All Reviews <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="relative flex min-h-[352px] flex-col overflow-hidden rounded-[20px] bg-gradient-to-br from-[#FFE3E7] to-[#FFF4F5] p-7"
        >
          <img
            src={reviewBackground}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 top-[92px] h-[190px] w-[220px] object-contain opacity-45"
          />
          <div className="relative z-10">
            <p className="mb-4 text-[14px] leading-relaxed text-[#A7A0A2] line-through">
              People trust ads.<br />People trust brands.
            </p>
            <h3 className="mb-4 text-[24px] font-bold leading-[1.12] tracking-tight text-[#1B1B1B]">
              People believe<br />
              <span className="text-[#E93570]">what they see.</span>
            </h3>
            <p className="max-w-[215px] text-[11px] leading-[1.55] text-[#393539]">
              In skincare, what builds trust is seeing results that work from the source, through the surface.
            </p>
          </div>
          <a
            href="#reviews"
            className="relative z-10 mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#E93570] px-5 py-3 text-[10px] font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
          >
            Glowing Results from Our Wonder Women <ArrowRight className="h-3 w-3" />
          </a>
        </article>

        {reviews.map((review, index) => (
          <article
            key={review.name}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay={(index + 1) * 120}
            className="flex min-h-[352px] flex-col rounded-[20px] border border-[#F5E3E6] bg-white p-5 shadow-[0_3px_5px_rgba(27,27,27,0.16)]"
          >
            <div className="mb-2 flex gap-0.5 text-[#FA3B7B]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[10px] leading-[1.55] text-[#444044]">{review.quote}</p>

            <div className="mb-4 mt-6 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FCE1E7] text-[10px] font-bold text-[#C43163]">
                {review.initials}
              </span>
              <p className="text-[10px] font-bold text-[#242124]">
                {review.name}, {review.city}
              </p>
            </div>

            <img
              src={review.image}
              alt={`${review.name}'s before and after results`}
              className="mt-auto aspect-[2/1] w-full rounded-[10px] object-cover opacity-100"
            />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerReviews;
