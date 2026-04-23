"use client";

import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Mail, ArrowRight, ArrowLeft, ShieldCheck, Verified } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Card, CardContent } from "@/src/share-components/atoms/card";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle";
import { LangToggle } from "@/src/share-components/molecules/lang-toggle";

export default function ForgotPasswordPage() {
  const { t, i18n } = useTranslation();
  const [isSent, setIsSent] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
        <h1 className="text-2xl font-black tracking-[0.2em] text-primary uppercase font-headline">
          {isMounted ? t('app_name') : 'رستارشاپ'}
        </h1>
        <div className="flex items-center gap-8">
          <Link href="/login" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            {t('login')}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-primary/10 blur-[100px] -z-10" />

        <AnimatedSections className="w-full max-w-[480px]">
          <Card className="bg-card rounded-[2rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-border/50 relative overflow-hidden">
            {/* Success State Overlay */}
            {isSent && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-card/95 backdrop-blur-md rounded-[2rem] flex flex-col items-center justify-center p-10 text-center z-20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 text-primary">
                  <Verified className="size-10" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4 font-headline uppercase tracking-tighter">
                  {t('reset_link_sent')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-10">
                  {t('reset_link_sent_desc')}
                </p>
                <Button 
                  onClick={() => setIsSent(false)}
                  className="w-full h-14 rounded-2xl font-black text-lg bg-muted hover:bg-muted/80 text-foreground transition-all"
                >
                  {t('back_to_login')}
                </Button>
              </motion.div>
            )}

            <div className="text-center mb-10 space-y-4">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full" />
              <h2 className="text-3xl font-black text-primary font-headline uppercase tracking-tighter">
                {t('forgot_password')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm font-medium px-4">
                {t('forgot_password_desc')}
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="space-y-3">
                <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground px-1" htmlFor="email">
                  {t('email_placeholder_reset')}
                </label>
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within/input:text-primary transition-colors" />
                  <Input 
                    className="w-full h-14 pl-12 pr-6 bg-muted/20 border-none rounded-2xl text-foreground focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-background transition-all duration-300 font-sans"
                    id="email" 
                    name="email" 
                    placeholder="name@archive.com" 
                    required 
                    type="email"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full h-14 rounded-2xl font-black text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_30px_rgba(31,16,142,0.2)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3">
                {t('send_reset_link')}
                <ArrowRight className="size-5 rtl:rotate-180" />
              </Button>
            </form>

            {/* Navigation Back */}
            <div className="mt-10 pt-8 border-t border-border/40 text-center">
              <Link 
                href="/login" 
                className="inline-flex items-center gap-2 text-sm font-black text-muted-foreground hover:text-primary transition-colors group uppercase tracking-widest"
              >
                <ArrowLeft className="size-4 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t('back_to_login')}
              </Link>
            </div>
          </Card>

          {/* Contextual Decorative Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-muted/20 backdrop-blur-sm p-6 rounded-3xl flex items-center gap-6 border border-border/40"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{t('archive_security')}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{t('security_desc')}</p>
            </div>
          </motion.div>
        </AnimatedSections>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-muted/20 border-t border-border/40 text-muted-foreground mt-auto" suppressHydrationWarning>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-sm font-black text-primary uppercase tracking-[0.2em] font-headline">{isMounted ? t('app_name') : 'رستارشاپ'}</span>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold">
            <Link href="/privacy" className="hover:text-primary transition-colors">{t('privacy_policy')}</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">{t('terms_and_conditions')}</Link>
            <Link href="/support" className="hover:text-primary transition-colors">{t('support')}</Link>
          </div>
        </div>
        <p className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-60">
          {t('copyright_auth')}
        </p>
      </footer>
    </div>
  );
}
