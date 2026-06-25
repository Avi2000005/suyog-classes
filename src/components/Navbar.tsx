/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Why Choose Us', href: '/why-choose-us' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-slate-800/80 bg-header-gray">
        <nav
          id="navbar"
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-header-gray/95 md:backdrop-blur-md py-2'
              : 'bg-header-gray py-3.5'
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Branding Link */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3.5 group"
              id="navbar-logo-link"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
                  src="/images/logo.webp"
                  alt="Suyog Classes Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-xl shadow-sm border border-slate-800 group-hover:scale-105 transition-transform duration-300"
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
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-semibold transition-colors duration-250 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-gold after:transition-all after:duration-300 ${
                      isActive(link.href)
                        ? 'text-brand-gold after:w-full'
                        : 'text-slate-200 hover:text-brand-gold hover:after:w-full after:w-0'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Enquire Now Button */}
              <Link
                to="/contact"
                id="desktop-enquire-btn"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-bold text-sm px-5 py-3 min-h-[44px] rounded-full shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 select-none cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Enquire Now</span>
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                id="mobile-menu-btn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-brand-gold hover:text-brand-gold hover:bg-[#1a100d] transition-colors duration-200 focus:outline-none"
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
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-brand-gold bg-[#1a100d]'
                        : 'text-slate-200 hover:text-brand-gold hover:bg-[#1a100d]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-3">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    id="mobile-enquire-btn"
                    className="flex items-center justify-center gap-2 w-full text-center bg-brand-red text-white font-bold py-3.5 px-4 rounded-xl shadow-md"
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>Enquire Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </header>
    </>
  );
}
