import { RiUser2Fill } from '@remixicon/react';
import { Icon } from '@tremor/react';

const UserAvatar = () => (
  <div className="flex gap-x-1">
    <Icon icon={RiUser2Fill} size="lg" />
    <div>
      <p>Pham Anh Thien</p>
      <p className="text-sm text-gray-400">thienpham@gmail.com</p>
    </div>
  </div>
);

export default UserAvatar;
