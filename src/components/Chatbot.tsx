import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, HelpCircle, Phone, MapPin, DollarSign, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

// Client-side query matching engine
function getChatbotResponse(input: string): string {
  const query = input.toLowerCase().trim();

  // Greeting
  if (query.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening|yo)\b/)) {
    return "Hello! Welcome to Suyog Classes. I am your virtual assistant. How can I help you today? You can ask me about our courses, fees, location, or how to contact Prof. Maske Patil Sir.";
  }

  // Fees
  if (query.includes('fee') || query.includes('cost') || query.includes('price') || query.includes('charge') || query.includes('rupees') || query.includes('expensive') || query.includes('cheap') || query.includes('affordable') || query.includes('installment')) {
    return "Suyog Classes is committed to keeping high-quality education affordable. We believe that top-tier tutoring should not be a financial burden for parents. Exact fees depend on the class (9th to 12th) and boards (State Board, CBSE, ICSE). Please visit our Pundlik Nagar branch or call Prof. Maske Patil Sir directly at 8626092350 to discuss our highly competitive fees and installment options.";
  }

  // Timing/Hours
  if (query.includes('time') || query.includes('hour') || query.includes('schedule') || query.includes('when') || query.includes('open') || query.includes('close') || query.includes('daily')) {
    return "Our Admission and Enquiry hours are daily from 9:00 AM to 8:00 PM. Regular student batches are scheduled in slots: afternoon and evening for school foundation, and morning/afternoon for college and CET/NEET prep. Contact us for specific batch schedules.";
  }

  // Location/Address
  if (query.includes('address') || query.includes('location') || query.includes('where') || query.includes('map') || query.includes('branch') || query.includes('place') || query.includes('find') || query.includes('center') || query.includes('area') || query.includes('city') || query.includes('pundlik') || query.includes('sambhajinagar') || query.includes('aurangabad')) {
    return "Suyog Classes is located beside Shri Swami Samarth Kendra Kaman, Pundlik Nagar Main Road, Garkheda Parisar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra - 431005. You are welcome to visit our center to check out our learning environment.";
  }

  // Contact / Call / Mobile / Phone / WhatsApp
  if (query.includes('phone') || query.includes('contact') || query.includes('call') || query.includes('number') || query.includes('whatsapp') || query.includes('mobile') || query.includes('reach') || query.includes('email') || query.includes('talk')) {
    return "You can call us directly or chat on WhatsApp at 8626092350 or 9637470097. Patil Sir and our support staff are ready to guide you!";
  }

  // Boards
  if (query.includes('board') || query.includes('cbse') || query.includes('icse') || query.includes('state') || query.includes('semi-english') || query.includes('syllabus') || query.includes('curriculum') || query.includes('std') || query.includes('standard') || query.includes('class') || query.includes('grade')) {
    return "We provide structured coaching for multiple boards:\n- Classes 9th & 10th: Maharashtra State Board (English & Semi-English medium), CBSE, and ICSE.\n- Classes 11th & 12th Science: State Board (Physics, Chemistry, Maths, Biology).";
  }

  // Competitive Exams / Foundation / IIT / NEET / CET
  if (query.includes('jee') || query.includes('neet') || query.includes('cet') || query.includes('mht-cet') || query.includes('foundation') || query.includes('entrance') || query.includes('competitive') || query.includes('medical') || query.includes('engineering')) {
    return "We specialize in building solid foundations for engineering and medical careers. We offer MHT-CET coaching for 11th-12th Science and advanced NEET/IIT-JEE Foundation courses for 9th and 10th Standard. We use online mock test simulations and strategic time management coaching.";
  }

  // Batch size/Personal attention
  if (query.includes('batch') || query.includes('size') || query.includes('seat') || query.includes('many') || query.includes('attention') || query.includes('limit') || query.includes('student') || query.includes('crowd')) {
    return "We maintain strictly limited batch sizes to ensure that Prof. Maske Patil Sir and our expert educators can provide focused, individual attention and address every single student's conceptual doubts.";
  }

  // Founder/Teachers/Faculty/Patil Sir
  if (query.includes('patil') || query.includes('maske') || query.includes('teacher') || query.includes('faculty') || query.includes('founder') || query.includes('sir') || query.includes('experience') || query.includes('who teach')) {
    return "The academy is founded and personally led by Prof. Maske Patil Sir, a highly respected educator in Chhatrapati Sambhajinagar. Experienced subject specialist teachers collaborate with Sir to ensure comprehensive board & entrance preparation.";
  }

  // Tests / Exams / Mock / Marks
  if (query.includes('test') || query.includes('exam') || query.includes('weekly') || query.includes('series') || query.includes('mock') || query.includes('report') || query.includes('result') || query.includes('progress') || query.includes('assess')) {
    return "We conduct regular weekly chapter-wise tests, mock boards for 10th and 12th, and online test simulations for entrance exams. Detailed performance reports are shared directly with parents to track student growth.";
  }

  // Online / Offline classes
  if (query.includes('online') || query.includes('offline') || query.includes('home') || query.includes('zoom') || query.includes('live')) {
    return "Suyog Classes provides offline classroom sessions at our Pundlik Nagar branch. We believe face-to-face interactions, physical doubt clearing, and supervised testing are crucial for the best learning outcomes.";
  }

  // Help / Commands
  if (query.includes('help') || query.includes('what can you do') || query.includes('option') || query.includes('question')) {
    return "I can answer questions about Suyog Classes. Try asking me:\n- 'What is the address?'\n- 'How do I contact Patil Sir?'\n- 'What are the course options?'\n- 'Tell me about class fees'\n- 'What boards do you support?'";
  }

  // Thanks
  if (query.match(/\b(thank|thanks|thank you|ok|great|awesome|helpful|bye)\b/)) {
    return "You're welcome! Feel free to reach out to us at 8626092350 or visit our branch if you have any more questions. Have a wonderful day!";
  }

  // Default response
  return "Thank you for asking! Suyog Classes offers top-tier, affordable coaching for Classes 9th-12th (State Board, CBSE, ICSE) and MHT-CET/IIT/NEET foundations. For specific details or batch booking, please call or WhatsApp us at 8626092350, or visit our center in Pundlik Nagar.";
}

