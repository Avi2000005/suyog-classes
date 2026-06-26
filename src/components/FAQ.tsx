import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const localFAQs: FAQItem[] = [
  {
    question: "Why choose Suyog Coaching Classes in Chhatrapati Sambhajinagar?",
    answer: "Suyog Coaching Classes (led by Prof. Maske Patil Sir) is highly regarded as one of the best tuition centers in Chhatrapati Sambhajinagar (formerly Aurangabad). We focus on delivering high-quality, concept-based education at affordable fees, ensuring it is never a financial burden for parents. With small batch sizes, experienced faculty, and rigorous weekly tests, we offer unmatched personal attention for every student's success."
  },
  {
    question: "Who leads the teaching faculty at Suyog Classes?",
    answer: "The academy is personally directed and taught by Prof. Maske Patil Sir, a premier academic mentor in the Garkheda and Pundlik Nagar area. He is supported by a team of highly experienced faculty members and subject-matter experts who specialize in board preparation and entrance foundation courses."
  },
  {
    question: "Where is Suyog Coaching Classes located, and is it accessible?",
    answer: "Our study center is located beside Shri Swami Samarth Kendra Kaman, Pundlik Nagar Main Road, Garkheda Parisar, Chhatrapati Sambhajinagar, Maharashtra 431005. It is easily accessible for students commuting from nearby localities such as Garkheda, CIDCO, Osmanpura, Jawahar Colony, Shahnoorwadi, and Beed Bypass."
  },
  {
    question: "What class standards and boards are taught at Suyog Classes?",
    answer: "We offer comprehensive coaching for Classes 9th and 10th (covering Maharashtra State Board SSC, CBSE, and ICSE curricula) as well as Classes 11th and 12th Science boards. We also provide specialized preparation for the MHT-CET entrance exam and early IIT-JEE & NEET foundations."
  },
  {
    question: "What makes the 9th and 10th standard coaching unique here?",
    answer: "For school students, we focus heavily on building deep, concept-based learning. We cover the entire curriculum for Science, Mathematics, English, Social Sciences, and regional languages (Marathi/Hindi). We offer instruction in English and Semi-English patterns to suit Maharashtra State Board and CBSE requirements."
  },
  {
    question: "Does Suyog Classes offer science coaching for 11th and 12th standard?",
    answer: "Yes, our Higher Secondary (HSC) coaching program is dedicated to 11th and 12th Science. We provide intensive coaching for Physics, Chemistry, Mathematics, and Biology (PCMB) to help students secure top board percentages and build key concepts for entrance tests."
  },
  {
    question: "What is the typical batch size at Suyog Coaching Classes?",
    answer: "We believe in private coaching principles, which is why we maintain strictly limited batch sizes. Unlike crowded corporate learning centers, our small batches allow Prof. Maske Patil Sir to closely track each student's progress and provide customized feedback."
  },
  {
    question: "Do you conduct weekly test series and assessments?",
    answer: "Yes, regular evaluations are a cornerstone of our methodology. We conduct weekly chapter-wise tests, periodic full-syllabus mocks, and boards-pattern test series. For entrance batches, we simulate online testing conditions to build confidence and time management skills."
  },
  {
    question: "Is MHT-CET entrance coaching provided?",
    answer: "Yes, we offer specialized MHT-CET preparation for engineering and pharmacy aspirants. The program includes shortcut tricks, time-saving problem-solving techniques, previous years' question (PYQ) reviews, and simulation mock tests."
  },
  {
    question: "Do you offer NEET and IIT-JEE foundation batches?",
    answer: "Yes, we run structured IIT-JEE and NEET foundation courses for 9th and 10th standard students. These batches introduce advanced logical concepts and numerical applications early, bridging the gap between high school boards and competitive exam requirements."
  },
  {
    question: "How are individual student doubts resolved?",
    answer: "We dedicate specific doubt-solving sessions after daily classes. Since batch sizes are small, students can directly interact with Prof. Maske Patil Sir and our tutors to clarify complex theories, derivations, or numerical steps without hesitation."
  },
  {
    question: "Why is personal attention emphasized by Patil Sir?",
    answer: "Every student has a unique learning pace. By keeping class batches small, we can focus on individual performance tracking. Patil Sir regularly reviews progress, helps struggling students build confidence, and guides toppers to achieve maximum board merit marks."
  },
  {
    question: "Is the tuition fee at Suyog Classes affordable?",
    answer: "Democratizing quality education is our primary mission. Our fee structure is kept highly competitive and affordable, making it accessible to all families in Aurangabad/Chhatrapati Sambhajinagar without compromising on academic quality, infrastructure, or testing rigor."
  },
  {
    question: "What is the admission process for new batches?",
    answer: "Admissions open annually for school boards and entrance batches. Parents and students can visit our center in Pundlik Nagar, fill out an enquiry form, or call us at 8626092350 to check current batch schedules, available slots, and fee installments."
  },
  {
    question: "What subjects are covered for 10th State Board & CBSE students?",
    answer: "We offer thorough preparation in Mathematics (Algebra & Geometry), Science (Physics, Chemistry, Biology), Social Sciences (History, Geography, Civics), English, and Marathi/Hindi languages to ensure complete balance and high board scores."
  },
  {
    question: "How does the institute prepare students for Board Exam Topper ranks?",
    answer: "Our board toppers' strategy includes solving multiple boards-pattern test papers, learning precise answer-writing presentation techniques, regular revisions of NCERT and State textbooks, and mental preparation sessions to reduce exam anxiety."
  },
  {
    question: "Can students from CIDCO, Jawahar Colony, and Osmanpura commute easily?",
    answer: "Yes, our central location on the Pundlik Nagar Main Road in Garkheda Parisar is well-connected by local transport. Students from CIDCO, Osmanpura, Jawahar Colony, Kranti Chowk, Bajaj Nagar, and Railway Station area can easily commute daily."
  },
  {
    question: "Are parent-teacher meetings (PTM) organized?",
    answer: "Yes, we maintain transparent communication with parents. We organize regular parent-teacher meetings to discuss test scores, attendance records, study behaviors, and general progress reports."
  },
  {
    question: "Does the center provide coaching for Semi-English medium students?",
    answer: "Yes, we offer specialized Semi-English batches for State Board students. Scientific terms and mathematical logic are explained clearly in English while maintaining comfortable language dynamics so that concepts are fully understood."
  },
  {
    question: "Are study materials and Daily Practice Papers (DPP) provided?",
    answer: "Yes, we supply curated worksheets, chapter-wise concept notes, formula cheat sheets, and Daily Practice Papers (DPPs) that align perfectly with the latest board patterns and entrance curricula."
  },
  {
    question: "What is the historical success rate of Suyog Classes?",
    answer: "Suyog Classes holds a consistent record of 100% pass percentages in 10th boards, with a high proportion of students scoring above 90% in CBSE and State Board examinations, as well as outstanding performance in MHT-CET entrance exams."
  },
  {
    question: "How are Physics, Chemistry, and Biology taught in the 11th-12th Science batches?",
    answer: "Science subjects are taught using physical experiments/visual aids, extensive laboratory derivations, numerical drills, and regular conceptual mapping. This establishes a robust foundation for both board exams and entrance tests."
  },
  {
    question: "Does the center provide math-specific coaching for high school?",
    answer: "Yes, high school mathematics is a primary focus area. We emphasize formula derivations, step-by-step logic modeling, and speed arithmetic drills to help students score maximum marks in school and board math exams."
  },
  {
    question: "How does Patil Sir monitor student attendance and discipline?",
    answer: "We maintain strict guidelines for attendance. Daily student arrivals are tracked, and parents are immediately notified via SMS or phone call if a student is absent without prior intimation."
  },
  {
    question: "Is offline coaching preferred over online formats at Suyog Classes?",
    answer: "We strongly recommend and specialize in offline face-to-face coaching. Physical classrooms build disciplined routine, allow instant clarification of questions, provide silent test conditions, and promote healthy academic competition."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100 scroll-mt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center mb-16">
          <h2 className="font-display text-base font-extrabold uppercase tracking-widest text-brand-red">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Common Student & Parent Queries Answered
          </p>
          <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get clear, transparent details about batch formats, boards, admissions, and faculty led by Prof. Maske Patil Sir.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4" id="faq-accordion-list">
          {localFAQs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-800 hover:text-brand-red transition-colors duration-150 focus:outline-none min-h-[56px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-brand-red' : ''
                    }`} 
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-5 bg-slate-50/50 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
