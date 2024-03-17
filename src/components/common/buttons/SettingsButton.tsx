import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import { RiLogoutBoxLine, RiSettings3Line } from '@remixicon/react';
import { useContext, useState } from 'react';

const SettingsButton = () => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger className="mt-1 flex w-full items-center justify-start gap-x-4 rounded-lg p-4 transition-all hover:bg-blue-100">
          <span className="max-w-6">
            <RiSettings3Line />
          </span>
          <span className={cn(isCollapsed && 'hidden')}>Settings</span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-start gap-x-2">
              <RiLogoutBoxLine /> Logout
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SettingsButton;
