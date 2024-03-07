import { type RemixiconComponentType } from '@remixicon/react';

export interface SideBarMenu {
  id: number;
  Icon: RemixiconComponentType;
  title: string;
  isActive: boolean;
  href: string;
}
