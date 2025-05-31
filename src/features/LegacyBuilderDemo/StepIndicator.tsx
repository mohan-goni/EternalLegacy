import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircle, 
  BookOpen, 
  FileHeart, 
  Eye, 
  Share2, 
  Check 
} from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: {
    id: number;
    title: string;
    icon: string;
  }[];
}

const getIconComponent = (iconName: string, isActive: boolean, isComplete: boolean) => {
  const iconSize = 24;
  const iconColor = isActive ? 'text-secondary-400' : isComplete ? 'text-accent-400' : 'text-text-muted';
  
  switch (iconName) {
    case 'UserCircle':
      return <UserCircle size={iconSize} className={iconColor} />;
    case 'BookOpen':
      return <BookOpen size={iconSize} className={iconColor} />;
    case 'FileHeart':
      return <FileHeart size={iconSize} className={iconColor} />;
    case 'Eye':
      return <Eye size={iconSize} className={iconColor} />;
    case 'Share2':
      return <Share2 size={iconSize} className={iconColor} />;
    default:
      return <UserCircle size={iconSize} className={iconColor} />;
  }
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isComplete = currentStep > step.id;
        
        return (
          <React.Fragment key={step.id}>
            <motion.div 
              className={`flex flex-col items-center ${index !== 0 ? 'mt-8 md:mt-0' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className={`relative rounded-full w-12 h-12 flex items-center justify-center 
                ${isActive 
                  ? 'bg-secondary-500/20 border-2 border-secondary-400' 
                  : isComplete 
                    ? 'bg-accent-500/20 border-2 border-accent-400' 
                    : 'bg-background-dark/50 border-2 border-gray-700'
                }`}
              >
                {isComplete ? (
                  <Check size={24} className="text-accent-400" />
                ) : (
                  getIconComponent(step.icon, isActive, isComplete)
                )}
                <div className="absolute -top-2 -right-2">
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs
                    ${isActive 
                      ? 'bg-secondary-400 text-text-dark' 
                      : isComplete 
                        ? 'bg-accent-400 text-white' 
                        : 'bg-gray-700 text-text-muted'
                    }`}
                  >
                    {step.id}
                  </span>
                </div>
              </div>
              <span className={`text-sm mt-2 font-medium 
                ${isActive 
                  ? 'text-secondary-400' 
                  : isComplete 
                    ? 'text-accent-400' 
                    : 'text-text-muted'
                }`}
              >
                {step.title}
              </span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block flex-grow h-[2px] mx-2 bg-gray-700 relative">
                <motion.div 
                  className="h-full bg-accent-400"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: currentStep > step.id + 1 
                      ? "100%" 
                      : currentStep === step.id + 1 
                        ? "50%" 
                        : "0%" 
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;