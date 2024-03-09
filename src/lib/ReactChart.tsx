import { BasicLayoutProps } from '@/types';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';

Chart.register(...registerables);

const ReactChartWrapper = ({ children }: BasicLayoutProps) => <>{children}</>;

export default ReactChartWrapper;
