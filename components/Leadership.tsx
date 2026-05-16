'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const leaders = [
  {
    name: "Dr. J.G. Shah",
    role: "Chairman & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    quote: "Education is not just about learning facts, but about training the mind to think critically and act with integrity in a global society.",
    bio: "A visionary educator with over 30 years of experience in transformative higher education, pioneering excellence in Ahmedabad's academic landscape."
  },
  {
    name: "Dr. Arunima S.",
    role: "Provost & Vice Chancellor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quote: "Our mission is to foster innovation and leadership that transcends borders, preparing our students for the challenges of tomorrow.",
    bio: "A distinguished scholar and institutional builder, dedicated to integrating research-driven pedagogy with real-world industry applications."
  }
];

export default function Leadership() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="leadership">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-8 bg-jgu-gold" />
            <span className="text-rose-950 font-black uppercase tracking-[0.4em] text-[10px]">Academic Guardians</span>
            <div className="h-px w-8 bg-jgu-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-outfit text-rose-950 tracking-tighter"
          >
            Visionary <span className="text-jgu-gold font-serif italic font-light">Leadership</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative group"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-stone-100 rounded-[3rem] -z-10 group-hover:border-jgu-gold/20 transition-colors duration-700" />
              
              <div className="space-y-10">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-950/10">
                  <Image 
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-jgu-gold font-black uppercase tracking-[0.2em] text-[10px] mb-2">{leader.role}</p>
                    <h3 className="text-3xl font-black text-white font-outfit tracking-tight">{leader.name}</h3>
                  </div>
                </div>

                <div className="px-4 space-y-6">
                  <div className="relative">
                    <Quote className="absolute -left-2 md:-left-6 -top-2 text-jgu-gold/20 w-8 h-8 md:w-12 md:h-12" />
                    <p className="text-lg md:text-xl font-serif italic text-rose-900 leading-relaxed relative z-10">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="h-px w-12 bg-jgu-gold" />
                  
                  <p className="text-gray-500 font-outfit leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
