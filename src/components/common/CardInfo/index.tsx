import { Badge } from '@/components/ui/badge';
import { RiArrowRightUpLine } from '@remixicon/react';

type CardInfoProps = {
  icon: JSX.Element;
  amount: number;
  note: string;
  title: string;
  exchangeRate: string;
};

const CardInfo = ({
  icon,
  amount,
  note,
  exchangeRate,
  title,
}: CardInfoProps) => (
  <div className="flex flex-col items-start justify-center gap-2 rounded-xl border border-solid border-gray-300 px-6 py-4">
    <section className="flex items-center gap-3">
      {icon}
      {title}
    </section>
    <section className="flex items-center gap-2">
      <p className="inline-block pl-1 text-3xl font-semibold">$34,743</p>
      <Badge className="flex" variant="default">
        <RiArrowRightUpLine className="mr-1" size={15} />
        +9.3%
      </Badge>
    </section>
    <p className="mt-2 pl-2 text-xs text-gray-400">+19.8$ than last month</p>
  </div>
);

export default CardInfo;
