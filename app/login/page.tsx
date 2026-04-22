"use client";

import Link from "next/link";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Card, CardContent } from "@/src/share-components/atoms/card";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle";
import { LangToggle } from "@/src/share-components/molecules/lang-toggle";
import { Typography } from "@/src/share-components/atoms/typography";
import { Button } from "@/src/share-components/atoms/button";
import { LoginForm } from "@/src/modules/auth/components/LoginForm";
import { useAuthStore } from "@/src/modules/auth/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
        <Typography variant="h4" weight="black" className="tracking-[0.2em] text-primary uppercase">
          {t('app_name')}
        </Typography>
        <div className="flex items-center gap-8">
          <Link href="/help">
            <Typography variant="small" weight="bold" className="text-muted-foreground hover:text-primary transition-colors hidden md:block">
              {t('help')}
            </Typography>
          </Link>
          <Link href="/signup">
            <Typography variant="small" weight="bold" className="text-muted-foreground hover:text-primary transition-colors">
              {t('signup')}
            </Typography>
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
                <Typography variant="h2" weight="black" className="text-primary">
                  {t('welcome_back')}
                </Typography>
                <Typography variant="p" className="text-muted-foreground text-sm font-medium leading-relaxed">
                  {t('login_desc')}
                </Typography>
              </div>

              {/* Login Form Component */}
              <LoginForm />

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/60"></div>
                </div>
                <div className="relative flex justify-center">
                  <Typography variant="small" weight="bold" className="px-6 bg-card text-muted-foreground tracking-[0.3em]">
                    {t('or_login_with')}
                  </Typography>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-14 rounded-2xl border-border/60 hover:bg-muted/30 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="size-5" />
                  <Typography variant="small" weight="bold">{t('google')}</Typography>
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl border-border/60 hover:bg-muted/30 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="size-5 grayscale" />
                  <Typography variant="small" weight="bold">{t('facebook')}</Typography>
                </Button>
              </div>

              {/* Signup Link */}
              <div className="pt-4 text-center">
                <Typography variant="small" weight="medium" className="text-muted-foreground normal-case tracking-normal">
                  {t('dont_have_account')}
                  <Link href="/signup" className="text-primary font-black hover:underline ml-2 uppercase tracking-tighter">
                    {t('create_account')}
                  </Link>
                </Typography>
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
            <Typography variant="small" weight="bold" className="text-muted-foreground leading-relaxed tracking-[0.2em]">
              {t('app_manifesto')}
            </Typography>
          </motion.div>
        </AnimatedSections>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 bg-muted/20 border-t border-border/40 text-muted-foreground">
        <Typography variant="p" weight="black" className="text-sm text-primary uppercase tracking-[0.2em] font-headline">
          {t('app_name')}
        </Typography>
        <Typography variant="small" weight="bold" className="opacity-60 text-center tracking-[0.3em]">
          {t('copyright_auth')}
        </Typography>
        <div className="flex gap-8">
          <Link href="/privacy">
            <Typography variant="small" weight="bold" className="hover:text-primary transition-colors">{t('privacy_policy')}</Typography>
          </Link>
          <Link href="/terms">
            <Typography variant="small" weight="bold" className="hover:text-primary transition-colors">{t('terms_and_conditions')}</Typography>
          </Link>
          <Link href="/support">
            <Typography variant="small" weight="bold" className="hover:text-primary transition-colors">{t('support')}</Typography>
          </Link>
        </div>
      </footer>
    </div>
  );
}


