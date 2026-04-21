"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Search, X, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Card, CardContent } from "@/src/share-components/atoms/card";
import { Badge } from "@/src/share-components/atoms/badge";

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <main className="flex-grow max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-32 mb-8 flex flex-col md:flex-row gap-12 bg-background">
      {/* Sidebar Filters */}
      <aside className="hidden md:flex md:w-64 flex-col space-y-8 flex-shrink-0">
        <Card className="p-8 rounded-[2rem] border-none shadow-xl bg-muted/20 dark:bg-muted/10 h-fit">
          <h2 className="text-xl font-black text-primary mb-6 font-headline uppercase tracking-widest">{t('shop_products.filters')}</h2>
          <div className="space-y-6">
            <div className="relative">
              <Input 
                placeholder={t('shop_products.search_placeholder')} 
                className="bg-background border-none rounded-2xl h-12 pr-12 font-sans placeholder:text-muted-foreground" 
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
            </div>
          </div>
        </Card>
      </aside>

      {/* Product Grid */}
      <section className="flex-grow">
        <div className="md:hidden flex items-center gap-3 mb-8">
          <div className="relative flex-grow">
            <Input 
              placeholder={t('shop_products.search_placeholder')} 
              className="bg-muted/30 border-none rounded-2xl h-14 pr-12 font-sans" 
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <Badge variant="secondary" className="rounded-full px-4 py-2 gap-2 text-sm font-bold bg-primary/10 text-primary hover:bg-primary/20 border-none">
            {t('shop.categories.accessories')}
            <X className="size-4 cursor-pointer hover:text-destructive transition-colors" />
          </Badge>
          <Button variant="link" className="text-sm font-black text-muted-foreground hover:text-primary transition-colors p-0 uppercase tracking-tighter">
            {t('shop_products.clear_all')}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link key={item} href={`/products/${item}`} className="group">
              <Card className="rounded-[2.5rem] overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-muted/20 dark:bg-muted/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image 
                    src={`https://picsum.photos/seed/accessories${item}/600/800`} 
                    alt="Product" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  <Button variant="secondary" size="icon" className="absolute top-4 left-4 size-10 rounded-full bg-background/80 backdrop-blur-md text-primary shadow-lg border-none hover:bg-primary hover:text-on-primary transition-all duration-300">
                    <Heart className="size-5" />
                  </Button>
                </div>
                <CardContent className="p-6 flex flex-col justify-between h-40">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground font-black uppercase tracking-[0.2em]">{t('shop.categories.accessories')}</p>
                    <h3 className="font-headline font-black text-foreground text-xl line-clamp-1 group-hover:text-primary transition-colors">{t('shop_products.item_title')} {item}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-headline font-black text-primary text-xl">۲,۴۵۰,۰۰۰ <span className="text-xs font-bold text-muted-foreground">{t('shop.flash_sale.currency')}</span></span>
                    <Button variant="default" size="icon" className="size-12 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-all">
                      <ShoppingCart className="size-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
