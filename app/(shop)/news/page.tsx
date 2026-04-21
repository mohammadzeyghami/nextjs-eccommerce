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
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQFHKrKVscC4o0gR2r1LLBJdHWIRLzZbVK_knBZ8b7ZYYBwx6PSmYQB9c6qQLqFOwVLMusBn8CSKc_YV4hUiHB_IAc0L1U35pD_K8SL36LyPZvTGMiGnEV50BJumylhXR6ed_fAj29w-FqJx2MNNrXFUqiKniZ0VjdnzwkVjtlYYEuk4uoIGHWlyro8wtFdwab3d8UqT8MgpBkjFSHVDBcL2orv8d3ZHMXnan6zuaXHNBLv-ydV98fdnnICCHpGTo1uc-B_lgEgRo',
      highlight: false
    },
    {
      id: '2',
      category: 'Archive',
      title: 'آرشیو گمشده: عکسهای نایاب از باوهاوس',
      excerpt: 'داستان کشف نگاتیوهایی که تاریخ مدرنیسم را دوباره تعریف میکنند. نوری تازه بر زوایای تاریک تاریخ هنر.',
      readTime: '۱۲',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRKeiRZaIQyGT-3KRnW_FVXtObkVr2TmQtvDube5XRxZV2dCl4qEetGchoi5l96fsh4GDPfH1MjYn-smeeA-S3SydoWAT-aXyPbkKCIyxvZWqrbGZ-PvXxCMeyx-52fzm4SgMj2boVNykH4j_J85MV_c6iNeYb8e7NlG9gErm3PzU1fmWHmehQ8Af0vKPsqAzw2Ae7lzY2RPSxjpI5ULoVgAmBqZ91zM856AYZkDd-rTxZMfxHn669fWsfS02oN8EnE8ig6g5v7Co',
      highlight: true
    },
    {
      id: '3',
      category: 'Journal',
      title: 'فرم و عملکرد در اشیاء روزمره',
      excerpt: 'چرا هنوز صندلیهای طراحی شده در دهه ۶۰ میلادی راحتترین و زیباترین گزینهها برای خانههای مدرن هستند؟',
      readTime: '۴',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDik2ZM41VS-G-f9Gj7nen-ma5BI-U8zviaDxQmxBXoeOzqH7naIv4ZsipgGAyHcCJ24BbeSAOQwIBccMnjqifLY_t04w8SV41qzrgZPS8XrAJRfip2VUkRcbDlGLNyX0CHVIPVP4-VEQtAIQAjfDntJP_8s95z2Ti2yBD0bwuRvUgqPHSTjJjMxRVcoktRf5Y3lpeG8KS6tUSWwgOq6vps4HI_-9wB03YffgET09v6-EPEKUUWvS0MTbB9G-2x1sBv4X4luUKJWII',
      highlight: false
    }
  ];

  return (
    <main className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24 bg-[#faf8ff] dark:bg-[#0b0e14]">
      <AnimatedSections>
        {/* Editorial Header Section */}
        <header className="mb-20 flex flex-col items-center text-center">
          <span className="text-[#505f76] dark:text-[#c8c4d5] font-sans tracking-[0.2em] text-sm mb-4 uppercase">
            {t('shop.journal_page.curator')}
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-[#1f108e] dark:text-white tracking-tighter mb-8 font-sans uppercase">
            {t('shop.journal_page.the_journal')}
          </h1>
          <div className="w-24 h-1.5 bg-[#1f108e] dark:bg-white mb-12"></div>
          <p className="max-w-2xl text-lg text-[#131b2e]/70 dark:text-white/70 font-light leading-relaxed font-headline">
            {t('shop.journal_page.desc')}
          </p>
        </header>

        {/* Featured Article */}
        <section className="mb-32">
          <Link href="/news/featured" className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-white dark:bg-[#131b2e] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="lg:col-span-7 relative h-[400px] md:h-[600px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANJo2TV54L9KNS1PDG9qQFxXyLIPR86l0PRiLiCnsGDJHYL9aUs-5QjGsX1-ZBPzs8WMlFNLWD8uMw1_jVjHUBrSgZkJVZ2X0BRYXIqjTgRgw-wUlb7e4oWMBCsOJe_sL1wffOWbeJNqesBpTZlTigpIF-elbGj9nXM167pQ7na2sJnweAoJL0CKPB954sgM1Y6dZNuvg9ziZOSr1CEJOGBsDbhP-o_qJcyU8WB6N5priqfJR9zTaWd8HlHo4OSSZnGGta7wykq9g"
                  alt="Featured"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-16">
                <span className="text-[#511c00] dark:text-[#fe9562] font-bold tracking-widest text-xs mb-6 uppercase">
                  {t('shop.journal_page.categories.editorial')} • ۱۵ خرداد ۱۴۰۳
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#1f108e] dark:text-white mb-8 leading-[1.2] font-headline group-hover:text-primary transition-colors">احیای مدرنیسم: چگونه سادگی دوباره جهان را تسخیر کرد</h2>
                <p className="text-[#131b2e]/60 dark:text-white/60 mb-10 text-lg leading-loose font-headline">
                  در دنیای پرهیاهوی امروز، بازگشت به اصول اولیه طراحی و معماری نه یک انتخاب، بلکه یک ضرورت است. ما در این شماره به بررسی چرایی ماندگاری فرمهای خالص میپردازیم.
                </p>
                <div className="inline-flex items-center gap-3 text-[#1f108e] dark:text-white font-bold group-hover:gap-5 transition-all">
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
                ? "bg-[#1f108e] text-white shadow-xl shadow-primary/20"
                : "bg-white dark:bg-[#131b2e] text-[#131b2e] dark:text-white hover:bg-[#eaedff] dark:hover:bg-[#1f108e]"
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
                "rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500",
                article.highlight
                  ? "bg-[#eaedff] dark:bg-[#1f108e] lg:scale-105 z-10 shadow-xl shadow-primary/10"
                  : "bg-white dark:bg-[#131b2e] hover:shadow-2xl"
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
                    article.highlight ? "text-[#511c00] dark:text-[#fe9562]" : "text-[#505f76] dark:text-[#c8c4d5]"
                  )}>
                    {t(`shop.journal_page.categories.${article.category.toLowerCase()}`)}
                  </span>
                  <h3 className="text-2xl font-black text-[#131b2e] dark:text-white mb-4 group-hover:text-primary transition-colors leading-snug font-headline">
                    {article.title}
                  </h3>
                  <p className="text-[#131b2e]/60 dark:text-white/60 text-sm mb-10 line-clamp-3 font-headline leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-8 flex justify-between items-center border-t border-black/5 dark:border-white/5">
                    <span className="text-[#777584] dark:text-[#c8c4d5] text-xs font-bold uppercase tracking-tighter">
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
          <button className="bg-[#1f108e] text-white px-16 py-6 rounded-2xl font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl shadow-primary/20">
            {t('shop.journal_page.load_more')}
          </button>
        </div>
      </AnimatedSections>

      {/* Newsletter Section */}
      <section className="mt-32 bg-[#eaedff] dark:bg-[#131b2e] rounded-[3rem] py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-screen-md mx-auto relative z-10">
          <h3 className="text-4xl font-black text-[#1f108e] dark:text-white mb-6 font-headline">
            {t('shop.journal_page.newsletter.title')}
          </h3>
          <p className="text-[#131b2e]/70 dark:text-white/70 mb-12 text-lg font-headline leading-relaxed">
            {t('shop.journal_page.newsletter.desc')}
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-grow bg-white dark:bg-[#0b0e14] border-none rounded-2xl px-8 py-5 focus:ring-4 focus:ring-primary/20 text-[#131b2e] dark:text-white text-lg transition-all"
              placeholder={t('shop.journal_page.newsletter.placeholder')}
              type="email"
            />
            <button className="bg-[#131b2e] dark:bg-white text-white dark:text-[#131b2e] px-12 py-5 rounded-2xl font-black text-lg hover:bg-primary dark:hover:bg-[#eaedff] transition-all shadow-xl" type="submit">
              {t('shop.journal_page.newsletter.submit')}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
