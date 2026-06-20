/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-slate-800/80 bg-header-gray">
        <nav
          id="navbar"
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-header-gray/95 backdrop-blur-md py-2'
              : 'bg-header-gray py-3.5'
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Branding Link */}
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-3.5 group"
              id="navbar-logo-link"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  src="/images/logo.webp"
                  alt="Suyog Classes Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-xl shadow-sm border border-slate-850 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to beautiful text logo background in case the image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                    const fallback = document.getElementById('logo-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                {/* Fallback indicator */}
                <div
                  id="logo-fallback"
                  className="hidden absolute inset-0 bg-gradient-to-tr from-brand-red to-brand-orange text-white font-bold text-xl flex items-center justify-center rounded-xl shadow-inner font-display"
                >
                  S
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold font-sans leading-none">
                  Prof. Maske Patil Sir's
                </span>
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-gold font-display">
                  SUYOG CLASSES
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-tight leading-none mt-0.5">
                  Academy of Medical & IIT Foundation
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm font-semibold text-slate-200 hover:text-brand-gold transition-colors duration-250 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Enquire Now Button */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                id="desktop-enquire-btn"
                className="inline-flex items-center gap-2 bg-brand-red text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 select-none cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Enquire Now</span>
              </a>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                id="mobile-menu-btn"
                className="inline-flex items-center justify-center p-2 rounded-lg text-brand-gold hover:text-brand-gold hover:bg-[#1a100d] transition-colors duration-200 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              id="mobile-menu"
              className="lg:hidden border-t border-slate-800 bg-header-gray overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="block px-3 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-brand-gold hover:bg-[#1a100d] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, '#contact')}
                    id="mobile-enquire-btn"
                    className="flex items-center justify-center gap-2 w-full text-center bg-brand-red text-white font-bold py-3.5 px-4 rounded-xl shadow-md"
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>Enquire Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </header>
      {/* Spacer to prevent content overlap */}
      <div className="h-24 md:h-20 bg-brand-navy"></div>
    </>
  );
}
