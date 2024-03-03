import { type RemixiconComponentType } from '@remixicon/react';
import { BadgeDelta, Card, Icon } from '@tremor/react';

type CardInfoProps = {
  icon: RemixiconComponentType;
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
  <Card
    className="flex flex-col items-start justify-center rounded-xl px-6 py-4"
    decoration="top"
    decorationColor="indigo"
  >
    <div className="flex items-center">
      <Icon
        className="my-2 ml-0 mr-2 p-0"
        color="indigo"
        icon={icon}
        size="lg"
      />
      <h3 className="text-sm text-gray-600 ">{title}</h3>
    </div>
    <div className="flex items-center gap-2">
      <p className="pl-1 text-3xl font-medium text-tremor-content-strong ">
        $34,743
      </p>
      <BadgeDelta
        className="rounded-full"
        deltaType="moderateIncrease"
        isIncreasePositive={true}
        size="xs"
      >
        +9.3%
      </BadgeDelta>
    </div>
    <p className="mt-2 pl-2 text-xs text-gray-400">+19.8$ than last month</p>
  </Card>
);

export default CardInfo;
