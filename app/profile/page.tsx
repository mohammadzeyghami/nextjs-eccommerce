'use client';

import { ProfileHeader } from "@/src/modules/profile/components/ProfileHeader";
import { UserBrief } from "@/src/modules/profile/components/UserBrief";
import { QuickActions } from "@/src/modules/profile/components/QuickActions";
import { RecentOrders } from "@/src/modules/profile/components/RecentOrders";
import { ProfileNav } from "@/src/modules/profile/components/ProfileNav";
import { BottomNav } from "@/src/modules/shop/components/bottom-nav";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <ProfileHeader />
      
      <AnimatedSections className="flex-1 pt-20 space-y-8 max-w-7xl mx-auto w-full">
        <UserBrief />
        <QuickActions />
        <RecentOrders />
        <ProfileNav />
      </AnimatedSections>

      <BottomNav />
    </div>
  );
}
