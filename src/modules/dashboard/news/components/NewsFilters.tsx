"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/src/share-components/atoms/button';

export function NewsFilters() {
  const { t } = useTranslation();

  return (
    <div className="bg-muted/30 dark:bg-muted/5 p-4 rounded-2xl flex flex-wrap items-center gap-4 border border-border/40">
      <div className="flex-1 min-w-[240px]">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <input
            type="text"
            placeholder={t('admin.news_management.search_placeholder')}
            className="w-full bg-background border-border/40 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/40 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <select className="bg-background border-border/40 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary/40 transition-all outline-none">
          <option>{t('shop_products.filters')}</option>
          <option>{t('shop.categories_list.fashion')}</option>
          <option>{t('shop.categories_list.tech')}</option>
          <option>{t('shop.categories_list.home')}</option>
        </select>
        <select className="bg-background border-border/40 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary/40 transition-all outline-none">
          <option>{t('admin.dashboard.orders_table.status')}</option>
          <option>{t('admin.news_management.published')}</option>
          <option>{t('admin.news_management.draft')}</option>
          <option>{t('admin.news_management.review')}</option>
        </select>
        <Button variant="outline" size="icon" className="rounded-xl border-border/40 hover:bg-background">
          <Filter className="size-4" />
        </Button>
      </div>
    </div>
  );
}
