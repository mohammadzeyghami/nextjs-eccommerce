'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Wallet, Headset } from 'lucide-react';
import { Card } from '@/src/share-components/atoms/card';
import { cn } from '@/lib/utils';

export const QuickActions = () => {
  const { t } = useTranslation();

  const actions = [
    { key: 'my_orders', icon: ShoppingBag, color: 'text-primary bg-primary/10' },
    { key: 'favorites', icon: Heart, color: 'text-rose-500 bg-rose-500/10' },
    { key: 'wallet', icon: Wallet, color: 'text-amber-600 bg-amber-600/10' },
    { key: 'support', icon: Headset, color: 'text-teal-600 bg-teal-600/10' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-2 gap-4 px-6"
    >
      {actions.map((action) => (
        <Card key={action.key} className="p-5 flex flex-col gap-3 hover:bg-muted/50 transition-colors cursor-pointer border-none shadow-sm bg-card/40 backdrop-blur-sm">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", action.color)}>
            <action.icon className="size-5" />
          </div>
          <span className="font-bold text-sm text-foreground">
            {t(`profile_page.${action.key}`)}
          </span>
        </Card>
      ))}
    </motion.section>
  );
};
