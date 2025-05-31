import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/common/GlassCard';
import SectionHeading from '../../components/common/SectionHeading';
import GradientButton from '../../components/common/GradientButton';
import { Mic, Play, Pause, UploadCloud, AudioWaveform as Waveform } from 'lucide-react';

const VoiceCloningDemo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [processingStatus, setProcessingStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
  const [recordingTime, setRecordingTime] = useState(0);
  
  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      setHasRecording(true);
      
      // Simulate processing
      setProcessingStatus('processing');
      setTimeout(() => {
        setProcessingStatus('complete');
      }, 3000);
    } else {
      // Start recording
      setIsRecording(true);
      setRecordingTime(0);
      setProcessingStatus('idle');
      
      // Simulate timer
      const interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
      // Clear interval after 30 seconds (simulated max recording time)
      setTimeout(() => {
        clearInterval(interval);
        setIsRecording(false);
        setHasRecording(true);
        setProcessingStatus('processing');
        
        // Simulate processing completion
        setTimeout(() => {
          setProcessingStatus('complete');
        }, 3000);
      }, 30000);
      
      return () => clearInterval(interval);
    }
  };
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    
    // Simulate playback ending after 5 seconds
    if (!isPlaying) {
      setTimeout(() => {
        setIsPlaying(false);
      }, 5000);
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <section className="section bg-background-dark relative">
      <div className="container-custom">
        <SectionHeading
          title="Voice Cloning Technology"
          subtitle="Preserve your voice for future generations with our advanced AI voice cloning."
          align="center"
          gradient="lavender"
        />
        
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Record Your Voice</h3>
                <p className="text-text-muted mb-6">
                  Record a 30-second sample of your voice. For best results, speak clearly and naturally.
                </p>
                
                <div className="bg-background-dark/50 rounded-xl p-6 border border-white/10 mb-6">
                  <div className="flex flex-col items-center justify-center">
                    <motion.div 
                      className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                        isRecording ? 'bg-red-500/20' : 'bg-accent-500/20'
                      }`}
                      animate={{ 
                        scale: isRecording ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ 
                        repeat: isRecording ? Infinity : 0, 
                        duration: 1.5 
                      }}
                    >
                      <GradientButton
                        variant={isRecording ? 'primary' : 'accent'}
                        className="w-16 h-16 rounded-full"
                        onClick={toggleRecording}
                      >
                        {isRecording ? (
                          <span className="flex items-center justify-center">
                            <span className="w-6 h-6 bg-white rounded-sm"></span>
                          </span>
                        ) : (
                          <Mic size={24} />
                        )}
                      </GradientButton>
                    </motion.div>
                    
                    {isRecording && (
                      <div className="text-center">
                        <p className="text-accent-400 text-xl font-semibold mb-2">{formatTime(recordingTime)}</p>
                        <p className="text-text-muted text-sm">Recording in progress...</p>
                      </div>
                    )}
                    
                    {!isRecording && hasRecording && (
                      <div className="text-center">
                        <p className="text-accent-400 text-lg font-semibold mb-2">
                          {processingStatus === 'processing' ? 'Processing...' : 'Ready to clone'}
                        </p>
                        {processingStatus === 'processing' && (
                          <motion.div 
                            className="flex justify-center space-x-1"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                            <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                            <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                          </motion.div>
                        )}
                      </div>
                    )}
                    
                    {!isRecording && !hasRecording && (
                      <div className="text-center">
                        <p className="text-text-muted text-sm">Click to start recording</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <GradientButton
                    variant="ghost"
                    icon={<UploadCloud size={16} />}
                    iconPosition="left"
                  >
                    Upload Audio File Instead
                  </GradientButton>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Your Cloned Voice</h3>
                <p className="text-text-muted mb-6">
                  Our AI will generate a digital clone of your voice that can read any text aloud.
                </p>
                
                <div className="bg-background-dark/50 rounded-xl p-6 border border-white/10 mb-6">
                  <textarea
                    className="w-full bg-background-dark/40 border border-white/10 rounded-lg px-4 py-3 text-text-light focus:outline-none focus:ring-2 focus:ring-accent-400/50 resize-none mb-4"
                    rows={4}
                    placeholder="Enter text you would like your voice clone to speak..."
                    disabled={processingStatus !== 'complete'}
                  ></textarea>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <GradientButton
                      variant="secondary"
                      size="sm"
                      onClick={togglePlayback}
                      disabled={processingStatus !== 'complete'}
                      className={processingStatus !== 'complete' ? 'opacity-50 cursor-not-allowed' : ''}
                      icon={isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      iconPosition="left"
                    >
                      {isPlaying ? 'Pause' : 'Play Sample'}
                    </GradientButton>
                    
                    <span className="text-text-muted text-sm">
                      {isPlaying ? 'Playing...' : 'Not playing'}
                    </span>
                  </div>
                  
                  <div className="relative h-12 bg-background-dark rounded-lg overflow-hidden">
                    {processingStatus === 'complete' && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Waveform className="text-accent-400/50" />
                        </div>
                        
                        {isPlaying && (
                          <motion.div 
                            className="absolute left-0 top-0 h-full bg-accent-500/20"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                          />
                        )}
                      </>
                    )}
                    
                    {processingStatus !== 'complete' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-text-muted text-sm">
                          {processingStatus === 'processing' 
                            ? 'Processing voice data...' 
                            : 'Record or upload a voice sample first'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-text-muted text-sm mb-2">
                    Voice cloning is for demonstration purposes only.
                  </p>
                  <p className="text-text-muted text-xs">
                    Real implementation would require API integration with voice cloning technology.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-light text-lg mb-4">
              Interested in preserving your voice for future generations?
            </p>
            <GradientButton variant="primary">
              Learn More About Voice Preservation
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceCloningDemo;