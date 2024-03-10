import CardInfo from '@/components/common/CardInfo';
import SalaryChart from '@/components/features/salary/SalaryChart';
import {
  RiCalendar2Line,
  RiCoinsLine,
  RiPulseLine,
  RiShoppingBag3Line,
} from '@remixicon/react';

const SalaryContainer = () => (
  <>
    <div className="grid auto-rows-max grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
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
        <CardInfo amount={4} icon={<RiCalendar2Line />} title="Years of work" />
      </div>
      <div className="">
        <CardInfo
          amount={850300}
          icon={<RiPulseLine />}
          title="Salary per day"
        />
      </div>
    </div>
    <div className="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
      <div className="col-span-2 row-auto rounded-lg border border-solid border-gray-300 p-4">
        <SalaryChart />
      </div>
      <div className="rounded-xl border border-solid border-gray-300">Area</div>
    </div>
  </>
);

export default SalaryContainer;

// Tong so tien kiem duoc
// So tien ban kiem duoc trong 1s
// so nam di lam
// Lương một ngày (update theo giây, ngày hành chính)
// api tỉ giá https://api.exchangerate-api.com/v4/latest/USD
