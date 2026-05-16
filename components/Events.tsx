'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const events = [
  {
    date: "12",
    month: "DEC",
    title: "Annual Tech Symposium — IGNITE 2025",
    time: "10:00 AM",
    location: "Main Auditorium, JGU Campus",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "18",
    month: "DEC",
    title: "Industry Connect: Future of AI & Workforce",
    time: "2:30 PM",
    location: "Knowledge Hub, Block C",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
  },
  {
    date: "27",
    month: "DEC",
    title: "Cultural Fest — Rang Tarang '25",
    time: "5:00 PM",
    location: "Open Amphitheater",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Events() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-jgu-gold" />
                <span className="text-rose-950 font-black uppercase tracking-[0.3em] text-[10px]">Upcoming Events</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black font-outfit text-rose-950 tracking-tighter">
                Campus <span className="text-jgu-gold font-serif italic font-light">Happenings</span>
             </h2>
          </div>
          <button className="text-rose-950 text-sm font-black flex items-center gap-3 hover:gap-4 transition-all uppercase tracking-widest border-b-2 border-jgu-gold pb-2">
            View All Events
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {events.map((e, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-stone-50 rounded-[2.5rem] overflow-hidden group border border-stone-100 hover:shadow-2xl hover:shadow-rose-950/10 transition-all duration-500"
             >
                <div className="relative h-64 overflow-hidden">
                   <Image 
                     src={e.img} 
                     alt={e.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-6 left-6 w-16 h-20 bg-rose-950 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl ring-4 ring-jgu-gold/20">
                      <span className="text-[10px] font-black tracking-widest uppercase mb-1 text-jgu-gold">{e.month}</span>
                      <span className="text-3xl font-black font-outfit leading-none">{e.date}</span>
                   </div>
                </div>
                
                <div className="p-10 space-y-6">
                   <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                         <Clock size={14} className="text-jgu-gold" />
                         {e.time}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                         <MapPin size={14} className="text-jgu-gold" />
                         {e.location}
                      </div>
                   </div>
                   
                   <h3 className="text-2xl font-black text-rose-950 font-outfit leading-tight tracking-tight min-h-[4rem] group-hover:text-rose-900 transition-colors">{e.title}</h3>
                   
                   <button className="text-rose-950 text-sm font-black flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                      Register Now
                      <ArrowRight size={18} className="text-jgu-gold" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
