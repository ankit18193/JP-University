'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-jgu-gold py-4 md:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-rose-950 tracking-tight text-center md:text-left">
            Ready to begin your journey at JG University?
          </h2>
          <div className="shrink-0">
            <button className="bg-[#800000] text-white px-8 py-4 rounded-full font-black uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-3 hover:bg-rose-900 transition-all shadow-xl hover:scale-105 group whitespace-nowrap">
              APPLY FOR 2026 INTAKE
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
