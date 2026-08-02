import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function StudioPricing() {
  const washPricing = [
    { name: "Foam Wash & Decontamination", price: "₹450" },
    { name: "Underbody Anti-Rust Coating", price: "₹2,800" },
    { name: "Interior Deep Spa & Steam Sanitization", price: "₹3,200" },
    { name: "3-Stage Precision Paint Correction", price: "₹5,500" },
    { name: "German Infrared Ceramic Window Tint", price: "₹6,500" },
  ];

  const coatingPricing = [
    { name: "1-Year Ceramic Coating", price: "₹9,500" },
    { name: "3-Year Ceramic Coating", price: "₹14,500" },
    { name: "5-Year Ceramic Coating", price: "₹19,500" },
    { name: "3-Year Graphene Matrix Armor", price: "₹18,500" },
    { name: "5-Year Graphene Matrix Armor", price: "₹24,000" },
    { name: "5-Year Borophene Ultra-Shield", price: "₹36,000" },
    { name: "TPU Self-Healing PPF", price: "₹45,000" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#cba358] text-[10px] font-bold tracking-widest uppercase mb-4">
            Rate Card
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Studio Pricing
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Wash & Maintenance Card */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-6">Wash & Maintenance</h3>
            <div className="w-full h-px bg-white/5 mb-8" />
            
            <ul className="space-y-6">
              {washPricing.map((item, index) => (
                <li key={index} className="flex justify-between items-end gap-4">
                  <span className="text-gray-400 text-sm">{item.name}</span>
                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider font-medium">from</span>
                    <span className="text-[#cba358] font-mono font-bold">{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Coating & Protection Card */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-6">Coating & Protection</h3>
            <div className="w-full h-px bg-white/5 mb-8" />
            
            <ul className="space-y-6">
              {coatingPricing.map((item, index) => (
                <li key={index} className="flex justify-between items-end gap-4">
                  <span className="text-gray-400 text-sm">{item.name}</span>
                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider font-medium">from</span>
                    <span className="text-[#cba358] font-mono font-bold">{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-xs text-center md:text-left">
            Prices vary by vehicle size. Final quote given upon inspection.
          </p>
          
          <Link
            href="/book"
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
