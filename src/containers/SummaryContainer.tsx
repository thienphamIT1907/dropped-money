'use client';

import CardInfo from '@/components/common/CardInfo';
import {
  RiArchiveDrawerLine,
  RiArrowDownFill,
  RiArrowUpFill,
  RiLineChartFill,
} from '@remixicon/react';

const SummaryContainer = () => (
  <div className="grid size-full auto-rows-max grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6 ">
    <div className="col-span-1">
      <CardInfo icon={<RiArrowDownFill />} title="Earnings" />
    </div>
    <div className="col-span-1">
      <CardInfo icon={<RiArrowUpFill />} title="Spendings" />
    </div>
    <div className="col-span-1">
      <CardInfo icon={<RiArchiveDrawerLine />} title="Savings" />
    </div>
    <div className="col-span-1">
      <CardInfo icon={<RiLineChartFill />} title="Investment" />
    </div>
    <div className="xs:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] col-span-full grid w-full p-4 lg:grid-rows-subgrid">
      <div className="lg:col-[1_/_4]">{/* <SalaryStatisticsPanel /> */}</div>
      <div className="lg:col-[4_/_6]">{/* <TotalSavingsPanel /> */}</div>
    </div>

    <div className="col-span-full pb-2">
      {/* <LatestTransactionsPanel /> */}
    </div>
    {/* <Button>Hello shadcn button</Button> */}
  </div>
);

export default SummaryContainer;
