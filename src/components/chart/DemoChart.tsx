import ReactChartWrapper from '@/lib/ReactChart';
import { Doughnut } from 'react-chartjs-2';

const DemoChart = () => (
  <ReactChartWrapper>
    <Doughnut
      data={{
        labels: ['Quỹ cổ phiếu', 'Quỹ trái phiếu'],
        datasets: [
          {
            data: [41.3, 58.7],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            display: true,
            fullSize: true,
            align: 'center',
            title: {
              display: true,
              text: 'Fund Composition',
              position: 'center',
              font: {
                size: 20,
                weight: 'bold',
              },
            },
          },
        },
        aspectRatio: 1,
        scales: {
          x: {
            beginAtZero: true,
            display: false,
          },
          y: {
            beginAtZero: true,
            display: false,
          },
        },
      }}
      height={300}
      width={300}
    />
  </ReactChartWrapper>
);

export default DemoChart;
