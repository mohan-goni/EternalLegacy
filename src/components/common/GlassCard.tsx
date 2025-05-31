import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...motionProps
}) => {
  return (
    <motion.div
      className={`glass-card p-6 ${hoverEffect ? 'hover:shadow-glow-sm transition-all duration-300' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;