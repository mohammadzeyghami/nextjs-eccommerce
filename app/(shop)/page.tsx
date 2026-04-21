"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Bolt, Star, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/src/share-components/atoms/button";
import { Badge } from "@/src/share-components/atoms/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/share-components/atoms/card";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Separator } from "@/src/share-components/atoms/separator";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { cn } from "@/lib/utils";

import { useCartStore } from "@/store/useCartStore";

export default function Home() {
  const { t } = useTranslation();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.img,
    });
  };

  const flashSaleItems = [
    { id: 'fs-1', title: t('shop.flash_sale.watch'), price: '۴,۲۰۰,۰۰۰', old: '۷,۰۰۰,۰۰۰', discount: '-۴۰٪', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWj11d-FMZBUnMEW4YAGgCuJ2s6xhrY8XDr39herJPbuWBQW8418374AgkVHAT28pj-s2oQW4knhZ5IRjPiPyKXs9NBhI9zfDkS3ysh5DKAIZF1T9m_TybE6pnkk-JU_NlmDp-vMdrQtRPFJdW4pbnVaN7_73x_0Rh-T8T3I75wGdc2h0pnx-db1J8OCYi7QIWe_XnAHVVzUGu-817veUpXyfdicOhED37pL-wWhpHtB3QfdxcwBw1qBp-2DSa9TWij0CE3KDVEg' },
    { id: 'fs-2', title: t('shop.flash_sale.shoes'), price: '۲,۹۰۰,۰۰۰', old: '۳,۸۰۰,۰۰۰', discount: '-۲۵٪', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF2AYCxBnwBMXHRAAyMwIqSNIS_yCKLY1sTQRG92mtT38EM8qAtOSAXNmdtgTvIA1tGC3EYYFsLUBTpAsLNHzdMa877Vm75KsGpokS00Ax5_BX5rExg3bV7nr4Qv5YVU1ZuX3eGCjZC-bL7KyVciratLL3IW1i8bq8_mN-YEy7KPx4NdPapv6VDKeFxoTlDisr3j1KeSRC0aqttF2kxEF2vFmtfCg9bULt888fVx4vxsCp1i8WQqHdGW9poZQXsAaFIPgc7bSf2Ic' },
    { id: 'fs-3', title: t('shop.flash_sale.headphones'), price: '۹,۴۰۰,۰۰۰', old: '۱۱,۰۰۰,۰۰۰', discount: '-۱۵٪', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANG3M8hEYLsdI4yJNZEMM8_3rFhuQJ9sHij5rDtzteUKztyYdE-r8l_rx9tpCvUtX517jcL0euI2ZGnau6UbEwLwB3TtZFKRTLVe_KOoALxQ1WdK2AxzjygsCBd_AlxfXF8alspwLdIh1xKFwwMnCjPDKtf_s1mXiFEJLwFck6cFwQANFr8CJCqtYrK_8K3YC-uxXhxImhcwdG5rjtL7kMCt8pJEFf3m70itDAgulw6ZblHZ-hLCkTbk4lb6zxrYtxEbpEoGyV4Ps' }
  ];

  const newArrivals = [
    { id: 'na-1', key: 'classic_shoes', price: '۱,۲۰۰,۰۰۰', rating: '۴.۸', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD36TaqhQhWWGSHrN-9ZoKruXkOTutpN2HjL-gQLNtGu-7ciJFj9UPgLYwI6eGFt3ImXPuJDmIajZnqiTaK3kCNgXrKrThc5Bh3_mOLlsLqcu5uy7qM0s10MsFuk6izk_uQXe160V19kzuuLrO9auRuGtukxypbmOZndNyUeHQR9-RIXeEaVrGYRnbqfK4M5JN_C3KShJ2M35UMUOk7Q4COQmQvKz_4GETfjFml3sCagsILFNL9YrpRB-PzdmM6-B-X2w_Bz-19L0c' },
    { id: 'na-2', key: 'leather_wallet', price: '۸۵۰,۰۰۰', rating: '۴.۹', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-95tVR8J_O-hh7isvVdXihnrDzTsZ4949srH6nGMCIqEQLwcI_7gDHVsroGMaUloHyjSGXHp6sCLJHOM8r680cqKxAUujd9bMNxPlfD4KP2VSotP6MdCjlbp1FFEtZn4IXheyg8HImKvzTYshlIKJBghCALubPcq_j9XfQlzbfPV29a7gntYG8mDAWFJPbelZ-8KkrI44njInYAJ5x08JwSUu5gMQXQMCKi7NzfE2fJyQBLTdzgyHEBDD23z6hIt2_I4zznhAlKA' },
    { id: 'na-3', key: 'pro_headphones', price: '۵,۷۰۰,۰۰۰', rating: '۵.۰', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLT3ogpF1JPcAMGzQH2JsDPA62vvLUM_yhldC5RrIIoUkxi03_jeu7KfI8hO7Fz1NM9C2JiAXUaPckPL2aNKqEeGBryHXue8xPBqD-5cjZ0jOpDx3wAUvz93OHQfZoQgmznseplFOsY9Ub-zWMP_M6MVUqRShCJULmRMrf8z3NqjlHlZaumlWJsPGtWMYZRaWsWUhoKy7vRN3d1ivyFT2WOVFzCHj0Two227FhL64fhPuET-t6uTezYs8HNU-1bVrKdQcXnDnbHuo' },
    { id: 'na-4', key: 'nordic_chair', price: '۱۴,۳۰۰,۰۰۰', rating: '۴.۷', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDob4z2JpupZzNugAtTjt3dZTMgPfafLyAWwhmyjf9s7eqz05KADu7LL6UN7kTbEi9zvFKpeGfRi5OBZH5_Ml29Wpf9YdHsvyWhCTReSzIoB70uurNqa2-wp87I0ELALR-iJkyr1rJFGdDBkJb6udO69hBhiaEA44YZuFaYsbtF-YuSxPmwie8FTsz8UpJU-N4K3LrGsYqTsJbU_RTTPxH1GPglGZLYHB3TGm01vZo5ZFzxDszkOTlTRGqXyt1yfa_a5ZSsrkuoIB8' },
  ];

  return (
    <main className="pt-20 pb-32 bg-background">
      <AnimatedSections>
      {/* Hero Slider (Editorial Display) */}
      <section className="px-6 mb-12">
        <Card className="max-w-7xl mx-auto h-[480px] p-0 relative border-none shadow-2xl overflow-hidden group/card">
          <Image 
            src="/images/hero-banner.png" 
            alt={t('shop.hero.title')} 
            fill 
            className="object-cover transition-transform duration-700 group-hover/card:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/50 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-12 right-12 left-12 text-white z-10">
            <Badge variant="outline" className="text-sm border-white/30 text-white mb-4 uppercase tracking-widest font-sans">
              {t('shop.hero.badge')}
            </Badge>
            <h2 
              className="text-5xl md:text-7xl font-black mb-6 leading-tight max-w-2xl font-headline drop-shadow-sm"
              dangerouslySetInnerHTML={{ __html: t('shop.hero.title') }}
            />
            <Link 
              href="/products" 
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "font-bold text-lg px-8 py-6 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg inline-flex items-center bg-white text-black hover:bg-white/90 border-none"
              )}
            >
              {t('shop.hero.cta')}
            </Link>
          </div>
        </Card>
      </section>

      {/* Scrollable Category Chips */}
      <section className="mb-12 overflow-x-auto hide-scrollbar whitespace-nowrap px-6 flex gap-4 max-w-7xl mx-auto pb-4">
        <Button variant="default" className="rounded-full px-8 py-6 font-bold shadow-lg">
          {t('shop.categories_list.all')}
        </Button>
        {["fashion", "tech", "home", "minimalist", "art"].map((cat) => (
          <Button key={cat} variant="secondary" className="rounded-full px-8 py-6 font-medium hover:bg-muted/80">
            {t(`shop.categories_list.${cat}`)}
          </Button>
        ))}
      </section>

      {/* Flash Sale Section */}
      <section className="mb-16 bg-muted/30 dark:bg-muted/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 px-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 text-primary bg-primary/10 px-4 py-2 rounded-2xl border border-primary/20">
                <Bolt className="size-6 fill-current animate-pulse" />
                <span className="font-black text-sm uppercase tracking-widest font-sans">{t('shop.flash_sale.badge')}</span>
              </div>
              <h3 className="text-4xl font-black text-foreground font-headline">
                {t('shop.flash_sale.title')}
              </h3>
              <p className="text-muted-foreground text-lg max-w-md">{t('shop.flash_sale.desc')}</p>
            </div>
            <div className="flex gap-4">
              {[
                { val: "04", lbl: t('shop.flash_sale.hour') },
                { val: "28", lbl: t('shop.flash_sale.minute'), border: true },
                { val: "45", lbl: t('shop.flash_sale.second') }
              ].map((time, i) => (
                <Card key={i} className={cn("p-4 rounded-2xl shadow-lg min-w-[90px] text-center bg-background", time.border && "ring-2 ring-primary/20")}>
                  <span className="block text-3xl font-black text-primary font-headline">{time.val}</span>
                  <Separator className="my-2 opacity-50" />
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{time.lbl}</span>
                </Card>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flashSaleItems.map((item, idx) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <Card className="group/product rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-background border border-border/40">
                  <CardHeader className="p-0 relative h-72 overflow-hidden shadow-inner">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover/product:scale-110"
                    />
                    <Badge variant="destructive" className="absolute top-4 right-4 px-4 py-2 rounded-xl text-sm font-black shadow-lg">
                      {item.discount}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold mb-2 group-hover/product:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">{t('shop.flash_sale.new_stock')}</CardDescription>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-black text-2xl">{item.price} {t('shop.flash_sale.currency')}</span>
                      <span className="text-muted-foreground/60 line-through text-sm">{item.old}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 bg-transparent opacity-90">
                    <Button 
                      onClick={(e) => handleAddToCart(e, item)}
                      className="w-full h-12 rounded-2xl font-bold text-md shadow-md group-hover/product:bg-primary shadow-primary/20 active:scale-95 transition-transform"
                    >
                      {t('shop.flash_sale.add_to_cart')}
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Grid (Bento Style) */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h3 className="text-3xl font-black text-foreground">{t('shop.new_arrivals.title')}</h3>
            <p className="text-muted-foreground">{t('shop.new_arrivals.desc')}</p>
          </div>
          <Link 
            href="/products" 
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-primary font-bold gap-2 group/all inline-flex items-center"
            )}
          >
            {t('shop.new_arrivals.see_all')}
            <ArrowRight className="size-4 transition-transform group-hover/all:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Large Feature Card */}
          <Card className="col-span-2 row-span-2 group/feat relative rounded-3xl overflow-hidden border-none shadow-2xl min-h-[440px]">
            <Image 
            src="/images/spring-collection.png" 
              alt={t('shop.new_arrivals.spring_collection')} 
              fill 
              className="object-cover transition-transform duration-700 group-hover/feat:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 right-10 left-10 text-white z-10">
              <Badge className="bg-primary/90 text-primary-foreground mb-4">{t('shop.new_arrivals.special_offer')}</Badge>
              <h4 className="text-4xl font-black mb-3 font-headline leading-tight">{t('shop.new_arrivals.spring_collection')}</h4>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-sm">{t('shop.new_arrivals.spring_desc')}</p>
              <Button size="lg" className="bg-white text-indigo-950 px-8 py-6 rounded-2xl font-bold text-lg hover:bg-slate-100 shadow-xl">
                {t('shop.new_arrivals.check_collection')}
              </Button>
            </div>
          </Card>
          
          {newArrivals.map((prod, i) => (
            <Link key={prod.id} href={`/products/${prod.id}`}>
              <Card className="group/prod rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background border border-border/40">
                <CardHeader className="p-0 relative aspect-square overflow-hidden">
                  <Image 
                    src={prod.img} 
                    alt={t(`shop.new_arrivals.${prod.key}`)} 
                    fill 
                    className="object-cover group-hover/prod:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover/prod:opacity-100 transition-opacity">
                    <Button 
                      variant="secondary" 
                      onClick={(e) => handleAddToCart(e, { ...prod, title: t(`shop.new_arrivals.${prod.key}`) })}
                      className="rounded-2xl font-bold shadow-xl active:scale-95 transition-transform"
                    >
                      {t('shop.new_arrivals.quick_buy')}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <CardTitle className="font-bold text-foreground truncate">{t(`shop.new_arrivals.${prod.key}`)}</CardTitle>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-black text-primary">{prod.price}</span>
                    <div className="flex items-center text-[10px] text-muted-foreground gap-1 bg-muted px-2 py-1 rounded-lg">
                      <span>{prod.rating}</span>
                      <Star className="size-2 text-amber-500 fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-16 pb-24 bg-muted/20 dark:bg-muted/5 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto text-sm leading-relaxed text-on-surface-variant">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-primary mb-6 font-headline underline decoration-primary-fixed-dim decoration-4 underline-offset-8">{t('app_name')}</h2>
            <p className="text-muted-foreground tracking-wide leading-7">{t('shop.footer.desc')}</p>
          </div>
          <div className="space-y-6">
            <h3 className="font-black text-primary uppercase tracking-widest font-sans">{t('shop.footer.nav_title')}</h3>
            <ul className="space-y-4">
              {['journal', 'sustainability', 'shipping', 'contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 rtl:hover:-translate-x-1 inline-block font-sans">
                    {t(`shop.footer.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="font-black text-primary uppercase tracking-widest font-sans">{t('shop.footer.support_title')}</h3>
            <ul className="space-y-4">
              {['faq', 'terms', 'privacy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-all">
                    {t(`shop.footer.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="font-black text-primary uppercase tracking-widest font-sans">{t('shop.footer.newsletter_title')}</h3>
            <p className="text-xs text-muted-foreground font-sans">{t('shop.footer.newsletter_desc')}</p>
            <div className="flex items-center gap-2" dir="rtl">
              <Input 
                type="email" 
                placeholder={t('shop.footer.email_placeholder')}
                className="bg-background border-border h-12 rounded-xl focus-visible:ring-primary/20" 
              />
              <Button size="lg" className="rounded-xl px-6 h-12 font-bold shadow-lg hover:shadow-primary/20 transition-all">
                {t('shop.footer.confirm')}
              </Button>
            </div>
          </div>
        </div>
        <Separator className="mt-16 opacity-30" />
        <div className="mt-8 text-center text-muted-foreground/50 font-sans text-[10px] tracking-widest uppercase">
          {t('shop.footer.copyright')}
        </div>
      </footer>
      </AnimatedSections>
    </main>
  );
}
