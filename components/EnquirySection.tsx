'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, User, Mail, Phone, GraduationCap, MessageSquare, MapPin } from 'lucide-react';

export default function EnquirySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-32 bg-stone-50 overflow-hidden relative" id="enquiry">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-950/5 rounded-full blur-3xl -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-jgu-gold/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-jgu-gold" />
                <span className="text-rose-950 font-black uppercase tracking-[0.3em] text-[10px]">Admission 2025-26</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black font-outfit text-rose-950 tracking-tighter leading-[0.9]">
                Ready to <span className="text-jgu-gold font-serif italic font-light">Transform</span> Your Future?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-outfit">
                Take the first step towards an extraordinary career. Fill out the form and our admissions team will get in touch with you to guide you through your journey at JG University.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Personalized Counseling", desc: "Expert guidance to choose the right career path tailored to your strengths." },
                { icon: CheckCircle2, title: "Simplified Process", desc: "Understand our seamless admission and scholarship opportunities." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-rose-950/5 flex items-center justify-center shrink-0 group-hover:bg-rose-950 transition-colors duration-500">
                    <item.icon size={24} className="text-jgu-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-rose-950 font-outfit mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-rose-950 rounded-[2.5rem] text-white space-y-4 shadow-2xl shadow-rose-950/20">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-jgu-gold/20 flex items-center justify-center">
                     <GraduationCap className="text-jgu-gold" size={20} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-jgu-gold">Admissions Hotline</span>
               </div>
               <p className="text-2xl font-black font-outfit">+91 7567 7567 58 / 59</p>
            </div>
          </div>

          {/* Right Content - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 relative"
          >
            {isSubmitted ? (
              <div className="py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-rose-950 font-outfit">Enquiry Received!</h3>
                <p className="text-gray-500 font-medium">Thank you for your interest. Our admissions counselor will call you within 24 business hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-jgu-gold font-black uppercase tracking-widest text-xs border-b-2 border-jgu-gold pb-1"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-black text-rose-950 font-outfit uppercase tracking-tight">Express Interest</h3>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Admissions Open — Academic Year 2025-26</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Interested Program</label>
                    <div className="relative">
                      <GraduationCap size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                      <select 
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all appearance-none"
                      >
                        <option value="">Select School/Course</option>
                        <option value="management">School of Management (BBA/MBA)</option>
                        <option value="commerce">School of Commerce (B.Com/M.Com)</option>
                        <option value="engineering">School of Engineering (B.Tech)</option>
                        <option value="computing">School of Computing (BCA/MCA)</option>
                        <option value="aviation">School of Aviation & Hospitality</option>
                        <option value="law">School of Law (LLB/Integrated)</option>
                        <option value="design">School of Design (B.Des)</option>
                        <option value="science">School of Science & Technology</option>
                        <option value="others">Other Programs</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Anything else we should know?</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-5 top-6 text-gray-300" />
                    <textarea 
                      rows={4}
                      placeholder="Share your queries or expectations..."
                      className="w-full bg-stone-50 border-none rounded-[2rem] py-5 pl-12 pr-6 text-sm font-bold text-rose-950 focus:ring-2 focus:ring-jgu-gold/20 transition-all placeholder:text-gray-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-rose-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-black shadow-2xl shadow-rose-950/20 transition-all"
                  >
                    Submit Enquiry
                    <Send size={18} className="text-jgu-gold" />
                  </motion.button>
                  <p className="text-[10px] text-center text-gray-400 mt-6 font-medium px-10 leading-relaxed uppercase tracking-widest">
                    By submitting, you agree to our <span className="text-rose-950 font-black border-b border-rose-100">privacy policy</span> and consent to received admissions-related updates.
                  </p>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
