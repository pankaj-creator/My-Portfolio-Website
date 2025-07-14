import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'resume', 'awards', 'additional', 'contact'];

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.unobserve(element);
    });
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Section navigator dots
  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'resume', 'awards', 'additional', 'contact'];

  // Format section name for display
  const formatSectionName = (section: string) => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <>
      {/* Section navigator dots */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-5">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="group flex items-center"
            >
              <span className="hidden group-hover:block mr-2 text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
                {formatSectionName(section)}
              </span>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-blue-600 w-4 h-4' 
                    : 'bg-gray-300 hover:bg-blue-400'
                }`}
                title={formatSectionName(section)}
                aria-label={`Navigate to ${formatSectionName(section)} section`}
              />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;