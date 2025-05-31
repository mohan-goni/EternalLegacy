import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../utils/constants';
import SectionHeading from './common/SectionHeading';
import GlassCard from './common/GlassCard';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={20} 
        fill={i < rating ? "#F59E0B" : "none"} 
        className={i < rating ? "text-secondary-400" : "text-gray-400"} 
      />
    ));
  };

  return (
    <section className="section bg-background-dark relative py-20">
      <div className="container-custom">
        <SectionHeading
          title="What Our Users Say"
          subtitle="Hear from people who are preserving their legacies for future generations."
          align="center"
          gradient="lavender"
        />
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <GlassCard className="text-center px-8 py-10 md:px-12">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-8 text-text-light">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-text-muted">
                    {testimonials[currentIndex].age} years old, {testimonials[currentIndex].location}
                  </p>
                </div>
              </GlassCard>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent-400 w-6' : 'bg-gray-600'
                    }`}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 w-10 h-10 rounded-full bg-background-dark/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent-900/50 transition-colors z-10"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 w-10 h-10 rounded-full bg-background-dark/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent-900/50 transition-colors z-10"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;