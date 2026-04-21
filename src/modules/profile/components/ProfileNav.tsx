'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserPen, MapPin, LogOut, ChevronLeft } from 'lucide-react';
import { Card } from '@/src/share-components/atoms/card';
import { cn } from '@/lib/utils';

export const ProfileNav = () => {
  const { t } = useTranslation();

  const menuItems = [
    { key: 'personal_info', icon: UserPen, color: 'text-muted-foreground' },
    { key: 'my_addresses', icon: MapPin, color: 'text-muted-foreground' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="px-6 mb-24"
    >
      <Card className="overflow-hidden border-none shadow-sm bg-card/40 backdrop-blur-sm">
        {menuItems.map((item) => (
          <button 
            key={item.key}
            className="w-full flex items-center gap-4 p-5 hover:bg-muted/50 transition-colors border-b border-border/10 group last:border-none"
          >
            <item.icon className={cn("size-5 group-hover:text-primary transition-colors", item.color)} />
            <span className="flex-1 text-right font-bold text-foreground">{t(`profile_page.${item.key}`)}</span>
            <ChevronLeft className="size-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </button>
        ))}
        <button className="w-full flex items-center gap-4 p-5 hover:bg-destructive/5 transition-colors group">
          <LogOut className="size-5 text-destructive" />
          <span className="flex-1 text-right font-bold text-destructive">{t('profile_page.logout')}</span>
        </button>
      </Card>
    </motion.section>
  );
};
