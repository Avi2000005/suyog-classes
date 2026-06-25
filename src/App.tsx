import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseTicker from './components/CourseTicker';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import ScrollToTop from './components/ScrollToTop';

// Lazy load secondary route components and widgets to optimize mobile FCP/LCP
const About = lazy(() => import('./components/About'));
const Courses = lazy(() => import('./components/Courses'));
const Contact = lazy(() => import('./components/Contact'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Elegant custom page loader fallback
const PageLoading = () => (
  <div className="min-h-[60vh] bg-slate-50 flex flex-col items-center justify-center font-sans">
    <div className="w-10 h-10 border-4 border-brand-red/10 border-t-brand-red rounded-full animate-spin"></div>
    <span className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">Loading...</span>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-brand-orange/20 selection:text-brand-red">
        {/* Header and Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <CourseTicker />
                    <WhyChooseUs />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <div className="pt-20 bg-white">
                    <About />
                  </div>
                }
              />
              <Route
                path="/courses"
                element={
                  <div className="pt-20">
                    <Courses />
                  </div>
                }
              />
              <Route
                path="/why-choose-us"
                element={
                  <div className="pt-20">
                    <WhyChooseUs />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="pt-20">
                    <Contact />
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Fixed WhatsApp Float Trigger Option */}
        <WhatsAppFloatButton />

        {/* Chatbot floating bubble */}
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </Router>
  );
}
