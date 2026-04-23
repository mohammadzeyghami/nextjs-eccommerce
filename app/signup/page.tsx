"use client";

import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Mail, Lock, Globe, Eye, EyeOff, User, Smartphone, Verified, Truck, Apple } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Card, CardContent } from "@/src/share-components/atoms/card";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle";
import { LangToggle } from "@/src/share-components/molecules/lang-toggle";
import Image from "next/image";

export default function SignupPage() {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
        <div className="text-2xl font-black tracking-[0.2em] text-primary font-headline uppercase">
          {isMounted ? t('app_name') : 'رستارشاپ'}
        </div>
        <div className="flex items-center gap-8" suppressHydrationWarning>
          <Link href="/login" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            {t('login')}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-12 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

        <AnimatedSections className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-card rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-border/50">
          
          {/* Left Side: Visual/Branding (Hidden on mobile) */}
          <div className="hidden lg:flex relative bg-primary p-16 flex-col justify-between overflow-hidden group">
            {/* Abstract Decorative Background Image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <Image 
                src="/auth/signup-sidebar.png"
                alt="Background"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div className="relative z-10 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary-foreground text-5xl font-black leading-tight font-headline"
                dangerouslySetInnerHTML={{ __html: t('signup_hero_title') }}
              />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-primary-foreground/70 text-lg font-light leading-relaxed max-w-sm"
              >
                {t('signup_hero_desc')}
              </motion.p>
            </div>

            <div className="relative z-10 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 text-primary-foreground"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg group-hover:rotate-6 transition-transform">
                  <Verified className="size-7" />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest">{t('guaranteed_authenticity')}</p>
                  <p className="text-sm opacity-60">{t('authenticity_desc')}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 text-primary-foreground"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg group-hover:-rotate-6 transition-transform">
                  <Truck className="size-7" />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest">{t('exclusive_shipping')}</p>
                  <p className="text-sm opacity-60">{t('shipping_desc')}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className="p-8 lg:p-20 flex flex-col justify-center bg-card">
            <div className="mb-12 text-center lg:text-right">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-black text-primary mb-3 font-headline"
              >
                {t('create_account')}
              </motion.h2>
              <p className="text-muted-foreground font-medium text-sm tracking-wide">
                {t('signup_desc')}
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-black uppercase tracking-widest text-muted-foreground px-1">{t('full_name')}</label>
                  <div className="relative group/input">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                    <Input 
                      className="w-full h-14 pl-12 pr-6 bg-muted/20 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                      placeholder={t('full_name_placeholder')}
                      type="text"
                    />
                  </div>
                </div>
                {/* Mobile Number */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-black uppercase tracking-widest text-muted-foreground px-1">{t('mobile_number')}</label>
                  <div className="relative group/input">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                    <Input 
                      className="w-full h-14 pl-12 pr-6 bg-muted/20 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                      dir="ltr"
                      placeholder={t('mobile_placeholder')}
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="block text-[11px] font-black uppercase tracking-widest text-muted-foreground px-1">{t('email')}</label>
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Input 
                    className="w-full h-14 pl-12 pr-6 bg-muted/20 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                    dir="ltr"
                    placeholder={t('email_placeholder')}
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3">
                <label className="block text-[11px] font-black uppercase tracking-widest text-muted-foreground px-1">{t('password')}</label>
                <div className="relative group/input">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Input 
                    className="w-full h-14 pl-12 pr-14 bg-muted/20 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                    placeholder={t('password_placeholder')}
                    type={showPassword ? "text" : "password"}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-4 py-2">
                <input className="mt-1 rounded border-border text-primary focus:ring-primary/20 size-4 transition-all" id="terms" type="checkbox"/>
                <label className="text-[11px] text-muted-foreground leading-relaxed font-medium uppercase tracking-tighter" htmlFor="terms">
                  {t('agree_to', { 
                    terms: <Link href="/terms" className="text-primary font-black hover:underline mx-1">{t('terms_and_conditions')}</Link>,
                    privacy: <Link href="/privacy" className="text-primary font-black hover:underline mx-1">{t('privacy_policy')}</Link>
                  })}
                </label>
              </div>

              {/* Submit Button */}
              <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-2xl font-black text-xl shadow-[0_15px_40px_rgba(31,16,142,0.25)] active:scale-[0.98] transition-all duration-300" type="submit">
                {t('signup')}
              </Button>

              {/* Divider */}
              <div className="relative flex items-center py-6">
                <div className="flex-grow border-t border-border/40"></div>
                <span className="flex-shrink mx-6 text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em]">{t('or_signup_with')}</span>
                <div className="flex-grow border-t border-border/40"></div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-14 rounded-2xl font-bold border-border/60 hover:bg-muted/30 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="size-5 grayscale" />
                  <span className="text-xs uppercase tracking-widest">{t('google')}</span>
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl font-bold border-border/60 hover:bg-muted/30 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <Apple className="size-5 text-muted-foreground" />
                  <span className="text-xs uppercase tracking-widest">{t('apple')}</span>
                </Button>
              </div>

              {/* Login Link */}
              <div className="text-center pt-6">
                <p className="text-xs text-muted-foreground font-medium">
                  {t('already_have_account')}
                  <Link href="/login" className="text-primary font-black hover:underline ml-2 uppercase tracking-tighter">
                    {t('login')}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </AnimatedSections>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-muted/20 border-t border-border/40 text-muted-foreground mt-auto" suppressHydrationWarning>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-black text-primary uppercase tracking-[0.2em] font-headline">{isMounted ? t('app_name') : 'رستارشاپ'}</span>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">{t('copyright_auth')}</p>
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold">
          <Link href="/privacy" className="hover:text-primary transition-colors">{t('privacy_policy')}</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">{t('terms_and_conditions')}</Link>
          <Link href="/support" className="hover:text-primary transition-colors">{t('support')}</Link>
        </div>
      </footer>
    </div>
  );
}
