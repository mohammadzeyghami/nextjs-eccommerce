'use client';

import * as React from "react"
import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/src/share-components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/share-components/molecules/dropdown-menu"
import { useAppStore } from "@/store/useAppStore"

export function LangToggle() {
  const { lang, setLang } = useAppStore();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="active:scale-95" />}>
        <Globe className="h-[1.2rem] w-[1.2rem] text-primary" />
        <span className="sr-only">{t("change_language")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-body">
        <DropdownMenuItem onClick={() => setLang("fa")} className="cursor-pointer flex justify-between gap-10">
          <span>{t("persian")}</span>
          {lang === 'fa' && <span className="material-symbols-outlined text-sm">check</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("en")} className="cursor-pointer flex justify-between gap-10">
          <span>{t("english")}</span>
          {lang === 'en' && <span className="material-symbols-outlined text-sm">check</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
