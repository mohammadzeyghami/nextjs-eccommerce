'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OrderHeader } from '@/src/modules/dashboard/orders/components/OrderHeader';
import { OrderCard } from '@/src/modules/dashboard/orders/components/OrderCard';
import { AnimatedSections } from '@/src/share-components/molecules/animated-sections';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const MOCK_ORDERS = [
  {
    id: 'ORD-8942',
    customer: 'admin.orders_management.mock_orders.0.customer',
    date: 'admin.orders_management.mock_orders.0.date',
    amount: 'admin.orders_management.mock_orders.0.amount',
    status: 'pending' as const,
  },
  {
    id: 'ORD-8941',
    customer: 'admin.orders_management.mock_orders.1.customer',
    date: 'admin.orders_management.mock_orders.1.date',
    amount: 'admin.orders_management.mock_orders.1.amount',
    status: 'shipped' as const,
  },
  {
    id: 'ORD-8940',
    customer: 'admin.orders_management.mock_orders.2.customer',
    date: 'admin.orders_management.mock_orders.2.date',
    amount: 'admin.orders_management.mock_orders.2.amount',
    status: 'cancelled' as const,
  },
  {
    id: 'ORD-8939',
    customer: 'admin.orders_management.mock_orders.3.customer',
    date: 'admin.orders_management.mock_orders.3.date',
    amount: 'admin.orders_management.mock_orders.3.amount',
    status: 'shipped' as const,
  },
  {
    id: 'ORD-8938',
    customer: 'admin.orders_management.mock_orders.4.customer',
    date: 'admin.orders_management.mock_orders.4.date',
    amount: 'admin.orders_management.mock_orders.4.amount',
    status: 'pending' as const,
  },
  {
    id: 'ORD-8937',
    customer: 'admin.orders_management.mock_orders.5.customer',
    date: 'admin.orders_management.mock_orders.5.date',
    amount: 'admin.orders_management.mock_orders.5.amount',
    status: 'shipped' as const,
  },
];

export default function OrdersManagementPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const localizedOrders = MOCK_ORDERS.map((order) => ({
    ...order,
    customer: t(order.customer),
    date: t(order.date),
    amount: t(order.amount),
  }));

  const filteredOrders = activeFilter === 'all' 
    ? localizedOrders
    : localizedOrders.filter(order => order.status === activeFilter);

  return (
    <AnimatedSections className="space-y-12">
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

      {/* Mobile Floating Action Button */}
      <Link href="/dashboard/orders/create">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden fixed bottom-32 left-8 z-50 size-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center border-4 border-background cursor-pointer"
        >
          <Plus className="size-8" strokeWidth={3} />
        </motion.div>
      </Link>
    </AnimatedSections>
  );
}
