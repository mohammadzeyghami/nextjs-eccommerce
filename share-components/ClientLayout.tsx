'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import '@/lib/i18n';
import i18n from '@/lib/i18n';
import QueryProvider from '@/locales/en/react-query/QueryProvider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme, lang } = useAppStore();

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, lang]);

  return (
    <div className={`min-h-screen bg-surface text-on-surface antialiased font-body ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <QueryProvider>
        {children}
      </QueryProvider>
    </div>
  );
}
