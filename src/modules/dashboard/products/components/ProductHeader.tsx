'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/src/share-components/atoms/button';
import { Input } from '@/src/share-components/molecules/inputs/input';
import { motion } from 'framer-motion';

export const ProductHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-8"
      >
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-foreground tracking-tighter leading-none">
            {t('admin.products_management.title')}
          </h2>
          <p className="text-muted-foreground text-md font-medium tracking-tight">
            {t('admin.products_management.desc')}
          </p>
        </div>
        
        <Button className="h-16 px-8 rounded-2xl font-black text-md shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 bg-primary hover:bg-primary/90 flex gap-3 group">
          <Plus className="size-6 group-hover:rotate-90 transition-transform duration-500" />
          {t('admin.products_management.add_new')}
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-muted/30 p-3 rounded-2xl border border-border/50 flex flex-col md:flex-row gap-3 backdrop-blur-sm shadow-inner"
      >
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input 
            className="w-full h-14 bg-card border-none rounded-xl pl-14 pr-6 text-md font-medium shadow-sm transition-all focus-visible:ring-primary/20" 
            placeholder={t('admin.products_management.search_placeholder')}
          />
        </div>
        <Button variant="secondary" className="h-14 px-8 rounded-xl font-bold flex gap-3 border-none hover:bg-primary/10 hover:text-primary transition-all">
          <SlidersHorizontal className="size-5" />
          {t('admin.products_management.filters')}
        </Button>
      </motion.div>
    </div>
  );
};
