import ReactECharts from 'echarts-for-react';

interface IProps {
  title: string;
  color: string;
  ratio: number;
}

const PieChart = (props: IProps) => {
  const { title, color, ratio } = props;

  const targetCount = ((ratio * 100).toFixed(2) as any) - 0;
  const lastCount = ((100 - targetCount).toFixed(2) as any) - 0;
  const data = [
    { value: targetCount, name: title },
    { value: lastCount, name: '' },
  ];
  const subTitle = `${targetCount}%`;

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const {
          data: { name, value },
          percent,
        } = params;
        if (params.name === title) {
          // return '{b}: {c} ({d}%)'
          return `${name}: ${value} (${percent}%)`;
        }
        return `${value} (${percent}%)`;
      },
    },
    title: {
      text: title,
      subtext: subTitle,
      left: 'center',
      top: '40%',
      textStyle: {
        fontSize: 16,
      },
      subtextStyle: {
        fontSize: 12,
      },
    },
    legend: {
      top: '0',
      left: 'center',
      show: false,
    },
    series: [
      {
        hoverAnimation: false,
        type: 'pie',
        radius: ['75%', '90%'],
        avoidLabelOverlap: false,
        minAngle: 10,
        label: {
          show: false,
          // position: 'center',
          // rotate:30,
          // formatter: '{b}: {d}%',
        },
        clockwise: false,
        emphasis: {
          label: {
            show: false,
          },
        },
        itemStyle: {
          borderRadius: '50%',
        },
        color: [color, 'transparent'],
        data: data,
        z: 100,
        backgroundColor: 'transparent',
      },
      {
        type: 'pie',
        radius: ['75%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        clockwise: false,
        silent: true,
        emphasis: {
          label: {
            show: false,
          },
        },
        minAngle: 5,
        color: [color, 'grey'],
        data: [
          { value: 1, name: 'all' },
          { value: 100, name: 'part' },
        ],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{
        width: 200,
        height: 200,
      }}
    />
  );
};

export default PieChart;
