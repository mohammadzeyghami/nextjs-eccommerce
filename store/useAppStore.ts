import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  lang: 'fa' | 'en' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLang: (lang: 'fa' | 'en' | 'system') => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'system',
  lang: 'system',
  setTheme: (theme) => set({ theme }),
  setLang: (lang) => set({ lang }),
}));
