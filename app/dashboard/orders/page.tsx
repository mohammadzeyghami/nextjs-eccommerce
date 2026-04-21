'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OrderHeader } from '@/src/modules/dashboard/orders/components/OrderHeader';
import { OrderCard } from '@/src/modules/dashboard/orders/components/OrderCard';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_ORDERS = [
  {
    id: 'ORD-8942',
    customer: 'علی رضایی',
    date: '۲۴ مهر ۱۴۰۲ - ۱۴:۳۰',
    amount: '۱,۲۵۰,۰۰۰',
    status: 'pending' as const,
  },
  {
    id: 'ORD-8941',
    customer: 'سارا محمدی',
    date: '۲۳ مهر ۱۴۰۲ - ۱۰:۱۵',
    amount: '۸۵۰,۰۰۰',
    status: 'shipped' as const,
  },
  {
    id: 'ORD-8940',
    customer: 'محمد حسینی',
    date: '۲۲ مهر ۱۴۰۲ - ۱۶:۴۵',
    amount: '۳,۴۰۰,۰۰۰',
    status: 'cancelled' as const,
  },
  {
    id: 'ORD-8939',
    customer: 'زهرا سلطانی',
    date: '۲۱ مهر ۱۴۰۲ - ۱۱:۲۰',
    amount: '۲,۱۰۰,۰۰۰',
    status: 'shipped' as const,
  },
  {
    id: 'ORD-8938',
    customer: 'بهرام رادان',
    date: '۲۰ مهر ۱۴۰۲ - ۰۹:۰۰',
    amount: '۵,۶۰۰,۰۰۰',
    status: 'pending' as const,
  },
  {
    id: 'ORD-8937',
    customer: 'نیکی کریمی',
    date: '۱۹ مهر ۱۴۰۲ - ۱۸:۳۰',
    amount: '۷۸۰,۰۰۰',
    status: 'shipped' as const,
  },
];

export default function OrdersManagementPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredOrders = activeFilter === 'all' 
    ? MOCK_ORDERS 
    : MOCK_ORDERS.filter(order => order.status === activeFilter);

  return (
    <div className="space-y-12">
      <OrderHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredOrders.map((order, index) => (
            <OrderCard 
              key={order.id} 
              order={order} 
              index={index} 
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile Floating Menu for Navigation */}
      <motion.button 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden fixed bottom-32 left-8 z-50 size-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center border-4 border-background"
      >
        <svg
          className="size-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
        </svg>
      </motion.button>
    </div>
  );
}
