"use client";

import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Mail, Lock, Globe, Eye, EyeOff } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Card, CardContent } from "@/src/share-components/atoms/card";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle";
import { LangToggle } from "@/src/share-components/molecules/lang-toggle";

export default function LoginPage() {
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
          <Link href="/help" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest hidden md:block">
            {t('help')}
          </Link>
          <Link href="/signup" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            {t('signup')}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-12 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

        <AnimatedSections className="w-full max-w-[480px]">
          <Card className="bg-card rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 relative group">
            {/* Top Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/60 to-primary group-hover:opacity-80 transition-opacity"></div>
            
            <CardContent className="p-10 md:p-14 space-y-10">
              {/* Header */}
              <div className="text-center space-y-3">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-black text-primary tracking-tight font-headline"
                >
                  {t('welcome_back')}
                </motion.h1>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  {t('login_desc')}
                </p>
              </div>

              {/* Login Form */}
              <form className="space-y-7">
                {/* Email Field */}
                <div className="space-y-2.5">
                  <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1" htmlFor="email">
                    {t('email')}
                  </label>
                  <div className="relative group/input">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                    <Input 
                      type="email" 
                      id="email" 
                      placeholder={t('email_placeholder')}
                      className="w-full h-14 pl-12 pr-6 bg-muted/20 border-none rounded-2xl text-foreground focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                      required 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center px-1">
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground" htmlFor="password">
                      {t('password')}
                    </label>
                    <Link href="/forgot-password" title={t('forgot_password')} className="text-[11px] font-bold text-primary hover:underline transition-colors uppercase tracking-[0.1em]">
                      {t('forgot_password')}
                    </Link>
                  </div>
                  <div className="relative group/input">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      placeholder={t('password_placeholder')}
                      className="w-full h-14 pl-12 pr-12 bg-muted/20 border-none rounded-2xl text-foreground focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                      required 
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

                {/* Submit Button */}
                <Button type="submit" className="w-full h-14 rounded-2xl font-black text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_30px_rgba(31,16,142,0.2)] active:scale-[0.98] transition-all duration-300">
                  {t('login')}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/60"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-bold">
                  <span className="px-6 bg-card text-muted-foreground">
                    {t('or_login_with')}
                  </span>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-14 rounded-2xl font-bold border-border/60 hover:bg-muted/30 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="size-5" />
                  <span className="text-xs uppercase tracking-widest">{t('google')}</span>
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl font-bold border-border/60 hover:bg-muted/30 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="size-5 grayscale" />
                  <span className="text-xs uppercase tracking-widest">{t('facebook')}</span>
                </Button>
              </div>

              {/* Signup Link */}
              <div className="pt-4 text-center">
                <p className="text-xs text-muted-foreground font-medium">
                  {t('dont_have_account')}
                  <Link href="/signup" className="text-primary font-black hover:underline ml-2 uppercase tracking-tighter">
                    {t('create_account')}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Optional Editorial Message */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center px-4"
          >
            <p className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase tracking-[0.2em]">
              {t('app_manifesto')}
            </p>
          </motion.div>
        </AnimatedSections>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-muted/20 border-t border-border/40 text-muted-foreground" suppressHydrationWarning>
        <div className="text-sm font-black text-primary uppercase tracking-[0.2em] font-headline">
          {isMounted ? t('app_name') : 'رستارشاپ'}
        </div>
        <div className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-60 text-center">
          {t('copyright_auth')}
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
