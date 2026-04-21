"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Home, Grid, ShoppingBag, User, BookOpen } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const { t } = useTranslation()
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/products", label: t("categories"), icon: Grid },
    { href: "/news", label: t("journal"), icon: BookOpen },
    { href: "/cart", label: t("bag"), icon: ShoppingBag },
    { href: "/profile", label: t("profile"), icon: User },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-background/95 backdrop-blur-md z-50 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.08)] border-t border-border">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center rounded-2xl px-4 py-2 transition-all duration-300 ease-out active:scale-95 group",
              isActive 
                ? "text-primary bg-primary/10" 
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            )}
          >
            <item.icon className={cn("size-6 transition-transform group-hover:scale-110", isActive && "fill-current")} />
            <span className="text-[10px] font-black uppercase tracking-widest mt-1.5 font-sans">
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
