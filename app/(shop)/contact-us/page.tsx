"use client";

import React from 'react';
import { useTranslation } from "react-i18next";
import { 
  Phone, 
  Mail, 
  Share2, 
  MapPin, 
  Globe, 
  AtSign, 
  MessageCircle,
  Send
} from "lucide-react";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import Image from "next/image";

export default function ContactUsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      <AnimatedSections>
        {/* Hero Header */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-10" />
            <Image 
              src="/images/contact-hero.png"
              alt="Office"
              fill
              className="object-cover grayscale opacity-20"
              priority
            />
          </div>
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-primary tracking-tighter mb-6 font-headline uppercase">
              {t('contact_page.hero_title')}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed font-headline max-w-2xl mx-auto">
              {t('contact_page.hero_desc')}
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Form Side */}
            <div className="lg:col-span-7 bg-card rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-primary/5 border border-border/50">
              <div className="mb-12">
                <h2 className="text-3xl font-black text-primary mb-4 font-headline uppercase">
                  {t('contact_page.form_title')}
                </h2>
                <div className="w-16 h-1.5 bg-primary rounded-full" />
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-muted-foreground tracking-widest uppercase px-1">
                      {t('contact_page.full_name')}
                    </label>
                    <input 
                      className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 transition-all text-foreground outline-none text-lg"
                      placeholder={t('contact_page.full_name_placeholder')}
                      type="text"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-muted-foreground tracking-widest uppercase px-1">
                      {t('contact_page.email')}
                    </label>
                    <input 
                      className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 transition-all text-foreground outline-none text-lg text-right"
                      dir="ltr"
                      placeholder={t('contact_page.email_placeholder')}
                      type="email"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black text-muted-foreground tracking-widest uppercase px-1">
                    {t('contact_page.subject')}
                  </label>
                  <input 
                    className="w-full bg-background border border-border rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 transition-all text-foreground outline-none text-lg"
                    placeholder={t('contact_page.subject_placeholder')}
                    type="text"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-black text-muted-foreground tracking-widest uppercase px-1">
                    {t('contact_page.message')}
                  </label>
                  <textarea 
                    className="w-full bg-background border border-border rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 transition-all text-foreground outline-none text-lg resize-none"
                    placeholder={t('contact_page.message_placeholder')}
                    rows={6}
                  />
                </div>
                
                <button 
                  className="bg-primary text-primary-foreground font-black px-12 py-5 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] w-full md:w-auto text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                  type="submit"
                >
                  <Send className="size-5" />
                  {t('contact_page.submit')}
                </button>
              </form>
            </div>

            {/* Contact Info Side */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid grid-cols-1 gap-8">
                {/* Info Cards */}
                <div className="bg-primary/5 rounded-[2rem] p-10 flex items-start gap-8 border border-primary/10 transition-all hover:bg-primary/10">
                  <div className="bg-primary p-4 rounded-2xl text-primary-foreground shadow-lg shadow-primary/20">
                    <MapPin className="size-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary mb-3 font-headline uppercase">
                      {t('contact_page.headquarters')}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-headline">
                      {t('contact_page.address')}
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-[2rem] p-10 flex items-start gap-8 border border-border/50 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-accent p-4 rounded-2xl text-primary">
                    <Phone className="size-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground mb-3 font-headline uppercase">
                      {t('contact_page.phone')}
                    </h3>
                    <p className="text-muted-foreground font-sans text-xl" dir="ltr">
                      +۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸
                    </p>
                  </div>
                </div>

                <div className="bg-card rounded-[2rem] p-10 flex items-start gap-8 border border-border/50 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-accent p-4 rounded-2xl text-primary">
                    <Mail className="size-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-foreground mb-3 font-headline uppercase">
                      {t('contact_page.email')}
                    </h3>
                    <p className="text-muted-foreground font-sans text-xl" dir="ltr">
                      info@rastaarshop.ir
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative group overflow-hidden rounded-[2.5rem] h-80 bg-muted border border-border/50 shadow-2xl">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                <Image 
                  src="/images/contact-map.png"
                  alt="Map"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-background/90 backdrop-blur-md px-10 py-4 rounded-full shadow-2xl border border-border/50 group-hover:scale-110 transition-transform">
                    <span className="text-primary font-black text-lg uppercase tracking-widest">
                      {t('contact_page.show_map')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                {[Globe, Share2, AtSign, MessageCircle].map((Icon, i) => (
                  <button key={i} className="size-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
                    <Icon className="size-7 transition-transform group-active:scale-90" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Spacer */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </section>
      </AnimatedSections>
    </main>
  );
}
