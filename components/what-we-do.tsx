"use client";

import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h3 className="text-[#FF2E2E] text-xs font-bold tracking-widest uppercase mb-4">
              What We Do
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-xl">
              Every service, tuned for<br className="hidden md:block" /> the vehicle itself.
            </h2>
          </div>
          
          <Link
            href="?book=true"
            scroll={false}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF2E2E] to-[#cc2525] hover:from-[#e62929] hover:to-[#b32020] text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(255,46,46,0.4)]"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wider uppercase">
              Book Your Slot
            </span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Wash */}
          <div className="group relative rounded-3xl bg-black border border-white/5 overflow-hidden flex flex-col aspect-[4/5] md:aspect-square lg:aspect-[4/5] hover:border-white/10 transition-colors">
            {/* Top Labels */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-gray-400 text-xs font-bold tracking-widest">0 1</span>
            </div>
            <div className="absolute top-6 right-6 z-20">
              <span className="text-gray-400 text-[10px] font-bold tracking-wider uppercase border border-white/10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">
                Studio
              </span>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-[65%] top-0">
              <Image
                src="/images/service-wash.png"
                alt="Car Wash Service"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Fade to Black */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Content Content */}
            <div className="relative z-10 mt-auto p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-3">Wash</h3>
              <p className="text-gray-400 text-sm mb-8 max-w-sm">
                Foam wash, interior vacuum & showroom-ready finish.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Exterior Foam Wash",
                  "Interior Vacuum",
                  "Tire & Rim Dressing",
                  "Glass Cleaning"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-4 h-0.5 bg-[#FF2E2E] rounded-full" />
                    <span className="text-gray-300 text-sm font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Coating & Protection */}
          <div className="group relative rounded-3xl bg-black border border-white/5 overflow-hidden flex flex-col aspect-[4/5] md:aspect-square lg:aspect-[4/5] hover:border-white/10 transition-colors">
            {/* Top Labels */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-gray-400 text-xs font-bold tracking-widest">0 2</span>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-[65%] top-0">
              <Image
                src="/images/service-coating.png"
                alt="Coating & Protection Service"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Fade to Black */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Content Content */}
            <div className="relative z-10 mt-auto p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-3">Coating & Protection</h3>
              <p className="text-gray-400 text-sm mb-8 max-w-sm">
                Ceramic, graphene & borophene coatings. German tech.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Ceramic 9H",
                  "Graphene Coating",
                  "Borophene 5-Year",
                  "Underbody Coating"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-4 h-0.5 bg-[#FF2E2E] rounded-full" />
                    <span className="text-gray-300 text-sm font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
