import {Colors, ColorAlpha, Rdom} from './utils'

export const radarData = {
  labels: [
    'January', 'February', 'March', 'April', 'May'
  ],
  datasets: [
    {
      backgroundColor: ColorAlpha(Colors[0], 0.5),
      borderColor: ColorAlpha(Colors[0], 0.7),
      data: Rdom(5, 100, 2000),
      label: 'D0',
      fill: true
    }, {
      backgroundColor: ColorAlpha(Colors[1], 0.5),
      borderColor: ColorAlpha(Colors[1], 0.7),
      data: Rdom(5, 100, 2000),
      hidden: true,
      label: 'D1',
      fill: false
    }, {
      backgroundColor: ColorAlpha(Colors[2], 0.5),
      borderColor: ColorAlpha(Colors[2], 0.7),
      data: Rdom(5, 500, 2000),
      label: 'D2',
      fill: false
    }, {
      backgroundColor: ColorAlpha(Colors[3], 0.5),
      borderColor: ColorAlpha(Colors[3], 0.7),
      data: Rdom(5, 100, 1000),
      label: 'D3',
      fill: false
    }, {
      backgroundColor: ColorAlpha(Colors[4], 0.5),
      borderColor: ColorAlpha(Colors[4], 0.7),
      data: Rdom(5, 1000, 2000),
      label: 'D4',
      fill: false
    }, {
      backgroundColor: ColorAlpha(Colors[5], 0),
      borderColor: ColorAlpha(Colors[5], 0.7),
      data: Rdom(5, 400, 2000),
      label: 'D5',
      fill: false
    }
  ]
};

export const radarOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'RadBar Chart',
    // fontColor: '#fff'
  },
  maintainAspectRatio: true,
  spanGaps: false,
  elements: {
    line: {
      tension: 0.000001
    }
  },
  plugins: {
    filler: {
      propagate: false
    },
    'samples-filler-analyser': {
      target: 'chart-analyser'
    }
  }
}
