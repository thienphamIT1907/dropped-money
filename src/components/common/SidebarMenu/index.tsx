import LogoutButton from '@/components/common/buttons/LogoutButton';
import SettingsButton from '@/components/common/buttons/SettingsButton';
import Logo from '@/components/common/Logo';
import SidebarItem from '@/components/common/SidebarItem';
import { SIDEBAR_ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import { useContext } from 'react';

const SidebarMenu = () => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;

  return (
    <div
      className={cn(
        'flex size-full h-screen max-w-[230px] w-full flex-col justify-between gap-y-4 overflow-hidden overflow-y-auto rounded-lg py-4 pl-2 transition-all duration-500 ease-in-out',
        {
          'max-w-[67px]': isCollapsed,
        },
      )}
    >
      <div>
        <Logo />
        <div className="mt-[25px] flex flex-col gap-y-2">
          {SIDEBAR_ROUTES.map(({ Icon, title, isActive, id, href }) => (
            <SidebarItem
              Icon={Icon}
              href={href}
              isActive={isActive}
              key={id}
              title={title}
            />
          ))}
        </div>
      </div>
      <div>
        <hr />
        <SettingsButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default SidebarMenu;
