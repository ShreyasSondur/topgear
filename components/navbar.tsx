"use client";

import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-2 sm:px-4">
      <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-8 shadow-2xl w-full max-w-fit">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-4 shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center relative shrink-0">
            <span className="text-white font-bold text-[10px] sm:text-xs italic tracking-tighter">TG</span>
          </div>
          <span className="text-white font-bold tracking-wider sm:tracking-widest text-xs sm:text-sm uppercase whitespace-nowrap">
            Topgear HQ
          </span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Book Slot Button */}
          <Link
            href="?book=true"
            scroll={false}
            className="bg-gradient-to-r from-[#FF2E2E] to-[#cc2525] hover:from-[#e62929] hover:to-[#b32020] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1 sm:gap-2 transition-all shadow-[0_0_15px_rgba(255,46,46,0.4)] shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase whitespace-nowrap">
              Book Your Slot
            </span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
