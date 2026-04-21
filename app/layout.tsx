import type {Metadata} from 'next';
import './globals.css';
import { Inter, Vazirmatn, Geist } from 'next/font/google';
import ClientLayout from '../share-components/ClientLayout';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazirmatn' });

export const metadata: Metadata = {
  title: 'The Archive',
  description: 'The Archive - Curated Minimalist E-Commerce',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className={cn(inter.variable, vazirmatn.variable, "font-sans", geist.variable)}>
      <body suppressHydrationWarning className="bg-background text-on-background font-body">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
