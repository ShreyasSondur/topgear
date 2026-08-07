import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Branding Card */}
          <div className="md:col-span-7 bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-2">
                Drive Clean.<br />
                Drive Protected.<br />
                Drive Topgear.
              </h2>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 mb-4">
                {/* Logo Icon Placeholder */}
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                  <span className="text-white font-bold italic text-lg pr-1">TG</span>
                </div>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Topgear HQ</span>
              </div>
              <p className="text-gray-500 text-xs">
                © 2026 Topgear HQ. All rights reserved.
              </p>
            </div>
          </div>

          {/* Middle Column Stack */}
          <div className="md:col-span-4 flex flex-col gap-4">
            
            {/* Connect Card */}
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-3">Connect With Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Have questions about your vehicle? Direct chat with our head detailer on WhatsApp.
              </p>
              <div>
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF2E2E] to-[#cc2525] hover:from-[#e62929] hover:to-[#b32020] text-white px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,46,46,0.2)]"
                >
                  <span className="text-[10px] font-bold tracking-wider uppercase">
                    Chat on WhatsApp
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Legal Links Card */}
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 flex items-center justify-between gap-4">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium">
                Shipping & Returns
              </Link>
            </div>
            
          </div>

          {/* Social Card */}
          <div className="md:col-span-1 bg-[#111111] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center gap-8 min-h-[320px]">
            <h3 className="text-xl font-bold text-white">Social</h3>
            <div className="flex flex-col gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.59-4H14V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Designed and Developed By Credits */}
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-center w-full pb-4">
          <Link 
            href="https://www.technologi.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full bg-[#111111] border border-white/5 hover:border-white/10 hover:bg-[#161616] transition-all duration-700 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] cursor-pointer relative overflow-hidden"
          >
            {/* Shine effect across the entire pill */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            
            <span className="text-gray-500 text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase group-hover:text-gray-300 transition-colors duration-500 relative z-10 mt-0.5">
              Developed By
            </span>
            
            {/* Divider Dot */}
            <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[#FF2E2E] transition-colors duration-500 relative z-10" />
            
            <div className="flex items-baseline relative z-10 group-hover:scale-105 transition-transform duration-500">
              <span className="text-[#FF2E2E] font-black italic text-sm sm:text-base md:text-lg tracking-tighter drop-shadow-[0_0_8px_rgba(255,46,46,0.3)]">Techno</span>
              <span className="text-[#25D366] font-black text-sm sm:text-base md:text-lg tracking-tight drop-shadow-[0_0_8px_rgba(37,211,102,0.3)]">LOGI</span>
            </div>
          </Link>
        </div>

      </div>
    </footer>
  );
}
