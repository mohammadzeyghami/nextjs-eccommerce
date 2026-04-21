'use client';

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/src/share-components/atoms/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/share-components/molecules/dropdown-menu"
import { useAppStore } from "@/store/useAppStore"

export function ThemeToggle() {
  const { theme, setTheme } = useAppStore();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="active:scale-95" />}>
        {theme === 'dark' ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
        )}
        <span className="sr-only">{t("change_theme")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-body">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer flex justify-between gap-10">
          <span>{t("light")}</span>
          {theme === 'light' && <span className="material-symbols-outlined text-sm">check</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer flex justify-between gap-10">
          <span>{t("dark")}</span>
          {theme === 'dark' && <span className="material-symbols-outlined text-sm">check</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
