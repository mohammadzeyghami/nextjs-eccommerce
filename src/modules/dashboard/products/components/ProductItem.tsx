'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Edit2, Trash2 } from 'lucide-react';
import { Badge } from '@/src/share-components/atoms/badge';
import { Button } from '@/src/share-components/atoms/button';
import { Card } from '@/src/share-components/atoms/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProductItemProps {
  product: {
    title: string;
    category: string;
    price: string;
    stock: number;
    image: string;
  };
  index: number;
}

export const ProductItem = ({ product, index }: ProductItemProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-4 flex flex-col md:flex-row items-center gap-6 bg-card border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
        {/* Image Container */}
        <div className="w-full md:w-24 h-48 md:h-24 rounded-2xl overflow-hidden shrink-0 bg-muted relative group-hover:scale-105 transition-transform duration-500">
          <Image 
            src={product.image} 
            alt={product.title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Info Container */}
        <div className="flex-1 flex flex-col gap-1 w-full">
          <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em]">
            {product.category}
          </span>
          <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-primary font-black text-md">
            {product.price} {t('shop.flash_sale.currency')}
          </p>
        </div>

        {/* Metrics & Actions */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-8 border-t md:border-t-0 border-border/50 pt-4 md:pt-0">
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
              {t('admin.products_management.inventory')}
            </span>
            <Badge 
              variant={product.stock < 10 ? "destructive" : "secondary"}
              className="px-4 py-1 rounded-xl text-[11px] font-black"
            >
              {product.stock} {t('admin.products_management.unit')}
            </Badge>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all active:scale-90"
              title={t('admin.products_management.edit')}
            >
              <Edit2 className="size-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all active:scale-90"
              title={t('admin.products_management.delete')}
            >
              <Trash2 className="size-5" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
