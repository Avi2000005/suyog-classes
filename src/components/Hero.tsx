import React from 'react';
import { ArrowRight, BookOpen, MessageSquareCode, Award, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://suyogcoachingclasses.in/#website",
      "url": "https://suyogcoachingclasses.in/",
      "name": "Suyog Coaching Classes",
      "description": "Premium educational coaching institute in Chhatrapati Sambhajinagar",
      "publisher": {
        "@id": "https://suyogcoachingclasses.in/#organization"
      }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://suyogcoachingclasses.in/#organization",
      "name": "Prof. Maske Patil Sir's Suyog Classes",
      "alternateName": "Suyog Classes Chhatrapati Sambhajinagar",
      "description": "Premier educational coaching institute in Chhatrapati Sambhajinagar offering quality, affordable tuition for school boards (State Board, CBSE, ICSE) and advanced competitive engineering/medical foundations (IIT-JEE, NEET, MHT-CET).",
      "logo": "https://suyogcoachingclasses.in/images/logo.webp",
      "url": "https://suyogcoachingclasses.in/",
      "telephone": "+918626092350",
      "sameAs": [
        "https://youtube.com/@suyogclasses?si=Lg38VnV64L1Arbpn",
        "https://www.instagram.com/suyog_classes?igsh=dXI1a2VyZjNvN3ht",
        "https://www.facebook.com/share/1CsSsSfyFW"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beside Shri Swami Samarth Kendra Kaman, Pundlik Nagar Main Road, Garkheda Parisar",
        "addressLocality": "Chhatrapati Sambhajinagar",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.861783",
        "longitude": "75.352494"
      },
      "hasMap": "https://maps.app.goo.gl/wk8Happ3ek59rDeW8",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918626092350",
        "contactType": "admissions",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://suyogcoachingclasses.in/#localbusiness",
      "name": "Suyog Coaching Classes",
      "image": "https://suyogcoachingclasses.in/images/logo.webp",
      "telephone": "+918626092350",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beside Shri Swami Samarth Kendra Kaman, Pundlik Nagar Main Road, Garkheda Parisar",
        "addressLocality": "Chhatrapati Sambhajinagar",
        "addressRegion": "Maharashtra",
        "postalCode": "431005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.861783",
        "longitude": "75.352494"
      },
      "url": "https://suyogcoachingclasses.in/",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        }
      ]
    }
  ]
};

