'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Ananya Sharma",
    batch: "B.Tech CSE '24 — SDE at Google",
    company: "SDE at Google",
    text: "JG University didn't just teach me to code — it taught me to think. The faculty mentorship and project-based pedagogy gave me real confidence walking into my Google interviews. Forever grateful.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Rahul Mehra",
    batch: "MBA '22 — Founder, AgriTech",
    company: "Founder, AgriTech",
    text: "The entrepreneurial ecosystem at JG University gave me the resources to turn my classroom idea into a funded startup. The alumni network is incredibly supportive.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Ishita Kapoor",
    batch: "B.Des '23 — Lead UX, Microsoft",
    company: "Lead UX, Microsoft",
    text: "The interdisciplinary approach at JSAD allowed me to explore the intersection of psychology and design, which is now my core strength.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Karthik Pillai",
    batch: "B.A. LL.B. '21 — Junior Counsel",
    company: "Junior Counsel at SC",
    text: "The moot court culture and legal clinics at JGSL are second to none. They prepare you for the highest levels of litigation from day one.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={containerRef} className="relative py-6 md:py-8 overflow-hidden group/testimonials">
      {/* Immersive Fixed Background Effect */}
      <div className="absolute inset-0 z-0 [clip-path:inset(0)]">
         <div className="fixed inset-0 w-full h-full pointer-events-none">
            <Image 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80" 
              alt="University Background" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-rose-950/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-transparent to-rose-950" />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-6 space-y-1">
           <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-10 bg-jgu-gold" />
              <span className="text-jgu-gold font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Student Testimonials</span>
           </div>
           <h2 className="text-2xl md:text-4xl font-black font-outfit text-white tracking-tighter leading-tight">
              Stories of <span className="text-jgu-gold font-serif italic font-light">Transformation</span>
           </h2>
        </div>

        <div className="max-w-lg mx-auto">
           <div className="relative group">
              {/* Golden Ring Over Card */}
              <div className="absolute -inset-2 border border-jgu-gold/20 rounded-[1.5rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="relative z-10 bg-white/[0.03] backdrop-blur-md rounded-[1.5rem] p-6 md:p-8 shadow-3xl border border-white/10">
                 <motion.div 
                   key={activeIndex}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.4 }}
                   className="flex flex-col items-center text-center space-y-4"
                 >
                    {/* Star Rating */}
                    <div className="flex gap-1 text-jgu-gold">
                       {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                       ))}
                    </div>

                    <p className="text-sm md:text-base font-medium text-white leading-relaxed font-serif italic max-w-md tracking-tight">
                       &quot;{testimonials[activeIndex].text}&quot;
                    </p>
                    
                    <div className="flex flex-col items-center gap-3">
                       {/* Avatar with Golden Ring */}
                       <div className="relative">
                          <div className="absolute -inset-1 border-2 border-jgu-gold rounded-full -z-10" />
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-rose-950 shadow-xl">
                             <Image 
                               src={testimonials[activeIndex].img} 
                               alt={testimonials[activeIndex].name} 
                               fill
                               className="object-cover"
                               referrerPolicy="no-referrer"
                             />
                          </div>
                       </div>
                       <div className="space-y-0.5">
                          <h4 className="text-base md:text-lg font-black text-white font-outfit uppercase tracking-tighter">{testimonials[activeIndex].name}</h4>
                          <div className="flex items-center justify-center gap-2">
                             <div className="h-[1px] w-2 bg-jgu-gold/40" />
                             <p className="text-jgu-gold text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em]">{testimonials[activeIndex].batch}</p>
                             <div className="h-[1px] w-2 bg-jgu-gold/40" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
           
           {/* Slider Controls */}
           <div className="flex justify-center items-center gap-6 mt-6">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-jgu-gold hover:text-rose-950 hover:border-jgu-gold transition-all"
              >
                 <ArrowRight className="rotate-180" size={16} />
              </button>
              <div className="flex gap-2">
                 {testimonials.map((_, i) => (
                   <div 
                     key={i}
                     className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-jgu-gold' : 'w-1.5 bg-white/10'}`} 
                   />
                 ))}
              </div>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-jgu-gold hover:text-rose-950 hover:border-jgu-gold transition-all"
              >
                 <ArrowRight size={16} />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
