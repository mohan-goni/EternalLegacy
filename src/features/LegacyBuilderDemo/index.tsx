import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileHeart } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import GradientButton from '../../components/common/GradientButton';
import StepIndicator from './StepIndicator';
import { legacyBuilderSteps } from '../../utils/constants';

const LegacyBuilderDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleNextStep = () => {
    if (currentStep < legacyBuilderSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Auto-progress through steps for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < legacyBuilderSteps.length) {
        setCurrentStep(prev => prev + 1);
      } else {
        setCurrentStep(1);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentStep]);
  
  const renderStepContent = () => {
    const step = legacyBuilderSteps.find(s => s.id === currentStep);
    
    if (!step) return null;
    
    switch (step.id) {
      case 1: // Onboarding
        return (
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/5">
              <h3 className="text-2xl font-bold mb-4 gradient-gold-text">Welcome to Your Legacy Journey</h3>
              <p className="text-text-light mb-4">
                Let's get started by understanding what matters most to you. This will help us tailor your legacy experience.
              </p>
              <div className="glass-card mb-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-text-muted mb-1">What's most important to you?</label>
                  <select className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50">
                    <option>Preserving family stories</option>
                    <option>Sharing life lessons</option>
                    <option>Documenting achievements</option>
                    <option>Organizing estate matters</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Who is your legacy primarily for?</label>
                  <select className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50">
                    <option>Children</option>
                    <option>Grandchildren</option>
                    <option>Future generations</option>
                    <option>Wider community</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 bg-background-dark/30 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-3 text-accent-400">Personalized Suggestions</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-accent-500/20 p-1 rounded-full mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent-400"></div>
                  </div>
                  <span>Record childhood memories for future generations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent-500/20 p-1 rounded-full mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent-400"></div>
                  </div>
                  <span>Document family traditions and their significance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent-500/20 p-1 rounded-full mr-2 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent-400"></div>
                  </div>
                  <span>Create a timeline of significant life events</span>
                </li>
              </ul>
            </div>
          </div>
        );
        
      case 2: // Story Collection
        return (
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 gradient-lavender-text">Tell Your Story</h3>
              <p className="text-text-light mb-4">
                Record meaningful memories and life lessons through guided conversations with our AI companion.
              </p>
              <div className="glass-card p-4 mb-4">
                <h4 className="text-lg font-medium mb-2">Memory Prompt</h4>
                <p className="text-text-muted italic mb-3">
                  "What's a moment in your life that changed your perspective?"
                </p>
                <textarea 
                  className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50 resize-none"
                  rows={4}
                  placeholder="Start typing your memory here..."
                ></textarea>
                <div className="flex justify-between mt-3">
                  <button className="text-accent-400 hover:text-accent-300 transition-colors flex items-center">
                    <Mic size={16} className="mr-1" /> Record Audio
                  </button>
                  <button className="text-accent-400 hover:text-accent-300 transition-colors flex items-center">
                    Next Prompt <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-background-dark/30 rounded-xl p-6 border border-white/10 h-full">
                <h4 className="text-lg font-semibold mb-3 text-secondary-400">Your Memory Collection</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium">College Graduation</h5>
                      <span className="text-xs text-text-muted">2 days ago</span>
                    </div>
                    <p className="text-sm text-text-muted line-clamp-2">
                      The day I graduated was the first time I saw my father cry. He had worked two jobs to put me through school...
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium">First Home</h5>
                      <span className="text-xs text-text-muted">5 days ago</span>
                    </div>
                    <p className="text-sm text-text-muted line-clamp-2">
                      I remember the smell of fresh paint and the feeling of the keys in my hand. I was terrified but so proud...
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent-900/30 border border-accent-700/30">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium text-accent-300">Writing now...</h5>
                      <span className="text-xs text-accent-300">Just now</span>
                    </div>
                    <p className="text-sm text-accent-200">
                      There was a moment during my travels to...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3: // Asset Mapping
        return (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Organize Your Assets</h3>
              <p className="text-text-light mb-4">
                Upload and organize photos, videos, and documents that tell your story.
              </p>
              <div className="glass-card p-4 mb-4">
                <h4 className="text-lg font-medium mb-3">Upload Media</h4>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-3">
                    <Upload size={24} className="text-accent-400" />
                  </div>
                  <p className="text-text-muted mb-3">
                    Drag and drop files here, or click to browse
                  </p>
                  <button className="btn btn-accent">Select Files</button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-background-dark/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-4 text-secondary-400">Your Collection</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="aspect-square bg-background-dark/50 rounded-lg overflow-hidden border border-white/10 relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                        <p className="text-xs text-text-light truncate">Family Vacation {item}</p>
                      </div>
                    </div>
                  ))}
                  <div className="aspect-square bg-background-dark/30 rounded-lg border border-white/5 flex items-center justify-center">
                    <Plus size={24} className="text-text-muted" />
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mt-6 mb-4 text-secondary-400">Collections</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-500/30 flex items-center justify-center mr-3">
                      <FileHeart size={18} className="text-primary-400" />
                    </div>
                    <div>
                      <h5 className="font-medium">Family Photos</h5>
                      <p className="text-xs text-text-muted">24 items</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-500/30 flex items-center justify-center mr-3">
                      <Film size={18} className="text-secondary-400" />
                    </div>
                    <div>
                      <h5 className="font-medium">Travel Videos</h5>
                      <p className="text-xs text-text-muted">12 items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4: // Preview
        return (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-gold-text">Preview Your Legacy</h3>
              <p className="text-text-light mb-4">
                See how your legacy will appear to your loved ones, and make any adjustments before finalizing.
              </p>
            </div>
            
            <div className="glass-card p-0 overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <h4 className="font-semibold">Legacy Preview</h4>
                <div className="flex space-x-3">
                  <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Desktop size={18} className="text-text-muted" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <Smartphone size={18} className="text-text-muted" />
                  </button>
                </div>
              </div>
              
              <div className="aspect-video bg-background-dark/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-3">
                      <Play size={28} className="text-accent-400" />
                    </div>
                    <p className="text-text-muted">
                      Preview your legacy presentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 bg-background-dark/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-accent-400">Personalization Options</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Theme</label>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full bg-gradient-button ring-2 ring-white"></button>
                      <button className="w-8 h-8 rounded-full bg-gradient-gold opacity-50 hover:opacity-100 transition-opacity"></button>
                      <button className="w-8 h-8 rounded-full bg-gradient-lavender opacity-50 hover:opacity-100 transition-opacity"></button>
                      <button className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-50 hover:opacity-100 transition-opacity"></button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Privacy Level</label>
                    <select className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50">
                      <option>Family Only</option>
                      <option>Close Friends and Family</option>
                      <option>Public with Password</option>
                      <option>Public</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 bg-background-dark/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-secondary-400">Legacy Statistics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5">
                    <h5 className="text-xs text-text-muted">Memories</h5>
                    <p className="text-2xl font-semibold">24</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5">
                    <h5 className="text-xs text-text-muted">Photos</h5>
                    <p className="text-2xl font-semibold">56</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5">
                    <h5 className="text-xs text-text-muted">Videos</h5>
                    <p className="text-2xl font-semibold">12</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5">
                    <h5 className="text-xs text-text-muted">Documents</h5>
                    <p className="text-2xl font-semibold">8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 5: // Sharing
        return (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Share Your Legacy</h3>
              <p className="text-text-light mb-4">
                Set permissions and decide when and how your legacy will be shared with your loved ones.
              </p>
              <div className="glass-card p-4 mb-4">
                <h4 className="text-lg font-medium mb-3">Recipient Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Delivery Method</label>
                    <select className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50">
                      <option>Immediate Access</option>
                      <option>On Specific Date</option>
                      <option>Upon Verification</option>
                      <option>Custom Trigger</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Notification Message</label>
                    <textarea 
                      className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50 resize-none"
                      rows={3}
                      placeholder="Add a personal message to be sent with your legacy..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-background-dark/30 rounded-xl p-6 border border-white/10 h-full">
                <h4 className="text-lg font-semibold mb-4 text-secondary-400">Recipients</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-accent-500/30 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">SC</span>
                      </div>
                      <div>
                        <h5 className="font-medium">Sarah Connor</h5>
                        <p className="text-xs text-text-muted">Daughter</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Active</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-background-dark/50 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-500/30 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">JC</span>
                      </div>
                      <div>
                        <h5 className="font-medium">John Connor</h5>
                        <p className="text-xs text-text-muted">Son</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Pending</span>
                    </div>
                  </div>
                  <button className="w-full p-3 rounded-lg border border-dashed border-white/20 text-text-muted hover:text-text-light hover:border-white/30 transition-colors flex items-center justify-center">
                    <Plus size={18} className="mr-2" />
                    Add Recipient
                  </button>
                </div>
                
                <h4 className="text-lg font-semibold mt-6 mb-3 text-secondary-400">Sharing Options</h4>
                <div className="p-3 rounded-lg bg-secondary-900/30 border border-secondary-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-secondary-300">Celebration of Life</h5>
                    <span className="text-xs bg-secondary-500/20 text-secondary-300 px-2 py-1 rounded-full">Featured</span>
                  </div>
                  <p className="text-sm text-secondary-200 mb-2">
                    Share a special video montage and collection of memories at a memorial service.
                  </p>
                  <button className="text-secondary-300 hover:text-secondary-200 transition-colors text-sm">
                    Configure &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <section id="legacy-builder" className="section bg-gradient-main relative">
      <div className="container-custom">
        <SectionHeading
          title="Build Your Legacy"
          subtitle="Our guided process makes it easy to create and share your life story with future generations."
          align="center"
        />
        
        <GlassCard className="p-8">
          <StepIndicator currentStep={currentStep} steps={legacyBuilderSteps} />
          
          <div className="mt-12">
            {renderStepContent()}
          </div>
          
          <div className="mt-8 flex justify-between">
            <GradientButton 
              variant="ghost" 
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}
              icon={<ChevronLeft size={16} />}
              iconPosition="left"
            >
              Previous
            </GradientButton>
            
            <GradientButton 
              variant={currentStep === legacyBuilderSteps.length ? 'secondary' : 'primary'}
              onClick={handleNextStep}
              disabled={currentStep === legacyBuilderSteps.length}
              className={currentStep === legacyBuilderSteps.length ? 'opacity-50 cursor-not-allowed' : ''}
              icon={<ChevronRight size={16} />}
              iconPosition="right"
            >
              {currentStep === legacyBuilderSteps.length ? 'Complete' : 'Next'}
            </GradientButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

const Upload = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
};

const Plus = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};

const Film = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  );
};

const Mic = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
};

const Desktop = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
};

const Smartphone = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
};

const Play = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
};

export default LegacyBuilderDemo;