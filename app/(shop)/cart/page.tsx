"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { ChevronRight, Trash2, Plus, Minus, Tag, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice, e2p } from "@/lib/utils";

export default function CartPage() {
  const { t, i18n } = useTranslation();
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const subtotal = totalPrice();

  const suggestedItems = [
    { title: 'گلدان مینیمال آرک', price: 1450000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDob4z2JpupZzNugAtTjt3dZTMgPfafLyAWwhmyjf9s7eqz05KADu7LL6UN7kTbEi9zvFKpeGfRi5OBZH5_Ml29Wpf9YdHsvyWhCTReSzIoB70uurNqa2-wp87I0ELALR-iJkyr1rJFGdDBkJb6udO69hBhiaEA44YZuFaYsbtF-YuSxPmwie8FTsz8UpJU-N4K3LrGsYqTsJbU_RTTPxH1GPglGZLYHB3TGm01vZo5ZFzxDszkOTlTRGqXyt1yfa_a5ZSsrkuoIB8' },
    { title: 'شمع معطر صندل', price: 890000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWj11d-FMZBUnMEW4YAGgCuJ2s6xhrY8XDr39herJPbuWBQW8418374AgkVHAT28pj-s2oQW4knhZ5IRjPiPyKXs9NBhI9zfDkS3ysh5DKAIZF1T9m_TybE6pnkk-JU_NlmDp-vMdrQtRPFJdW4pbnVaN7_73x_0Rh-T8T3I75wGdc2h0pnx-db1J8OCYi7QIWe_XnAHVVzUGu-817veUpXyfdicOhED37pL-wWhpHtB3QfdxcwBw1qBp-2DSa9TWij0CE3KDVEg' },
    { title: 'تابلو کانسپت سکوت', price: 3200000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF2AYCxBnwBMXHRAAyMwIqSNIS_yCKLY1sTQRG92mtT38EM8qAtOSAXNmdtgTvIA1tGC3EYYFsLUBTpAsLNHzdMa877Vm75KsGpokS00Ax5_BX5rExg3bV7nr4Qv5YVU1ZuX3eGCjZC-bL7KyVciratLL3IW1i8bq8_mN-YEy7KPx4NdPapv6VDKeFxoTlDisr3j1KeSRC0aqttF2kxEF2vFmtfCg9bULt888fVx4vxsCp1i8WQqHdGW9poZQXsAaFIPgc7bSf2Ic' },
  ];

  return (
    <main className="pt-32 pb-48 px-6 md:px-8 max-w-[1440px] mx-auto min-h-screen bg-white dark:bg-[#0b0e14]">
      <AnimatedSections>
        {/* Breadcrumb */}
        <nav className="flex items-center text-[10px] font-black text-muted-foreground mb-12 gap-3 uppercase tracking-[0.3em] font-sans bg-[#f2f3ff] dark:bg-[#131b2e] w-fit px-6 py-2 rounded-full border border-border/30">
          <Link href="/products" className="hover:text-primary transition-colors">{t('cart.title')}</Link>
          <ChevronRight className="size-3 rtl:rotate-180 text-primary/40" />
          <span className="text-[#131b2e] dark:text-white">{t('bag')}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          {/* Items List */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-end justify-between border-b border-border/40 pb-8">
              <h1 className="text-6xl font-black text-[#131b2e] dark:text-white font-headline tracking-tighter">
                {t('cart.title')}
              </h1>
              <span className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-widest">{i18n.language === 'fa' ? e2p(items.length) : items.length} Items</span>
            </div>

            {items.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-xl font-bold text-muted-foreground">سبد خرید شما خالی است.</p>
                <Link href="/products" className="text-primary font-black mt-4 inline-block underline">بازگشت به فروشگاه</Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.id} className="group flex flex-col md:flex-row gap-8 p-8 bg-[#f2f3ff] dark:bg-[#131b2e] rounded-[2.5rem] border border-transparent hover:border-primary/10 transition-all hover:shadow-2xl hover:shadow-primary/5">
                    <div className="relative w-full md:w-48 aspect-square bg-[#eaedff] dark:bg-[#1a2236] rounded-3xl overflow-hidden shadow-inner">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-black text-[#131b2e] dark:text-white mb-2 font-headline">{item.title}</h3>
                          <p className="text-muted-foreground text-sm font-sans font-medium">Edition: 2024 Modernist</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-[#1a2236] text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm"
                        >
                          <Trash2 className="size-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-8">
                        <div className="flex items-center gap-6 bg-white dark:bg-[#1a2236] px-6 py-3 rounded-2xl shadow-sm border border-border/20">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-primary hover:scale-125 transition-transform"><Minus className="size-4" /></button>
                          <span className="font-black text-lg w-4 text-center">{i18n.language === 'fa' ? e2p(item.quantity) : item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-primary hover:scale-125 transition-transform"><Plus className="size-4" /></button>
                        </div>
                        <span className="text-2xl font-black text-primary font-headline">{formatPrice(item.price, i18n.language)} {t('shop.flash_sale.currency')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Coupons Section */}
            <div className="mt-12 p-10 bg-[#eaedff] dark:bg-[#1a2236] rounded-[3rem] border border-primary/5">
              <h4 className="text-xl font-black text-[#131b2e] dark:text-white mb-6 flex items-center gap-3 font-headline">
                <Tag className="size-6 text-primary" />
                کد تخفیف دارید؟
              </h4>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="کد تخفیف را وارد کنید..." 
                  className="flex-1 bg-white dark:bg-[#0b0e14] border-none rounded-2xl px-6 h-16 font-bold focus:ring-2 ring-primary/20 transition-all shadow-sm"
                />
                <Button className="h-16 px-10 rounded-2xl font-black text-lg shadow-xl shadow-primary/10">اعمال</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-[#131b2e] dark:bg-[#0b0e14] text-white p-10 rounded-[3rem] shadow-2xl shadow-primary/20 border border-white/5">
              <h2 className="text-3xl font-black mb-10 font-headline tracking-tighter">{t('cart.summary_title')}</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-white/60 font-medium font-sans">
                  <span className="text-xs uppercase tracking-widest">{t('cart.subtotal')}</span>
                  <span className="text-lg font-bold">{formatPrice(subtotal, i18n.language)} {t('shop.flash_sale.currency')}</span>
                </div>
                <div className="flex justify-between text-white/60 font-medium font-sans">
                  <span className="text-xs uppercase tracking-widest">{t('cart.shipping')}</span>
                  <span className="text-lg font-bold text-primary-foreground">{t('cart.free')}</span>
                </div>
                <div className="h-[1px] bg-white/10 w-full" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-black uppercase tracking-[0.2em]">{t('cart.total')}</span>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-black text-primary-foreground font-headline tracking-tighter">
                      {formatPrice(subtotal, i18n.language)}
                    </span>
                    <span className="text-[10px] font-bold text-white/40">{t('shop.flash_sale.currency')}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-20 rounded-2xl font-black text-xl bg-white text-[#131b2e] hover:bg-[#eaedff] transition-all shadow-2xl flex items-center justify-center gap-4 group">
                {t('cart.checkout')}
                <ArrowRight className="size-6 group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
              </Button>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck className="size-4" />
                پرداخت امن و تضمین شده
              </div>
            </div>

            {/* Suggested Mini Section */}
            <div className="mt-8 p-8 bg-[#f2f3ff] dark:bg-[#131b2e] rounded-[2.5rem] border border-border/20">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Recommended</span>
              <div className="flex flex-col gap-6">
                {suggestedItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="size-16 relative rounded-xl overflow-hidden bg-white">
                      <Image src={item.img} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-[#131b2e] dark:text-white group-hover:text-primary transition-colors">{item.title}</h5>
                      <span className="text-[10px] font-bold text-primary">{formatPrice(item.price, i18n.language)} {t('shop.flash_sale.currency')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSections>
    </main>
  );
}
