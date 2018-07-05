import {Colors, ColorAlpha, Rdom} from './utils'

// Line Chart Multiple Axes
export const lineData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets: [
    {
      label: 'My First dataset',
      borderColor: ColorAlpha(Colors[0], 0.8),
      backgroundColor: ColorAlpha(Colors[0], 0.8),
      fill: false,
      data: Rdom(7, 100, 2000),
      yAxisID: 'y-axis-1'
    }, {
      label: 'My Second dataset',
      borderColor: ColorAlpha(Colors[2], 0.8),
      backgroundColor: ColorAlpha(Colors[2], 0.8),
      fill: false,
      data: Rdom(7, 100, 2000),
      yAxisID: 'y-axis-2'
    }
  ]
};

export const lineOptions = {
  responsive: true,
  hoverMode: 'index',
  stacked: false,
  title: {
    display: true,
    text: 'Line Chart - Multi Axis',
    // fontColor: '#fff'
  },
  scales: {
    yAxes: [
      {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: 'left',
        id: 'y-axis-1'
      }, {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: 'right',
        id: 'y-axis-2',

        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        }
      }
    ]
  }
}
