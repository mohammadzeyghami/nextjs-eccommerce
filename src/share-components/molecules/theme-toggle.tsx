'use client';

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
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

export function ThemeToggle() {
  const { theme, setTheme } = useAppStore();
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
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">{t("change_theme")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl shadow-2xl border-border/50 backdrop-blur-xl">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-headline font-bold text-xs uppercase tracking-widest px-3 py-2 opacity-60">
            {t("change_theme")}
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="opacity-50" />
        <DropdownMenuRadioGroup value={theme} onValueChange={(v) => setTheme(v as 'light' | 'dark' | 'system')}>
          <DropdownMenuRadioItem value="light" className="rounded-xl px-3 py-2.5 my-1 cursor-pointer transition-all focus:bg-primary/10">
            <div className="flex items-center gap-3">
              <Sun className="size-4 text-muted-foreground group-focus/dropdown-menu-item:text-primary" />
              <span className="font-medium">{t("light")}</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" className="rounded-xl px-3 py-2.5 my-1 cursor-pointer transition-all focus:bg-primary/10">
            <div className="flex items-center gap-3">
              <Moon className="size-4 text-muted-foreground group-focus/dropdown-menu-item:text-primary" />
              <span className="font-medium">{t("dark")}</span>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" className="rounded-xl px-3 py-2.5 my-1 cursor-pointer transition-all focus:bg-primary/10">
            <div className="flex items-center gap-3">
              <Monitor className="size-4 text-muted-foreground group-focus/dropdown-menu-item:text-primary" />
              <span className="font-medium">{t("system")}</span>
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
