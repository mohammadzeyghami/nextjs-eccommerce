'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductHeader } from '@/src/modules/dashboard/products/components/ProductHeader';
import { ProductItem } from '@/src/modules/dashboard/products/components/ProductItem';
import { motion } from 'framer-motion';

const MOCK_PRODUCTS = [
  {
    title: 'هدفون استودیو پرو',
    category: 'صوتی',
    price: '۱۲,۵۰۰,۰۰۰',
    stock: 24,
    image: 'https://picsum.photos/seed/audio1/400/400',
  },
  {
    title: 'ساعت هوشمند سری ۸',
    category: 'گجت پوشیدنی',
    price: '۱۸,۲۰۰,۰۰۰',
    stock: 3,
    image: 'https://picsum.photos/seed/watch2/400/400',
  },
  {
    title: 'اسپیکر هوشمند اکو',
    category: 'خانه هوشمند',
    price: '۴,۹۰۰,۰۰۰',
    stock: 85,
    image: 'https://picsum.photos/seed/speaker1/400/400',
  },
  {
    title: 'کیف چرم مینیمال',
    category: 'مد و پوشاک',
    price: '۲,۳۰۰,۰۰۰',
    stock: 12,
    image: 'https://picsum.photos/seed/bag2/400/400',
  },
  {
    title: 'گلدان کانسپت نوردیک',
    category: 'دکوراسیون',
    price: '۸۵۰,۰۰۰',
    stock: 5,
    image: 'https://picsum.photos/seed/decor1/400/400',
  },
];

export default function ProductsManagementPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <ProductHeader />
      
      <div className="flex flex-col gap-5">
        {MOCK_PRODUCTS.map((product, index) => (
          <ProductItem 
            key={index} 
            product={product} 
            index={index} 
          />
        ))}
      </div>

      {/* Floating Action Button (FAB) for Mobile */}
      <motion.button 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden fixed bottom-32 left-8 z-50 size-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center border-4 border-background group"
      >
        <svg
          className="size-8 group-hover:rotate-90 transition-transform duration-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
        </svg>
      </motion.button>
    </div>
  );
}
