'use client';

import React from 'react';
import { UserHeader } from '@/src/modules/dashboard/users/components/UserHeader';
import { UserList } from '@/src/modules/dashboard/users/components/UserList';
import { AnimatedSections } from '@/src/share-components/molecules/animated-sections';

export default function UsersManagementPage() {
  return (
    <AnimatedSections className="max-w-7xl mx-auto w-full">
      <UserHeader />
      <UserList />
    </AnimatedSections>
  );
}
