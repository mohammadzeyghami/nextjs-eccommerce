"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, Menu, Bell, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/src/share-components/molecules/sheet";
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle";
import { LangToggle } from "@/src/share-components/molecules/lang-toggle";
import { Button } from "@/src/share-components/atoms/button";
import { Separator } from "@/src/share-components/atoms/separator";
import { Badge } from "@/src/share-components/atoms/badge";
import { cn } from "@/lib/utils";
import { AuthGuard } from "@/src/modules/auth/components/AuthGuard";
import { useAuthStore } from "@/src/modules/auth/store/useAuthStore";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { logout } = useAuthStore();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const closeDrawer = () => setIsDrawerOpen(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!mounted) {
    return <div className="fixed inset-0 bg-background" />;
  }

  const links = [
    { href: "/dashboard", icon: LayoutDashboard, label: t("admin.nav.dashboard") },
    { href: "/dashboard/products", icon: Package, label: t("admin.nav.products") },
    { href: "/dashboard/news", icon: FileText, label: t("admin.nav.news") },
    { href: "/dashboard/orders", icon: ShoppingCart, label: t("admin.nav.orders") },
    { href: "/dashboard/users", icon: Users, label: t("admin.nav.users") },
  ];

  const renderSidebarContent = () => (
    <div className="flex flex-col h-full overflow-y-hidden bg-card">
      <div className="p-8 border-b border-border bg-muted/20 dark:bg-muted/5">
        <div className="text-2xl font-black text-primary mb-8 font-headline uppercase tracking-tighter">
          {t('admin.nav.title')}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Image 
              alt={t('admin.nav.profile_image_alt')} 
              className="size-14 rounded-2xl object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500" 
              src="https://picsum.photos/seed/dashboard/200/200" 
              width={56} 
              height={56} 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 border-2 border-card rounded-full shadow-sm"></div>
          </div>
          <div>
            <h3 className="font-headline font-black text-foreground text-lg">{t('admin.nav.admin_name')}</h3>
            <p className="font-sans text-xs text-muted-foreground font-bold uppercase tracking-widest">{t('admin.nav.admin_role')}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col gap-2 p-6 flex-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname?.startsWith(link.href));
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeDrawer}
              className={cn(
                "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 font-black" 
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              <link.icon className={cn("size-6 transition-transform group-hover:scale-110", isActive && "stroke-[2.5px]")} />
              <span className="font-headline text-md tracking-tight">{link.label}</span>
            </Link>
          );
        })}
        
        <Separator className="my-6 opacity-30" />
        
        <Link 
          href="/dashboard/settings" 
          onClick={closeDrawer}
          className={cn(
            "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group",
            pathname?.startsWith('/dashboard/settings') 
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 font-black" 
              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
          )}
        >
          <Settings className={cn("size-6 transition-transform group-hover:scale-110", pathname?.startsWith('/dashboard/settings') && "stroke-[2.5px]")} />
          <span className="font-headline text-md tracking-tight">{t("admin.nav.settings")}</span>
        </Link>
      </nav>

      <div className="p-6 border-t border-border">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start gap-4 h-14 rounded-2xl text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-all duration-300 group"
        >
          <LogOut className="size-6 transition-transform group-hover:rotate-12" />
          <span className="font-headline font-bold">{t("admin.nav.logout")}</span>
        </Button>
      </div>
    </div>
  );

  return (
    <AuthGuard>
      <div className="bg-background text-foreground fixed inset-0 flex flex-row overflow-hidden select-none" dir={t('dir') as any}>
        {/* Desktop Sidebar */}
        <aside className={cn(
          "hidden md:flex flex-col fixed inset-y-0 h-full w-80 bg-card border-x border-border z-50",
          t('dir') === 'rtl' ? "right-0" : "left-0"
        )}>
          {renderSidebarContent()}
        </aside>

        {/* Main Content Area */}
        <div className={cn(
          "flex-1 flex flex-col h-full max-h-screen overflow-hidden relative z-10", 
          t('dir') === 'rtl' ? 'md:mr-80' : 'md:ml-80'
        )}>
          {/* Top App Bar */}
          <header className="bg-background/80 backdrop-blur-xl border-b border-border flex justify-between items-center w-full px-8 py-5 z-40 relative">
            <div className="flex items-center gap-4">
              <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <SheetTrigger 
                  render={
                    <Button 
                      variant="ghost"
                      size="icon"
                      className="md:hidden"
                    >
                      <Menu className="size-6" />
                    </Button>
                  }
                />
                <SheetContent side={t('dir') === 'rtl' ? 'right' : 'left'} className="w-80 p-0 border-x border-border shadow-2xl bg-card" showCloseButton={false}>
                  {renderSidebarContent()}
                </SheetContent>
              </Sheet>
              <h2 className="text-xl font-black text-foreground font-headline uppercase tracking-tighter">
                {links.find(l => l.href === pathname)?.label || t('admin.nav.title')}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-xl border border-border/50">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('admin.nav.server_live')}</span>
              </div>
              <ThemeToggle />
              <LangToggle />
              <Separator orientation="vertical" className="h-8 mx-2 hidden sm:block" />
              <Button variant="ghost" size="icon" className="relative group">
                <Bell className="size-5 text-primary group-hover:scale-110 transition-transform" />
                <Badge className="absolute -top-1 -right-1 size-4 p-0 flex items-center justify-center bg-destructive text-[10px] border-2 border-background">3</Badge>
              </Button>
            </div>
          </header>

          {/* Content Canvas */}
          <main className="flex-1 overflow-y-auto p-6 md:p-12 flex flex-col gap-10 bg-muted/10 dark:bg-muted/5 pb-32 md:pb-12">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}

