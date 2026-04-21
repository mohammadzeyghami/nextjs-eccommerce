import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  lang: 'fa' | 'en';
  setTheme: (theme: 'light' | 'dark') => void;
  setLang: (lang: 'fa' | 'en') => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  lang: 'fa',
  setTheme: (theme) => set({ theme }),
  setLang: (lang) => set({ lang }),
}));
