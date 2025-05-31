import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../utils/constants';
import SectionHeading from './common/SectionHeading';
import GlassCard from './common/GlassCard';
import { 
  MessageCircle, 
  Camera, 
  Heart, 
  Shield 
} from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'MessageCircle':
      return <MessageCircle size={36} className="text-accent-400" />;
    case 'Camera':
      return <Camera size={36} className="text-secondary-400" />;
    case 'Heart':
      return <Heart size={36} className="text-accent-400" />;
    case 'Shield':
      return <Shield size={36} className="text-primary-400" />;
    default:
      return <MessageCircle size={36} className="text-accent-400" />;
  }
};

const FeaturesShowcase = () => {
  return (
    <section id="features\" className="section bg-background-dark relative">
      <div className="container-custom">
        <SectionHeading
          title="Core Features"
          subtitle="Discover how EternalLegacy AI transforms the way we preserve memories and prepare for the future."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col items-start">
                <div className="mb-4 p-3 rounded-lg bg-background-dark/50">
                  {getIconComponent(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-text-light text-lg mb-6 max-w-2xl mx-auto">
            Our platform is continuously evolving with new features to enhance your legacy preservation experience.
          </p>
          <motion.button 
            className="btn btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;