import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { upperCaseFirstLetter } from '@/lib/tools';

type InvestmentLoginFormProps = {
  platform: 'topi' | 'fmarket';
};

const InvestmentLoginForm = ({ platform }: InvestmentLoginFormProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="default">
        Login to {upperCaseFirstLetter(platform)}
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right" htmlFor="name">
            Name
          </Label>
          <Input className="col-span-3" defaultValue="Pedro Duarte" id="name" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right" htmlFor="username">
            Username
          </Label>
          <Input
            className="col-span-3"
            defaultValue="@peduarte"
            id="username"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default InvestmentLoginForm;
