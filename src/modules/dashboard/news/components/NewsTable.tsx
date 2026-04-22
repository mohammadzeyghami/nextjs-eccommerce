"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Edit, Trash2, MoreVertical, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/src/share-components/atoms/button';
import { Badge } from '@/src/share-components/atoms/badge';
import Image from 'next/image';

const MOCK_NEWS = [
  {
    id: 1,
    title: 'هنر معماری مدرن در قلب کویر',
    author: 'رضا سپهری',
    authorInitial: 'رس',
    date: '۱۴۰۲/۰۸/۲۴',
    status: 'published',
    category: 'معماری',
    image: 'https://picsum.photos/seed/arch1/200/200'
  },
  {
    id: 2,
    title: 'بررسی هنر خوشنویسی معاصر',
    author: 'مریم همتی',
    authorInitial: 'مه',
    date: '۱۴۰۲/۰۹/۰۲',
    status: 'draft',
    category: 'فرهنگی',
    image: 'https://picsum.photos/seed/art1/200/200'
  },
  {
    id: 3,
    title: 'راهنمای سفرهای پاییزی',
    author: 'علی علوی',
    authorInitial: 'عل',
    date: '۱۴۰۲/۰۷/۱۵',
    status: 'review',
    category: 'گردشگری',
    image: 'https://picsum.photos/seed/travel1/200/200'
  }
];

export function NewsTable() {
  const { t } = useTranslation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20';
      case 'draft':
        return 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20';
      case 'review':
        return 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-100 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20';
    }
  };

  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border/40">
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-muted/30 dark:bg-muted/5 border-b border-border/40">
              <th className="px-6 py-4 font-black text-sm text-muted-foreground uppercase tracking-widest">{t('admin.news_management.table.title')}</th>
              <th className="px-6 py-4 font-black text-sm text-muted-foreground uppercase tracking-widest">{t('admin.news_management.table.author')}</th>
              <th className="px-6 py-4 font-black text-sm text-muted-foreground uppercase tracking-widest">{t('admin.news_management.table.date')}</th>
              <th className="px-6 py-4 font-black text-sm text-muted-foreground uppercase tracking-widest">{t('admin.news_management.table.status')}</th>
              <th className="px-6 py-4 font-black text-sm text-muted-foreground uppercase tracking-widest text-center">{t('admin.news_management.table.actions')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {MOCK_NEWS.map((item) => (
              <tr key={item.id} className="hover:bg-muted/20 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-muted overflow-hidden flex-shrink-0 border border-border/20 shadow-sm">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        width={48} 
                        height={48} 
                        className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="font-headline font-black text-foreground group-hover:text-primary transition-colors line-clamp-1">{item.title}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">
                        {t('admin.products_management.mock_products.0.category').split('.')[0]}: {item.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-[10px] text-primary font-black uppercase ring-1 ring-primary/20">
                      {item.authorInitial}
                    </div>
                    <span className="text-sm font-bold text-foreground">{item.author}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm font-sans font-medium text-muted-foreground tracking-tight">{item.date}</span>
                </td>
                <td className="px-6 py-5">
                  <Badge variant="outline" className={`rounded-lg px-3 py-1 font-black text-[10px] uppercase tracking-tighter ${getStatusColor(item.status)}`}>
                    {t(`admin.news_management.${item.status}`)}
                  </Badge>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center items-center gap-1">
                    <Button variant="ghost" size="icon" className="size-9 rounded-xl hover:bg-primary/5 hover:text-primary">
                      <Edit className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-9 rounded-xl hover:bg-destructive/5 hover:text-destructive">
                      <Trash2 className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-9 rounded-xl">
                      <MoreVertical className="size-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="bg-muted/10 dark:bg-muted/5 px-6 py-4 flex flex-row-reverse justify-between items-center border-t border-border/40">
        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Showing 1 to 10 of 1,482 entries</div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="size-8 rounded-lg">
            <ChevronRight className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="size-8 rounded-lg bg-primary text-primary-foreground font-black border-none shadow-md">1</Button>
          <Button variant="ghost" size="icon" className="size-8 rounded-lg text-muted-foreground">2</Button>
          <Button variant="ghost" size="icon" className="size-8 rounded-lg text-muted-foreground">3</Button>
          <span className="px-2 text-muted-foreground text-xs font-black">...</span>
          <Button variant="ghost" size="icon" className="size-8 rounded-lg text-muted-foreground">148</Button>
          <Button variant="ghost" size="icon" className="size-8 rounded-lg">
            <ChevronLeft className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
