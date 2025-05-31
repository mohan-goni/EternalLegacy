import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, X } from 'lucide-react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import GlassCard from '../../components/common/GlassCard';
import GradientButton from '../../components/common/GradientButton';
import { sendMessage } from '../../utils/api';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add initial AI message
    const initialMessage: Message = {
      id: `ai-${Date.now()}`,
      text: "Hello, I'm Thanatos, your AI companion for creating your lasting legacy. How are you feeling today?",
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setError(null);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Send message to backend
      const response = await sendMessage(inputText);
      
      // Add AI response
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        text: response.message,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (err) {
      setError('Failed to get response from AI. Please try again.');
      console.error('Error in chat:', err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate voice recording started
      console.log('Voice recording started (simulation)');
    } else {
      // Simulate voice recording stopped and processing
      console.log('Voice recording stopped (simulation)');
      
      // Simulate voice-to-text after a delay
      setTimeout(() => {
        setInputText('This is a simulated voice message that would be transcribed from actual audio in a real implementation.');
      }, 1000);
    }
  };

  return (
    <GlassCard className="h-[600px] max-h-[80vh] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-accent-500/30 flex items-center justify-center mr-3">
            <span className="text-sm font-bold">AI</span>
          </div>
          <div>
            <h3 className="font-semibold">Thanatos AI</h3>
            <p className="text-xs text-text-muted">Your Legacy Companion</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="text-xs text-text-muted">Online</span>
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 scrollbar-thin">
        {messages.map(message => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        {error && (
          <div className="text-red-400 text-sm text-center my-2">
            {error}
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-white/10 p-4">
        {isRecording && (
          <div className="mb-3 bg-accent-900/30 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500 mr-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <span className="text-sm">Recording voice message...</span>
            </div>
            <button 
              onClick={() => setIsRecording(false)}
              className="text-text-muted hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <div className="flex-grow relative">
            <textarea
              className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50 resize-none"
              placeholder="Type your message..."
              rows={1}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full ${isRecording ? 'bg-red-500' : 'bg-accent-500/20 hover:bg-accent-500/40'} transition-colors`}
            onClick={toggleRecording}
            title="Record voice message"
          >
            <Mic size={20} />
          </motion.button>
          
          <GradientButton
            size="sm"
            onClick={handleSendMessage}
            icon={<Send size={16} />}
            iconPosition="right"
            disabled={!inputText.trim()}
            className={!inputText.trim() ? 'opacity-50 cursor-not-allowed' : ''}
          >
            Send
          </GradientButton>
        </div>
        
        <div className="mt-2 text-center">
          <p className="text-xs text-text-muted">
            Connected to AI backend
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default ChatInterface;