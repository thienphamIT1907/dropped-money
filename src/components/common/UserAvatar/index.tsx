import { RiUser3Line } from '@remixicon/react';

const UserAvatar = () => (
  <div className="flex items-center justify-center gap-x-4">
    <RiUser3Line size={25} />
    <div className="leading-7">
      <p>Pham Anh Thien</p>
      <p className="text-sm text-gray-400">thienpham@gmail.com</p>
    </div>
  </div>
);

export default UserAvatar;
