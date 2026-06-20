/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseTicker from './components/CourseTicker';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-brand-orange/20 selection:text-brand-red">
      {/* Header and Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Continuous Course Ticker strip */}
        <CourseTicker />

        {/* About Founders Section */}
        <About />

        {/* Dynamic Courses Sections */}
        <Courses />

        {/* Benefits Grid Section */}
        <WhyChooseUs />

        {/* Interactive Contacts/Forms Section */}
        <Contact />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Fixed WhatsApp Float Trigger Option */}
      <WhatsAppFloatButton />
    </div>
  );
}

