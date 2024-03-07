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
import { RiLogoutBoxLine } from '@remixicon/react';
import { useState } from 'react';

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(true);
  };
  return (
    <div className="">
      <hr />
      <AlertDialog>
        <AlertDialogTrigger className="mt-1 flex w-full items-center justify-start gap-x-4 rounded-lg p-4 transition-all hover:bg-blue-100 ">
          <RiLogoutBoxLine />
          <span>Logout</span>
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

export default LogoutButton;
