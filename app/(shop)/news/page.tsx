"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { cn } from "@/lib/utils";

export default function NewsPage() {
  const { t } = useTranslation();

  const articles = [
    {
      id: '1',
      category: 'Curation',
      title: 'ده طراح برتر که مرزهای دیجیتال را جابجا کردند',
      excerpt: 'نگاهی به آثار پیشرو در حوزه تایپوگرافی متحرک و تعاملات بصری در سال جاری میلادی.',
      readTime: '۶',
      img: '/images/news-1.png',
      highlight: false
    },
    {
      id: '2',
      category: 'Archive',
      title: 'آرشیو گمشده: عکسهای نایاب از باوهاوس',
      excerpt: 'داستان کشف نگاتیوهایی که تاریخ مدرنیسم را دوباره تعریف میکنند. نوری تازه بر زوایای تاریک تاریخ هنر.',
      readTime: '۱۲',
      img: '/images/news-2.png',
      highlight: true
    },
    {
      id: '3',
      category: 'Journal',
      title: 'فرم و عملکرد در اشیاء روزمره',
      excerpt: 'چرا هنوز صندلیهای طراحی شده در دهه ۶۰ میلادی راحتترین و زیباترین گزینهها برای خانههای مدرن هستند؟',
      readTime: '۴',
      img: '/images/news-3.png',
      highlight: false
    }
  ];

  return (
    <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24 bg-background">
      <AnimatedSections>
        {/* Editorial Header Section */}
        <header className="mb-20 flex flex-col items-center text-center">
          <span className="text-muted-foreground font-sans tracking-[0.2em] text-sm mb-4 uppercase">
            {t('shop.journal_page.curator')}
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-primary tracking-tighter mb-8 font-sans uppercase">
            {t('shop.journal_page.the_journal')}
          </h1>
          <div className="w-24 h-1.5 bg-primary mb-12"></div>
          <p className="max-w-2xl text-lg text-foreground/70 font-light leading-relaxed font-headline">
            {t('shop.journal_page.desc')}
          </p>
        </header>

        {/* Featured Article */}
        <section className="mb-32">
          <Link href="/news/featured" className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50">
              <div className="lg:col-span-7 relative h-[400px] md:h-[600px]">
                <Image
                  src="/images/news-banner.png"
                  alt="Featured"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-16">
                <span className="text-primary/70 font-bold tracking-widest text-xs mb-6 uppercase">
                  {t('shop.journal_page.categories.editorial')} • ۱۵ خرداد ۱۴۰۳
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 leading-[1.2] font-headline group-hover:opacity-80 transition-opacity">احیای مدرنیسم: چگونه سادگی دوباره جهان را تسخیر کرد</h2>
                <p className="text-muted-foreground mb-10 text-lg leading-loose font-headline">
                  در دنیای پرهیاهوی امروز، بازگشت به اصول اولیه طراحی و معماری نه یک انتخاب، بلکه یک ضرورت است. ما در این شماره به بررسی چرایی ماندگاری فرمهای خالص میپردازیم.
                </p>
                <div className="inline-flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all">
                  {t('shop.journal_page.read_article')}
                  <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-20 justify-center">
          {['all', 'editorial', 'curation', 'archive', 'journal'].map((catKey, i) => (
            <button key={i} className={cn(
              "px-10 py-4 rounded-full text-sm font-black transition-all",
              i === 0
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                : "bg-card text-card-foreground border border-border/50 hover:bg-accent"
            )}>
              {t(`shop.journal_page.categories.${catKey}`)}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Link key={article.id} href={`/news/${article.id}`} className="group flex flex-col h-full">
              <article className={cn(
                "rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 border border-border/50",
                article.highlight
                  ? "bg-primary/5 lg:scale-105 z-10 shadow-xl shadow-primary/10 border-primary/20"
                  : "bg-card hover:shadow-2xl"
              )}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <span className={cn(
                    "text-xs mb-4 uppercase tracking-widest font-black",
                    article.highlight ? "text-primary" : "text-muted-foreground"
                  )}>
                    {t(`shop.journal_page.categories.${article.category.toLowerCase()}`)}
                  </span>
                  <h3 className="text-2xl font-black text-card-foreground mb-4 group-hover:text-primary transition-colors leading-snug font-headline">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-10 line-clamp-3 font-headline leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-8 flex justify-between items-center border-t border-border">
                    <span className="text-muted-foreground text-xs font-bold uppercase tracking-tighter">
                      {t('shop.journal_page.read_time', { time: article.readTime })}
                    </span>
                    <ArrowLeft className="size-5 text-primary transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-32 text-center">
          <button className="bg-primary text-primary-foreground px-16 py-6 rounded-2xl font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl shadow-primary/20">
            {t('shop.journal_page.load_more')}
          </button>
        </div>
      </AnimatedSections>

      {/* Newsletter Section */}
      <section className="mt-32 bg-accent/50 rounded-[3rem] py-24 px-8 text-center relative overflow-hidden border border-border/50">
        <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-screen-md mx-auto relative z-10">
          <h3 className="text-4xl font-black text-primary mb-6 font-headline">
            {t('shop.journal_page.newsletter.title')}
          </h3>
          <p className="text-muted-foreground mb-12 text-lg font-headline leading-relaxed">
            {t('shop.journal_page.newsletter.desc')}
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-grow bg-background border border-border rounded-2xl px-8 py-5 focus:ring-4 focus:ring-primary/20 text-foreground text-lg transition-all"
              placeholder={t('shop.journal_page.newsletter.placeholder')}
              type="email"
            />
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-2xl font-black text-lg hover:opacity-90 transition-all shadow-xl" type="submit">
              {t('shop.journal_page.newsletter.submit')}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
