"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Eye, MessageSquare, Clock } from 'lucide-react';

export function NewsStats() {
  const { t } = useTranslation();

  const stats = [
    {
      label: t('admin.news_management.all_articles'),
      value: '1,482',
      icon: FileText,
      trend: '+12%',
      color: 'text-primary',
      bg: 'bg-surface-container-lowest'
    },
    {
      label: t('admin.news_management.stats_visits'),
      value: '85.4k',
      icon: Eye,
      trend: '+5%',
      color: 'text-primary',
      bg: 'bg-surface-container-lowest'
    },
    {
      label: t('admin.news_management.pending_approval'),
      value: '24',
      icon: Clock,
      color: 'text-primary',
      bg: 'bg-surface-container-lowest'
    },
    {
      label: t('admin.news_management.stats_comments'),
      value: '312',
      icon: MessageSquare,
      color: 'text-primary',
      bg: 'bg-surface-container-lowest'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${stat.bg} p-6 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow`}
        >
          <div className="flex justify-between items-start">
            <div className={`p-2 rounded-xl bg-primary/5 ${stat.color}`}>
              <stat.icon className="size-6" />
            </div>
            {stat.trend && (
              <span className="text-xs font-black text-emerald-600 px-2 py-1 bg-emerald-50 rounded-full">
                {stat.trend}
              </span>
            )}
          </div>
          <div className="mt-4">
            <div className="text-3xl font-black text-foreground font-headline tracking-tight">
              {stat.value}
            </div>
            <div className="text-muted-foreground text-sm font-medium mt-1">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
