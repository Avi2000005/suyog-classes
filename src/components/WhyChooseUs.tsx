import { Coins, UserCheck, Users, Target, Check } from 'lucide-react';
import { BenefitItem } from '../types';
import SEO from './SEO';
import FAQ, { localFAQs } from './FAQ';

const faqSchemaItems = localFAQs.map(faq => ({
  "@type": "Question",
  "name": faq.question,
  "acceptedAnswer": {
    "@type": "Answer",
    "text": faq.answer
  }
}));

const whyChooseUsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.suyogcoachingclasses.in/why-choose-us#webpage",
      "url": "https://www.suyogcoachingclasses.in/why-choose-us",
      "name": "Why Choose Suyog Classes | Small Batches & Personal Attention",
      "description": "Discover the advantages of studying at Suyog Classes. Small batch sizes, expert mentoring by Patil Sir, weekly assessments, and affordable tuition in Aurangabad/Chhatrapati Sambhajinagar.",
      "isPartOf": {
        "@id": "https://www.suyogcoachingclasses.in/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://suyogcoachingclasses.in/why-choose-us#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.suyogcoachingclasses.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Why Choose Us",
          "item": "https://www.suyogcoachingclasses.in/why-choose-us"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.suyogcoachingclasses.in/why-choose-us#faq",
      "mainEntity": faqSchemaItems
    }
  ]
};

export default function WhyChooseUs() {
  const benefits: BenefitItem[] = [
    {
      id: 'affordable',
      title: 'Affordable, Value-Driven Education',
      description: 'Excellent coaching shouldn’t be a financial burden. We deliver premium quality at a highly competitive cost.',
      icon: 'Coins'
    },
    {
      id: 'faculty',
      title: 'Experienced Faculty led by Prof. Maske Patil',
      description: 'Benefit directly from the vast coaching expertise and mentoring philosophy of Prof. Maske Patil Sir.',
      icon: 'UserCheck'
    },
    {
      id: 'batches',
      title: 'Small Batches with Personal Attention',
      description: 'We limit class seats to ensure every single student’s doubts are addressed and progress is tracked.',
      icon: 'Users'
    },
    {
      id: 'foundation',
      title: 'Strong Board & Entrance Foundation',
      description: 'Robust core concept building readying students for Board exams as well as competitive IIT/NEET/MHT-CET.',
      icon: 'Target'
    }
  ];

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins':
        return <Coins className="w-7 h-7 text-brand-orange" />;
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-brand-red" />;
      case 'Users':
        return <Users className="w-7 h-7 text-brand-gold" />;
      case 'Target':
        return <Target className="w-7 h-7 text-brand-red" />;
      default:
        return <Check className="w-7 h-7 text-brand-orange" />;
    }
  };

  return (
    <>
      <SEO
        title="Why Choose Suyog Classes | Small Batches & Personal Attention"
        description="Discover the advantages of studying at Suyog Classes in Chhatrapati Sambhajinagar. Small batch sizes, expert mentoring by Patil Sir, weekly tests, and affordable fees."
        keywords="best coaching near me, coaching classes with weekly tests, personal attention tuition, affordable coaching classes, Aurangabad"
        canonical="https://www.suyogcoachingclasses.in/why-choose-us"
        schema={whyChooseUsSchema}
      />
      <section id="why-choose-us" className="py-16 sm:py-24 bg-white relative scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-extrabold uppercase tracking-widest text-brand-red">
            Why Choose Us
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Suyog Classes Advantage
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our educational approach is student-centric, helping high school pupils flourish naturally without academic anxiety.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:bg-white hover:border-brand-orange/15 transition-all duration-300 relative group"
              id={`benefit-${benefit.id}`}
            >
              {/* Highlight bar top */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-red group-hover:to-brand-orange rounded-b-full transition-all duration-300"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300 mb-6">
                {getBenefitIcon(benefit.icon)}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-slate-800 tracking-tight leading-snug mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sparingly Used "Vision" Band (Dark Navy #1F2937 Background) */}
        <div
          id="vision-band"
          className="mt-16 sm:mt-24 bg-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Decorative graphic patterns */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-12 translate-x-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Header / Accent indicator */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-700/60 pb-6 lg:pb-0 lg:pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red text-white uppercase text-[10px] tracking-widest font-black rounded-md mb-3 font-sans">
                Our Core Vision
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Empowering the Next Generation of Achievers
              </h3>
            </div>

            {/* Vision Quote statement */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-300">
                "We do not merely teach formulas and theoretical layouts; we spark genuine intellectual curiosity. Our core vision is to convert every student's innate potential into academic confidence. By delivering structured foundation programs, we ensure students transition from standard school boards to competitive exams smoothly and affordably."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-brand-orange to-brand-gold rounded-full"></div>
                <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wide text-brand-orange">
                  Suyog Classes Editorial Focus — Chhatrapati Sambhajinagar
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <div className="hidden" aria-hidden="true">
      <FAQ />
    </div>
    </>
  );
}
