'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ChevronLeft } from 'lucide-react';
import { Card } from '@/src/share-components/atoms/card';
import { Badge } from '@/src/share-components/atoms/badge';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OrderCardProps {
  order: {
    id: string;
    customer: string;
    date: string;
    amount: string;
    status: 'pending' | 'shipped' | 'cancelled';
  };
  index: number;
}

export const OrderCard = ({ order, index }: OrderCardProps) => {
  const { t } = useTranslation();

  const statusStyles = {
    pending: {
      bg: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      dot: 'bg-amber-500',
      label: t('admin.orders_management.pending')
    },
    shipped: {
      bg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      dot: 'bg-emerald-500',
      label: t('admin.orders_management.shipped')
    },
    cancelled: {
      bg: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
      dot: 'bg-rose-500',
      label: t('admin.orders_management.cancelled')
    }
  };

  const style = statusStyles[order.status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group p-6 flex flex-col gap-5 bg-card border-none shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity bg-primary" />
        
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
              {order.id}
            </span>
            <h3 className="font-black text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
              {order.customer}
            </h3>
          </div>
          <Badge className={cn("px-4 py-1.5 rounded-xl border-none font-black text-[10px] flex items-center gap-2", style.bg)}>
            <span className={cn("size-1.5 rounded-full", style.dot)} />
            {style.label}
          </Badge>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <Calendar className="size-4 opacity-50" />
          <span>{order.date}</span>
        </div>

        <div className="flex justify-between items-end mt-2 pt-5 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
              {t('admin.orders_management.total')}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-2xl text-primary leading-none">
                {order.amount}
              </span>
              <span className="text-[10px] font-bold text-primary/60 uppercase">
                {t('admin.orders_management.currency')}
              </span>
            </div>
          </div>
          
          <div className="bg-primary/5 size-10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <ChevronLeft className="size-6 transition-transform group-hover:-translate-x-1" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
