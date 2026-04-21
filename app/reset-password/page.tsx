"use client";

import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Input } from "@/src/share-components/molecules/inputs/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/share-components/atoms/card";

export default function ResetPasswordPage() {
  const { t } = useTranslation();

  return (
    <main className="w-full max-w-md mx-auto pt-20 px-4">
      <Card className="shadow-2xl border-none overflow-hidden bg-background">
        <div className="h-2 w-full bg-gradient-to-r from-primary to-primary/60"></div>
        <CardHeader className="text-center space-y-2 pt-10 px-8">
          <CardTitle className="font-headline text-3xl font-black tracking-tighter text-primary">{t('app_name')}</CardTitle>
          <p className="font-sans text-muted-foreground text-sm uppercase tracking-widest">{t('reset_password_title')}</p>
        </CardHeader>

        <CardContent className="p-8 space-y-8">
          <p className="text-sm text-muted-foreground text-center leading-relaxed font-sans">
            {t('reset_password_desc')}
          </p>
          
          <form action="#" className="space-y-6" method="POST">
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="pl-10 h-12 bg-muted/30 border-border focus-visible:ring-primary/20" 
                placeholder={t('email_placeholder_reset')} 
              />
            </div>
            
            <Button type="submit" className="w-full h-12 rounded-xl font-bold text-md shadow-lg shadow-primary/20">
              {t('send_reset_link')}
            </Button>
          </form>

          <div className="pt-4 text-center">
            <Link 
              href="/login" 
              className="text-sm font-bold text-primary hover:underline transition-all inline-flex items-center gap-2 group uppercase tracking-widest"
            >
              <ArrowRight className="size-4 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
              {t('back_to_login')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
