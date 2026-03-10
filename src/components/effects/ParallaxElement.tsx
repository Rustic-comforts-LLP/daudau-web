'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxElementProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export default function ParallaxElement({ children, offset = 50, className = '' }: ParallaxElementProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  // Add physics spring for a smoother, premium feel
  const y = useSpring(rawY, { stiffness: 400, damping: 90 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
