'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, GraduationCap, MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Youtube, Search, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import EnquiryModal from './EnquiryModal';

const navData = [
  {
    name: 'Programmes',
    href: '#',
    isMega: true,
    columns: [
      {
        title: 'Management & Commerce',
        links: [
          { name: 'School of Management', href: '#' },
          { name: 'School of Commerce', href: '#' },
          { name: 'School of Aviation & Hospitality', href: '#' },
          { name: 'School of Design', href: '#' },
        ]
      },
      {
        title: 'Technology & Computing',
        links: [
          { name: 'School of Engineering', href: '#' },
          { name: 'School of Computing', href: '#' },
          { name: 'School of Emerging Technology', href: '#' },
          { name: 'School of Science & Technology', href: '#' },
        ]
      },
      {
        title: 'Professional & Research',
        links: [
          { name: 'School of Law', href: '#' },
          { name: 'School of Investigative (SIAS)', href: '#' },
          { name: 'Research & Innovation (Ph.D)', href: '#' },
        ]
      },
      {
        title: 'Learning Experience',
        links: [
          { name: 'Interdisciplinary Learning', href: '#' },
          { name: 'Industry-Led Pedagogy', href: '#' },
          { name: 'Global Immersion', href: '#' },
        ]
      }
    ]
  },
  {
    name: 'Campus',
    href: '#',
    links: [
      { name: 'Modern Infrastructure', href: '#' },
      { name: 'Advanced Laboratories', href: '#' },
      { name: 'Hostel & Dining', href: '#' },
      { name: 'Student Life', href: '#' },
      { name: 'Sports & Recreation', href: '#' },
    ]
  },
  {
    name: 'Industry Linkage',
    href: '#',
    links: [
      { name: 'Placement Cell', href: '#' },
      { name: 'Corporate Partners', href: '#' },
      { name: 'Skill Hub', href: '#' },
      { name: 'Recruitment Calendar', href: '#' },
    ]
  },
  {
    name: 'Collaborations',
    href: '#',
    links: [
      { name: 'Global University Network', href: '#' },
      { name: 'Academic MOUs', href: '#' },
      { name: 'Research Partnerships', href: '#' },
    ]
  },
  {
    name: 'Discover Us',
    href: '#',
    links: [
      { name: 'About JG University', href: '#' },
      { name: 'Vision & Philosophy', href: '#' },
      { name: 'Our Leadership', href: '#' },
      { name: 'Awards & Honors', href: '#' },
    ]
  },
  {
    name: 'Media',
    href: '#',
    links: [
      { name: 'Latest Announcements', href: '#' },
      { name: 'Press Releases', href: '#' },
      { name: 'Multimedia Gallery', href: '#' },
      { name: 'University Blog', href: '#' },
    ]
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Auto-open modal after 15 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 15000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="hidden lg:block bg-[#800000] text-white py-2 px-12 text-[10px] font-bold tracking-[0.1em] z-[60] relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center uppercase">
          <div className="flex items-center gap-6">
            <span className="opacity-70">Connect with us</span>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="hover:text-jgu-gold transition-colors">
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8 opacity-95">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-jgu-gold" />
              <span>Thaltej, Ahmedabad, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-jgu-gold" />
              <span>admissions@jguni.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-jgu-gold" />
              <span>+91 7567 7567 58/59</span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-500 bg-white border-b border-gray-100 ${
          isScrolled ? 'py-1 shadow-xl' : 'py-3 md:py-5 shadow-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between relative">
          <Link href="/" className="flex items-center transform hover:scale-105 transition-transform duration-300 shrink-0">
            <Logo className="scale-[0.55] sm:scale-75 lg:scale-90" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 xl:gap-2">
            {navData.map((item) => (
              <div 
                key={item.name} 
                className={item.isMega ? "" : "relative"}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-3 py-2 text-[12px] xl:text-[13px] font-black uppercase tracking-wider flex items-center gap-1 transition-colors whitespace-nowrap ${
                    activeDropdown === item.name ? 'text-rose-950 bg-gray-50 rounded-lg' : 'text-rose-950/70 hover:text-rose-950'
                  }`}
                >
                  {item.name}
                  {(item.links || item.isMega) && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (item.links || item.isMega) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-full mt-2 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-[100] ${
                        item.isMega 
                          ? 'left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 w-[calc(100vw-2rem)] lg:w-[calc(100%-4rem)] max-w-7xl grid grid-cols-4 p-10 gap-10' 
                          : 'left-1/2 -translate-x-1/2 w-64 p-4'
                      }`}
                    >
                      {item.isMega ? (
                        item.columns?.map((col, idx) => (
                          <div key={idx} className="space-y-6">
                            <h4 className="text-[11px] font-black text-jgu-gold uppercase tracking-[0.25em] border-b border-gray-100 pb-3">
                              {col.title}
                            </h4>
                            <div className="flex flex-col gap-4">
                              {col.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="group flex items-center justify-between text-sm text-gray-500 hover:text-rose-950 font-bold transition-all"
                                >
                                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-jgu-gold" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-col gap-1">
                          {item.links?.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="px-4 py-3 rounded-xl hover:bg-rose-50 text-sm font-bold text-gray-700 hover:text-rose-950 transition-all flex items-center justify-between group"
                            >
                              <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-jgu-gold" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-4 pr-10 py-2 border border-gray-100 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-jgu-gold/20 w-32 xl:w-40 group-focus-within:w-56 transition-all duration-500 font-outfit"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-jgu-gold transition-colors" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#fbb03b] text-white px-6 xl:px-8 py-3 rounded-xl text-[12px] xl:text-[13px] font-black hover:bg-black transition-all uppercase tracking-widest shadow-lg shadow-orange-200/50"
            >
              Admission
            </motion.button>
          </div>

          <button
            className="lg:hidden text-rose-950 p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[70px] bg-white z-[99] lg:hidden overflow-y-auto"
            >
              <div className="p-8 space-y-8">
                {navData.map((item) => (
                  <div key={item.name} className="space-y-4">
                    <div className="text-xs font-black text-jgu-gold uppercase tracking-widest">{item.name}</div>
                    <div className="grid grid-cols-1 gap-4">
                      {item.isMega ? (
                        item.columns?.flatMap(c => c.links).map(link => (
                          <Link key={link.name} href={link.href} className="text-lg font-black text-rose-950 flex items-center justify-between">
                            {link.name}
                            <ArrowRight size={18} className="text-gray-300" />
                          </Link>
                        ))
                      ) : (
                        item.links?.map(link => (
                          <Link key={link.name} href={link.href} className="text-lg font-black text-rose-950 flex items-center justify-between">
                            {link.name}
                            <ArrowRight size={18} className="text-gray-300" />
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="pt-8 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full bg-rose-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-rose-950/20"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
    </>
  );
}