function detectNavigationIntent(query: string): { path: string; label: string } | null {
  const q = query.toLowerCase().trim();
  
  const isNavRequest = q.includes('go') || q.includes('navigate') || q.includes('take') || q.includes('put') || q.includes('show') || q.includes('open') || q.includes('visit') || q.includes('section') || q.includes('page') || q.includes('redirect') || q.includes('where');
  
  if (!isNavRequest) return null;

  // Contact Us
  if (q.includes('contact') || q.includes('enquire') || q.includes('enquiry') || q.includes('phone') || q.includes('map') || q.includes('call') || q.includes('admission') || q.includes('enroll') || q.includes('register') || q.includes('location') || q.includes('address')) {
    return { path: '/contact', label: 'Contact Us' };
  }

  // Courses
  if (q.includes('course') || q.includes('class') || q.includes('subject') || q.includes('syllabus') || q.includes('curriculum') || q.includes('board') || q.includes('cbse') || q.includes('icse') || q.includes('state board') || q.includes('semi-english') || q.includes('jee') || q.includes('neet') || q.includes('cet')) {
    return { path: '/courses', label: 'Courses Offered' };
  }

  // About Us
  if (q.includes('about') || q.includes('legacy') || q.includes('founder') || q.includes('patil') || q.includes('maske') || q.includes('history') || q.includes('experience')) {
    return { path: '/about', label: 'About Us' };
  }

  // Why Choose Us
  if (q.includes('why choose') || q.includes('choose us') || q.includes('benefit') || q.includes('advantage') || q.includes('feature') || q.includes('reason')) {
    return { path: '/why-choose-us', label: 'Why Choose Us' };
  }

  // Home
  if (q.includes('home') || q.includes('intro') || q.includes('main') || q.includes('index') || q.includes('start') || q.includes('welcome')) {
    return { path: '/', label: 'Home Page' };
  }

  return null;
}

