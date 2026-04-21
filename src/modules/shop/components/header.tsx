"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Search } from "lucide-react"
import { Button } from "@/src/share-components/atoms/button"
import { MobileMenu } from "./mobile-menu"
import { ThemeToggle } from "@/src/share-components/molecules/theme-toggle"
import { LangToggle } from "@/src/share-components/molecules/lang-toggle"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 w-full max-w-7xl mx-auto">
        <MobileMenu />
        
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary font-headline uppercase">
          {t('app_name')}
        </Link>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LangToggle />
          <Button variant="ghost" size="icon">
            <Search className="size-5 text-primary" />
            <span className="sr-only">{t("search")}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
