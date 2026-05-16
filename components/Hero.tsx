'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Users, BookOpen, Target, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import EnquiryModal from './EnquiryModal';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80",
    tag: "Established 1999",
    title: "Shape Your Future With Excellence",
    highlight: "Excellence",
    desc: "India's premier multidisciplinary university offering globally-benchmarked programs across Engineering, Management, and Law.",
    stats: { label: "Campus Area", value: "100+ Acres" }
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80",
    tag: "Research & Innovation",
    title: "Unleash Your Intellectual Potential",
    highlight: "Potential",
    desc: "Dive into a culture of curiosity with our state-of-the-art labs and a digital library housing over 1.2 million resources.",
    stats: { label: "Digital Books", value: "1.2M+" }
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1920&q=80",
    tag: "Global Career Path",
    title: "Global Placements & Top Recruiters",
    highlight: "Recruiters",
    desc: "Connect with over 600+ recruitment partners including top fortune 500 companies and leading Indian unicorns.",
    stats: { label: "Placements", value: "100%" }
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80",
    tag: "Diverse Community",
    title: "Learning Beyond The Classroom",
    highlight: "Classroom",
    desc: "Experience a vibrant campus life with diverse student clubs, international exchange programs, and industry-led workshops.",
    stats: { label: "Expert Faculty", value: "450+" }
  }
];

const features = [
  { icon: <GraduationCap size={24} />, num: "01", title: "Merit Scholarships", desc: "Up to 100% tuition waiver for high achievers." },
  { icon: <Users size={24} />, num: "02", title: "World-Class Faculty", desc: "Learn from PhD scholars and industry veterans." },
  { icon: <BookOpen size={24} />, num: "03", title: "Digital Library", desc: "Access 1.2M+ e-books and research papers." },
  { icon: <Target size={24} />, num: "04", title: "100% Placement", desc: "600+ recruiter network including top unicorns." }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative">
      <section className="relative h-[75vh] md:h-[85vh] min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-rose-950">
        {/* Background Slider */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-rose-950/80 via-rose-950/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-jgu-gold/30 bg-jgu-gold/10 backdrop-blur-md mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-jgu-gold animate-pulse" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-jgu-gold">
                  {slides[current].tag}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-8xl font-black font-outfit text-white leading-[1.1] md:leading-[0.95] tracking-tight mb-8"
              >
                {slides[current].title.split(slides[current].highlight)[0]}
                <span className="text-jgu-gold font-serif italic font-light block md:inline md:ml-3">
                    {slides[current].highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-xl text-white/80 max-w-xl leading-relaxed mb-10 font-medium"
              >
                {slides[current].desc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 md:gap-4 items-center"
              >
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="h-12 md:h-14 px-6 md:px-10 bg-jgu-gold text-rose-950 font-black rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-jgu-gold/20 flex items-center gap-2 md:gap-3 group text-[11px] md:text-sm"
                >
                  APPLY NOW <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                </button>
                <button className="h-12 md:h-14 px-6 md:px-10 bg-white/10 backdrop-blur-xl text-white border border-white/20 font-black rounded-full hover:bg-white transition-all duration-300 hover:text-rose-950 text-[11px] md:text-sm">
                  DOWNLOAD BROCHURE
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Stats Indicator */}
        <div className="absolute right-0 bottom-1/4 hidden lg:block z-20">
           <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                className="bg-white/5 backdrop-blur-2xl border-l border-y border-white/10 p-8 rounded-l-[2rem]"
              >
                <div className="text-jgu-gold text-4xl font-black font-outfit mb-1">{slides[current].stats.value}</div>
                <div className="text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">{slides[current].stats.label}</div>
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-16 right-6 md:right-12 z-40 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 overflow-hidden relative ${
                  i === current ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
              >
                {i === current && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 7, ease: "linear" }}
                        className="absolute inset-y-0 left-0 bg-jgu-gold"
                    />
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-2 ml-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-950 transition-all duration-300 bg-black/10 backdrop-blur-sm">
               <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-950 transition-all duration-300 bg-black/10 backdrop-blur-sm">
               <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Overlays */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-30 -mt-10 md:-mt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-rose-950/10 border border-slate-100 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 opacity-50" />
               
               <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-jgu-gold flex items-center justify-center text-[#7A0C00] shadow-lg shadow-jgu-gold/20 mb-8 transform group-hover:rotate-6 transition-transform">
                    {f.icon}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black text-rose-900/30 uppercase tracking-[0.2em]">{f.num}</span>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3a0606] mb-3 leading-tight group-hover:text-jgu-gold transition-colors">{f.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium line-clamp-2">
                    {f.desc}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
