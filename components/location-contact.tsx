"use client";

import React from "react";
import { MapPin, Clock, Phone, Send, Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LocationContact() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-[#FF2E2E] text-[10px] font-bold tracking-widest uppercase mb-4">
            Visit Our Studio In Falnir
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Location & Contact
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Drive in for a free digital paint assessment or schedule your detailing slot online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Map and Details */}
          <div className="flex flex-col gap-6">
            
            {/* Map Container */}
            <Link 
              href="https://maps.app.goo.gl/g46mipwkutXeqARS9"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden border border-white/5 bg-[#111] group cursor-pointer block"
            >
              <Image
                src="/images/map.png"
                alt="Studio Location Map"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Map Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-[#FF2E2E]/20 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-[#FF2E2E] rounded-full flex items-center justify-center shadow-lg shadow-[#FF2E2E]/50">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Info Card */}
            <div className="bg-[#161616] border border-white/5 rounded-3xl p-8 flex flex-col gap-6">
              
              {/* Address */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-[#FF2E2E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">Studio Address</h4>
                  <Link 
                    href="https://maps.app.goo.gl/g46mipwkutXeqARS9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm leading-relaxed block"
                  >
                    TOPGEAR HQ, Donbasco Hall, Falnir Cross Road, Manglore, Karnataka - 575001
                  </Link>
                </div>
              </div>

              <div className="w-full h-px bg-white/5" />

              {/* Hours */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-[#FF2E2E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">Working Hours</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Open 7 Days a Week: 9:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-white/5" />

              {/* Phone */}
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-[#FF2E2E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">Reach Out to Us</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +91 81051 56999
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#161616] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-2">Send Quick Inquiry</h3>
            <p className="text-gray-400 text-sm mb-8">
              Fill out the quick form below or click to chat with our team instantly.
            </p>

            <form className="flex flex-col gap-5 flex-1">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rohan Shetty"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF2E2E]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+91 81051 56999"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF2E2E]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                  Vehicle Make & Model *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. BMW M340i / Fortuner Legender"
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF2E2E]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                  Service Required
                </label>
                <input 
                  type="text" 
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2E2E]/50 transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex flex-col gap-4">
                <button 
                  type="button"
                  className="w-full bg-gradient-to-r from-[#FF2E2E] to-[#cc2525] hover:from-[#e62929] hover:to-[#b32020] text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,46,46,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Submit Inquiry
                  </span>
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="?book=true"
                    scroll={false}
                    className="w-full bg-[#111] border border-white/10 hover:bg-[#222] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">
                      Book Your Slot
                    </span>
                  </Link>
                  <Link
                    href="https://wa.me/918105156999"
                    target="_blank"
                    className="w-full bg-[#111] border border-white/10 hover:bg-[#222] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">
                      Chat on WhatsApp
                    </span>
                  </Link>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
