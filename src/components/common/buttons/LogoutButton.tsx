import { RiShutDownLine } from '@remixicon/react';
import { Button, Dialog, DialogPanel, Icon } from '@tremor/react';
import { useState } from 'react';

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(true);
  };
  return (
    <div className="">
      <button
        className="mt-1 flex w-full items-center justify-start gap-x-2 rounded-lg p-2 transition-all hover:bg-blue-100"
        onClick={handleLogout}
      >
        <Icon icon={RiShutDownLine} size="md" />
        <span>Logout</span>
      </button>
      <Dialog onClose={(val) => setIsOpen(val)} open={isOpen} static={true}>
        <DialogPanel className="flex flex-col items-center justify-center text-center">
          <p className=" mt-2 text-tremor-default leading-6 text-tremor-content">
            Are you sure you want to logout ?
          </p>
          <Button className="mt-8 w-1/2" onClick={() => setIsOpen(false)}>
            Logout
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default LogoutButton;
