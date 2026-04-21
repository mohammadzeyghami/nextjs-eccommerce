'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from '@/src/share-components/atoms/spinner';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative">
          <Spinner size="xl" />
          <motion.div
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="size-4 bg-primary rounded-full shadow-[0_0_20px_rgba(31,16,142,0.5)]" />
          </motion.div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-black text-primary font-headline tracking-tighter uppercase"
          >
            RastaarShop
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"
          >
            Loading Excellence...
          </motion.p>
        </div>
      </motion.div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-20" />
    </div>
  );
};
