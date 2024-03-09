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
import { RiLogoutBoxLine, RiSettings3Line } from '@remixicon/react';
import { useState } from 'react';

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="">
      <hr />
      <AlertDialog>
        <AlertDialogTrigger className="mt-1 flex w-full items-center justify-start gap-x-4 rounded-lg p-4 transition-all hover:bg-blue-100">
          <RiSettings3Line />
          <span>Settings</span>
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
            <AlertDialogAction onClick={() => console.log('click ok')}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SettingsButton;
