"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { User, ShoppingBag } from "lucide-react"
import { Button } from "@/src/share-components/atoms/button"
import { MobileMenu } from "./mobile-menu"
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle"
import { LangToggle } from "@/src/share-components/molecules/lang-toggle"
import { useCartStore } from "@/store/useCartStore"
import { Badge } from "@/src/share-components/atoms/badge"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const { t } = useTranslation()
  const totalItems = useCartStore((state) => state.totalItems())
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { href: "/products", label: t("categories") },
    { href: "/news", label: t("journal") },
    { href: "/about", label: t("about") },
    { href: "/contact-us", label: t("contact") },
    { href: "/dashboard", label: t("dashboard") },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <MobileMenu />
          
          <Link href="/" className="text-2xl font-black tracking-tighter text-primary font-headline uppercase">
            {t('app_name')}
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-bold transition-colors tracking-wide relative py-1",
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/60 hover:text-primary"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LangToggle />
          <Link href="/profile" className="hidden md:flex">
            <Button variant="ghost" size="icon">
              <User className="size-5 text-primary" />
              <span className="sr-only">{t("profile")}</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="size-5 text-primary" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 size-4 p-0 flex items-center justify-center bg-primary text-white text-[10px] animate-in zoom-in border-2 border-background">
                  {totalItems}
                </Badge>
              )}
              <span className="sr-only">{t("bag")}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
