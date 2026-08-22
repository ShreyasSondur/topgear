import React from "react";
import { ChevronRight, MapPin, ShieldCheck } from "lucide-react";
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
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  {/* Logo Icon Placeholder */}
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                    <span className="text-white font-bold italic text-lg pr-1">TG</span>
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Topgear HQ</span>
                </div>

                {/* GSTIN Badge */}
                <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 px-3.5 py-1.5 rounded-full text-xs shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF2E2E]" />
                  <span className="text-gray-400 font-medium">GSTIN:</span>
                  <span className="text-white font-mono font-bold tracking-wider">29DOHPB1768C1Z2</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs">
                © 2026 Topgear HQ. All rights reserved. • GST Registered Business
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
                  href="https://wa.me/918105156999"
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
            <div className="flex flex-col gap-6 items-center">
              <Link 
                href="https://www.instagram.com/topgear.tg?igsh=a2l3d3hvdGtsNzk=&igsi=a2l3d3hvdGtsNzk="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[#E4405F] transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link 
                href="https://wa.me/918105156999" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="WhatsApp: +91 81051 56999"
                aria-label="WhatsApp (+91 81051 56999)"
                className="text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </Link>
              <Link 
                href="https://maps.app.goo.gl/g46mipwkutXeqARS9" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Google Maps: TOPGEAR HQ, Donbasco Hall, Falnir Cross Road, Manglore-575001"
                aria-label="Google Maps Location"
                className="text-gray-400 hover:text-[#FF2E2E] transition-colors"
              >
                <MapPin className="w-6 h-6" />
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
