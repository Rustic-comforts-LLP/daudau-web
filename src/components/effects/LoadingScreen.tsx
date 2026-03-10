'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  
  const fullText = "INITIALIZING AGENTIC WORKSPACE...";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setLoading(false), 800); // Hold for a moment after typing
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#030712] flex flex-col items-center justify-center font-mono"
        >
          <div className="flex flex-col items-center">
            {/* Pulsing Logo placeholder or just tech element */}
            <motion.div 
              animate={{ 
                rotate: 360,
                boxShadow: ['0 0 0px #10b981', '0 0 20px #10b981', '0 0 0px #10b981']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-primary/30 rounded-full border-t-primary mb-8 rounded-full"
            />
            <div className="h-8 flex items-center">
                <span className="text-primary text-sm md:text-base tracking-[0.2em] uppercase">
                {text}
                <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 relative top-0.5 h-4 bg-primary ml-1"
                />
                </span>
            </div>
            
            <div className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-primary"
                />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
