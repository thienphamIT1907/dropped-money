'use client';

import { BasicLayoutProps } from '@/types';
import { createContext, useState } from 'react';

export interface SidebarContextValue {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextValue | {}>({});

const SidebarProvider = ({ children }: BasicLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
