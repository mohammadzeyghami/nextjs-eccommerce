'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { Input } from '@/src/share-components/molecules/inputs/input';
import { Button } from '@/src/share-components/atoms/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OrderHeaderProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const OrderHeader = ({ activeFilter, setActiveFilter }: OrderHeaderProps) => {
  const { t } = useTranslation();

  const filters = [
    { key: 'all', label: t('admin.orders_management.all') },
    { key: 'pending', label: t('admin.orders_management.pending') },
    { key: 'shipped', label: t('admin.orders_management.shipped') },
    { key: 'cancelled', label: t('admin.orders_management.cancelled') },
  ];

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <h2 className="text-3xl font-black text-foreground tracking-tighter">
          {t('admin.orders_management.title')}
        </h2>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input 
            className="w-full h-14 bg-card border-border/50 rounded-2xl pl-12 pr-6 text-sm font-medium shadow-sm transition-all focus-visible:ring-primary/20" 
            placeholder={t('admin.orders_management.search_placeholder')}
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? "default" : "secondary"}
            onClick={() => setActiveFilter(filter.key)}
            className={cn(
              "rounded-full px-6 py-2 h-10 font-bold transition-all",
              activeFilter === filter.key 
                ? "shadow-lg shadow-primary/20 scale-105" 
                : "bg-muted/50 hover:bg-primary/5 hover:text-primary border-none shadow-none"
            )}
          >
            {filter.label}
          </Button>
        ))}
      </motion.div>
    </div>
  );
};
