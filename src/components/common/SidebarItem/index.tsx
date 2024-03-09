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
            ? 'bg-[#0e172a] text-white shadow-md'
            : 'hover:bg-gray-200 transition-all duration-300',
        )}
      >
        {Icon}
        {title}
      </div>
    </Link>
  );
};

export default SidebarItem;