export default function Chatbot() {
  const navigate = useNavigate();
  const [pendingNavigation, setPendingNavigation] = useState<{ path: string; label: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I am the Suyog Classes virtual assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Trigger bot response typing animation
    setIsTyping(true);
    setTimeout(() => {
      let responseText = '';

      if (pendingNavigation) {
        const affirmative = ['yes', 'sure', 'ok', 'okay', 'go', 'yeah', 'yep', 'y', 'please', 'do it', 'confirm'];
        const negative = ['no', 'nope', 'dont', "don't", 'cancel', 'stay', 'n', 'stop'];

        const cleanText = text.toLowerCase().trim();
        const isAffirmative = affirmative.some(word => cleanText.includes(word));
        const isNegative = negative.some(word => cleanText.includes(word));

        if (isAffirmative) {
          responseText = `Great! Redirecting you to the ${pendingNavigation.label} page now...`;
          navigate(pendingNavigation.path);
          setPendingNavigation(null);
        } else if (isNegative) {
          responseText = "Understood. We will stay on this page. How else can I assist you?";
          setPendingNavigation(null);
        } else {
          responseText = `I didn't quite catch that. Please confirm: Are you sure you want to go to the ${pendingNavigation.label} page? (Yes / No)`;
        }
      } else {
        // Detect navigation intent
        const navIntent = detectNavigationIntent(text);
        if (navIntent) {
          setPendingNavigation(navIntent);
          responseText = `I can take you to the ${navIntent.label} page. Are you sure you want to go there?`;
        } else {
          responseText = getChatbotResponse(text);
        }
      }

      const botMsg: Message = {
        sender: 'bot',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const quickQuestions = [
    { label: '💵 Fees Info', query: 'What are the fees of classes?' },
    { label: '📍 Location', query: 'Where is the branch located?' },
    { label: '📞 Contact Us', query: 'How to contact Patil Sir?' },
    { label: '📚 Courses', query: 'What boards and courses do you teach?' }
  ];

  // Chat window body markup
  const chatWindow = (
    <div className="flex flex-col bg-white border border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300 font-sans w-[360px] sm:w-[400px] h-[500px] rounded-3xl">
      {/* Header */}
      <div className="bg-[#130c0a] text-white p-4 flex items-center justify-between gap-2 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-red to-brand-orange flex items-center justify-center text-white">
              <Bot className="w-5.5 h-5.5" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900 animate-pulse"></span>
          </div>
          <div>
            <h4 className="font-display font-black text-sm text-brand-gold tracking-wide leading-tight">
              SUYOG ASSISTANT
            </h4>
            <span className="text-[10px] font-medium text-emerald-400 block mt-0.5">
              Online • Responds Instantly
            </span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Message Feed */}
      <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 max-w-[85%] ${
              msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
            }`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm border ${
              msg.sender === 'user'
                ? 'bg-brand-red/10 border-brand-red/20 text-brand-red'
                : 'bg-[#1a100d] border-slate-800 text-brand-gold'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div className={`p-3 rounded-2xl text-xs leading-relaxed font-sans shadow-sm whitespace-pre-line ${
              msg.sender === 'user'
                ? 'bg-brand-red text-white rounded-tr-none font-medium'
                : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none font-normal'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start gap-3 max-w-[85%] self-start">
            <div className="w-8 h-8 rounded-xl bg-[#1a100d] border border-slate-800 flex items-center justify-center text-brand-gold shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex flex-wrap gap-2 shrink-0 select-none">
        {pendingNavigation ? (
          <>
            <button
              onClick={() => handleSend('yes')}
              className="text-[10px] sm:text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-600 rounded-full px-4 py-2.5 min-h-[44px] hover:shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>✅ Yes, Go There</span>
            </button>
            <button
              onClick={() => handleSend('no')}
              className="text-[10px] sm:text-xs font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-full px-4 py-2.5 min-h-[44px] hover:bg-slate-100 hover:shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>❌ No, Stay Here</span>
            </button>
          </>
        ) : (
          quickQuestions.map((qq, index) => (
            <button
              key={index}
              onClick={() => handleSend(qq.query)}
              className="text-[10px] sm:text-xs font-bold text-slate-600 hover:text-brand-red bg-white border border-slate-200 rounded-full px-3 py-1.5 hover:border-brand-red hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              {qq.label}
            </button>
          ))
        )}
      </div>

      {/* Input controls */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-slate-200/90 bg-white flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question about classes..."
          className="flex-grow bg-slate-50 border border-slate-200 focus:border-brand-red/50 focus:bg-white rounded-2xl px-4 py-3 text-xs focus:outline-none transition-all placeholder-slate-400 text-slate-800"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md transition-all shrink-0 cursor-pointer select-none ${
            inputValue.trim()
              ? 'bg-brand-red text-white hover:bg-brand-red/90 hover:scale-103'
              : 'bg-slate-100 text-slate-400 border border-slate-200 shadow-none cursor-default'
          }`}
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end gap-3 pointer-events-none select-none">
      {/* Expanded Drawer panel */}
      <div
        className={`pointer-events-auto shadow-2xl transition-all duration-300 origin-bottom-right transform ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
        }`}
      >
        {chatWindow}
      </div>

      {/* Collapsed floating badge toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer select-none text-white transition-all duration-300 transform scale-100 hover:scale-105 ${
          isOpen 
            ? 'bg-[#130c0a] hover:bg-slate-900 border border-slate-800 hover:rotate-90' 
            : 'bg-brand-red hover:bg-brand-red/90 hover:shadow-xl'
        }`}
        aria-expanded={isOpen}
        aria-label="Open chat assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
      </button>
    </div>
  );
}
