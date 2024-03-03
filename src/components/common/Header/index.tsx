import UserAvatar from '@/components/common/UserAvatar';
import { upperCaseFirstLetter } from '@/utils/tools';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const generateHeaderByCurrentPathname = () => {
    let headerPrefix = 'Summary';
    const splittedPath: string = pathname.split('/')[1];
    if (splittedPath !== '') {
      headerPrefix = upperCaseFirstLetter(splittedPath);
    }

    return `${headerPrefix} Board`;
  };

  return (
    <div className="flex w-full items-center justify-between gap-x-8 rounded-md bg-white px-4 py-2 shadow-sm">
      <h2 className="xs:min-w-[200px] text-xl font-medium">
        {generateHeaderByCurrentPathname()}
      </h2>
      <UserAvatar />
    </div>
  );
};

export default Header;
