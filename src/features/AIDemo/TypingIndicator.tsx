import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-start mb-4">
      <div className="w-10 h-10 rounded-full bg-accent-500/30 flex items-center justify-center mr-3 flex-shrink-0">
        <span className="text-sm font-bold">AI</span>
      </div>
      
      <motion.div 
        className="rounded-2xl px-4 py-3 bg-gradient-lavender text-white"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
      >
        <div className="flex space-x-2">
          <motion.div 
            className="w-2 h-2 rounded-full bg-white"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full bg-white"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full bg-white"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TypingIndicator;