export default function Hero() {
  const navigate = useNavigate();

  const goToCourses = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/courses');
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-navy bg-[radial-gradient(circle_at_25%_35%,rgba(185,28,28,0.25)_0%,rgba(217,119,6,0.15)_40%,transparent_80%),radial-gradient(circle_at_75%_55%,rgba(217,119,6,0.18)_0%,rgba(185,28,28,0.15)_35%,transparent_75%)] pt-36 pb-12 lg:pt-40 lg:pb-20 text-white animate-fade-in"
    >
      <SEO 
        title="Suyog Coaching Classes Chhatrapati Sambhajinagar | 9th-12th Board & Entrance Foundation"
        description="Prof. Maske Patil Sir's Suyog Classes in Pundlik Nagar, Chhatrapati Sambhajinagar provides premier private coaching for Classes 9th, 10th, 11th, and 12th Science boards (State Board, CBSE, ICSE) and MHT-CET/IIT/NEET foundations."
        keywords="Suyog Coaching Classes, Suyog Classes Chhatrapati Sambhajinagar, best tuition classes near me, 10th SSC coaching, 11th 12th science board exam preparation, MHT-CET coaching, Pundlik Nagar, Garkheda Parisar"
        canonical="https://suyogcoachingclasses.in/"
        schema={homeSchema}
      />
      {/* Decorative colored blurred light bubbles */}
      <div className="absolute top-12 left-10 -z-10 w-[450px] h-[450px] bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 -z-10 w-[350px] h-[350px] bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 -z-10 w-[450px] h-[450px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-12 right-0 -z-10 w-[350px] h-[350px] bg-brand-red/18 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Admissions Open Banner inside the website space */}
        <div
          className="mb-10 p-3.5 sm:p-4 rounded-2xl bg-[#1a100d] border border-brand-gold/30 shadow-[0_4px_20px_-3px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left opacity-0 animate-fade-in-down animation-delay-100"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="inline-flex bg-transparent border border-brand-gold text-brand-gold text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full animate-pulse shadow-sm">
              • 🎓 2026-27 Admissions Open
            </span>
            <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-200 tracking-wide">
              Enrollments invited for Science, MHT-CET & IIT-JEE/NEET Foundation Batches!
            </span>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="text-xs font-black tracking-wider uppercase text-brand-gold hover:text-brand-orange transition-colors flex items-center justify-center gap-1 shrink-0 group cursor-pointer min-h-[44px] py-2 px-3"
          >
            Apply Online Now
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tag/Badge indicator */}
            <div
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6 opacity-0 animate-fade-in-up"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/20 text-red-300 border border-brand-red/40 font-bold text-xs uppercase tracking-widest font-sans">
                <Award className="w-3.5 h-3.5" />
                No. 1 Foundation Center
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-orange/20 text-brand-gold border border-brand-orange/30 font-bold text-xs uppercase tracking-widest font-sans">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trusted Academy
              </span>
            </div>

            {/* Main Headline H1 (Single H1 on the page for SEO) */}
            <h1
              id="hero-title"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] opacity-0 animate-fade-in-up animation-delay-150"
            >
              <span className="block text-slate-300 text-2xl sm:text-3xl font-bold tracking-tight font-sans mb-2">
                Prof. Maske Patil Sir's
              </span>
              <span className="block text-brand-gold pb-3 font-display">
                SUYOG CLASSES
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-200 tracking-tight leading-normal mt-1">
                Academy of Medical & IIT Foundation
              </span>
            </h1>

            {/* Intro paragraph */}
            <p
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-normal opacity-0 animate-fade-in-up animation-delay-300"
            >
              Empowering high school students with exceptional, highly personal, and <strong className="font-bold text-white">affordable coaching</strong> for Classes 9th to 12th in Pundlik Nagar and Garkheda Parisar. Excelling across <strong className="font-bold text-brand-gold">State Board (SSC/HSC), CBSE, and ICSE</strong> curricula, we build a solid academic base for Board Exams, MHT-CET, and NEET/IIT-JEE foundation batches.
            </p>

            {/* Bullet Highlights */}
            <div
              className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left font-sans text-xs sm:text-sm font-semibold text-slate-300 opacity-0 animate-fade-in-up animation-delay-400"
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
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span>Regular Testing & Progress Reports</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up animation-delay-450"
            >
              <button
                onClick={goToCourses}
                id="hero-cta-courses"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer select-none"
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
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-brand-red hover:bg-[#9b1c1c] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <MessageSquareCode className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Photo Column / Chatbot */}
          <div
            className="lg:col-span-5 relative flex justify-center lg:justify-end opacity-0 animate-fade-in-scale animation-delay-200"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-950 group">
              <img
                src="/images/hero-class-photo.webp"
                alt="High school board toppers and students celebrating academic success at Suyog Classes, Chhatrapati Sambhajinagar"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback beautiful image if path issues arise
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600';
                }}
              />
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none"></div>

              {/* Floating success stats badge right on top of the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1a100d]/90 backdrop-blur-md shadow-lg border border-brand-gold/25">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-lg">
                    🏆
                  </div>
                  <div>
                    <span className="block text-white font-extrabold text-sm font-display tracking-tight">
                      Annual Batch Excellence
                    </span>
                    <span className="block text-slate-300 text-xs font-semibold">
                      Consistently producing top scorers in CBSE & State Board!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background outline square */}
            <div className="absolute -inset-2 border-2 border-brand-gold/25 -z-20 rounded-3xl translate-x-3 translate-y-3 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
