import React from 'react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from '../../utils/formatters';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isUser,
  timestamp,
}) => {
  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-accent-500/30 flex items-center justify-center mr-3 flex-shrink-0">
          <span className="text-sm font-bold">AI</span>
        </div>
      )}
      
      <div className={`max-w-[80%]`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-gradient-button text-white ml-auto'
              : 'bg-gradient-lavender text-white'
          }`}
        >
          <p className="text-sm md:text-base">{message}</p>
        </div>
        <div
          className={`text-xs text-text-muted mt-1 ${
            isUser ? 'text-right' : 'text-left'
          }`}
        >
          {formatDistanceToNow(timestamp)}
        </div>
      </div>
      
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-primary-500/30 flex items-center justify-center ml-3 flex-shrink-0">
          <span className="text-sm font-bold">You</span>
        </div>
      )}
    </motion.div>
  );
};

export default MessageBubble;