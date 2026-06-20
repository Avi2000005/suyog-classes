/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, BookOpen, MessageSquareCode, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToCourses = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const coursesSection = document.querySelector('#courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F9FA] py-12 lg:py-20"
    >
      {/* Decorative colored blurred light bubbles */}
      <div className="absolute top-1/4 right-0 -z-10 w-72 h-72 bg-gradient-to-tr from-brand-orange/15 to-brand-gold/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 -z-10 w-96 h-96 bg-gradient-to-tr from-brand-red/10 to-brand-orange/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Admissions Open Banner inside the website space */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-250/80 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="inline-flex bg-gradient-to-r from-brand-red to-brand-orange text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full animate-pulse shadow-sm">
              2026-27 Admissions Open
            </span>
            <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-800 tracking-wide">
              Enrollments invited for Science, MHT-CET & IIT-JEE/NEET Foundation Batches!
            </span>
          </div>
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="text-xs font-black tracking-wider uppercase text-brand-red hover:text-brand-orange transition-colors flex items-center gap-1 shrink-0 group"
          >
            Apply Online Now
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tag/Badge indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-widest font-sans">
                <Award className="w-3.5 h-3.5" />
                No. 1 Foundation Center
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange font-bold text-xs uppercase tracking-widest font-sans">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trusted Academy
              </span>
            </motion.div>

            {/* Main Headline H1 (Single H1 on the page for SEO) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              id="hero-title"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              <span className="block text-slate-800 text-2xl sm:text-3xl font-bold tracking-tight font-sans mb-2">
                Prof. Maske Patil Sir's
              </span>
              <span className="block bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold bg-clip-text text-transparent pb-3">
                SUYOG CLASSES
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 tracking-tight leading-normal mt-1">
                Academy of Medical & IIT Foundation
              </span>
            </motion.h1>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal"
            >
              Empowering students with exceptional, highly personal, and <strong className="font-semibold text-slate-800">affordable coaching</strong> for Classes 9th to 12th. Excelling across <strong className="font-semibold text-brand-navy">State Board, Semi-English, CBSE, and ICSE</strong> curricula with a strong focus on building core academic foundations.
            </motion.p>

            {/* Bullet Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left font-sans text-xs sm:text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red"></span>
                <span>IIT / NEET Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange"></span>
                <span>Personal Attention (Small Batches)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
                <span>Experienced Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-navy"></span>
                <span>Regular Testing & Progress Reports</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={scrollToCourses}
                id="hero-cta-courses"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer select-none"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Courses</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="https://wa.me/918626092350"
                target="_blank"
                rel="noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer"
              >
                <MessageSquareCode className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="/images/hero-class-photo.webp"
                alt="Suyog Classes Celebrating Students"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback beautiful image if path issues arise
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600';
                }}
              />
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none"></div>

              {/* Floating success stats badge right on top of the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-lg">
                    🏆
                  </div>
                  <div>
                    <span className="block text-slate-900 font-extrabold text-sm font-display tracking-tight">
                      Annual Batch Excellence
                    </span>
                    <span className="block text-slate-500 text-xs font-semibold">
                      Consistently producing top scorers in CBSE & State Board!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background outline square */}
            <div className="absolute -inset-2 border-2 border-brand-orange/30 -z-20 rounded-3xl translate-x-3 translate-y-3 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
