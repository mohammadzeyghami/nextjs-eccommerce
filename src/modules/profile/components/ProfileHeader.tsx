'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import { Button } from '@/src/share-components/atoms/button';
import { useRouter } from 'next/navigation';

export const ProfileHeader = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 z-50 w-full h-16 px-6 flex items-center justify-between bg-background/80 backdrop-blur-xl border-b border-border/50 max-w-7xl mx-auto left-0 right-0"
    >
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => router.back()}
        className="rounded-full hover:bg-primary/10 text-foreground"
      >
        <ArrowRight className="size-6 rtl:rotate-0 ltr:rotate-180" />
      </Button>
      <h1 className="text-lg font-black text-foreground uppercase tracking-tight font-headline">
        {t('profile_page.title')}
      </h1>
      <Button 
        variant="ghost" 
        size="icon"
        className="rounded-full hover:bg-primary/10 text-foreground"
      >
        <Settings className="size-6" />
      </Button>
    </motion.nav>
  );
};
