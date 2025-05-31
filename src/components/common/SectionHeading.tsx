import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  gradient?: 'default' | 'gold' | 'lavender' | 'none';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  gradient = 'default'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const getGradientClass = () => {
    switch (gradient) {
      case 'default':
        return 'gradient-text';
      case 'gold':
        return 'gradient-gold-text';
      case 'lavender':
        return 'gradient-lavender-text';
      case 'none':
        return '';
      default:
        return 'gradient-text';
    }
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${getGradientClass()}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-text-muted text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;