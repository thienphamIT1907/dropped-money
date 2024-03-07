import LogoutButton from '@/components/common/buttons/LogoutButton';
import Logo from '@/components/common/Logo';
import SidebarItem from '@/components/common/SidebarItem';
import { SIDEBAR_ROUTES } from '@/constants/routes';

const SidebarMenu = () => (
  <div className="fixed inset-y-0 z-10 flex size-full max-w-[230px] flex-col justify-between gap-y-4 overflow-hidden overflow-y-auto rounded-lg py-4 pl-4">
    <div>
      <Logo />
      <div className="mt-9 flex flex-col gap-y-2">
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
      <LogoutButton />
    </div>
  </div>
);

export default SidebarMenu;
