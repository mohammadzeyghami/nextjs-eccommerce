"use client";

import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/share-components/atoms/card";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full max-w-md mx-auto pt-20 px-4">
      <AnimatedSections className="space-y-8">
      <Card className="shadow-2xl border-none overflow-hidden bg-background">
        <div className="h-2 w-full bg-gradient-to-r from-primary to-primary/60"></div>
        <CardHeader className="text-center space-y-2 pt-10">
          <CardTitle className="font-headline text-3xl font-black tracking-tighter text-primary">{t('app_name')}</CardTitle>
          <p className="font-sans text-muted-foreground text-sm uppercase tracking-widest">{t('login_title')}</p>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-black text-foreground uppercase tracking-widest" htmlFor="email">
                {t('email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input 
                  type="email" 
                  id="email" 
                  placeholder={t('email_placeholder')}
                  className="pl-10 h-12 bg-muted/30 border-border focus-visible:ring-primary/20"
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-black text-foreground uppercase tracking-widest" htmlFor="password">
                  {t('password')}
                </label>
                <Link href="/reset-password" title={t('forgot_password')} className="text-[10px] font-bold text-primary hover:underline transition-colors uppercase tracking-widest">
                  {t('forgot_password')}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input 
                  type="password" 
                  id="password" 
                  placeholder={t('password_placeholder')}
                  className="pl-10 h-12 bg-muted/30 border-border focus-visible:ring-primary/20"
                  required 
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full h-12 rounded-xl font-bold text-md shadow-lg shadow-primary/20">
              {t('login')}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
              <span className="px-4 bg-background text-muted-foreground font-bold">
                {t('or_login_with')}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1">
            <Button variant="secondary" className="h-12 rounded-xl font-bold border-border shadow-sm">
              {t('google')}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center">
        <Link href="/" className="text-muted-foreground/60 text-xs hover:text-primary transition-colors font-sans uppercase tracking-widest">
          {t('home')}
        </Link>
      </div>
      </AnimatedSections>
    </main>
  );
}
