import { cn } from '@/lib/utils';
import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import Image from 'next/image';
import { useContext } from 'react';
const Logo = () => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;
  return (
    <div className={cn('m-1 flex items-center justify-center gap-x-2')}>
      <Image alt="logo.png" height={35} src="/assets/logo.png" width={35} />

      <h1
        className={cn(
          'truncate text-center text-xl font-semibold',
          isCollapsed && 'hidden',
        )}
      >
        Dropped Money
      </h1>
    </div>
  );
};

export default Logo;
