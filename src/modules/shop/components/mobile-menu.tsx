"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Menu, Home, Grid, ShoppingBag, User, Info, Search, LayoutDashboard } from "lucide-react"

import { Button } from "@/src/share-components/atoms/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/share-components/molecules/sheet"
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle"
import { LangToggle } from "@/src/share-components/molecules/lang-toggle"

export function MobileMenu() {
  const { t } = useTranslation()

  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/products", label: t("categories"), icon: Grid },
    { href: "/cart", label: t("bag"), icon: ShoppingBag },
    { href: "/about", label: t("about"), icon: Info },
    { href: "/dashboard", label: t("admin.nav.dashboard"), icon: LayoutDashboard },
    { href: "/profile", label: t("profile"), icon: User },
  ]

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
        <Menu className="size-6 text-primary" />
        <span className="sr-only">{t("menu")}</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px]">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-black tracking-tighter text-primary uppercase font-headline">
            {t('app_name')}
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-6">
          <div className="px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("search")}
                className="w-full bg-muted/50 border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <nav className="flex flex-col gap-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm font-medium"
              >
                <item.icon className="size-5 text-muted-foreground" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-4 py-4 border-t flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{t("settings")}</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LangToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
