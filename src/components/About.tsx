/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-extrabold uppercase tracking-widest text-brand-red">
            About Us
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Legacy of Trust & Educational Value
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Photo Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-100 group">
              <img
                src="/images/owner-photo.webp"
                alt="Prof. Maske Patil, Founder of Suyog Classes"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600';
                }}
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="block font-sans font-bold text-lg uppercase tracking-wide">
                  Prof. Maske Patil Sir
                </span>
                <span className="block text-xs font-medium text-brand-gold">
                  Founder & Principal Educator
                </span>
              </div>
            </div>

            {/* Back offset border */}
            <div className="absolute -inset-2 border-2 border-brand-red/20 -z-10 rounded-3xl -translate-x-3 -translate-y-3 pointer-events-none"></div>
          </div>

          {/* Founder Quote & Mission Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Styled Quote Block */}
            <div className="relative bg-rose-50/50 border-l-4 border-brand-red p-6 sm:p-8 rounded-r-3xl shadow-sm mb-8">
              {/* Giant elegant quotes icon */}
              <div className="absolute top-4 right-6 text-brand-orange/10 pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <blockquote className="relative z-10 font-sans text-slate-800 text-base sm:text-lg italic font-medium leading-relaxed">
                "At Suyog Classes, we believe in imparting the best value to each student. Our aim is to impart quality education to every student at an affordable cost, so that it is not a financial burden for the parents. We are working tirelessly towards it."
              </blockquote>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-display font-black text-slate-900 text-base tracking-tight">
                    — Prof. Maske Patil
                  </h4>
                  <p className="text-xs text-brand-red font-bold uppercase tracking-wider font-sans mt-0.5">
                    Founder, Suyog Classes
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Our Vision & Mission
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                Suyog Classes was founded with a singular, resolute mission: to democratize high-caliber tuition and competitive coaching in Chhatrapati Sambhajinagar. We cater comprehensively to student development across <strong className="font-semibold text-slate-800">Classes 4th to 12th Standard</strong>, catering to both fundamental school board results and advanced engineering and medical prerequisites.
              </p>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                By bridging state-of-the-art educational methodologies with individualistic monitoring models, we guarantee that students can transition smoothly from school frameworks to complex competitive domains without feeling overwhelmed. Our record of success over progressive years stems directly from dedicated classroom sessions, standard testing routines, and an affordable, non-commercial approach to coaching. 
              </p>
            </div>

            {/* Key stats sub-band */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-brand-red">9th–12th</span>
                <span className="block uppercase tracking-wider font-sans font-bold text-[9px] sm:text-xs text-slate-500 mt-1">Target Segments</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-brand-orange">Small</span>
                <span className="block uppercase tracking-wider font-sans font-bold text-[9px] sm:text-xs text-slate-500 mt-1">Batch Sizes</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-brand-gold">100%</span>
                <span className="block uppercase tracking-wider font-sans font-bold text-[9px] sm:text-xs text-slate-500 mt-1">Affordable Focus</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
