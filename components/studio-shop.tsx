"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Truck, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudioShop() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth + 40 : scrollLeft + clientWidth - 40;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const products = [
    {
      title: "Topgear Shadow Crown Luxur...",
      desc: "Premium luxury car cologne formulated with notes of rich mahogany, velvet amber, and crisp...",
      price: "₹699",
      oldPrice: "₹999",
      rating: "4.9 (54)",
      badge: "BESTSELLER",
      badgeType: "red",
      volume: "100 ML",
      img: "/images/s1.png"
    },
    {
      title: "Topgear Forest Flow Botanical...",
      desc: "Natural botanical interior air refresher infused with Swiss pine needles, mountain cedar, and a...",
      price: "₹699",
      oldPrice: "₹999",
      rating: "4.9 (54)",
      badge: "NEW FORMULA",
      badgeType: "green",
      volume: "100 ML",
      img: "/images/s2.png"
    },
    {
      title: "Topgear Exotic Black Leather...",
      desc: "Exotic dark spice & fine leather fragrance engineered specifically for luxury cabins, restori...",
      price: "₹699",
      oldPrice: "₹999",
      rating: "4.9 (54)",
      badge: "BESTSELLER",
      badgeType: "red",
      volume: "100 ML",
      img: "/images/s3.png"
    },
    {
      title: "Topgear Midnight Mist...",
      desc: "Sophisticated night-blooming jasmine and musk designed to neutralize odors and leave a lastin...",
      price: "₹699",
      oldPrice: "₹999",
      rating: "4.9 (54)",
      badge: "",
      badgeType: "",
      volume: "100 ML",
      img: "/images/s3.png"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h3 className="text-[#FF2E2E] text-[10px] font-bold tracking-widest uppercase mb-4">
              Official Car Care Store
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Topgear Studio Shop
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Studio-tested SiO2 ceramic detailers, pH-neutral snow shampoos, and pro microfibers engineered for maximum depth and protection.
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0 mb-2">
            <button 
              onClick={() => scroll('left')}
              className="cursor-pointer w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-white hover:bg-[#222] hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="cursor-pointer w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-white hover:bg-[#222] hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/shop"
              className="bg-[#111111] border border-white/5 hover:border-white/10 hover:bg-[#222] text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all ml-2"
            >
              <span className="text-xs font-bold tracking-wider uppercase">
                Visit Full Shop
              </span>
              <ChevronRight className="w-4 h-4 text-[#FF2E2E]" />
            </Link>
          </div>
        </div>

        {/* Product Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="w-[260px] md:w-[290px] bg-[#141414] rounded-2xl border border-white/5 overflow-hidden snap-start flex flex-col shrink-0"
            >
              {/* Product Image Area */}
              <div className="relative h-[280px] w-full bg-gradient-to-b from-gray-300 to-[#141414] overflow-hidden flex items-center justify-center">
                {product.badge && (
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-white uppercase ${product.badgeType === 'red' ? 'bg-[#FF2E2E]' : 'bg-[#1EBE5D]'}`}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gray-500/80 text-[10px] font-bold tracking-wider text-white">
                  {product.volume}
                </div>
                
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
                
                {/* Gradient Fade up into image */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 relative z-10 -mt-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#FF2E2E] text-[10px] font-bold tracking-widest uppercase">
                    Interior
                  </span>
                  <div className="flex items-center gap-1 text-[#cba358]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-[10px] font-bold">{product.rating}</span>
                  </div>
                </div>
                
                <h4 className="text-white font-bold text-lg mb-3 leading-snug">
                  {product.title}
                </h4>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-1">
                  {product.desc}
                </p>
                
                <div className="w-full h-px bg-white/5 mb-5" />

                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <span className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                      Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white text-[28px] font-bold leading-none">{product.price}</span>
                      <span className="text-gray-500 text-[11px] line-through">{product.oldPrice}</span>
                    </div>
                  </div>
                  
                  <button className="bg-[#FF2E2E] hover:bg-[#e62929] text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(255,46,46,0.2)] shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-wider uppercase text-left leading-[1.1]">
                      Add To<br />Cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Footer */}
        <div className="mt-8 bg-[#161616] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          
          <div className="flex items-start gap-4">
            <Truck className="w-6 h-6 text-[#FF2E2E] shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-semibold text-sm mb-1">Pan-India Express Delivery</h5>
              <p className="text-gray-500 text-xs">Dispatched within 24 hours (3-5 business days)</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/5" />
          
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#FF2E2E] shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-semibold text-sm mb-1">Studio Tested Formulas</h5>
              <p className="text-gray-500 text-xs">Tested in coastal weather on high-end vehicles</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/5" />
          
          <div className="flex items-start gap-4">
            <Star className="w-6 h-6 text-[#cba358] shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-semibold text-sm mb-1">Free Shipping Above ₹999</h5>
              <p className="text-gray-500 text-xs">Automatic discount at checkout</p>
            </div>
          </div>

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
