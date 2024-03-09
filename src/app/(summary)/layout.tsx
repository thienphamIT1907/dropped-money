'use client';

import Header from '@/components/common/Header';
import SidebarMenu from '@/components/common/SidebarMenu';
import { BasicLayoutProps } from '@/types';

const SummaryLayout = ({ children }: BasicLayoutProps) => (
  <main className="bg-gray-100">
    <SidebarMenu />
    <div className="ml-[230px] flex h-screen flex-col gap-4 overflow-hidden overflow-y-auto p-4">
      <Header />
      <div className=" flex h-full items-center justify-center overflow-y-auto rounded-lg bg-white p-6 shadow-sm">
        {children}
      </div>
    </div>
  </main>
);

export default SummaryLayout;
