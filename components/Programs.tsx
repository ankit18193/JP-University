'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, Book, Star, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const flagshipPrograms = [
  {
    title: "B.Tech in Computer Science & AI",
    school: "Engineering",
    price: "₹1.85L/yr",
    duration: "4 Years",
    credits: "240 Credits",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    rating: "4.9",
    reviews: "420"
  },
  {
    title: "MBA — Business Analytics & Strategy",
    school: "Management",
    price: "₹2.40L/yr",
    duration: "2 Years",
    credits: "120 Credits",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    rating: "4.8",
    reviews: "420"
  },
  {
    title: "BA LLB (Hons.) — Integrated",
    school: "Law",
    price: "₹1.65L/yr",
    duration: "5 Years",
    credits: "320 Credits",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    rating: "4.7",
    reviews: "420"
  },
  {
    title: "B.Pharm — Pharmaceutical Sciences",
    school: "Pharmacy",
    price: "₹1.30L/yr",
    duration: "4 Years",
    credits: "210 Credits",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    rating: "4.6",
    reviews: "420"
  },
  {
    title: "B.Des — UX & Communication Design",
    school: "Design",
    price: "₹2.10L/yr",
    duration: "4 Years",
    credits: "195 Credits",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    rating: "4.8",
    reviews: "420"
  },
  {
    title: "BA (Hons.) — Economics & Public Policy",
    school: "Liberal Arts",
    price: "₹1.20L/yr",
    duration: "3 Years",
    credits: "160 Credits",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    rating: "4.7",
    reviews: "420"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 space-y-4">
           <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 bg-jgu-gold" />
              <span className="text-rose-950 font-black uppercase tracking-[0.3em] text-xs">Our Programs</span>
              <div className="h-0.5 w-10 bg-jgu-gold" />
           </div>
           <h2 className="text-4xl md:text-7xl font-black font-outfit text-rose-950 tracking-tighter">
              Discover Our <span className="text-jgu-gold font-serif italic font-light">Flagship</span> Programs
           </h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
             From frontier technologies to ancient wisdom — explore programs designed to give you both the depth of expertise and the breadth of perspective.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {flagshipPrograms.map((prog, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               viewport={{ once: true }}
               className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group"
             >
               <div className="relative h-64 overflow-hidden">
                  <Image src={prog.img} alt={prog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-jgu-gold text-rose-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{prog.school}</div>
                  <div className="absolute top-4 right-4 bg-white text-rose-950 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{prog.price}</div>
               </div>
               
               <div className="p-8 space-y-6">
                  <div className="flex items-center gap-6 text-xs font-bold text-jgu-gold uppercase tracking-widest">
                     <div className="flex items-center gap-2">
                        <Clock size={14} />
                        {prog.duration}
                     </div>
                     <div className="flex items-center gap-2">
                        <Book size={14} />
                        {prog.credits}
                     </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-rose-950 leading-tight font-outfit min-h-[3rem] tracking-tight">{prog.title}</h3>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Star size={16} className="text-jgu-gold fill-jgu-gold" />
                        <span className="text-sm font-black text-rose-950">{prog.rating}</span>
                        <span className="text-xs text-slate-400 font-bold">({prog.reviews})</span>
                     </div>
                     <button className="text-rose-950 text-sm font-black flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                        View Details
                        <ArrowRight size={16} className="text-jgu-gold" />
                     </button>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <button className="bg-rose-950 text-white px-12 py-5 rounded-full font-black hover:bg-black transition-all shadow-xl shadow-rose-950/20 flex items-center gap-3 mx-auto uppercase tracking-widest text-xs">
              View All 75 Programs
              <ArrowRight size={18} />
           </button>
        </div>
      </div>
    </section>
  );
}
