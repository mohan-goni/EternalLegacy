import React from 'react';
import { motion } from 'framer-motion';
import { pricingTiers } from '../utils/constants';
import SectionHeading from './common/SectionHeading';
import GlassCard from './common/GlassCard';
import GradientButton from './common/GradientButton';
import { Check } from 'lucide-react';

const PricingTiers = () => {
  return (
    <section id="pricing" className="section bg-gradient-main relative">
      <div className="container-custom">
        <SectionHeading
          title="Choose Your Legacy Path"
          subtitle="Select the plan that best fits your needs and begin your journey toward creating a meaningful digital legacy."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="flex"
            >
              <GlassCard 
                className={`flex flex-col h-full relative ${
                  tier.popular ? 'border-secondary-400 md:scale-110 z-10' : ''
                }`}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-secondary-500 text-text-dark px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-1 ${
                    tier.color === 'primary' 
                      ? 'gradient-text' 
                      : tier.color === 'secondary' 
                        ? 'gradient-gold-text' 
                        : 'gradient-lavender-text'
                  }`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-end mb-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-text-muted ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-secondary-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <GradientButton 
                  variant={tier.color === 'primary' ? 'primary' : tier.color === 'secondary' ? 'secondary' : 'accent'}
                  className="w-full"
                >
                  {tier.cta}
                </GradientButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-text-light text-lg mb-4">
            Need a custom solution for your organization?
          </p>
          <GradientButton variant="ghost">
            Contact Us for Enterprise Plans
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiers;