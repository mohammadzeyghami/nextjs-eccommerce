'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Badge } from '@/src/share-components/atoms/badge';
import { Card } from '@/src/share-components/atoms/card';

export const RecentOrders = () => {
  const { t } = useTranslation();

  const orders = [
    {
      id: '#۱۲۸۴۵',
      title: 'کفش ورزشی نایکی',
      price: '۱,۴۵۰,۰۰۰ تومان',
      status: 'status_shipping',
      statusVariant: 'secondary',
      img: 'https://picsum.photos/seed/shoes1/200/200'
    },
    {
      id: '#۱۱۲۰۴',
      title: 'ساعت مچی هوشمند',
      price: '۳,۲۰۰,۰۰۰ تومان',
      status: 'status_delivered',
      statusVariant: 'default',
      img: 'https://picsum.photos/seed/watch1/200/200'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-4 px-6"
    >
      <div className="flex justify-between items-center px-1">
        <h3 className="text-lg font-black text-foreground">{t('profile_page.recent_orders')}</h3>
        <button className="text-primary text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
          {t('profile_page.see_all')}
        </button>
      </div>
      <div className="space-y-3">
        {orders.map((order, i) => (
          <Card key={i} className="p-4 flex items-center gap-4 bg-card/40 border-none shadow-sm backdrop-blur-sm group cursor-pointer hover:shadow-md transition-all">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted relative shrink-0">
              <Image 
                src={order.img} 
                alt={order.title} 
                fill 
                className="object-cover transition-transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-foreground">{order.title}</span>
                <span className="text-primary font-black text-sm">{order.price}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">{t('profile_page.order_code')}: {order.id}</span>
                <Badge variant={order.statusVariant as any} className="h-6 px-3 rounded-full font-bold">
                  {t(`profile_page.${order.status}`)}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};
