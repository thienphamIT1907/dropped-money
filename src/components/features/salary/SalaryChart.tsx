import ReactChartWrapper from '@/lib/ReactChart';
import { getMonthFromString } from '@/lib/tools';
import { MonthsInYear } from '@/types';
import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface SalaryPerMonth {
  month: MonthsInYear;
  salary: number;
  note?: string;
}

interface salaryDataResponse {
  data: {
    [key: string]: SalaryPerMonth[];
  };
}

const mockDataPerYear: salaryDataResponse = {
  data: {
    '2021': [
      {
        month: 'January',
        salary: 0,
        note: '',
      },
      {
        month: 'February',
        salary: 0,
        note: '',
      },
      {
        month: 'March',
        salary: 4491304,
        note: '',
      },
      {
        month: 'April',
        salary: 5100000,
        note: '',
      },
      {
        month: 'May',
        salary: 5174348,
        note: '',
      },
      {
        month: 'June',
        salary: 5370000,
        note: '',
      },
      {
        month: 'July',
        salary: 5370000,
        note: '',
      },
      {
        month: 'August',
        salary: 8559000,
        note: '',
      },
      {
        month: 'September',
        salary: 8559000,
        note: '',
      },
      {
        month: 'October',
        salary: 8559000,
        note: '',
      },
      {
        month: 'November',
        salary: 8559000,
        note: '',
      },
      {
        month: 'December',
        salary: 8559000,
        note: '',
      },
    ],
  },
};

const mockDataAllYear: salaryDataResponse = {
  data: {
    '2021': [
      {
        month: 'January',
        salary: 0,
        note: '',
      },
      {
        month: 'February',
        salary: 0,
        note: '',
      },
      {
        month: 'March',
        salary: 4491304,
        note: '',
      },
      {
        month: 'April',
        salary: 5100000,
        note: '',
      },
      {
        month: 'May',
        salary: 5174348,
        note: '',
      },
      {
        month: 'June',
        salary: 5370000,
        note: '',
      },
      {
        month: 'July',
        salary: 5370000,
        note: '',
      },
      {
        month: 'August',
        salary: 8559000,
        note: '',
      },
      {
        month: 'September',
        salary: 8559000,
        note: '',
      },
      {
        month: 'October',
        salary: 8559000,
        note: '',
      },
      {
        month: 'November',
        salary: 8559000,
        note: '',
      },
      {
        month: 'December',
        salary: 8559000,
        note: '',
      },
    ],
    '2022': [
      {
        month: 'January',
        salary: 8559000,
        note: '',
      },
      {
        month: 'February',
        salary: 8559000,
        note: '',
      },
      {
        month: 'March',
        salary: 6105000,
        note: '',
      },
      {
        month: 'April',
        salary: 0,
        note: '',
      },
      {
        month: 'May',
        salary: 10909091,
        note: '',
      },
      {
        month: 'June',
        salary: 12065455,
        note: '',
      },
      {
        month: 'July',
        salary: 17269286,
        note: '',
      },
      {
        month: 'August',
        salary: 14562500,
        note: '',
      },
      {
        month: 'September',
        salary: 13987500,
        note: '',
      },
      {
        month: 'October',
        salary: 17958500,
        note: '',
      },
      {
        month: 'November',
        salary: 20283875,
        note: '',
      },
      {
        month: 'December',
        salary: 27348081,
        note: '',
      },
    ],
    '2023': [
      {
        month: 'January',
        salary: 15849777,
        note: '',
      },
      {
        month: 'February',
        salary: 13987500,
        note: '',
      },
      {
        month: 'March',
        salary: 19205000,
        note: '',
      },
      {
        month: 'April',
        salary: 16955000,
        note: '',
      },
      {
        month: 'May',
        salary: 16505000,
        note: '',
      },
      {
        month: 'June',
        salary: 20928600,
        note: '',
      },
      {
        month: 'July',
        salary: 16435000,
        note: '',
      },
      {
        month: 'August',
        salary: 16955000,
        note: '',
      },
      {
        month: 'September',
        salary: 18665000,
        note: '',
      },
      {
        month: 'October',
        salary: 16505000,
        note: '',
      },
      {
        month: 'November',
        salary: 16505000,
        note: '',
      },
      {
        month: 'December',
        salary: 16955000,
        note: '',
      },
    ],
    '2024': [
      {
        month: 'January',
        salary: 28670000,
        note: '',
      },
      {
        month: 'February',
        salary: 17405000,
        note: '',
      },
      {
        month: 'March',
        salary: 0,
        note: '',
      },
      {
        month: 'April',
        salary: 0,
        note: '',
      },
      {
        month: 'May',
        salary: 0,
        note: '',
      },
      {
        month: 'June',
        salary: 0,
        note: '',
      },
      {
        month: 'July',
        salary: 0,
        note: '',
      },
      {
        month: 'August',
        salary: 0,
        note: '',
      },
      {
        month: 'September',
        salary: 0,
        note: '',
      },
      {
        month: 'October',
        salary: 0,
        note: '',
      },
      {
        month: 'November',
        salary: 0,
        note: '',
      },
      {
        month: 'December',
        salary: 0,
        note: '',
      },
    ],
  },
};

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  indexAxis: 'x' as const,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'All your salaries',
      font: { size: 15 },
    },
  },
};

const SalaryChart = () => {
  const handleDataPerYear = () => {
    const labels: MonthsInYear[] = [];
    const data: number[] = [];
    mockDataPerYear.data[2021].forEach(({ salary, note, month }) => {
      labels.push(month);
      data.push(salary);
    });

    return { data, labels };
  };

  const handleDataAllYear = () => {
    const labels: string[] = [];
    const data: number[] = [];

    for (const prop in mockDataAllYear.data) {
      mockDataAllYear.data[prop].map(({ month, salary }) => {
        if (salary !== 0) {
          data.push(salary);
          labels.push(`${getMonthFromString(month)}/${prop}`);
        }
      });
    }

    return { data, labels };
  };

  const { data, labels } = handleDataAllYear();
  // const { data, labels } = handleDataPerYear();
  return (
    <ReactChartWrapper>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Salary',
              borderRadius: 5,
              grouped: true,
              data,
              backgroundColor: '#0e172a',
              borderWidth: 1,
            },
          ],
        }}
        className="overflow-auto"
        height={300}
        options={options}
        width="100%"
      />
    </ReactChartWrapper>
  );
};

export default SalaryChart;
