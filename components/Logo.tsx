'use client';

import React from 'react';

export default function Logo({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brain Icon Placeholder - Recreated with CSS/SVG */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
                d="M50 10 C30 10 15 25 15 45 C15 60 25 75 50 90 C75 75 85 60 85 45 C85 25 70 10 50 10 Z" 
                fill="none" 
                stroke="#D4AF37" 
                strokeWidth="2"
            />
            {/* Simple brain circuit nodes */}
            <circle cx="35" cy="30" r="2" fill={isDark ? "#FFFFFF" : "#7A0C00"} />
            <circle cx="65" cy="30" r="2" fill={isDark ? "#FFFFFF" : "#7A0C00"} />
            <circle cx="30" cy="45" r="2" fill={isDark ? "#FFFFFF" : "#7A0C00"} />
            <circle cx="70" cy="45" r="2" fill={isDark ? "#FFFFFF" : "#7A0C00"} />
            <circle cx="40" cy="60" r="2" fill={isDark ? "#FFFFFF" : "#7A0C00"} />
            <circle cx="60" cy="60" r="2" fill={isDark ? "#FFFFFF" : "#7A0C00"} />
            <line x1="35" y1="30" x2="50" y2="20" stroke="#D4AF37" strokeWidth="1" />
            <line x1="65" y1="30" x2="50" y2="20" stroke="#D4AF37" strokeWidth="1" />
            <line x1="30" y1="45" x2="50" y2="40" stroke="#D4AF37" strokeWidth="1" />
            <line x1="70" y1="45" x2="50" y2="40" stroke="#D4AF37" strokeWidth="1" />
            <line x1="50" y1="10" x2="50" y2="90" stroke={isDark ? "#FFFFFF" : "#7A0C00"} strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`text-xl md:text-3xl font-black ${isDark ? "text-white" : "text-[#7A0C00]"} leading-none`}>JG</span>
          <span className="text-base md:text-xl font-bold text-jgu-gold tracking-wider leading-none">UNIVERSITY</span>
        </div>
        <span className={`text-[7px] font-black tracking-[0.4em] ${isDark ? "text-white/60" : "text-gray-800"} uppercase leading-none mt-1`}>Excellence by Choice</span>
      </div>
    </div>
  );
}
