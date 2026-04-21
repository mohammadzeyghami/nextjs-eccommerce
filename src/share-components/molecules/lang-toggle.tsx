'use client';

import * as React from "react"
import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/src/share-components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/src/share-components/molecules/dropdown-menu"
import { useAppStore } from "@/store/useAppStore"

export function LangToggle() {
  const { lang, setLang } = useAppStore();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative size-10 rounded-full bg-muted/50 border border-border/50 hover:bg-muted transition-all active:scale-95 group"
        />
      }>
        <Globe className="h-[1.2rem] w-[1.2rem] text-primary transition-all group-hover:rotate-12" />
        <span className="sr-only">{t("change_language")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl shadow-2xl border-border/50 backdrop-blur-xl">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-headline font-bold text-xs uppercase tracking-widest px-3 py-2 opacity-60">
            {t("change_language")}
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="opacity-50" />
        <DropdownMenuRadioGroup value={lang} onValueChange={(v) => setLang(v as 'fa' | 'en')}>
          <DropdownMenuRadioItem value="fa" className="rounded-xl px-3 py-2.5 my-1 cursor-pointer transition-all focus:bg-primary/10">
            <div className="flex items-center gap-3">
              <span className="text-lg">🇮🇷</span>
              <span className="font-medium">{t("persian")}</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" className="rounded-xl px-3 py-2.5 my-1 cursor-pointer transition-all focus:bg-primary/10">
            <div className="flex items-center gap-3">
              <span className="text-lg">🇺🇸</span>
              <span className="font-medium">{t("english")}</span>
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
