'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, User, Mail, Phone, GraduationCap, MessageSquare } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-rose-950/40 backdrop-blur-md z-[10000]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-rose-950 hover:bg-stone-50 p-2 rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-10 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-rose-950 font-outfit uppercase">Enquiry Received</h3>
                      <p className="text-gray-500 font-medium text-xs max-w-[240px] mx-auto">Thank you for your interest. Our academic counselor will call you within 24 business hours.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-rose-950 font-outfit uppercase tracking-tight">Enquire Now</h3>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">Admissions Open — 2025-26</p>
                    </div>

                    <div className="space-y-3">
                      <div className="relative group">
                        <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-rose-950 transition-colors" />
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name *"
                          className="w-full bg-stone-50 border-none rounded-xl py-3.5 pl-12 pr-6 text-xs font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="relative group">
                          <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-rose-950 transition-colors" />
                          <input 
                            required
                            type="email" 
                            placeholder="Email *"
                            className="w-full bg-stone-50 border-none rounded-xl py-3.5 pl-12 pr-6 text-xs font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300"
                          />
                        </div>
                        <div className="relative group">
                          <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-rose-950 transition-colors" />
                          <input 
                            required
                            type="tel" 
                            placeholder="Phone *"
                            className="w-full bg-stone-50 border-none rounded-xl py-3.5 pl-12 pr-6 text-xs font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <GraduationCap size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-rose-950 transition-colors" />
                        <select 
                          required
                          className="w-full bg-stone-50 border-none rounded-xl py-3.5 pl-12 pr-6 text-xs font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Interested School</option>
                          <option value="management">School of Management</option>
                          <option value="computing">School of Computing</option>
                          <option value="engineering">School of Engineering</option>
                          <option value="design">School of Design</option>
                        </select>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-rose-950 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-black shadow-xl shadow-rose-950/20 transition-all mt-4"
                    >
                      Submit Now
                      <Send size={16} className="text-jgu-gold" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
