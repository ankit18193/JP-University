'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Book, Users, GraduationCap, Trophy } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: <Book size={28} />, label: "PROGRAMS OFFERED", value: "75+" },
  { icon: <Users size={28} />, label: "ACTIVE STUDENTS", value: "12,000+" },
  { icon: <GraduationCap size={28} />, label: "EXPERT FACULTY", value: "450+" },
  { icon: <Trophy size={28} />, label: "NATIONAL AWARDS", value: "38" }
];

export default function Stats() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
       {/* Background Visual */}
       <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1920&q=80" alt="University Library" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#3a0606]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3a0606]/50 to-[#3a0606]" />
       </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-jgu-gold flex items-center justify-center text-rose-950 shadow-2xl mb-10 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="space-y-4">
                <div className="text-5xl md:text-8xl font-black font-serif text-white leading-none tracking-tighter">{stat.value}</div>
                <div className="text-[11px] font-black text-jgu-gold uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
