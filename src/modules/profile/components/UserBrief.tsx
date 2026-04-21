'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';
import { Badge } from '@/src/share-components/atoms/badge';

export const UserBrief = () => {
  const { t } = useTranslation();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex items-center gap-6 py-4 px-6"
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-primary to-orange-400 shadow-lg">
          <Image
            alt="Avatar"
            className="w-full h-full rounded-full object-cover border-4 border-background"
            src="https://picsum.photos/seed/user-avatar/200/200"
            width={80}
            height={80}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-background">
          <ShieldCheck className="size-4" />
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-2xl font-black tracking-tight text-foreground">
          {t('profile_page.user_name')}
        </h2>
        <Badge variant="secondary" className="gap-1 px-3 py-1 bg-orange-100 text-orange-700 font-bold border-none h-auto">
          <Award className="size-3" />
          <span>{t('profile_page.gold_member')}</span>
        </Badge>
      </div>
    </motion.section>
  );
};
