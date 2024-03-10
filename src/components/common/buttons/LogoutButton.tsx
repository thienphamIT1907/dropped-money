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
import { RiLogoutBoxLine } from '@remixicon/react';
import { useContext, useState } from 'react';

const LogoutButton = () => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(true);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="mt-1 flex w-full items-center justify-start gap-x-4 rounded-lg p-4 transition-all hover:bg-blue-100 ">
        <span className="max-w-6">
          <RiLogoutBoxLine />
        </span>
        <span className={cn(isCollapsed && 'opacity-0')}>Logout</span>
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
  );
};

export default LogoutButton;
