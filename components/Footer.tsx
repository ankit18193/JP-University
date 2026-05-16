'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Search, Instagram, Facebook, Twitter, Linkedin, Youtube, ExternalLink, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';

const schoolData = [
  {
    title: "School of Management",
    programs: [
      { name: "BBA (Hons) - 4 years, 8 semesters", sub: "Bachelor of Business Administration" },
      { name: "iMBA - 5 years, 10 semesters", sub: "Integrated BBA + MBA" },
      { name: "iMBA - Global Business - 5 years, 10 semesters", sub: "Integrated BBA + MBA" },
      { name: "iMBA - International Trade & Finance - 5 years, 10 semesters", sub: "Integrated BBA + MBA" },
      { name: "BBA (Hons) - International Trade & Finance - 4 years, 8 semesters", sub: "Bachelor of Business Administration" },
      { name: "MBA - 2 years, 4 semesters", sub: "Master of Business Administration" },
      { name: "Masters in International Trade & Finance - 2 years, 4 semesters", sub: "Master of Business Administration" },
      { name: "PGD - Banking & Finance - 1 year, 2 semesters", sub: "" }
    ]
  },
  {
    title: "School of Investigative and Applied Sciences (SIAS)",
    programs: [
      { name: "iM.Sc. - Forensic Science - 5 years, 10 semesters", sub: "Integrated B.Sc. + M.Sc. Forensic Science" },
      { name: "iM.Sc. - Cyber Security & Digital Forensics - 5 years, 10 semesters", sub: "Integrated B.Sc. + M.Sc. Cyber Security & Digital Forensics" },
      { name: "iM.Sc. - Reproductive Biology & Clinical Embryology - 5 years, 10 semesters", sub: "Integrated B.Sc. + M.Sc. Reproductive Biology & Clinical Embryology" },
      { name: "M.Sc. - Cyber Security & Digital Forensics - 2 years, 4 semesters", sub: "Master of Science - Cyber Security & Digital Forensics" },
      { name: "M.Sc. - Forensic Science & Technology - 2 years, 4 semesters", sub: "Master of Science - Forensic Science & Technology" },
      { name: "M.Sc. - Clinical Embryology & ART - 2 years, 4 semesters", sub: "Master of Science - Clinical Embryology & ART" }
    ]
  },
  {
    title: "School of Engineering",
    programs: [
      { name: "B.Tech - CSE - 4 years, 8 semesters", sub: "Bachelor of Technology - Computer Science & Engineering" },
      { name: "B.Tech - IT - 4 years, 8 semesters", sub: "Bachelor of Technology - Information Technology" },
      { name: "B.Tech - AI & DS - 4 years, 8 semesters", sub: "Bachelor of Technology - Data Science" },
      { name: "B.Tech - AI & ML - 4 years, 8 semesters", sub: "Bachelor of Technology - Artificial Intelligence" },
      { name: "B.Tech - CE - 4 years, 8 semesters", sub: "Bachelor of Technology - Computer Engineering" },
      { name: "B.Tech - CSE - AI - 4 years, 8 semesters", sub: "Bachelor of Technology - CSE - Artificial Intelligence" },
      { name: "B.Tech - CSE - AI & ML - 4 years, 8 semesters", sub: "Bachelor of Technology - CSE - Artificial Intelligence & Machine Learning" },
      { name: "B.Tech - CSE - BDA - 4 years, 8 semesters", sub: "Bachelor of Technology - CSE - Big Data Analytics" }
    ]
  },
  {
    title: "School of Commerce",
    programs: [
      { name: "B.Com (Hons) - 4 years, 8 semesters", sub: "Bachelor of Commerce" },
      { name: "B.Com (Hons) with ACCA - 4 Years, 8 Semesters", sub: "Bachelor of Commerce (Hons) with ACCA" },
      { name: "M.Com (Hons) - 2 years, 4 semesters", sub: "Master of Commerce (Hons) - International Accounting & Taxation" }
    ]
  },
  {
    title: "School of Computing",
    programs: [
      { name: "BCA (Hons) - 4 years, 8 semesters", sub: "Bachelor of Computer Applications" },
      { name: "iMSc (IT) - 5 years, 10 semesters", sub: "Integrated BSc + MSc (IT)" },
      { name: "iMCA - 5 years, 10 semesters", sub: "Integrated BCA + MCA" },
      { name: "MCA - 2 years, 4 semesters", sub: "Master of Computer Applications" },
      { name: "MCA - AI & Full Stack Development - 2 Years, 4 Semesters", sub: "Master of Computer Applications - AI & Full Stack Development" }
    ]
  },
  {
    title: "School of Law",
    programs: [
      { name: "LL.M. - 2 years, 4 semesters", sub: "Master of Legislative Law" },
      { name: "LL.B. - 3 years, 6 semesters", sub: "Bachelor of Legislative Law" }
    ]
  },
  {
    title: "School of Science & Technology",
    programs: [
      { name: "iMSc (IT-Specialization) - 5 years, 10 Semesters", sub: "Integrated BSc + MSc (IT-Sp)" },
      { name: "MSc (IT-Specialization) - 2 years, 4 Semesters", sub: "Master of Science (IT-SP)" }
    ]
  },
  {
    title: "School of Design",
    programs: [
      { name: "B.Design - UI/UX - 3 years, 6 semesters", sub: "Bachelor of Design - UI/UX" },
      { name: "B.Design(Hons) - UI/UX - 4 years, 8 semesters", sub: "Bachelor of Design - UI/UX" },
      { name: "B.Design - Game Design - 3 years, 6 semesters", sub: "Bachelor of Design - Game Design" },
      { name: "B.Design(Hons) - Game Design - 4 years, 8 semesters", sub: "Bachelor of Design - Game Design" }
    ]
  },
  {
    title: "School of Emerging Technology",
    programs: [
      { name: "Metaverse", sub: "" },
      { name: "Data Science, AI-ML", sub: "" },
      { name: "Mobile applications (Flutter & React Native)", sub: "" },
      { name: "Blockchain", sub: "" },
      { name: "Digital Marketing", sub: "" },
      { name: "Cyber Security", sub: "" },
      { name: "Robotic Process Automation", sub: "" },
      { name: "Industrial IoT", sub: "" },
      { name: "Full Stack Architect", sub: "" },
      { name: "Azure DevOps", sub: "" }
    ]
  },
  {
    title: "School of Aviation & Hospitality",
    programs: [
      { name: "Integrated BBA + MBA - 5 years, 10 semesters", sub: "iMBA - Aviation, Hospitality & Travel Management" },
      { name: "Masters in Aviation, Hospitality & Travel Management - 2 years, 4 semesters", sub: "Masters in Aviation, Hospitality & Travel Management" }
    ]
  },
  {
    title: "School of Research & Innovation (Ph.D Programmes)",
    programs: [
      { name: "Commerce", sub: "" },
      { name: "Management", sub: "" },
      { name: "Computing", sub: "" },
      { name: "Interdisciplinary", sub: "" },
      { name: "Law", sub: "" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#fcfbf9] pt-24 pb-12 overflow-hidden font-outfit border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Brand Summary Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 pb-20 border-b border-gray-200/60">
          <div className="max-w-md space-y-8">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform">
              <Logo />
            </Link>
            <p className="text-gray-600 font-medium leading-relaxed">
              JG University is a premier institution in Ahmedabad, dedicated to fostering innovation, excellence, and global perspectives through interdisciplinary learning and industry-aligned pedagogy.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, color: 'hover:text-[#e4405f] hover:bg-[#e4405f]/10' },
                { Icon: Facebook, color: 'hover:text-[#3b5998] hover:bg-[#3b5998]/10' },
                { Icon: Twitter, color: 'hover:text-[#1da1f2] hover:bg-[#1da1f2]/10' },
                { Icon: Linkedin, color: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10' },
                { Icon: Youtube, color: 'hover:text-[#ff0000] hover:bg-[#ff0000]/10' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
            <div className="space-y-6">
              <h5 className="text-sm font-black text-rose-950 uppercase tracking-[0.2em]">Quick Links</h5>
              <ul className="space-y-3">
                {['Admission', 'Programmes', 'Campus Life', 'Industry Linkage', 'Collaborations'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-rose-950 font-bold transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-jgu-gold scale-0 group-hover:scale-100 transition-transform" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-sm font-black text-rose-950 uppercase tracking-[0.2em]">Resources</h5>
              <ul className="space-y-3">
                {['Media Center', 'Careers', 'Discover Us', 'Research', 'Alumni'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-rose-950 font-bold transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-jgu-gold scale-0 group-hover:scale-100 transition-transform" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Schools and Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 mb-24">
          {schoolData.map((school, i) => (
            <div key={i} className="space-y-8">
              <div className="relative">
                <h4 className="text-lg font-black text-rose-950 leading-tight pr-4">
                  {school.title}
                </h4>
                <div className="absolute -bottom-3 left-0 w-8 h-1 bg-jgu-gold/60 rounded-full" />
              </div>
              <ul className="space-y-5">
                {school.programs.map((prog, j) => (
                  <li key={j} className="group cursor-pointer">
                    <Link href="#" className="block">
                      <div className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-jgu-gold transition-colors flex items-start gap-2">
                        <ExternalLink size={12} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        <span>{prog.name}</span>
                      </div>
                      {prog.sub && (
                        <div className="text-[11px] text-gray-400 mt-1.5 font-bold uppercase tracking-wider pl-5 group-hover:text-gray-600 transition-colors">
                          {prog.sub}
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information Cards */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-rose-950/5 border border-gray-100 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <h4 className="text-2xl font-black text-rose-950">Get in Touch</h4>
            <div className="h-px grow bg-gray-100 hidden md:block" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-950 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black shadow-xl shadow-rose-900/20 transition-all"
            >
              Contact Support
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Campus */}
            <div className="space-y-5 p-6 rounded-3xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-jgu-gold/10 flex items-center justify-center text-jgu-gold">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-jgu-gold">Campus Location</p>
                <p className="text-[15px] text-gray-600 leading-relaxed font-bold">
                  ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-5 p-6 rounded-3xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                <Mail size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-600">Official Channels</p>
                <div className="space-y-1">
                  <p className="text-[15px] text-gray-600 font-bold hover:text-rose-900 cursor-pointer">connect@jguni.in</p>
                  <p className="text-[15px] text-gray-600 font-bold hover:text-rose-900 cursor-pointer">admission@jguni.in</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-5 p-6 rounded-3xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Phone size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Helpline Numbers</p>
                <p className="text-[17px] text-gray-800 font-black tracking-tight">
                  +91 7567 7567 58 <span className="text-gray-300 font-light mx-1">/</span> 59
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['Terms and Conditions', 'Privacy Policy', 'Cyber Hygiene Handbook', 'Mandatory Disclosure'].map((term) => (
              <Link key={term} href="#" className="group text-[12px] text-gray-400 hover:text-rose-950 font-black uppercase tracking-widest transition-colors flex items-center gap-1">
                {term}
                <ArrowUp size={10} className="rotate-45 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
              </Link>
            ))}
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
            <p className="text-[11px] text-gray-400 font-black tracking-[0.2em] uppercase">
              Copyright © 2022 <span className="text-rose-950">JG University</span>. All Rights Reserved
            </p>
            <div className="flex items-center gap-2">
               <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest">Powered by</span>
               <span className="text-[12px] text-gray-500 font-black uppercase tracking-widest border-b border-rose-100">N2N Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
