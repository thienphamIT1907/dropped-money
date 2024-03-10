'use client';

import Header from '@/components/common/Header';
import SidebarMenu from '@/components/common/SidebarMenu';
import { BasicLayoutProps } from '@/types';

const SummaryLayout = ({ children }: BasicLayoutProps) => (
  <main className="flex bg-gray-100">
    <SidebarMenu />
    <div className="flex h-screen w-full flex-col gap-4 overflow-hidden overflow-y-auto p-3">
      <Header />
      <div className="scrollbar-gutter flex h-full items-center justify-center overflow-y-auto rounded-lg bg-white p-6 shadow-sm">
        {children}
      </div>
    </div>
  </main>
);

export default SummaryLayout;
