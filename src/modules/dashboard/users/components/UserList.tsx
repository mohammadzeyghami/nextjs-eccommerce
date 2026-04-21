'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/src/share-components/atoms/button';
import { UserItem } from './UserItem';
import { AnimatedSections } from '@/src/share-components/molecules/animated-sections';

interface User {
  name: string;
  email: string;
  role: string;
  image?: string;
}

export const UserList = () => {
  const { t } = useTranslation();

  const mockUsers: User[] = [
    { name: t('admin.users_management.mock_users.0.name'), email: t('admin.users_management.mock_users.0.email'), role: 'admin', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsRIWJ9OdvNZoJhpZhC_3akbjgefury2780AIwS5Qw60zZmH9VYvg6pxpaI_TxHr4XaeJS1kj42ZQFVCgz5zRu6tLzmw-Frsv3w6XgNVWuQtbkaAby-lN8rkHglEZNsjQQrLS2JYDr-oPRIKPvDRxBTTdsf6M3XuruKSUi1nOJfi_L2rcs4Bs7ythpvN2YgcD9Pwg0cZD7XlheT5VzVuErIyUCVXf6j8V4eKA_HDtzXsoR1iCxnRi9VY8EDnUEAHv1RX1GyGGsG5w' },
    { name: t('admin.users_management.mock_users.1.name'), email: t('admin.users_management.mock_users.1.email'), role: 'customer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgYKQGlggGmFqr6yTXVQFlldM1LD1yxxRDfHW4uiTOrvXS9PVgM1d4sUoPCDMdWIqOeRnIqGwrdy-PoyfyeylA0QRgOvWubkZOGuPTCqM1qPd8U_3CX1GsEFougOz4hc5G4btDf1wsmhpaM2Ki4Bbw-Xfpwv1HeeseT8Dixrk77K_wcTnRCdToeXqCTa57t_9ZCk2h_9e-elzNQOJvKgckW2hMkGK2tS2hM41B_LCLtJOZJj9dHeD3GxSkwLks9NpRc3taV8HWHME' },
    { name: t('admin.users_management.mock_users.2.name'), email: t('admin.users_management.mock_users.2.email'), role: 'customer' },
    { name: t('admin.users_management.mock_users.3.name'), email: t('admin.users_management.mock_users.3.email'), role: 'product_manager', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACpdc31Ht5q_S__NKodw9AsiHpMQB1-wI35lI-meL52e5r0TOfLrke0otNpgsJK5VXzXkY2BvtgBcEq6H06XCYuUtqv2n2uny7M7CrVTWnU7OWOzWGgju3uWJhrHM3RLxpBaTZDDriFsgN-KrN3I17TURJDHQoeexCBmuyh1pi6QTGYCkcs6NR_XvboPqmR6nTQRTTGLifcFDdyQzurHhntJCIrzd5vPaYZkoAl8XKUZo0QclPOnlaJHK-HzDwcVN_PhE1UmHxFrM' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-muted/20 rounded-[2.5rem] p-4 md:p-8 flex flex-col gap-5 border border-border/30 backdrop-blur-sm">
        {/* List Header (Desktop Only) */}
        <div className="hidden md:flex items-center px-8 pb-4 text-xs font-black text-muted-foreground uppercase tracking-widest opacity-60">
          <div className="w-16 mr-5"></div>
          <div className="flex-1 px-4">{t('admin.users_management.name_email')}</div>
          <div className="w-32 text-center">{t('admin.users_management.role')}</div>
          <div className="w-32 text-left">{t('admin.users_management.actions')}</div>
        </div>

        <div className="flex flex-col gap-4">
          {mockUsers.map((user, idx) => (
            <UserItem key={user.email} user={user} index={idx} />
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button 
          variant="ghost" 
          className="text-primary font-black text-md gap-3 hover:bg-primary/5 px-10 h-14 rounded-2xl group transition-all"
        >
          {t('admin.users_management.load_more')}
          <ChevronDown className="size-5 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
