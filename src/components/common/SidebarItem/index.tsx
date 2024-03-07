import { SideBarMenu } from '@/components/common/SidebarMenu/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItemProps = Omit<SideBarMenu, 'id'>;

const SidebarItem = ({
  title,
  Icon,
  href,
  isActive = false,
}: SidebarItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={cn(
          'p-4 w-full rounded-lg flex justify-start items-center gap-x-4 mt-1',
          pathname === href
            ? 'bg-blue-950 text-white shadow-md'
            : 'hover:bg-blue-100 transition-all',
        )}
      >
        {Icon}
        {title}
      </div>
    </Link>
  );
};

export default SidebarItem;
