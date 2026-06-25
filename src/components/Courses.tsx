/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BookOpen, Award, FileText, Atom, BrainCircuit, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CourseGroup } from '../types';

export default function Courses() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | '9-10' | '11-12'>('all');

  const courseGroups: CourseGroup[] = [
    {
      id: '9-10',
      title: '9th & 10th Standard',
      subtitle: 'Building core concepts & scoring foundations',
      courses: [
        {
          id: 'state-board-g1',
          name: 'State Board',
          description: 'Strong fundamentals aligned to the Maharashtra State Board exam pattern.',
          icon: 'BookOpen',
          features: [
            'Rigorous syllabus mapping',
            'Syllabus in English & Semi-English',
            'Weekly chapter-wise testing',
            'Interactive evaluation models'
          ]
        },
        {
          id: 'cbse-g1',
          name: 'CBSE',
          description: 'Robust conceptual planning aligned thoroughly to CBSE curriculum.',
          icon: 'Award',
          features: [
            'NCERT-centric concepts',
            'Formative assessment tracking',
            'Mock boards & grading routines',
            'Subject-specialist coaching'
          ]
        },
        {
          id: 'icse-g1',
          name: 'ICSE',
          description: 'Deep comprehensive curriculum building elite logical skillsets.',
          icon: 'FileText',
          features: [
            'In-depth syllabus focus',
            'Strong English & Science core',
            'Project Guidance & Mentoring',
            'Regular performance reviews'
          ]
        }
      ]
    },
    {
      id: '11-12',
      title: '11th & 12th Standard (Science)',
      subtitle: 'Targeting top board scores and entrance excellence',
      courses: [
        {
          id: 'science-boards-g2',
          name: 'Science Boards',
          description: 'Extensive subject mastery for Physics, Chemistry, Biology, and Mathematics.',
          icon: 'Atom',
          features: [
            'Full board-pattern syllabus',
            'Conceptual notes & derivations',
            'Extensive test series model',
            'Regular doubt-clearing blocks'
          ]
        },
        {
          id: 'mht-cet-g2',
          name: 'MHT-CET',
          description: 'Strategic planning, rapid problem-solving, and mock test routines.',
          icon: 'BrainCircuit',
          features: [
            'Time management skills',
            'Experienced entrance coaching',
            'Online testing simulation',
            'Previous year question papers'
          ]
        }
      ]
    }
  ];

  const handleScrollToContact = () => {
    navigate('/contact');
  };

  const getIconComponent = (iconName: string, iconColorClass: string = "text-brand-red") => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className={`w-6 h-6 ${iconColorClass}`} />;
      case 'Award':
        return <Award className={`w-6 h-6 ${iconColorClass}`} />;
      case 'FileText':
        return <FileText className={`w-6 h-6 ${iconColorClass}`} />;
      case 'Atom':
        return <Atom className={`w-6 h-6 ${iconColorClass}`} />;
      case 'BrainCircuit':
        return <BrainCircuit className={`w-6 h-6 ${iconColorClass}`} />;
      default:
        return <Sparkles className={`w-6 h-6 ${iconColorClass}`} />;
    }
  };

  const getCardGradient = (courseId: string) => {
    if (courseId.includes('icse')) {
      return 'bg-gradient-to-r from-[#047857] to-[#065f46] text-white'; // Green
    }
    if (courseId.includes('cet')) {
      return 'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white'; // Amber/Gold
    }
    return 'bg-gradient-to-r from-[#9b1c1c] to-[#7f1d1d] text-white'; // Red
  };

  const getCheckmarkColor = (courseId: string) => {
    if (courseId.includes('icse')) return 'text-[#047857]';
    if (courseId.includes('cet')) return 'text-[#d97706]';
    return 'text-[#b91c1c]';
  };

  const getButtonHoverStyle = (courseId: string) => {
    if (courseId.includes('icse')) {
      return 'hover:bg-[#047857] hover:text-white hover:border-[#047857]';
    }
    if (courseId.includes('cet')) {
      return 'hover:bg-[#d97706] hover:text-white hover:border-[#d97706]';
    }
    return 'hover:bg-brand-red hover:text-white hover:border-brand-red';
  };

  const filteredGroups = activeTab === 'all' 
    ? courseGroups 
    : courseGroups.filter(g => g.id === activeTab);

  return (
    <section id="courses" className="py-16 sm:py-24 bg-rose-50/10 relative border-y border-rose-100/30 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-base font-extrabold uppercase tracking-widest text-brand-red">
            Courses Offered
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Programs For Academic Success
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose from our specialized, outcome-focused curriculum meticulously designed by Prof. Maske Patil Sir.
          </p>
        </div>

        {/* Tab/Group Segmented Controller Selector */}
        <div className="flex justify-center mb-12" id="courses-tabs-selector">
          <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 font-sans">
             <button
              onClick={() => setActiveTab('all')}
              className={`py-3 px-5 min-h-[44px] flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-red hover:bg-slate-50'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setActiveTab('9-10')}
              className={`py-3 px-5 min-h-[44px] flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === '9-10'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-red hover:bg-slate-50'
              }`}
            >
              9th & 10th Std
            </button>
            <button
              onClick={() => setActiveTab('11-12')}
              className={`py-3 px-5 min-h-[44px] flex items-center justify-center rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === '11-12'
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-red hover:bg-slate-50'
              }`}
            >
              11th & 12th Sci
            </button>
          </div>
        </div>

        {/* Group Render List */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                id={`course-group-${group.id}`}
              >
                {/* Inner Header */}
                <div className="mb-8 text-center sm:text-left border-b border-slate-200 pb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-800 flex items-center justify-center sm:justify-start gap-3">
                    <span className="w-2.5 h-6 bg-brand-red rounded-full block"></span>
                    {group.title}
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm font-medium mt-1">
                    {group.subtitle}
                  </p>
                </div>

                {/* Cards Grid */}
                <div className={`grid grid-cols-1 ${group.courses.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-6`}>
                  {group.courses.map((course) => (
                    <div
                      key={course.id}
                      className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      id={`course-card-${course.id}`}
                    >
                      {/* Colored Top Header */}
                      <div className={`p-6 ${getCardGradient(course.id)}`}>
                        {/* Header card icon and title */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 text-white shrink-0">
                            {getIconComponent(course.icon, "text-white")}
                          </div>
                          <h4 className="font-display font-black text-lg text-white tracking-tight">
                            {course.name}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-slate-100/90 leading-relaxed min-h-[40px]">
                          {course.description}
                        </p>
                      </div>

                      {/* White Bottom Body */}
                      <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                        {/* List of features */}
                        <ul className="space-y-2.5" id={`features-list-${course.id}`}>
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 font-sans text-xs text-slate-600">
                              <CheckCircle className={`w-4 h-4 ${getCheckmarkColor(course.id)} mt-0.5 flex-shrink-0`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Footer button inside card */}
                        <button
                          onClick={handleScrollToContact}
                          className={`mt-8 inline-flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs py-3 min-h-[44px] w-full rounded-xl transition-all duration-350 cursor-pointer ${getButtonHoverStyle(course.id)}`}
                        >
                          Enquire For Admission
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA banner under courses */}
        <div className="mt-16 bg-[#130c0a] border border-brand-gold/20 text-white rounded-3xl p-6 sm:p-10 shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -z-1 translate-x-1/2 -translate-y-1/2"></div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold font-sans">
            Limited Admissions Available
          </p>
          <p className="mt-2 text-2xl sm:text-3xl font-black font-display tracking-tight leading-tight">
            Give Your Child the Foundation They Deserve
          </p>
          <p className="mt-4 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed text-slate-300 font-sans">
            We maintain extremely small student batches to promise personal conceptual review, rigorous test performance oversight, and regular mentoring by Patil Sir.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3 min-h-[44px] bg-brand-red text-white hover:bg-brand-red/90 font-extrabold text-sm rounded-full shadow-sm hover:shadow-md hover:scale-103 active:scale-97 transition-all cursor-pointer"
            >
              Check Batch Schedules
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
