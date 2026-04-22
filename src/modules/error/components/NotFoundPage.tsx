"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Header } from "@/src/modules/shop/components/header";
import { Footer } from "@/src/modules/shop/components/footer";
import { BottomNav } from "@/src/modules/shop/components/bottom-nav";

export default function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative px-6 py-20 mt-16 md:mt-0">
        {/* Background Tonal Shifts */}
        <div className="absolute inset-0 -z-10 bg-primary/5 dark:bg-primary/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Section */}
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-card rounded-xl overflow-hidden shadow-2xl shadow-primary/5 relative group border border-border/50">
                <img 
                  alt="404 Error" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfdwdvcVrQdV7EpZMGIJASYn7ri87-H8N0ct32Da1ALG20Li_ixUCcM8YniltJMPt1_zyuHfdNNgUGmTn8Uxie3xur3yw9qBMA8oAZqSyUMznSASMPdOtshjSvjhVIJPH_Tms098dD71pv7rnHz61Mh5mjXL-8GqYJZr4DpaQEncUh5eSZjGDphW6YoPlccDsMMkRJpojsnM8gk_mnG7A50OmXaUohJk6M-K7S89WrkBQiolSt7YOy6bohNMxpxXcbis5OYkRiTXU" 
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[8rem] md:text-[12rem] font-black text-white/30 tracking-tighter select-none font-headline">404</span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end text-center lg:text-right"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-primary/20">
                {t('errors.not_found.system_error')}
              </span>
              
              <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
                {t('errors.not_found.page_not_found')}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
                {t('errors.not_found.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-end">
                <Link href="/" className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-bold rounded-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
                    <span>{t('errors.not_found.back_to_home')}</span>
                    {isRtl ? <ArrowLeft className="mr-2 h-5 w-5" /> : <ArrowRight className="ml-2 h-5 w-5" />}
                </Link>
                
                <Button variant="outline" onClick={() => window.history.back()} className="h-14 px-8 border-border bg-muted/20 hover:bg-muted/40 transition-all">
                  {t('errors.not_found.previous_page')}
                </Button>
              </div>

              {/* Suggestions */}
              <div className="mt-12 w-full p-6 bg-muted/10 rounded-xl border border-border/30 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground font-bold mb-4">{t('errors.not_found.suggestions_title')}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                  <Link href="/products" className="text-sm text-primary hover:underline font-medium transition-colors">
                    {t('errors.not_found.suggestion_latest')}
                  </Link>
                  <span className="text-border opacity-30">•</span>
                  <Link href="/news" className="text-sm text-primary hover:underline font-medium transition-colors">
                    {t('errors.not_found.suggestion_top')}
                  </Link>
                  <span className="text-border opacity-30">•</span>
                  <Link href="/contact-us" className="text-sm text-primary hover:underline font-medium transition-colors">
                    {t('errors.not_found.suggestion_support')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
