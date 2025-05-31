import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-button text-white shadow-glow-sm hover:shadow-glow-md';
      case 'secondary':
        return 'bg-gradient-gold text-text-dark shadow-glow-sm hover:shadow-glow-md';
      case 'accent':
        return 'bg-gradient-lavender text-white shadow-glow-sm hover:shadow-glow-md';
      case 'ghost':
        return 'bg-transparent border border-accent text-text-light hover:bg-accent-900/10';
      default:
        return 'bg-gradient-button text-white shadow-glow-sm hover:shadow-glow-md';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <motion.button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default GradientButton;