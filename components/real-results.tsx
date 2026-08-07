"use client";

import React, { useState, useRef } from "react";
import { ArrowLeftRight, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RealResults() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="bg-[#111111] py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-[#FF2E2E] text-[10px] font-bold tracking-widest uppercase mb-4">
            Real Results · No Filters
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Signature Transformation
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Drag the slider handle to inspect micro-swirl mark elimination and 3-stage mirror paint correction on an Audi A5 Sportback.
          </p>
        </div>

        {/* Image Comparison Slider */}
        <div 
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden select-none cursor-ew-resize group shadow-2xl border border-white/10 mb-8"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Underneath) */}
          <div className="absolute inset-0">
            <Image
              src="/images/results-before.png"
              alt="Before Paint Correction"
              fill
              className="object-cover pointer-events-none"
            />
          </div>

          {/* After Image (On Top, Clipped) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <Image
              src="/images/results-after.png"
              alt="After Paint Correction"
              fill
              className="object-cover pointer-events-none"
            />
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-[#FF2E2E]/80 shadow-[0_0_10px_rgba(255,46,46,0.8)] z-20 pointer-events-none transition-transform duration-75 ease-out"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black border-2 border-[#FF2E2E] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <ArrowLeftRight className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <span className="text-gray-300 text-[10px] md:text-xs font-bold tracking-wider uppercase">
                Heavy Swirl Marks & Oxidation
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 z-30 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md border border-[#FF2E2E]/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(255,46,46,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF2E2E]" />
              <span className="text-white text-[10px] md:text-xs font-bold tracking-wider uppercase">
                3-Stage Paint Correction · Audi A5
              </span>
            </div>
          </div>
        </div>

        {/* Featured Client Vehicle Card */}
        <div className="w-full bg-[#161616] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h4 className="text-[#FF2E2E] text-[10px] font-bold tracking-widest uppercase mb-2">
              Featured Client Vehicle
            </h4>
            <p className="text-white text-lg md:text-xl font-medium tracking-tight">
              3-Stage Paint Correction & SiO2 Glaze — Audi A5
            </p>
          </div>

          <Link
            href="?book=true"
            scroll={false}
            className="bg-gradient-to-r from-[#FF2E2E] to-[#cc2525] hover:from-[#e62929] hover:to-[#b32020] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,46,46,0.4)] shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-xs md:text-sm font-bold tracking-wider uppercase">
              Book Your Slot
            </span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
