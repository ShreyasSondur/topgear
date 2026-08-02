"use client";

import React from "react";

export default function StudioImages() {
  const images = [
    { src: "/images/m1.png", alt: "Studio Transformation 1" },
    { src: "/images/m2.png", alt: "Studio Transformation 2" },
    { src: "/images/m3.png", alt: "Studio Transformation 3" },
    { src: "/images/m4.png", alt: "Studio Transformation 4" },
    { src: "/images/m5.png", alt: "Studio Transformation 5" },
    { src: "/images/m6.png", alt: "Studio Transformation 6" },
  ];

  return (
    <section className="bg-[#111111] pb-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <h3 className="text-gray-300 text-sm font-medium tracking-wide mb-8">
          More Recent Studio Transformations
        </h3>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
