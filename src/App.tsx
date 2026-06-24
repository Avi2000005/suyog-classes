import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseTicker from './components/CourseTicker';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-brand-orange/20 selection:text-brand-red">
        {/* Header and Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
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
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Fixed WhatsApp Float Trigger Option */}
        <WhatsAppFloatButton />

        {/* Chatbot floating bubble */}
        <Chatbot />
      </div>
    </Router>
  );
}
