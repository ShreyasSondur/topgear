"use client";

import React, { useState, useRef, useEffect } from "react";
import { ShieldCheck, ArrowLeftRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
    <div className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#FF2E2E]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center pt-32 px-4 w-full max-w-[1400px] mx-auto">
        
        {/* Badge */}
        <div className="flex items-center gap-2 border border-[#FF2E2E]/30 bg-black/50 px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
          <ShieldCheck className="w-5 h-5 text-[#FF2E2E]" />
          <span className="text-[#FF2E2E] text-sm font-bold tracking-widest uppercase">
            Mangaluru's Premium Car Care Studio
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-[84px] font-extrabold text-white text-center leading-tight mb-8 tracking-tight">
          Your Car Deserves <br />
          Better Than a <span className="text-[#FF2E2E] bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-[#FF2E2E] to-90%">Wash.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center max-w-3xl text-base md:text-xl leading-relaxed mb-16">
          Ceramic coating, PPF, and precision detailing — engineered with German technology, finished by
          hand. For cars and bikes in Falnir, Mangaluru.
        </p>

        {/* Image Comparison Slider */}
        <div 
          className="relative w-full max-w-[1200px] aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden select-none cursor-ew-resize group shadow-2xl shadow-black/50"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Dirty Car (Underneath) */}
          <div className="absolute inset-0">
            <Image
              src="/images/car-dirty.png"
              alt="Car with unprotected road dust"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>

          {/* Clean Car (On Top, Clipped) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <Image
              src="/images/car-clean.png"
              alt="Car with ceramic shine"
              fill
              className="object-cover pointer-events-none"
              priority
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
              <span className="text-gray-300 text-xs font-bold tracking-wider uppercase">
                Unprotected Road Dust
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 z-30 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md border border-[#FF2E2E]/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(255,46,46,0.2)]">
              <div className="w-2 h-2 rounded-full bg-[#FF2E2E] animate-pulse" />
              <span className="text-white text-xs font-bold tracking-wider uppercase">
                Topgear Ceramic Shine
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Features Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div className="text-gray-400 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer">
              German Technology
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="text-gray-400 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer">
              Open 7 Days • 9 AM–5 PM
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="text-gray-400 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer">
              Pickup & Drop Available
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="text-gray-400 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors cursor-pointer">
              320+ Google Reviews — 4.9★
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 flex items-center justify-center"
      >
        {/* Simple inline SVG for WhatsApp icon to avoid extra dependencies if lucide doesn't have it (lucide doesn't have specific brand icons easily sometimes, let's just use a clean SVG) */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </Link>
    </div>
  );
}
