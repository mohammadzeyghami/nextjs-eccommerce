'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/src/share-components/atoms/button';
import { Badge } from '@/src/share-components/atoms/badge';
import { cn } from '@/lib/utils';

interface UserItemProps {
  user: {
    name: string;
    email: string;
    role: string;
    image?: string;
  };
  index: number;
}

export const UserItem = ({ user, index }: UserItemProps) => {
  const { t } = useTranslation();

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return "bg-primary/10 text-primary border-primary/20";
      case 'product_manager':
        return "bg-indigo-500/10 text-indigo-600 border-indigo-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card rounded-[2rem] p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group border border-border/40"
    >
      <div className="flex items-center gap-5 flex-1">
        {user.image ? (
          <div className="relative size-16 rounded-3xl overflow-hidden ring-4 ring-muted transition-all group-hover:ring-primary/20">
            <Image 
              src={user.image} 
              alt={user.name} 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="size-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl ring-4 ring-muted group-hover:ring-primary/20 transition-all">
            {user.name.substring(0, 2)}
          </div>
        )}
        <div className="space-y-1">
          <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors font-headline">
            {user.name}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-10 w-full md:w-auto">
        <div className="w-32 flex justify-start md:justify-center">
          <Badge 
            variant="outline" 
            className={cn("rounded-xl px-4 py-1.5 font-bold text-xs uppercase border", getRoleColor(user.role))}
          >
            {t(`admin.users_management.roles.${user.role}`)}
          </Badge>
        </div>
        <Button 
          variant="secondary" 
          className="rounded-xl h-12 px-8 font-black text-sm hover:bg-primary hover:text-white transition-all shadow-sm flex-1 md:flex-none border-none bg-muted/60"
        >
          {t('admin.users_management.manage')}
        </Button>
      </div>
    </motion.div>
  );
};
