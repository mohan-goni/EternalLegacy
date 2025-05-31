import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { impactStats } from '../utils/constants';
import SectionHeading from './common/SectionHeading';

const MarketImpact = () => {
  const [visibleStats, setVisibleStats] = useState<{ [key: string]: boolean }>({});

  return (
    <section className="section bg-background-dark relative">
      <div className="container-custom">
        <SectionHeading
          title="Our Growing Impact"
          subtitle="Helping people around the world preserve their stories and prepare for the future."
          align="center"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              onViewportEnter={() => setVisibleStats(prev => ({ ...prev, [stat.id]: true }))}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="text-center"
            >
              <div className="glass-card p-6 h-full">
                <h3 className="text-4xl md:text-5xl font-bold mb-2 gradient-lavender-text">
                  {visibleStats[stat.id] && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  )}
                </h3>
                <p className="text-text-muted">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-text-light text-lg">
            Join thousands of individuals who are taking control of their legacy and creating meaningful connections that transcend time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketImpact;