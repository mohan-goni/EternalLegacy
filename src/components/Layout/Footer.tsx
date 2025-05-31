import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-lavender flex items-center justify-center">
                <span className="text-lg font-bold">EL</span>
              </div>
              <span className="text-xl font-bold gradient-text">EternalLegacy</span>
            </Link>
            <p className="text-text-muted mb-4">
              Transforming death preparation into a meaningful, emotionally intelligent experience through advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-accent-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">AI Conversations</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Memory Preservation</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Grief Support</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Estate Planning</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Voice Cloning</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Our Team</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Press</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Data Processing</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Accessibility</Link></li>
              <li><Link to="#" className="text-text-muted hover:text-accent-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm mb-4 md:mb-0">
            &copy; {currentYear} EternalLegacy AI. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-accent-500" /> and empathy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;