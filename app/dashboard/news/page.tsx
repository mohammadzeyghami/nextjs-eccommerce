"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/src/share-components/atoms/button';
import { AnimatedSections } from '@/src/share-components/molecules/animated-sections';
import { NewsStats } from '@/src/modules/dashboard/news/components/NewsStats';
import { NewsFilters } from '@/src/modules/dashboard/news/components/NewsFilters';
import { NewsTable } from '@/src/modules/dashboard/news/components/NewsTable';

import Link from 'next/link';

export default function NewsManagementPage() {
  const { t } = useTranslation();

  return (
    <AnimatedSections className="space-y-10 pb-20">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black text-primary font-headline tracking-tighter uppercase mb-2">
            {t('admin.news_management.title')}
          </h1>
          <p className="text-muted-foreground font-medium max-w-xl">
            {t('admin.news_management.desc')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/dashboard/news/create">
            <Button size="lg" className="rounded-2xl h-14 px-8 font-black text-md shadow-xl shadow-primary/20 gap-3 group">
              <Plus className="size-6 group-hover:rotate-90 transition-transform duration-500" />
              {t('admin.news_management.add_new')}
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Stats Bento Grid */}
      <NewsStats />

      {/* Filters Section */}
      <NewsFilters />

      {/* News Table */}
      <NewsTable />

      {/* FAB for Mobile */}
      <Link href="/dashboard/news/create">
        <motion.button 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden fixed bottom-32 left-8 z-50 size-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center border-4 border-background group"
        >
          <Plus className="size-8 group-hover:rotate-90 transition-transform duration-500" />
        </motion.button>
      </Link>
    </AnimatedSections>
  );
}
