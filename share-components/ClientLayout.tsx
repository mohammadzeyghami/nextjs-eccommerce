'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import '@/lib/i18n';
import i18n from '@/lib/i18n';
import QueryProvider from '@/locales/en/react-query/QueryProvider';
import { Toaster } from '@/src/share-components/molecules/sonner';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme, lang } = useAppStore();

  useEffect(() => {
    const applyLang = (l: 'fa' | 'en' | 'system') => {
      let targetLang: 'fa' | 'en' = 'fa';
      if (l === 'system') {
        const browserLang = navigator.language.split('-')[0];
        targetLang = browserLang === 'en' ? 'en' : 'fa';
      } else {
        targetLang = l;
      }
      i18n.changeLanguage(targetLang);
      document.documentElement.lang = targetLang;
      document.documentElement.dir = targetLang === 'fa' ? 'rtl' : 'ltr';
    };

    applyLang(lang);
    
    const applyTheme = (t: 'light' | 'dark' | 'system') => {
      const root = document.documentElement;
      if (t === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.toggle('dark', systemTheme === 'dark');
      } else {
        root.classList.toggle('dark', t === 'dark');
      }
    };

    applyTheme(theme);

    // If theme is system, listen for changes
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, lang]);

  return (
    <div className={`min-h-screen bg-surface text-on-surface antialiased font-body ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <QueryProvider>
        {children}
        <Toaster position={lang === 'fa' ? 'bottom-left' : 'bottom-right'} />
      </QueryProvider>
    </div>
  );
}
