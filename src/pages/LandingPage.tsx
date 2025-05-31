import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BackgroundElements from '../components/Layout/BackgroundElements';
import FeaturesShowcase from '../components/FeaturesShowcase';
import PricingTiers from '../components/PricingTiers';
import Testimonials from '../components/Testimonials';
import MarketImpact from '../components/MarketImpact';
import TrustSection from '../components/TrustSection';
import ChatInterface from '../features/AIDemo/ChatInterface';
import LegacyBuilderDemo from '../features/LegacyBuilderDemo';
import VoiceCloningDemo from '../features/Advanced/VoiceCloningDemo';
import GradientButton from '../components/common/GradientButton';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-main relative">
      <BackgroundElements />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your Story Deserves to <span className="gradient-text">Live Forever</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-text-light mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The world's first AI-powered platform for creating meaningful legacies, preserving memories, and connecting generations.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <GradientButton 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Begin Your Legacy
                </GradientButton>
                
                <GradientButton 
                  variant="ghost"
                  size="lg"
                  icon={<PlayCircle size={16} />}
                  iconPosition="left"
                >
                  Watch Demo
                </GradientButton>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ChatInterface />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeaturesShowcase />
      
      {/* Legacy Builder Demo Section */}
      <LegacyBuilderDemo />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Pricing Section */}
      <PricingTiers />
      
      {/* Advanced Voice Cloning Demo */}
      <VoiceCloningDemo />
      
      {/* Market Impact Section */}
      <MarketImpact />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-main relative">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Start Preserving Your Legacy Today
            </h2>
            <p className="text-xl text-text-light mb-8">
              Join thousands of people who are creating meaningful digital legacies for future generations.
            </p>
            <GradientButton 
              variant="primary"
              size="lg"
            >
              Get Started for Free
            </GradientButton>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;