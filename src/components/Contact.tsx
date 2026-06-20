/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, MapIcon, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    classLevel: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    classLevel: ''
  });

  const classOptions = [
    { value: '9th-state', label: '9th Standard — State Board' },
    { value: '9th-cbse', label: '9th Standard — CBSE' },
    { value: '9th-icse', label: '9th Standard — ICSE' },
    { value: '10th-state', label: '10th Standard — State Board' },
    { value: '10th-cbse', label: '10th Standard — CBSE' },
    { value: '10th-icse', label: '10th Standard — ICSE' },
    { value: '11th-science', label: '11th Standard — Science Boards' },
    { value: '11th-mhtcet', label: '11th Standard — MHT-CET' },
    { value: '12th-science', label: '12th Standard — Science Boards' },
    { value: '12th-mhtcet', label: '12th Standard — MHT-CET' },
    { value: 'other', label: 'Other / Foundation Courses' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic Validation
    let hasErrors = false;
    const newErrors = { name: '', phone: '', classLevel: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
      hasErrors = true;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
      hasErrors = true;
    }

    if (!formData.classLevel) {
      newErrors.classLevel = 'Please select a class/standard you are interested in.';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Get localized selected class label for cleaner WhatsApp text representation
    const selectedClassLabel = classOptions.find(o => o.value === formData.classLevel)?.label || formData.classLevel;

    // Compose custom, beautiful WhatsApp API text template
    const whatsappMessage = `Hello Prof. Maske Patil Sir / Suyog Classes,

I would like to enquire about coaching admissions. Here are my details:

• *Name:* ${formData.name.trim()}
• *Phone Number:* ${formData.phone}
• *Class Interested In:* ${selectedClassLabel}
• *Message/Queries:* ${formData.message.trim() ? formData.message.trim() : 'N/A'}

Looking forward to your guidance! Thank you.`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const waUrl = `https://wa.me/918626092350?text=${encodedText}`;

    // Reset form states gracefully
    setFormData({ name: '', phone: '', classLevel: '', message: '' });
    
    // Redirect securely in a new blank tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-extrabold uppercase tracking-widest text-brand-red">
            Contact Us
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Get In Touch Today
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill out the WhatsApp Enquiry Form, or visit our center directly. Your queries are always welcome!
          </p>
        </div>

        {/* Form and Address Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Desktop) - WhatsApp Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-rose-100/40 shadow-sm" id="contact-form-panel">
            <h3 className="font-display text-2xl font-black text-slate-800 tracking-tight mb-8">
              Quick WhatsApp Enquiry
            </h3>

            <p className="font-sans text-slate-500 text-xs sm:text-sm font-medium mb-8 leading-relaxed">
              Complete this short enquiry layout. Your response is automatically formatted and opened directly in your WhatsApp application to text Patil Sir directly!
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Student Name */}
              <div>
                <label htmlFor="name" className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide mb-2 h-4">
                  Student Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full font-sans text-sm text-slate-800 font-medium bg-slate-50 border ${
                    errors.name ? 'border-brand-red focus:ring-brand-red focus:border-brand-red' : 'border-slate-200 focus:ring-brand-orange focus:border-brand-orange'
                  } rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1.5 font-sans text-xs text-brand-red font-medium flex items-center gap-1">
                    ⚠️ {errors.name}
                  </p>
                )}
              </div>

              {/* Grid Number and Select Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone number */}
                <div>
                  <label htmlFor="phone" className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide mb-2 h-4">
                    Contact Mobile Number <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    className={`w-full font-sans text-sm text-slate-800 font-medium bg-slate-50 border ${
                      errors.phone ? 'border-brand-red focus:ring-brand-red' : 'border-slate-200 focus:ring-brand-orange'
                    } rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 font-sans text-xs text-brand-red font-medium-bold">
                      ⚠️ {errors.phone}
                    </p>
                  )}
                </div>

                {/* Class Standard Interested In */}
                <div>
                  <label htmlFor="classLevel" className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide mb-2 h-4">
                    Class Standard <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="classLevel"
                    name="classLevel"
                    value={formData.classLevel}
                    onChange={handleInputChange}
                    className={`w-full font-sans text-sm text-slate-800 font-semibold bg-slate-50 border ${
                      errors.classLevel ? 'border-brand-red' : 'border-slate-200'
                    } rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all`}
                  >
                    <option value="">-- Choose Standard --</option>
                    {classOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.classLevel && (
                    <p className="mt-1.5 font-sans text-xs text-brand-red font-medium">
                      ⚠️ {errors.classLevel}
                    </p>
                  )}
                </div>

              </div>

              {/* Secondary Message text */}
              <div>
                <label htmlFor="message" className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide mb-2 h-4">
                  Additional Queries / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detail any academic background or queries you have for Patil Sir..."
                  className="w-full font-sans text-sm text-slate-800 font-medium bg-slate-50 border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange rounded-xl px-4 py-3.5 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit trigger button */}
              <button
                type="submit"
                id="submit-enquiry-form-btn"
                className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold text-white font-extrabold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 select-none cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Submit Form on WhatsApp</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

            </form>
          </div>

          {/* Right Column (Desktop) - Address, Phone and Interactive Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 h-full" id="contact-info-panel">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-black text-slate-800 tracking-tight">
                Our Center Details
              </h3>
              
              {/* Address Container */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide">
                    Address Location
                  </span>
                  <p className="mt-1 font-sans text-slate-700 text-sm leading-relaxed font-medium">
                    Near Shri Swami Samarth Kendracha, Pundlik Nagar Main Road, Garkheda Parisar, Aurangabad
                  </p>
                </div>
              </div>

              {/* Click tags for numbers */}
              <div className="flex items-start gap-4 pb-2 border-b border-rose-100/30">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-brand-red flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide">
                    Call For Admissions
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                    <a
                      href="tel:+918626092350"
                      className="font-display font-black text-slate-800 text-base md:text-lg hover:text-brand-red transition-colors"
                    >
                      8626092350
                    </a>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <a
                      href="tel:+919637470097"
                      className="font-display font-black text-slate-800 text-base md:text-lg hover:text-brand-red transition-colors"
                    >
                      9637470097
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels Container */}
              <div className="pt-4 space-y-3">
                <span className="block font-sans font-bold text-xs uppercase text-slate-500 tracking-wide">
                  Explore Learning Resources Online
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href="https://youtube.com/@suyogclasses?si=Lg38VnV64L1Arbpn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 rounded-xl bg-red-50 hover:bg-red-100 border border-red-100/60 text-red-600 transition-all duration-300 group hover:shadow-sm"
                  >
                    <Youtube className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-sans font-extrabold text-[11px] sm:text-xs text-slate-700">YouTube</span>
                  </a>
                  <a
                    href="https://www.instagram.com/suyog_classes?igsh=dXI1a2VyZjNvN3ht"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-100/60 text-pink-600 transition-all duration-300 group hover:shadow-sm"
                  >
                    <Instagram className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-sans font-extrabold text-[11px] sm:text-xs text-slate-700">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CsSsSfyFW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-101 border border-blue-110/50 text-[#1877F2] transition-all duration-300 group hover:shadow-sm"
                  >
                    <Facebook className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-sans font-extrabold text-[11px] sm:text-xs text-slate-700">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google map container */}
            <div className="w-full relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[16/10] bg-slate-100">
              <iframe
                title="Suyog Classes Garkheda Parisar Aurangabad Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.050478036577!2d75.34005087508007!3d19.86015792942488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb986bfa33e1c9%3A0x6bba84ab9fb6abf7!2sGarkheda%2c%20Chhatrapati%20Sambhajinagar%20(Aurangabad)%2c%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Dir button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Garkheda+Parisar+Aurangabad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-200 font-sans text-sm tracking-wide"
            >
              <MapIcon className="w-4 h-4" />
              <span>Get Location Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
