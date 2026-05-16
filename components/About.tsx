'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Book, Globe, Check, ArrowRight, Phone, Medal } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-rose-950/[0.02] uppercase tracking-[0.2em] pointer-events-none select-none z-0">
        JGU
      </div>

      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-jgu-gold/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-96 h-96 bg-rose-950/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: Staggered Image Composition with Golden Rings */}
          <div className="relative pt-10">
            <div className="flex flex-col gap-10">
              {/* Top Image: Large & Wide */}
              <div className="relative w-[90%] ml-auto group">
                <div className="absolute -inset-1.5 border border-jgu-gold/60 rounded-2xl -z-10 translate-x-2 translate-y-2" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-stone-100">
                  <Image 
                    src="https://picsum.photos/seed/about-wide-1/1200/800" 
                    alt="JG University Campus" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Middle Image: Staggered Right */}
              <div className="relative w-[85%] md:w-[70%] ml-auto -mt-12 md:-mt-24 z-10 group">
                <div className="absolute -inset-1.5 border border-jgu-gold/60 rounded-2xl -z-10 translate-x-2 translate-y-2" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-stone-100">
                  <Image 
                    src="https://picsum.photos/seed/about-square-2/800/600" 
                    alt="Student Collaboration" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Bottom Image: Large & Shifted Left */}
              <div className="relative w-full md:w-[90%] -mt-16 md:-mt-32 z-20 group">
                <div className="absolute -inset-1.5 border border-jgu-gold/60 rounded-2xl -z-10 translate-x-2 translate-y-2" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] bg-stone-100">
                  <Image 
                    src="https://picsum.photos/seed/about-bottom-3/1200/700" 
                    alt="Modern Lab" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 30+ Years Legacy Card - Matching Screenshot */}
                <div className="absolute bottom-4 md:-bottom-10 left-4 md:-left-4 bg-jgu-gold px-4 md:px-8 py-4 md:py-8 rounded-xl md:rounded-2xl shadow-3xl text-rose-950 flex items-center gap-3 md:gap-6 z-30 transition-transform hover:scale-105">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#800000] flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Medal size={20} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-black font-outfit uppercase tracking-tighter leading-none">30+ Years</div>
                    <div className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.3em] mt-1 opacity-90">Of Academic Legacy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="space-y-12 lg:pl-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-jgu-gold" />
                <span className="text-jgu-gold font-black uppercase tracking-[0.5em] text-[11px] md:text-xs">About JG UNIVERSITY</span>
              </div>
              <h2 className="text-4xl md:text-8xl font-black font-outfit text-rose-950 leading-[1.1] md:leading-[0.9] tracking-tighter">
                Inspiring Minds.<br/>
                <span className="text-[#800000] font-serif italic font-medium">Engineering</span> Tomorrow.
              </h2>
              <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium">
                JG University is committed to nurturing future-ready professionals through interdisciplinary education, rigorous research, and immersive industry exposure. Located on a verdant 65-acre campus in Bhopal, we combine timeless values with cutting-edge pedagogy to deliver an academic experience that is truly transformative.
              </p>
            </div>

            {/* Feature Icons - Fixed layout from screenshot */}
            <div className="flex flex-col md:flex-row gap-12">
               <div className="flex gap-5 group items-start">
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-[#800000] shrink-0 shadow-sm">
                     <Book size={24} />
                  </div>
                  <div className="space-y-1">
                     <h4 className="text-xl font-black text-rose-950 font-outfit">Academic Excellence</h4>
                     <p className="text-[13px] text-slate-500 leading-snug font-medium max-w-[200px]">NAAC A+ accredited curriculum co-designed with industry leaders.</p>
                  </div>
               </div>
               <div className="flex gap-5 group items-start">
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-[#800000] shrink-0 shadow-sm">
                     <Globe size={24} />
                  </div>
                  <div className="space-y-1">
                     <h4 className="text-xl font-black text-rose-950 font-outfit">Global Exposure</h4>
                     <p className="text-[13px] text-slate-500 leading-snug font-medium max-w-[200px]">Student exchange tie-ups across 22 universities in 14 countries.</p>
                  </div>
               </div>
            </div>

            {/* Tick List Bullets - Matching reference */}
            <div className="space-y-5">
               {[
                 "75+ industry-aligned programs across 9 schools",
                 "Research grants from DST, ICMR, and global foundations",
                 "Mandatory internships and capstone projects in every program"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-slate-600 font-bold text-sm md:text-base group">
                    <div className="w-5 h-5 rounded-full bg-rose-950/10 flex items-center justify-center text-rose-950 shrink-0 group-hover:bg-[#800000] group-hover:text-white transition-colors">
                       <Check size={14} className="stroke-[4px]" />
                    </div>
                    {item}
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap items-center gap-12 pt-6">
               <button className="bg-[#800000] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[11px] md:text-xs hover:bg-rose-950 transition-all shadow-2xl flex items-center gap-4 group">
                  DISCOVER MORE
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </button>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center text-[#800000] shadow-inner ring-1 ring-stone-100 group cursor-pointer hover:bg-jgu-gold/20 transition-colors">
                    <Phone size={28} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-jgu-gold uppercase tracking-[0.4em] mb-1">CALL ADMISSIONS</span>
                    <span className="text-2xl md:text-3xl font-black text-rose-950 tracking-tighter leading-none">+91 755 456 7890</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

