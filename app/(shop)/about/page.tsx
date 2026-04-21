"use client";

import Image from "next/image";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Diamond, Flower2, Hourglass } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Card, CardContent } from "@/src/share-components/atoms/card";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="flex-grow flex flex-col pt-24 pb-32 px-6 max-w-screen-xl mx-auto w-full gap-16 md:gap-24">
      <AnimatedSections className="space-y-16 md:space-y-24">
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6 md:pl-12">
          <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight font-headline">
            {t('about_page.title_top')}<br />
            <span className="text-muted-foreground font-light">{t('about_page.title_bottom')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
            {t('about_page.desc')}
          </p>
          <div className="pt-4">
            <Button size="lg" className="rounded-xl font-bold shadow-lg shadow-primary/20 h-14 px-10 text-lg">
              {t('about_page.mission')}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-[2.5rem] transform translate-x-6 translate-y-6 -z-10 blur-2xl"></div>
          <Card className="border-none overflow-hidden rounded-[2.5rem] shadow-2xl relative">
            <Image 
              src="https://picsum.photos/seed/about/800/1000" 
              alt={t('about_page.gallery_alt')} 
              width={800} 
              height={1000} 
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000" 
              referrerPolicy="no-referrer" 
            />
          </Card>
        </div>
      </section>

      <section className="space-y-16">
        <h2 className="text-4xl font-black text-primary text-center font-headline uppercase tracking-[0.2em]">{t('about_page.values_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Diamond, title: t('about_page.value1_title'), desc: t('about_page.value1_desc')},
            { icon: Flower2, title: t('about_page.value2_title'), desc: t('about_page.value2_desc')},
            { icon: Hourglass, title: t('about_page.value3_title'), desc: t('about_page.value3_desc')}
          ].map((v, i) => (
            <Card key={i} className="rounded-[2.5rem] border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-card group p-2">
              <CardContent className="p-10 flex flex-col gap-8 items-start relative overflow-hidden">
                <div className="p-5 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground shadow-sm transition-all duration-500">
                  <v.icon className="size-10 stroke-[1.5px]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-foreground font-headline leading-tight">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans text-lg">{v.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </AnimatedSections>
    </main>
  );
}
