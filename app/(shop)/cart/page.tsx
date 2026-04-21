"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/share-components/atoms/card";
import { Separator } from "@/src/share-components/atoms/separator";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";

export default function CartPage() {
  const { t } = useTranslation();

  return (
    <main className="flex-grow max-w-screen-xl mx-auto w-full px-4 md:px-6 pt-24 pb-32 bg-background">
      <AnimatedSections className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <h2 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter font-headline">{t('cart.title')}</h2>
        {[1, 2].map((item) => (
          <Card key={item} className="rounded-3xl border-none shadow-xl group transition-all duration-300 hover:shadow-2xl bg-muted/20 dark:bg-muted/10 overflow-hidden">
            <CardContent className="p-6 flex flex-col sm:flex-row gap-8 items-center">
              <div className="relative w-full sm:w-48 h-48 rounded-2xl overflow-hidden bg-background shadow-inner">
                <Image 
                  src={`https://picsum.photos/seed/cart${item}/400/400`} 
                  alt={t('cart.item_title')} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="flex-grow flex flex-col self-stretch justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-black text-foreground font-headline leading-tight">{t('cart.item_title')}</h3>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive transition-colors -mt-2">
                      <X className="size-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{t('cart.item_desc')}</p>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <div className="flex items-center bg-background rounded-2xl p-1 shadow-sm border border-border">
                    <Button variant="ghost" size="icon" className="size-8 text-primary hover:bg-muted rounded-xl">
                      <Minus className="size-4" />
                    </Button>
                    <span className="w-10 text-center font-black text-lg">۱</span>
                    <Button variant="ghost" size="icon" className="size-8 text-primary hover:bg-muted rounded-xl">
                      <Plus className="size-4" />
                    </Button>
                  </div>
                  <span className="text-xl font-black text-primary">{item === 1 ? '۳,۵۰۰,۰۰۰' : '۱,۲۰۰,۰۰۰'} {t('shop.flash_sale.currency')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full lg:w-1/3 sticky top-24">
        <Card className="rounded-3xl p-8 shadow-2xl border-none shadow-primary/5 bg-background overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-black text-foreground uppercase tracking-widest font-headline">{t('cart.summary_title')}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-5">
            <div className="flex justify-between text-muted-foreground font-sans text-sm font-medium">
              <span>{t('cart.subtotal')}</span>
              <span className="text-foreground">۴,۷۰۰,۰۰۰ {t('shop.flash_sale.currency')}</span>
            </div>
            <div className="flex justify-between text-muted-foreground font-sans text-sm font-medium">
              <span>{t('cart.shipping')}</span>
              <span className="text-emerald-500 font-bold">{t('cart.free')}</span>
            </div>
            <div className="flex justify-between text-muted-foreground font-sans text-sm font-medium">
              <span>{t('cart.discount')}</span>
              <span className="text-foreground">۰ {t('shop.flash_sale.currency')}</span>
            </div>
            <Separator className="my-6 opacity-30" />
            <div className="flex justify-between items-center pb-8 pt-2">
              <span className="text-lg font-black text-foreground uppercase tracking-widest">{t('cart.total')}</span>
              <span className="text-3xl font-black text-primary">۴,۷۰۰,۰۰۰ <span className="text-sm font-bold text-muted-foreground">{t('shop.flash_sale.currency')}</span></span>
            </div>
            <Button size="lg" className="w-full h-16 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 gap-3 group transition-all">
              {t('cart.checkout')}
              <ArrowRight className="size-6 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Button>
          </CardContent>
        </Card>
      </div>
      </AnimatedSections>
    </main>
  );
}
