"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { 
  ChevronLeft, 
  Star, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  Heart, 
  ArrowLeft,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { useCartStore } from "@/store/useCartStore";
import { useParams } from "next/navigation";
import { cn, formatPrice, e2p } from "@/lib/utils";

export default function ProductDetailPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  const product = {
    id: params.id as string || 'fs-1',
    title: "Studio Headphones Pro",
    price: 12500000,
    oldPrice: 14000000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOH2d9Vs2wvCBQxGUISdeVOLuR5tGkU_RK38cFJ84xELTJ_OR9xFICcoinbrJo-RYzBMvYM972i9xAkVx0tE7LdxGC8g7SP-tl_WMD8-1K0hKfEETjkSRDEzsaRFGKpUVaVwEe0Y-Ca2ycUAyboYAYLVIuGlBrhfsZWCDdsU0BrwicHxYI_UllzbFQ93eEJ0okD9uy9dafA20Cbl986LOYHZjw3QSSdNMZ1rklYmLOWrGWGXsnqkElljQbw4tH4XZkfzZRwXzKsHw",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAmQrjLUG6Qx6hwcSZjdbZTP6BzL-YApuRVNFNs9hm6eI02mQINI06eI2WrA6PVfSySWbK3qIYZwjcfhg3TCgyv5RhUQJ_WBIdOuvXb8dNu-cNA7PEWtWRFGxt_nSwrz2-5AV3BjRuw_sSAo8Dl6TBXsTOfijByrcV_wY7sOJSjgpqrJ2BBm6LwdC_NAJv5bnDn6d4nzfCwBnxtPTKJ0QogmwB_NeJ4j7slyvV5T3cLdWbaJGJWBMtplblDhVgbZMzFmN5aAIme1E",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuUNeNXSe6V7ZT9epGh3txHGoTOzGutASEhCFE1lxbccp5siW6Ny8Kz9-P9ibpX0t2S1ZPbUHJ9uRu0d_MSs-4MtOmFVQ5iFN1gAJtf0JrjOA2T_yYgQvSow9UNZJlmcdB82f0yI_gETUoWywRcm2f8vN8Z1BDTquptEnz-xL2mzhhTy5Hi-uybZDpIk8Aop1WdX45ZE--Vb4R-oxm6gQkrKz4uQl5lzBXCrXmgc1tbkJA7yey5Sh9OtSGlRa5Cl2PUExdlZpOWmg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDts9qB4EO2QmKXn55h4S9EMrCfgx9WcHMA_MCYm4mnJMae2SyRaNHZjOxs-JBt_TjpTrx5wAv4U5xvEDFkkkH-XG1RVK5vx0_CpubEFDyYzBWhDZgeDIhS2CueBwyq6Pkul44THF9unD5PULpio7jzSXFDvvz2dRoxalYlYaVh0pcambpvT8o6-T_84sRngZZM2Jtvq6Sem17fol9sYuBNTVLCASe1f_kaAca1MwPr-OiAI5LK4nCyWcD97og6zcO49fZA3nVB-yI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD28grBPH1wh4WUF7mQaU5rkrSH1Cr1XlofjLfB7NPxnacR1Whf5q-eTyIwqksM6ibnr6WYLfevpb2nlKAjIiEF1DS2C9xlNeaAqw6qh80pK9rs94EOEnW-O4mWgqC77PD4iVDvb-GML5x_WGH5sUe4r2Ug4Zy37wY21cFATeS9JVp4qLAR0bls0nOn7tPZnfHGU_fIvWijSkCO7TWXZ9QucGj33rKOZpSuFOABAKblnh5DJIXpdTvsF4iCXYi-7BR3wVVXai6NwAc"
    ]
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }, quantity);
  };

  const relatedProducts = [
    { title: 'هدفون بیسیم AirTune X', price: 8900000, img: '/images/related_headphones_airtune.png' },
    { title: 'میکروفون استودیویی ProCast', price: 14200000, img: '/images/related_microphone_procast.png' },
    { title: 'آمپلیفایر هدفون مدل A2', price: 5800000, img: '/images/related_amplifier_a2.png' },
    { title: 'هدفون کلاسیک چوبی Archive', price: 21000000, img: '/images/related_wooden_headphones.png' },
  ];

  return (
    <main className="pt-28 pb-32 px-8 max-w-screen-2xl mx-auto bg-white dark:bg-[#0b0e14]">
      <AnimatedSections>
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
          <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
          <ChevronLeft className="size-4" />
          <Link href="/products" className="hover:text-primary transition-colors">دیجیتال</Link>
          <ChevronLeft className="size-4" />
          <Link href="/products" className="hover:text-primary transition-colors">صوتی</Link>
          <ChevronLeft className="size-4" />
          <span className="font-bold text-[#131b2e] dark:text-white">هدفونهای استودیویی</span>
        </nav>

        {/* Main Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            <div className="aspect-square bg-[#f2f3ff] dark:bg-[#131b2e] rounded-3xl overflow-hidden group relative shadow-inner">
              <Image 
                src={product.image} 
                alt={product.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.thumbnails.map((thumb, i) => (
                <div key={i} className={cn(
                  "aspect-square bg-[#f2f3ff] dark:bg-[#131b2e] rounded-2xl overflow-hidden cursor-pointer transition-all",
                  i === 0 ? "ring-2 ring-primary ring-offset-4" : "hover:opacity-80"
                )}>
                  <Image src={thumb} alt={`Thumbnail ${i}`} width={200} height={200} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Premium Audio</span>
              <h1 className="text-4xl lg:text-5xl font-black text-[#131b2e] dark:text-white mb-4 leading-tight font-headline">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center text-amber-500">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                  <Star className="size-4" />
                  <span className="mr-2 font-bold text-muted-foreground">({i18n.language === 'fa' ? e2p(128) : 128} نظر)</span>
                </div>
                <span className="text-border">|</span>
                <span className="text-muted-foreground font-sans">کد کالا: ARCH-7720</span>
              </div>
            </div>

            <div className="py-8 border-y border-border/40">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-primary font-headline">{formatPrice(product.price, i18n.language)}</span>
                <span className="text-lg font-bold text-muted-foreground">{t('shop.flash_sale.currency')}</span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 font-bold mt-3">موجود در انبار - آماده ارسال</p>
            </div>

            <div className="space-y-8">
              <div>
                <span className="block text-sm font-bold mb-5 uppercase tracking-widest text-[#131b2e] dark:text-white">انتخاب رنگ</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-slate-900 ring-2 ring-primary ring-offset-4 shadow-lg"></button>
                  <button className="w-10 h-10 rounded-full bg-slate-400 hover:scale-110 transition-transform shadow-md"></button>
                  <button className="w-10 h-10 rounded-full bg-indigo-700 hover:scale-110 transition-transform shadow-md"></button>
                </div>
              </div>

              <div className="flex items-end gap-6">
                <div className="w-40">
                  <span className="block text-sm font-bold mb-4 uppercase tracking-widest text-[#131b2e] dark:text-white">تعداد</span>
                  <div className="flex items-center justify-between bg-[#f2f3ff] dark:bg-[#131b2e] h-16 rounded-2xl px-6 border border-border/20">
                    <button 
                      onClick={() => setQuantity(q => q + 1)} 
                      className="text-primary hover:scale-125 transition-transform"
                    >
                      <Plus className="size-5" />
                    </button>
                    <span className="font-black text-xl w-6 text-center">{i18n.language === 'fa' ? e2p(quantity) : quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))} 
                      className="text-primary hover:scale-125 transition-transform"
                    >
                      <Minus className="size-5" />
                    </button>
                  </div>
                </div>
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 h-16 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <ShoppingCart className="size-6" />
                  افزودن به سبد خرید
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex items-center gap-4 p-5 bg-[#ffffff] dark:bg-[#131b2e] rounded-2xl border border-border/40 shadow-sm">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Truck className="size-6" />
                </div>
                <div className="text-xs">
                  <p className="font-black text-[#131b2e] dark:text-white mb-1">ارسال اکسپرس</p>
                  <p className="text-muted-foreground">{i18n.language === 'fa' ? e2p('24 to 48') : '24 to 48'} ساعت</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[#ffffff] dark:bg-[#131b2e] rounded-2xl border border-border/40 shadow-sm">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="size-6" />
                </div>
                <div className="text-xs">
                  <p className="font-black text-[#131b2e] dark:text-white mb-1">گارانتی اصالت</p>
                  <p className="text-muted-foreground">{i18n.language === 'fa' ? e2p(18) : 18} ماه آریا سرویس</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs Section */}
        <section className="mt-32">
          <div className="flex border-b border-border/20 gap-12 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('specs')}
              className={cn(
                "pb-6 font-black text-lg whitespace-nowrap transition-all relative",
                activeTab === 'specs' ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              مشخصات فنی
              {activeTab === 'specs' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
            </button>
            <button 
              onClick={() => setActiveTab('desc')}
              className={cn(
                "pb-6 font-black text-lg whitespace-nowrap transition-all relative",
                activeTab === 'desc' ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              توضیحات محصول
              {activeTab === 'desc' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={cn(
                "pb-6 font-black text-lg whitespace-nowrap transition-all relative",
                activeTab === 'reviews' ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              نظرات کاربران ({i18n.language === 'fa' ? e2p(128) : 128})
              {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
            </button>
          </div>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
              {[
                { label: 'پاسخ فرکانسی', value: '5Hz - 40,000Hz' },
                { label: 'امپدانس', value: '32 Ohms' },
                { label: 'نوع درایور', value: '45mm Dynamic' },
                { label: 'اتصال', value: 'Wired (3.5mm/6.3mm)' },
                { label: 'وزن', value: '285 گرم' },
                { label: 'طول کابل', value: '3 متر (فنری)' }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-[#f2f3ff] dark:border-[#131b2e]">
                  <span className="text-muted-foreground font-medium">{spec.label}</span>
                  <span className="font-black text-[#131b2e] dark:text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-[#131b2e] dark:text-white font-headline">محصولات مشابه</h2>
              <p className="text-muted-foreground mt-3 text-lg">بر اساس سلیقه و جستجوهای شما</p>
            </div>
            <Link href="/products" className="text-primary font-black flex items-center gap-2 hover:underline underline-offset-8 transition-all group">
              مشاهده همه
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {relatedProducts.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-[#f2f3ff] dark:bg-[#131b2e] rounded-[2rem] overflow-hidden mb-6 relative shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <button className="absolute top-6 right-6 size-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
                    <Heart className="size-6" />
                  </button>
                </div>
                <h3 className="font-black text-xl text-[#131b2e] dark:text-white mb-2 group-hover:text-primary transition-colors font-headline">{item.title}</h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-primary font-black text-lg">{formatPrice(item.price, i18n.language)} {t('shop.flash_sale.currency')}</span>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Premium</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSections>
    </main>
  );
}
