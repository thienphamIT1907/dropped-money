import { ReactNode } from 'react';

export interface Route {
  path: string;
  title: string;
}

export interface BasicLayoutProps {
  children: ReactNode;
}

export interface RealFundCertificate {}

export type MonthsInYear =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
