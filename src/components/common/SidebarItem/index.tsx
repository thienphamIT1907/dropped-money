import { SideBarMenu } from '@/components/common/SidebarMenu/types';
import { twClassMerge } from '@/utils/tailwindCustom';
import { Icon } from '@tremor/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItemProps = Omit<SideBarMenu, 'id'>;

const SidebarItem = ({
  title,
  icon,
  href,
  isActive = false,
}: SidebarItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={twClassMerge(
          'p-2 w-full rounded-lg flex justify-start items-center gap-x-2 mt-1',
          pathname === href
            ? 'bg-blue-950 text-white shadow-md'
            : 'hover:bg-blue-100 transition-all',
        )}
      >
        <Icon icon={icon} size="md" />
        {title}
      </div>
    </Link>
  );
};

export default SidebarItem;
