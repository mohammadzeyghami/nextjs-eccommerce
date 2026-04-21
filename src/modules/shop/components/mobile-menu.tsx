"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Menu, Grid, ShoppingBag, User, Info, Search, LayoutDashboard, BookOpen } from "lucide-react"

import { Button, buttonVariants } from "@/src/share-components/atoms/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/share-components/molecules/sheet"
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle"
import { LangToggle } from "@/src/share-components/molecules/lang-toggle"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { href: "/products", label: t("categories"), icon: Grid },
    { href: "/news", label: t("journal"), icon: BookOpen },
    { href: "/about", label: t("about"), icon: Info },
    { href: "/contact-us", label: t("contact"), icon: Info },
    { href: "/dashboard", label: t("dashboard"), icon: LayoutDashboard },
    { href: "/profile", label: t("profile"), icon: User },
    { href: "/cart", label: t("bag"), icon: ShoppingBag },
  ]

  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "md:hidden"
        )}
      >
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
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <item.icon className={cn("size-5", isActive ? "text-primary" : "text-muted-foreground")} />
                  {item.label}
                </Link>
              )
            })}
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
