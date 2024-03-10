import { SideBarMenu } from '@/components/common/SidebarMenu/types';
import Tooltip from '@/components/common/Tooltip';
import { cn } from '@/lib/utils';
import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

type SidebarItemProps = Omit<SideBarMenu, 'id'>;

const SidebarItem = ({
  title,
  Icon,
  href,
  isActive = false,
}: SidebarItemProps) => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;
  const pathname = usePathname();

  return (
    <Tooltip isShow={isCollapsed} title={title}>
      <Link href={href}>
        <div
          className={cn(
            'p-4 w-full rounded-lg flex justify-start items-center gap-x-4 mt-1 transition-all',
            pathname === href
              ? 'bg-[#0e172a] text-white shadow-md'
              : 'hover:bg-gray-200 transition-all ',
          )}
        >
          <span className="max-w-6">{Icon}</span>

          <span className={cn(isCollapsed && 'opacity-0 duration-300')}>
            {title}
          </span>
        </div>
      </Link>
    </Tooltip>
  );
};

export default SidebarItem;
