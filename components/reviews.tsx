"use client";

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth + 40 : scrollLeft + clientWidth - 40;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      text: "The 5-year borophene coating on my Thar looks unreal. Water just slides off. Worth every rupee.",
      author: "Rohit K.",
      initial: "R"
    },
    {
      text: "Booked a full interior detail — got my car back looking better than the day I bought it.",
      author: "Priya M.",
      initial: "P"
    },
    {
      text: "Paint correction on my Audi removed swirls I'd lived with for years. Studio-grade work.",
      author: "Vikram S.",
      initial: "V"
    },
    {
      text: "The attention to detail here is unmatched. They ceramic coated my bike and it looks better than showroom condition.",
      author: "Arjun D.",
      initial: "A"
    }
  ];

  return (
    <section className="bg-[#161616] py-24 px-4 sm:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h3 className="text-[#FF2E2E] text-[10px] font-bold tracking-widest uppercase mb-3">
              Reviews
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Rated <span className="text-[#FF2E2E]">4.9★</span> by 500+ owners.
            </h2>
          </div>
          
          <div className="flex items-center gap-3 shrink-0 mb-2 md:mb-4">
            <button 
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-white hover:bg-[#222] hover:border-white/10 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-white hover:bg-[#222] hover:border-white/10 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <a 
              href="#"
              className="bg-[#111111] border border-white/5 hover:border-white/10 text-white px-4 py-2 rounded-full flex items-center gap-1.5 transition-all ml-2"
            >
              <Star className="w-3.5 h-3.5 text-[#cba358] fill-current" />
              <span className="text-[10px] font-bold tracking-wider">
                4.9 Google Reviews
              </span>
            </a>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[280px] md:w-[320px] bg-[#161616] rounded-xl border border-white/5 p-6 md:p-8 snap-start flex flex-col shrink-0"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 text-[#cba358] fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white text-sm md:text-[15px] font-medium leading-relaxed mb-6 flex-1">
                {review.text}
              </p>
              
              <div className="w-full h-px bg-white/5 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4a1c1c] flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-semibold">{review.initial}</span>
                </div>
                <span className="text-gray-300 text-xs font-medium">{review.author}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
