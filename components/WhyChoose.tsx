'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, Play } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: "NAAC A+ Accredited",
    desc: "Highest tier of national accreditation for quality assurance.",
  },
  {
    title: "Industry-Linked Curriculum",
    desc: "Co-developed with TCS, Infosys, Deloitte, and Mahindra.",
  },
  {
    title: "International Faculty",
    desc: "Visiting professors from Stanford, LSE, and IIT alumni network.",
  },
  {
    title: "Outcome-Based Learning",
    desc: "Capstone projects, internships, and live consulting assignments.",
  }
];

export default function WhyChoose() {
  return (
    <section className="bg-[#0f172a] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-6 mb-12 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-jgu-gold" />
            <span className="text-jgu-gold font-black uppercase tracking-[0.3em] text-[10px]">Why Choose JGU</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-outfit text-white leading-[1.1] tracking-tight">
            We Are Experts At <br/>
            Shaping <span className="text-jgu-gold italic font-serif font-light">Distinguished</span> <br/>
            Careers
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
            Our holistic approach blends academic rigor, real-world exposure, and a meaningful life of impact and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    bg-white/[0.04] 
                    border border-white/10 
                    rounded-[26px] 
                    p-6 
                    min-h-[150px]
                    hover:bg-white/[0.06] 
                    transition-all duration-300
                  "
                >
                  {/* ICON */}
                  <div className="w-8 h-8 rounded-full bg-jgu-gold/10 flex items-center justify-center text-jgu-gold mb-4">
                    <Check size={16} className="stroke-[3px]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[17px] leading-[1.4] font-bold text-white mb-2">
                    {f.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-[14px] leading-[1.6] text-slate-400">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <button className="bg-jgu-gold text-[#081B33] px-10 py-5 rounded-full font-black uppercase tracking-[2px] text-[12px] hover:bg-white transition-all duration-300">
                Learn More About JGU
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:col-span-7 relative">
            <div
              className="
                relative 
                aspect-square md:h-[680px] 
                rounded-[36px] 
                overflow-hidden 
                group 
                border border-jgu-gold/30
              "
            >
              {/* IMAGE */}
              <Image
                src="https://picsum.photos/seed/jgu-graduation/1400/800"
                alt="Students Graduation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/10" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="
                    w-32 h-32 
                    rounded-full 
                    bg-jgu-gold 
                    flex items-center justify-center 
                    shadow-[0_0_80px_rgba(212,175,55,0.45)] 
                    hover:scale-110 
                    transition-transform duration-300
                  "
                >
                  <Play
                    size={42}
                    fill="currentColor"
                    className="text-[#7A0C00] ml-1"
                  />
                </button>
              </div>

              {/* INNER BORDER */}
              <div className="absolute inset-4 border border-jgu-gold/40 rounded-[30px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
