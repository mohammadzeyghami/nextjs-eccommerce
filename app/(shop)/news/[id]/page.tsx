"use client";

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowLeft,
  Share2,
  Bookmark,
  Copy,
  Mail,
  User,
  Calendar,
  Quote
} from "lucide-react";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NewsDetailPage() {
  const { t } = useTranslation();
  const params = useParams();

  const article = {
    id: params.id,
    title: "هنر مدرنیسم در قرن جدید: بازنگری در آرشیو",
    author: "علیرضا پارسا",
    date: "۱۴ مهر ۱۴۰۳",
    category: "journal",
    heroImg: "/images/news-banner.png",
    contentImg: "/images/news-content.png"
  };

  const relatedArticles = [
    { title: 'تاثیر باوهاوس بر معماری معاصر ایران', category: 'editorial', img: '/images/news-2.png' },
    { title: 'سنت خوشنویسی در عصر دیجیتال', category: 'curation', img: '/images/news-1.png' },
    { title: 'چگونه یک کلکسیون هنری بسازیم؟', category: 'archive', img: '/images/news-3.png' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <AnimatedSections>
        {/* Editorial Hero Section */}
        <header className="relative w-full h-[716px] overflow-hidden bg-muted/20">
          <Image
            src={article.heroImg}
            alt="Hero"
            fill
            className="object-cover opacity-90 transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
            <div className="max-w-screen-xl mx-auto px-12 pb-24 w-full">
              <div className="flex flex-col gap-8 max-w-4xl">
                <span className="text-primary-foreground/80 font-bold tracking-[0.3em] text-sm uppercase">
                  {t(`shop.journal_page.categories.${article.category}`)} • {t('shop.journal_page.details.entry', { id: article.id })}
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] font-headline">
                  {article.title}
                </h1>
                <div className="flex items-center gap-6 text-white/80 text-lg font-headline">
                  <div className="flex items-center gap-2">
                    <User className="size-5 text-primary-foreground/60" />
                    <span className="font-bold">{t('shop.journal_page.details.author', { name: article.author })}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary-foreground/40"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-primary-foreground/60" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content Canvas */}
        <article className="max-w-screen-xl mx-auto px-12 py-32 grid grid-cols-12 gap-20">
          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-3 space-y-16">
            <div className="sticky top-40 space-y-12">
              <div className="p-10 bg-card rounded-3xl border-r-8 border-primary shadow-sm border border-border/50">
                <h4 className="text-primary font-black mb-6 text-xl font-headline">
                  {t('shop.journal_page.details.in_this_article')}
                </h4>
                <ul className="space-y-5 text-muted-foreground text-lg font-headline">
                  <li className="hover:text-primary cursor-pointer transition-colors flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-primary" />
                    ریشههای طراحی مینیمال
                  </li>
                  <li className="hover:text-primary cursor-pointer transition-colors flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-primary" />
                    تاثیر تایپوگرافی بر درک بصری
                  </li>
                  <li className="hover:text-primary cursor-pointer transition-colors flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-primary" />
                    آینده آرشیوهای دیجیتال
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 px-4">
                <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">
                  {t('shop.journal_page.details.share_title')}
                </span>
                <div className="flex gap-4">
                  <button className="size-14 rounded-2xl bg-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm border border-border/50">
                    <Share2 className="size-6" />
                  </button>
                  <button className="size-14 rounded-2xl bg-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm border border-border/50">
                    <Bookmark className="size-6" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Body Text */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            <div className="text-3xl md:text-4xl text-foreground font-light leading-relaxed font-headline text-justify">
              در دنیای پرشتاب امروز، مفهوم آرشیو از یک انبار خاکگرفته به یک نهاد زنده و پویا تبدیل شده است. ما در این نوشتار به بررسی این موضوع میپردازیم که چگونه مدرنیسم ایرانی توانسته است پلی میان سنتهای خوشنویسی و نیازهای دیجیتال امروز برقرار کند.
            </div>

            <div className="text-xl text-foreground/80 leading-[2] font-headline text-justify space-y-8">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
              </p>

              <figure className="my-20 py-12 bg-muted/30 rounded-3xl relative overflow-hidden group border border-border/50">
                <div className="relative aspect-video mx-12 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={article.contentImg} alt="Content" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <figcaption className="mt-8 px-12 text-sm text-muted-foreground italic text-center font-headline">
                  تصویر ۱: تجسم حرکت رنگ در فضای خالی؛ الهامبخش طراحی مینیمالیست.
                </figcaption>
              </figure>

              <h2 className="text-4xl font-black text-foreground pt-12 font-headline leading-tight">بازگشت به ریشهها</h2>
              <p>
                تایپوگرافی نه تنها ابزاری برای انتقال معنا، بلکه فرمی از هنر است که در اعماق تاریخ ما ریشه دارد. استفاده از خطوط نستعلیق در محیطهای رابط کاربری مدرن، چالشی است که طراحان معاصر با آن روبرو هستند. ما در "آرشیو" تلاش میکنیم تا این فاصله را با استفاده از استانداردهای جدید وب و بهینهسازی فونتهای فارسی کاهش دهیم.
              </p>

              <div className="bg-primary p-16 my-20 rounded-[3rem] text-primary-foreground relative shadow-2xl shadow-primary/20">
                <Quote className="size-20 text-primary-foreground/20 absolute top-8 right-8" />
                <blockquote className="text-3xl md:text-4xl font-black leading-loose italic relative z-10 font-headline">
                  "طراحی خوب نه تنها دیده میشود، بلکه احساس میشود. آرشیو مجموعهای از احساسات ثبت شده در قالب فرم و رنگ است."
                </blockquote>
                <p className="mt-8 font-black text-xl text-primary-foreground/70">— مرتضی ممیز</p>
              </div>

              <p>
                در نهایت، هدف ما از گردآوری این مجموعه، ایجاد فضایی برای تفکر و بازنگری در داشتههای فرهنگی است. هر قطعه در این آرشیو، داستانی برای گفتن دارد و هر مقاله، دریچهای به سوی درکی عمیقتر از زیباییشناسی مدرن است.
              </p>
            </div>

            {/* Sharing Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="flex items-center justify-center gap-3 bg-card py-6 rounded-2xl text-card-foreground font-black hover:bg-accent transition-all shadow-sm border border-border/50 group">
                <Copy className="size-5 transition-transform group-active:scale-90" />
                <span className="font-headline">{t('shop.journal_page.details.copy_link')}</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-card py-6 rounded-2xl text-card-foreground font-black hover:bg-accent transition-all shadow-sm border border-border/50 group">
                <Mail className="size-5 transition-transform group-active:scale-90" />
                <span className="font-headline">{t('shop.journal_page.details.send_email')}</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="bg-muted/30 py-32 mt-20 border-t border-border/50">
          <div className="max-w-screen-xl mx-auto px-12">
            <div className="flex justify-between items-end mb-20">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-sm">
                  {t('shop.journal_page.details.recommended')}
                </span>
                <h3 className="text-5xl font-black text-foreground font-headline">
                  {t('shop.journal_page.details.related')}
                </h3>
              </div>
              <Link href="/news" className="text-primary font-black border-b-4 border-primary/20 hover:border-primary transition-all pb-2 text-lg">
                {t('shop.journal_page.details.back_to_journal')}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {relatedArticles.map((article, i) => (
                <Link key={i} href={`/news/${i}`} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-card mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-border/50">
                    <Image src={article.img} alt="Related" width={600} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <span className="text-muted-foreground text-sm font-bold mb-4 block uppercase tracking-wide">
                    {t(`shop.journal_page.categories.${article.category}`)}
                  </span>
                  <h4 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors font-headline leading-tight">{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSections>
    </main>
  );
}
