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
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfenIH71hNmostlAohFM1BjeG8Venq0DPIximL8P2toB4LEu6qTLkthSiIyQs2zvDCdtHl_2owZ4WNqcs2QWeh3TSh80LP0pZL23EJ76l--jo4oIfe6f1sIWAfnRxuU8ULvAQI-GgimwZNbExsIt5oFo_Oni_SUw_944Q0okwMTngHD-717L_iNtc5gVpH42RQVJiQ5IyK9NhZtU9Ysat5afKWOg2WOqMYfP3D3aKg3cxGqeCex0f93sNzxYI095B1csviKHiWie0",
    contentImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7XB0AcBF6aHqevmDfqJcrAwuS073Un_KYUraHu_xMoRSA9zgZ3ELQ8r1X19NQcEVFE8lPfVJnBxQlBMTw_9D3b8ig1q8y-fowN4WN25OM12FbZ3UpHPz4v4qwAaLK3VtKWo6kTyVJ5jt34C58XpZsj7jl1_1y30EA60dqxfwo1-GEvTeXm3LeubBG1Wx5T7EnALFgrc4uzYlDJlXrEBKH_sJ4O6pVl3mq9w2gjKXSkPSuyUWyK1dBWfqn3OYVzjK4wDAUmCbCj4"
  };

  const relatedArticles = [
    { title: 'تاثیر باوهاوس بر معماری معاصر ایران', category: 'editorial', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9KcaMfiiLxSgOaOetFOOHeWwWCDbI2LnrtMIsSC-Mgtr0VToYcqMFqve0rNfDqB_K3L1-h_RihLf-Z0yUp_X729HbF9QKuXi1_REd_C1zjc0TxW4fm2tJraxCFQMw_tG5p0G-ecMBnZQdp5RSdetcRrT_95U_Sq7BERTn7dfD7dZsqdM6VbG-6mGzJzjCK5RKqdD3SM20SEjaGzPSi5K8VqJB56MoE5nnhavvLqKchDLFu4rFVo0k2P1XykKZgIv91uZ0O3Ag0L0' },
    { title: 'سنت خوشنویسی در عصر دیجیتال', category: 'curation', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjcoxP2SNgQ7K44FAAMVU44mp8rnyew1IVdeIqbjt7lYzx9AY8DCVntWy9TdwnxoFvofq4KdGckFRsS8kpZNGe5y_Qdp9Gvttj3hKxozdlL2Tsp9D3eq_qwLCpavIczU7iJHone4OeuNpih7yjwbCUSPdd8llRlFbChwYMK-YirdfsTDDrGL8kqrZBfGnbRztOCfgMduVUxyvVhU3jqPaimXUxLDfVys2iQpT6fKU7-W21bRXYGxhrLo7ov5dmywJQtZjY2J8lPiI' },
    { title: 'چگونه یک کلکسیون هنری بسازیم؟', category: 'archive', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKg53T1tZT3IESl48Iag75Bp8RYwxf15-oceKoA7iaOzviwtpCCfPY0SyNiWW5NNUL9HPvyOj38I8uMLfs101qOcg_A25-yq9ZEpg9-2gqpA3Frau24rWzAY9ZDayY-B-8xodvD2EbMNhSm0FvFxovrxhFWuS8iOerksSQDRDAX-yECd7BGmBvdt79m9IlieG2ie9HsfYJBIvXE8u5zoNUG94McmWfc2KGmCy01feoHKUM1tcFMLfjHdccnbqDtXyAIDIFrNZnjxo' },
  ];

  return (
    <main className="min-h-screen bg-[#faf8ff] dark:bg-[#0b0e14]">
      <AnimatedSections>
        {/* Editorial Hero Section */}
        <header className="relative w-full h-[716px] overflow-hidden bg-[#f2f3ff] dark:bg-[#131b2e]">
          <Image
            src={article.heroImg}
            alt="Hero"
            fill
            className="object-cover opacity-90 transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 via-[#131b2e]/20 to-transparent flex items-end">
            <div className="max-w-screen-xl mx-auto px-12 pb-24 w-full">
              <div className="flex flex-col gap-8 max-w-4xl">
                <span className="text-[#c3c0ff] dark:text-[#a9a7ff] font-bold tracking-[0.3em] text-sm uppercase">
                  {t(`shop.journal_page.categories.${article.category}`)} • {t('shop.journal_page.details.entry', { id: article.id })}
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] font-headline">
                  {article.title}
                </h1>
                <div className="flex items-center gap-6 text-[#e2e7ff] text-lg font-headline">
                  <div className="flex items-center gap-2">
                    <User className="size-5 text-[#c3c0ff]" />
                    <span className="font-bold">{t('shop.journal_page.details.author', { name: article.author })}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#c3c0ff]"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-[#c3c0ff]" />
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
              <div className="p-10 bg-[#f2f3ff] dark:bg-[#131b2e] rounded-3xl border-r-8 border-[#1f108e] shadow-sm">
                <h4 className="text-[#1f108e] dark:text-white font-black mb-6 text-xl font-headline">
                  {t('shop.journal_page.details.in_this_article')}
                </h4>
                <ul className="space-y-5 text-[#505f76] dark:text-[#c8c4d5] text-lg font-headline">
                  <li className="hover:text-[#1f108e] dark:hover:text-white cursor-pointer transition-colors flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-primary" />
                    ریشههای طراحی مینیمال
                  </li>
                  <li className="hover:text-[#1f108e] dark:hover:text-white cursor-pointer transition-colors flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-primary" />
                    تاثیر تایپوگرافی بر درک بصری
                  </li>
                  <li className="hover:text-[#1f108e] dark:hover:text-white cursor-pointer transition-colors flex items-center gap-3">
                    <div className="size-1.5 rounded-full bg-primary" />
                    آینده آرشیوهای دیجیتال
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 px-4">
                <span className="text-xs font-black text-[#777584] uppercase tracking-[0.2em]">
                  {t('shop.journal_page.details.share_title')}
                </span>
                <div className="flex gap-4">
                  <button className="size-14 rounded-2xl bg-white dark:bg-[#131b2e] flex items-center justify-center text-[#1f108e] dark:text-white hover:bg-[#1f108e] hover:text-white transition-all shadow-sm">
                    <Share2 className="size-6" />
                  </button>
                  <button className="size-14 rounded-2xl bg-white dark:bg-[#131b2e] flex items-center justify-center text-[#1f108e] dark:text-white hover:bg-[#1f108e] hover:text-white transition-all shadow-sm">
                    <Bookmark className="size-6" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Body Text */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            <div className="text-3xl md:text-4xl text-[#131b2e] dark:text-white font-light leading-relaxed font-headline text-justify">
              در دنیای پرشتاب امروز، مفهوم آرشیو از یک انبار خاکگرفته به یک نهاد زنده و پویا تبدیل شده است. ما در این نوشتار به بررسی این موضوع میپردازیم که چگونه مدرنیسم ایرانی توانسته است پلی میان سنتهای خوشنویسی و نیازهای دیجیتال امروز برقرار کند.
            </div>

            <div className="text-xl text-[#464553] dark:text-[#c8c4d5] leading-[2] font-headline text-justify space-y-8">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
              </p>

              <figure className="my-20 py-12 bg-[#f2f3ff] dark:bg-[#131b2e] rounded-3xl relative overflow-hidden group">
                <div className="relative aspect-video mx-12 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src={article.contentImg} alt="Content" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <figcaption className="mt-8 px-12 text-sm text-[#505f76] dark:text-[#c8c4d5] italic text-center font-headline">
                  تصویر ۱: تجسم حرکت رنگ در فضای خالی؛ الهامبخش طراحی مینیمالیست.
                </figcaption>
              </figure>

              <h2 className="text-4xl font-black text-[#131b2e] dark:text-white pt-12 font-headline leading-tight">بازگشت به ریشهها</h2>
              <p>
                تایپوگرافی نه تنها ابزاری برای انتقال معنا، بلکه فرمی از هنر است که در اعماق تاریخ ما ریشه دارد. استفاده از خطوط نستعلیق در محیطهای رابط کاربری مدرن، چالشی است که طراحان معاصر با آن روبرو هستند. ما در "آرشیو" تلاش میکنیم تا این فاصله را با استفاده از استانداردهای جدید وب و بهینهسازی فونتهای فارسی کاهش دهیم.
              </p>

              <div className="bg-[#3730a3] dark:bg-[#1f108e] p-16 my-20 rounded-[3rem] text-white relative shadow-2xl shadow-indigo-900/20">
                <Quote className="size-20 text-white/20 absolute top-8 right-8" />
                <blockquote className="text-3xl md:text-4xl font-black leading-loose italic relative z-10 font-headline">
                  "طراحی خوب نه تنها دیده میشود، بلکه احساس میشود. آرشیو مجموعهای از احساسات ثبت شده در قالب فرم و رنگ است."
                </blockquote>
                <p className="mt-8 font-black text-xl text-[#c3c0ff]">— مرتضی ممیز</p>
              </div>

              <p>
                در نهایت، هدف ما از گردآوری این مجموعه، ایجاد فضایی برای تفکر و بازنگری در داشتههای فرهنگی است. هر قطعه در این آرشیو، داستانی برای گفتن دارد و هر مقاله، دریچهای به سوی درکی عمیقتر از زیباییشناسی مدرن است.
              </p>
            </div>

            {/* Sharing Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="flex items-center justify-center gap-3 bg-white dark:bg-[#131b2e] py-6 rounded-2xl text-[#131b2e] dark:text-white font-black hover:bg-[#eaedff] dark:hover:bg-[#1f108e] transition-all shadow-sm group">
                <Copy className="size-5 transition-transform group-active:scale-90" />
                <span className="font-headline">{t('shop.journal_page.details.copy_link')}</span>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white dark:bg-[#131b2e] py-6 rounded-2xl text-[#131b2e] dark:text-white font-black hover:bg-[#eaedff] dark:hover:bg-[#1f108e] transition-all shadow-sm group">
                <Mail className="size-5 transition-transform group-active:scale-90" />
                <span className="font-headline">{t('shop.journal_page.details.send_email')}</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="bg-[#f2f3ff] dark:bg-[#131b2e] py-32 mt-20">
          <div className="max-w-screen-xl mx-auto px-12">
            <div className="flex justify-between items-end mb-20">
              <div className="space-y-4">
                <span className="text-[#511c00] dark:text-[#fe9562] font-black tracking-[0.3em] uppercase text-sm">
                  {t('shop.journal_page.details.recommended')}
                </span>
                <h3 className="text-5xl font-black text-[#131b2e] dark:text-white font-headline">
                  {t('shop.journal_page.details.related')}
                </h3>
              </div>
              <Link href="/news" className="text-[#1f108e] dark:text-white font-black border-b-4 border-[#1f108e]/20 hover:border-primary transition-all pb-2 text-lg">
                {t('shop.journal_page.details.back_to_journal')}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {relatedArticles.map((article, i) => (
                <Link key={i} href={`/news/${i}`} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-white dark:bg-[#0b0e14] mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <Image src={article.img} alt="Related" width={600} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <span className="text-[#505f76] dark:text-[#c8c4d5] text-sm font-bold mb-4 block uppercase tracking-wide">
                    {t(`shop.journal_page.categories.${article.category}`)}
                  </span>
                  <h4 className="text-2xl font-black text-[#131b2e] dark:text-white group-hover:text-primary transition-colors font-headline leading-tight">{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSections>
    </main>
  );
}
