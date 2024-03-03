import { SideBarMenu } from '@/components/common/SidebarMenu/types';
import {
  RiArrowLeftRightFill,
  RiBarChart2Fill,
  RiStackFill,
  RiWallet2Fill,
} from '@remixicon/react';

export const SIDEBAR_ROUTES: SideBarMenu[] = [
  {
    id: 1,
    icon: RiBarChart2Fill,
    title: 'Summary',
    isActive: true,
    href: '/',
  },
  {
    id: 2,
    icon: RiWallet2Fill,
    title: 'Salary',
    isActive: false,
    href: '/salary',
  },
  {
    id: 3,
    icon: RiStackFill,
    title: 'Investment',
    isActive: false,
    href: '/investment',
  },
  {
    id: 4,
    icon: RiArrowLeftRightFill,
    title: 'Transactions',
    isActive: false,
    href: '/transactions',
  },
];
