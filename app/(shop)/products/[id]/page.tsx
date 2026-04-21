"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { ChevronRight, ShoppingBag, Settings2 } from "lucide-react";
import { Button, buttonVariants } from "@/src/share-components/atoms/button";
import { Card } from "@/src/share-components/atoms/card";
import { Badge } from "@/src/share-components/atoms/badge";
import { AnimatedSections, FadeInRandom } from "@/src/share-components/molecules/animated-sections";
import { cn } from "@/lib/utils";

import { useParams } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // In a real app, we would fetch product by id. 
    // Here we'll use a mock based on the ID or current page content.
    addItem({
      id: params.id as string || 'default-id',
      title: t('product.title'),
      price: '۳,۴۵۰,۰۰۰',
      image: "https://picsum.photos/seed/vase/800/1000",
    });
  };

  return (
    <>
      <main className="max-w-screen-xl mx-auto px-6 md:px-8 py-12 bg-background">
        <AnimatedSections>
        <nav className="flex items-center text-sm text-muted-foreground mb-12 gap-2 uppercase tracking-widest font-sans">
          <Link href="/products" className="hover:text-primary transition-colors font-bold">{t('product.collection')}</Link>
          <ChevronRight className="size-4 rtl:rotate-180" />
          <span className="text-foreground font-black">{t('product.title')}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <section className="flex flex-col gap-6">
            <Card className="w-full aspect-[4/5] bg-muted/20 dark:bg-muted/10 rounded-3xl overflow-hidden relative group border-none shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/vase/800/1000" 
                alt={t('product.title')} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                referrerPolicy="no-referrer" 
                priority
              />
            </Card>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2].map((thumb) => (
                <button key={thumb} className="aspect-square relative bg-muted/30 rounded-2xl overflow-hidden focus:outline-none ring-offset-background focus:ring-2 focus:ring-primary transition-all active:scale-95">
                  <Image 
                    src={`https://picsum.photos/seed/vase${thumb}/400/400`} 
                    alt={t('product.thumbnail_alt')} 
                    fill 
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity" 
                    referrerPolicy="no-referrer" 
                  />
                </button>
              ))}
            </div>
          </section>

          <section className="flex flex-col py-8">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary font-black px-4 py-1 uppercase tracking-[0.2em]">{t('product.edition')}</Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight font-headline">
                {t('product.title')}
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-3xl font-black text-primary font-headline">۳,۴۵۰,۰۰۰ <span className="text-sm font-bold text-muted-foreground">{t('shop.flash_sale.currency')}</span></p>
            </div>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed mb-12 font-sans">
              <p>{t('product.desc')}</p>
            </div>
            <div className="mb-12 space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3 uppercase tracking-widest font-headline">
                <Settings2 className="size-6 text-primary" />
                {t('product.specs')}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center bg-muted/20 px-6 py-4 rounded-2xl border border-border/50">
                  <span className="text-muted-foreground font-medium font-sans">{t('product.material')}</span>
                  <span className="text-foreground font-black">{t('product.material_val')}</span>
                </div>
                <div className="flex justify-between items-center bg-muted/20 px-6 py-4 rounded-2xl border border-border/50">
                  <span className="text-muted-foreground font-medium font-sans">{t('product.stock')}</span>
                  <span className="text-primary font-black">{t('product.stock_val')}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        </AnimatedSections>
      </main>

      <FadeInRandom className="fixed bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-xl shadow-[0_-10px_50px_rgba(0,0,0,0.1)] rounded-t-[2.5rem] border-t border-border">
        <div className="max-w-screen-xl mx-auto px-8 py-6 flex items-center justify-between gap-8">
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm text-muted-foreground font-bold font-sans uppercase tracking-widest">{t('product.title')}</span>
            <span className="text-2xl font-black text-primary">۳,۴۵۰,۰۰۰ {t('shop.flash_sale.currency')}</span>
          </div>
          <div className="flex items-center gap-4 flex-1 md:flex-none justify-end">
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="w-full md:w-auto rounded-2xl font-black text-lg h-16 px-12 group transition-all shadow-xl shadow-primary/20 active:scale-95"
            >
              <ShoppingBag className="size-6 mr-3 group-hover:scale-110 transition-transform" />
              {t('shop.flash_sale.add_to_cart')}
            </Button>
          </div>
        </div>
      </FadeInRandom>
    </>
  );
}
