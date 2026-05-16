'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const news = [
  {
    category: "RESEARCH",
    date: "Nov 28, 2025",
    title: "JGU researchers publish breakthrough in solid-state battery chemistry",
    author: "Dr. A. Mehta",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "PLACEMENTS",
    date: "Nov 19, 2025",
    title: "Record-breaking placement season: 96% offers, ₹54 LPA highest",
    author: "Career Cell",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "CAMPUS",
    date: "Nov 11, 2025",
    title: "JGU signs MoU with University of Toronto for student exchange",
    author: "Dean's Office",
    img: "https://picsum.photos/seed/jgu-campus-news/800/600"
  }
];

export default function News() {
  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
           <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-jgu-gold" />
              <span className="text-rose-950 font-black uppercase tracking-[0.3em] text-[10px]">Latest News</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-black font-outfit text-rose-950 tracking-tighter">
              Stories From <span className="text-jgu-gold font-serif italic font-light">Campus</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {news.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-white rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
             >
                <div className="relative h-64 overflow-hidden">
                   <Image 
                     src={item.img} 
                     alt={item.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="bg-jgu-gold text-rose-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                         {item.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                         <Calendar size={12} className="text-jgu-gold" />
                         {item.date}
                      </div>
                   </div>
                   
                   <h3 className="text-2xl font-black text-rose-950 font-outfit leading-tight tracking-tight mb-8 group-hover:text-rose-900 transition-colors line-clamp-3">
                      {item.title}
                   </h3>
                   
                   <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-rose-950/60 text-[10px] font-black uppercase tracking-widest">
                         <User size={14} className="text-jgu-gold" />
                         {item.author}
                      </div>
                      <button className="text-rose-950 text-sm font-black flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                        Read
                        <ArrowRight size={18} className="text-jgu-gold" />
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
