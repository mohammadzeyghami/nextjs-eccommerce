import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  lang: 'fa' | 'en' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLang: (lang: 'fa' | 'en' | 'system') => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'system',
  lang: 'fa', // Default to 'fa' to match server-side render
  setTheme: (theme) => set({ theme }),
  setLang: (lang) => set({ lang }),
}));
