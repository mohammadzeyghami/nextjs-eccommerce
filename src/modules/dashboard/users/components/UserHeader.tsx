'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { Input } from '@/src/share-components/molecules/inputs/input';
import { motion } from 'framer-motion';

export const UserHeader = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12"
    >
      <div className="space-y-3">
        <h2 className="text-5xl font-black text-primary tracking-tighter leading-none font-headline">
          {t('admin.users_management.title')}
        </h2>
        <p className="text-muted-foreground text-lg font-medium tracking-tight">
          {t('admin.users_management.desc')}
        </p>
      </div>
      
      <div className="relative w-full md:w-96 group">
        <div className="bg-muted/40 backdrop-blur-md rounded-2xl flex items-center px-5 py-4 border border-border/50 focus-within:bg-card focus-within:shadow-2xl focus-within:shadow-primary/5 transition-all duration-500">
          <Search className="size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            className="bg-transparent border-none focus:ring-0 w-full px-4 text-foreground placeholder:text-muted-foreground/60 text-md font-medium" 
            placeholder={t('admin.users_management.search_placeholder')}
            type="text"
          />
        </div>
      </div>
    </motion.div>
  );
};
