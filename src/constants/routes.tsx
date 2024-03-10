import { SideBarMenu } from '@/components/common/SidebarMenu/types';
import {
  RiArrowLeftRightLine,
  RiHomeOfficeLine,
  RiStackLine,
  RiWallet3Line,
} from '@remixicon/react';
export const SIDEBAR_ROUTES: SideBarMenu[] = [
  {
    id: 1,
    Icon: <RiHomeOfficeLine size={25} />,
    title: 'Summary',
    isActive: true,
    href: '/',
  },
  {
    id: 2,
    Icon: <RiWallet3Line size={25} />,
    title: 'Salary',
    isActive: false,
    href: '/salary',
  },
  {
    id: 3,
    Icon: <RiStackLine size={25} />,
    title: 'Investment',
    isActive: false,
    href: '/investment',
  },
  {
    id: 4,
    Icon: <RiArrowLeftRightLine size={25} />,
    title: 'Transactions',
    isActive: false,
    href: '/transactions',
  },
];
