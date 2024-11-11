import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Additional from './components/Additional';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Additional />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;