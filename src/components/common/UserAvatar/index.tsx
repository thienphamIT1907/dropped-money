import { RiUser3Line } from '@remixicon/react';
import Image from 'next/image';

const UserAvatar = () => {
  const hasAvatar = true;
  return (
    <div className="flex items-center justify-center gap-x-2">
      {hasAvatar ? (
        <Image
          alt="avatar"
          height={40}
          src={'/assets/mock-avatar-2.png'}
          width={40}
        />
      ) : (
        <RiUser3Line size={25} />
      )}

      <div className="leading-6">
        <p className="font-medium">Thien Pham</p>
        <p className="text-xs text-gray-400">thienpham@gmail.com</p>
      </div>
    </div>
  );
};

export default UserAvatar;
