import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import GlassCard from './common/GlassCard';
import { 
  Shield, 
  Lock, 
  Globe, 
  Heart 
} from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      id: 1,
      title: 'HIPAA Compliant',
      description: 'Meeting the highest standards for privacy in health information handling.',
      icon: <Shield size={32} className="text-secondary-400" />,
    },
    {
      id: 2,
      title: 'End-to-End Encryption',
      description: 'Your data is encrypted in transit and at rest using industry-leading protocols.',
      icon: <Lock size={32} className="text-secondary-400" />,
    },
    {
      id: 3,
      title: 'Cultural Sensitivity',
      description: 'Our AI is trained to respect and adapt to diverse cultural backgrounds and traditions.',
      icon: <Globe size={32} className="text-secondary-400" />,
    },
    {
      id: 4,
      title: 'Ethical AI Development',
      description: 'Built with empathy and emotional intelligence at its core.',
      icon: <Heart size={32} className="text-secondary-400" />,
    },
  ];

  return (
    <section className="section bg-gradient-main relative">
      <div className="container-custom">
        <SectionHeading
          title="Trust & Security"
          subtitle="Your memories and personal information deserve the highest level of protection."
          align="center"
          gradient="gold"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="flex items-start h-full">
                <div className="mr-4 p-3 rounded-lg bg-background-dark/50">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-text-light text-lg mb-6">
            Your trust is our highest priority. We've built EternalLegacy with security and privacy as foundational principles, not afterthoughts.
          </p>
          <a href="#" className="text-secondary-400 hover:text-secondary-300 transition-colors underline">
            Learn more about our security practices
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;