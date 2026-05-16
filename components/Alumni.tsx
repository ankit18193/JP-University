'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const alumni = [
  {
    name: "Vikram Singh",
    role: "Senior Product Designer",
    company: "Meta, Palo Alto",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80",
    quote: "JGU's global curriculum gave me the edge to compete at an international level."
  },
  {
    name: "Priya Varma",
    role: "Data Scientist",
    company: "Amazon, Seattle",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=500&q=80",
    quote: "The research culture and faculty support were instrumental in my career shift."
  },
  {
    name: "Arjun Reddy",
    role: "Founding Engineer",
    company: "FinTech Unicorn",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=500&q=80",
    quote: "I launched my first startup on campus with the university's incubation support."
  }
];

export default function Alumni() {
  return (
    <section className="py-16 md:py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-jgu-gold" />
              <span className="text-jgu-gold font-black uppercase tracking-[0.4em] text-[11px]">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black font-outfit text-rose-950 tracking-tighter">
              Alumni <span className="text-slate-800 font-serif italic">Global Network</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm border-l-2 border-jgu-gold pl-6">
            Connecting our graduates to global opportunities and maintaining a lifelong bond with the university.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {alumni.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Golden Ring Frame */}
                <div className="absolute inset-2 border-2 border-jgu-gold/40 rounded-[2.2rem] z-10 pointer-events-none group-hover:scale-105 transition-transform duration-500" />
                
                <Image 
                  src={a.img} 
                  alt={a.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-950/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-jgu-gold text-[10px] font-black uppercase tracking-[0.2em]">{a.company}</div>
                    <h3 className="text-white text-2xl font-black font-outfit">{a.name}</h3>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{a.role}</p>
                    
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <div className="h-[1px] w-full bg-white/20 mb-4" />
                       <p className="text-white/80 text-[11px] leading-relaxed italic font-medium">
                         &quot;{a.quote}&quot;
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
