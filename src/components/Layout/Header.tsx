import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full bg-gradient-lavender flex items-center justify-center"
          >
            <span className="text-lg font-bold">EL</span>
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold gradient-text"
          >
            EternalLegacy
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-text-light hover:text-accent-400 transition-colors">Home</Link>
          <Link to="#features" className="text-text-light hover:text-accent-400 transition-colors">Features</Link>
          <Link to="#pricing" className="text-text-light hover:text-accent-400 transition-colors">Pricing</Link>
          <div className="relative group">
            <button className="flex items-center text-text-light hover:text-accent-400 transition-colors">
              About <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-2 p-3">
              <Link to="#" className="block py-2 text-text-light hover:text-accent-400">Our Story</Link>
              <Link to="#" className="block py-2 text-text-light hover:text-accent-400">Team</Link>
              <Link to="#" className="block py-2 text-text-light hover:text-accent-400">Press</Link>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="#" className="btn btn-ghost">Sign In</Link>
          <Link to="#" className="btn btn-primary">Get Started</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-dark/95 backdrop-blur-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <Link to="/" className="py-2 text-text-light hover:text-accent-400" onClick={toggleMenu}>Home</Link>
              <Link to="#features" className="py-2 text-text-light hover:text-accent-400" onClick={toggleMenu}>Features</Link>
              <Link to="#pricing" className="py-2 text-text-light hover:text-accent-400" onClick={toggleMenu}>Pricing</Link>
              <Link to="#" className="py-2 text-text-light hover:text-accent-400" onClick={toggleMenu}>About</Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Link to="#" className="btn btn-ghost" onClick={toggleMenu}>Sign In</Link>
                <Link to="#" className="btn btn-primary" onClick={toggleMenu}>Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;