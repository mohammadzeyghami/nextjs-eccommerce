"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Globe, Share2 } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="bg-surface-container-low w-full mt-auto border-t border-primary/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-[1920px] mx-auto gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <span className="text-xl font-black text-primary font-headline uppercase tracking-tighter">
            {t('app_name')}
          </span >
          <p className="text-muted-foreground font-sans text-[10px] uppercase tracking-[0.2em] text-center md:text-right">
            {t('shop.footer.copyright') || '© 2024 The Perso-Modernist Archive. All rights reserved.'}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 font-sans text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">{t('shop.footer.privacy')}</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">{t('shop.footer.terms')}</Link>
          <Link href="/shipping" className="hover:text-primary transition-colors">{t('shop.footer.shipping')}</Link>
          <Link href="/contact-us" className="hover:text-primary transition-colors">{t('shop.footer.contact')}</Link>
          <Link href="/sustainability" className="hover:text-primary transition-colors">{t('shop.footer.sustainability')}</Link>
        </div>

        <div className="flex gap-4">
          <button className="size-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            <Globe className="size-5" />
          </button>
          <button className="size-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            <Share2 className="size-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
