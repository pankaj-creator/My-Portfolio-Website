import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    'About',
    'Experience',
    'Skills',
    'Projects',
    'Resume',
    'Additional',
    'Contact',
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
          >
            <div className="flex items-center">
              <img src="/logo.svg" alt="Developer Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-gray-800">
                Pankaj Kumar Gond
              </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/pankaj-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-kumar-gond/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pankajvk211@gmail.com"
              className="hover:text-purple-600 transition-colors"
              title="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex justify-center space-x-4 pb-4">
            <a
              href="https://github.com/pankaj-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-kumar-gond/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pankajvk211@gmail.com"
              className="hover:text-purple-600 transition-colors"
              title="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
