'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const faculty = [
  {
    name: "Dr. Aarav Mehta",
    title: "Dean, School of Engineering",
    quals: "PhD, MIT",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=800&q=80"
  },
  {
    name: "Prof. Kavya Iyer",
    title: "Director, School of Management",
    quals: "Ex-McKinsey",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80"
  },
  {
    name: "Dr. Rohan Banerjee",
    title: "Head, School of Law",
    quals: "LLM, Oxford",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=800&q=80"
  },
  {
    name: "Dr. Meera Krishnan",
    title: "Chair, Liberal Arts",
    quals: "PhD, LSE",
    img: "https://picsum.photos/seed/faculty-meera/600/800"
  }
];

export default function Faculty() {
  return (
    <section className="py-20 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 space-y-4">
           <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-jgu-gold" />
              <span className="text-rose-950 font-black uppercase tracking-[0.3em] text-[10px]">Meet Our Faculty</span>
           </div>
           <h2 className="text-4xl md:text-7xl font-black font-outfit text-rose-950 tracking-tighter">
              Learn From The <span className="text-jgu-gold font-serif italic font-light">Finest Minds</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {faculty.map((f, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="group relative"
             >
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white mb-6">
                   <Image 
                     src={f.img} 
                     alt={f.name} 
                     fill 
                     className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 left-4">
                      <span className="bg-jgu-gold text-rose-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {f.quals}
                      </span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <p className="text-white/80 text-xs font-bold leading-relaxed">
                        Extensive research experience with over 15+ international publications in top-tier journals.
                      </p>
                   </div>
                </div>
                <div className="space-y-1">
                   <h3 className="text-2xl font-black text-rose-950 font-outfit">{f.name}</h3>
                   <p className="text-rose-950/60 text-sm font-bold uppercase tracking-widest">{f.title}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
