'use client';

import DemoChart from '@/components/chart/DemoChart';
import CardInfo from '@/components/common/CardInfo';
import { DataTableDemo } from '@/components/features/investment/Fmarket/DataTable';
import { RiCoinLine } from '@remixicon/react';
import { ColumnDef } from '@tanstack/react-table';

// TODO: sync voi api cua fmarket
export type FundCertificate = {
  id: string;
  name: string;
  amount: number;
  avgPrice: number;
  latestPrice: number;
  evaluatePrice: number;
  rate: string;
};

export const columns: ColumnDef<FundCertificate>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'avgPrice',
    header: 'Average Price',
  },
  {
    accessorKey: 'latestPrice',
    header: 'Latest Price',
  },
  {
    accessorKey: 'rate',
    header: 'Rate',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];

const data: FundCertificate[] = [
  {
    id: '728ed52f',
    name: 'MBBOND',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e2d52f',
    name: 'PVBF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e1254d52f',
    name: 'DCIP',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 10,
    rate: '10%',
    amount: 10000,
  },
  {
    id: '728e15d52f',
    name: 'VMEEF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },

  {
    id: '728ed52f',
    name: 'MBBOND',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e2d52f',
    name: 'PVBF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e1254d52f',
    name: 'DCIP',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 10,
    rate: '10%',
    amount: 10000,
  },
  {
    id: '728e15d52f',
    name: 'VMEEF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728ed52f',
    name: 'MBBOND',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e2d52f',
    name: 'PVBF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e1254d52f',
    name: 'DCIP',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 10,
    rate: '10%',
    amount: 10000,
  },
  {
    id: '728e15d52f',
    name: 'VMEEF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728ed52f',
    name: 'MBBOND',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e2d52f',
    name: 'PVBF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
  {
    id: '728e1254d52f',
    name: 'DCIP',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 10,
    rate: '10%',
    amount: 10000,
  },
  {
    id: '728e15d52f',
    name: 'VMEEF',
    avgPrice: 300000,
    latestPrice: 5000,
    evaluatePrice: 100,
    rate: '10%',
    amount: 1000,
  },
];

const FmarketContainer = () => (
  <>
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
      <div className="">
        <CardInfo amount={9433682} icon={<RiCoinLine />} title="Total Assets" />
      </div>
      <div className="">
        <CardInfo amount={9433682} icon={<RiCoinLine />} title="Total Assets" />
      </div>
      <div className="">
        <CardInfo amount={9433682} icon={<RiCoinLine />} title="Total Assets" />
      </div>
      <div className="">
        <CardInfo amount={9433682} icon={<RiCoinLine />} title="Total Assets" />
      </div>
    </div>
    <div className="mb-3 mt-6 grid grid-flow-dense grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
      <div className=" col-span-3 row-span-4 overflow-y-auto rounded-xl border border-solid border-gray-300 p-4">
        <DataTableDemo />
      </div>
      <div className=" auto-cols-auto rounded-xl border border-solid border-gray-300 p-4">
        <DemoChart />
      </div>
      <div className=" rounded-xl border border-solid border-gray-300 p-4">
        List
      </div>
    </div>
  </>
);

export default FmarketContainer;

/** fetch api
 * Tổng tài sản / giá trị danh mục
 *
 * Chênh lệch lời lỗ
 *
 *
 * maskedValue
 *
 * Donut chart cổ phiếu / trái phiếu
 *
 */
