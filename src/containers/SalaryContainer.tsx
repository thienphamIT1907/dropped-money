import CardInfo from '@/components/common/CardInfo';
import SalaryChart from '@/components/features/salary/SalaryChart';
import { Calendar } from '@/components/ui/calendar';
import {
  RiCalendar2Line,
  RiCoinsLine,
  RiPulseLine,
  RiShoppingBag3Line,
} from '@remixicon/react';
import { useState } from 'react';

const SalaryContainer = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        <div className="">
          <CardInfo
            amount={477433817}
            icon={<RiCoinsLine />}
            title="Total Salaries"
          />
        </div>
        <div className="">
          <CardInfo icon={<RiShoppingBag3Line />} title="Spendings" />
        </div>
        <div className="">
          <CardInfo
            amount={4}
            icon={<RiCalendar2Line />}
            title="Years of work"
          />
        </div>
        <div className="">
          <CardInfo
            amount={850300}
            icon={<RiPulseLine />}
            title="Salary per day"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(350px,_1fr)_fit-content(100%)]">
        <div className="w-full rounded-lg border border-solid border-gray-300 p-4">
          <SalaryChart />
        </div>
        <div className="flex items-center justify-center rounded-xl border border-solid border-gray-300">
          <Calendar
            formatters={{
              formatWeekNumber: (weekNumber) => `w${weekNumber}`,
            }}
            className="rounded-md border"
            mode="single"
            selected={new Date()}
            ISOWeek
            showWeekNumber
          />
        </div>
      </div>
    </>
  );
};

export default SalaryContainer;

// Tong so tien kiem duoc
// So tien ban kiem duoc trong 1s
// so nam di lam
// Lương một ngày (update theo giây, ngày hành chính)
// api tỉ giá https://api.exchangerate-api.com/v4/latest/USD
