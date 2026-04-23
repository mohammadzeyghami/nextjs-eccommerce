"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { RefreshCcw, Home, CloudOff, Fingerprint } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Header } from "@/src/modules/shop/components/header";
import { Footer } from "@/src/modules/shop/components/footer";
import { BottomNav } from "@/src/modules/shop/components/bottom-nav";

export default function ServerErrorPage({ reset }: { reset?: () => void }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative px-6 py-20 mt-16 md:mt-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/20"></div>

        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Visual Section - Bento Style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <div className="aspect-square bg-muted/10 rounded-xl overflow-hidden relative group border border-border/50">
              <img 
                className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6FMhjA_KO7QUKmQ2lPSoHXehZMEsIhJgH09w63nfpDIlAVyqRBpMqdrCsTQr57kEufXxvww1Z-nPNjforMHH61MZAyIQdeSVYRx-gaVVfJxNQV6YbWEszjfZ5z3ISajjAJswiGB136-3Ds4lqGMWxr8T7ggYsVuasaSlJVxMxlm2kxjOcRtjudDVsyluoAHt39m-tOuoktLq3rDKYj3to08i_LOUL5ijfNUIBhAKyW-TZ2GGg1zd8XvLog1PMNaE3G_-0MnU09x4" 
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            
            <div className="aspect-square bg-muted/20 rounded-xl flex items-center justify-center p-8 border border-border/50 shadow-inner">
              <span className="text-7xl font-black text-primary/10 select-none font-headline">500</span>
            </div>
            
            <div className="col-span-2 aspect-[2/1] bg-card rounded-xl shadow-sm flex items-center justify-center overflow-hidden border border-border/50 relative">
              <img 
                className="w-full h-full object-cover opacity-30" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCUVqoMjvoWjRBSF3y-w9Gg7URbwnSNYXJenymreZ90Al64TNyTdiVNKR1tgb-_FbhvU9-UoMzg_lC6_QFCRlI8CvpUC9MkWmImmWRQ5RErAF9aKlH7FQpALgZ122y9wAZ3DUibgmIDbabZ5vygLwTNFwBX_LiHMh2XwF385Wc5ZoZrg2lB6vcOJqWd9rbXiroNbJIFq_gveEHgSPe_1CxKLoIY_rUYsNMlcM9njNTS1CGvBOVKrLqhxpy4-XZ30tmBTsnrPbwL4s" 
              />
              <div className="absolute flex flex-col items-center">
                <CloudOff className="text-primary size-16 mb-2 opacity-80" />
                <div className="h-1 w-12 bg-primary rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <div className="space-y-4 flex flex-col items-center lg:items-end">
              <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-xs font-bold tracking-widest uppercase border border-destructive/20">
                {t('errors.server_error.internal_error_label')}
              </span>
              
              <h1 className="text-4xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
                {t('errors.server_error.internal_error_heading')}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {t('errors.server_error.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row-reverse gap-4 w-full pt-4">
              <Button 
                onClick={() => reset ? reset() : window.location.reload()}
                className="h-14 px-8 bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20 flex-1 hover:bg-primary/90 transition-all active:scale-95"
              >
                <RefreshCcw className="mr-2 h-5 w-5" />
                <span>{t('errors.server_error.retry')}</span>
              </Button>
              
              <Link href="/" className="h-14 px-8 border border-border bg-muted/10 hover:bg-muted/20 transition-all flex-1 rounded-lg flex items-center justify-center font-bold">
                  <Home className="mr-2 h-5 w-5" />
                  <span>{t('errors.server_error.back_to_home')}</span>
              </Link>
            </div>

            {/* Status Footer */}
            <div className="pt-12 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 text-muted-foreground text-xs w-full font-sans tracking-wide">
              <div className="flex items-center gap-2">
                <span>{t('errors.server_error.error_id')}</span>
                <Fingerprint className="size-4" />
              </div>
              <div className="flex items-center gap-2">
                <span>{t('errors.server_error.checking_status')}</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
