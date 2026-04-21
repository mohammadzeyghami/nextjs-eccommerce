'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Spinner = ({ className, size = 'md' }: SpinnerProps) => {
  const sizeClasses = {
    sm: 'size-5 border-2',
    md: 'size-10 border-3',
    lg: 'size-16 border-4',
    xl: 'size-24 border-6',
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className={cn(
          "rounded-full border-primary/10 border-t-primary shadow-[0_0_15px_rgba(31,16,142,0.1)]",
          sizeClasses[size]
        )}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute rounded-full bg-primary/5",
          size === 'sm' ? 'size-2' : size === 'md' ? 'size-4' : size === 'lg' ? 'size-8' : 'size-12'
        )}
      />
    </div>
  );
};
