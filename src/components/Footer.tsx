/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, MessageCircle, Calendar, Youtube, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans relative border-t-4 border-brand-red select-none" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Logo and About Description */}
          <div className="md:col-span-5 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3.5 group"
              aria-label="Suyog Coaching Classes - Back to Home"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  src="/images/logo.webp"
                  alt="Suyog Classes Logo Footer"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-contain rounded-xl border border-slate-800 bg-white"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const footerFallback = document.getElementById('footer-logo-fallback');
                    if (footerFallback) footerFallback.classList.remove('hidden');
                  }}
                />
                <div
                  id="footer-logo-fallback"
                  className="hidden absolute inset-0 bg-gradient-to-tr from-brand-red to-brand-orange text-white font-bold text-xl flex items-center justify-center rounded-xl"
                >
                  S
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC72C]">
                  Prof. Maske Patil Sir's
                </span>
                <span className="text-lg font-black tracking-tight text-white font-display">
                  SUYOG CLASSES
                </span>
                <span className="text-[10px] font-medium text-slate-400">
                  Academy of Medical & IIT Foundation
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Prof. Maske Patil Sir’s SUYOG CLASSES is Chhatrapati Sambhajinagar’s premier institution, molding young minds for state board excellence and competitive medicine / IIT engineering foundations.
            </p>

            <div className="space-y-3">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Connect With Us On Social Media
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://youtube.com/@suyogclasses?si=Lg38VnV64L1Arbpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-300 shadow-sm transition-all duration-300 group hover:scale-110"
                  aria-label="Visit our YouTube Channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/suyog_classes?igsh=dXI1a2VyZjNvN3ht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white flex items-center justify-center text-slate-300 shadow-sm transition-all duration-300 group hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1CsSsSfyFW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-slate-300 shadow-sm transition-all duration-300 group hover:scale-110"
                  aria-label="Like our Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/918626092350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-300 shadow-sm transition-all duration-300 group hover:scale-110"
                  aria-label="Direct message on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase text-white tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-0.5 font-medium text-xs sm:text-sm text-slate-400" id="footer-quick-links">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Courses Offered', href: '/courses' },
                { label: 'Why Choose Us', href: '/why-choose-us' },
                { label: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-[#FFC72C] transition-colors py-3 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Info again Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-display font-extrabold text-sm uppercase text-white tracking-widest">
              Our Contact Information
            </h4>
            
            <ul className="space-y-4 text-xs sm:text-sm font-medium text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                 Beside Shri Swami Samarth Kendra Kaman, Pundlik Nagar Main Road, Garkheda Parisar, Chhatrapati Sambhajinagar
                </span>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-800/80 pt-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+918626092350" className="hover:text-white transition-colors font-bold text-sm py-1 block">
                    8626092350
                  </a>
                  <a href="tel:+919637470097" className="hover:text-white transition-colors font-bold text-sm py-1 block">
                    9637470097
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-800/80 pt-3">
                <Calendar className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span>Admission Hours: 9:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center text-xs text-slate-400 font-sans">
          <p>
            © {currentYear} Prof. Maske Patil Sir's Suyog Classes. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-3 font-semibold text-[10px] uppercase tracking-wider">
            <span>Affordable Coaching Excellence</span>
            <span>•</span>
            <span>Chhatrapati Sambhajinagar, Maharashtra</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
