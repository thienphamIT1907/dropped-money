import { type RemixiconComponentType } from '@remixicon/react';

export interface SideBarMenu {
  id: number;
  icon: RemixiconComponentType;
  title: string;
  isActive: boolean;
  href: string;
}
