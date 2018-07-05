import {Colors, ColorAlpha, Rdom} from './utils'


export const barData = {
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
      label: 'Charts Bar1',
      backgroundColor: ColorAlpha(Colors[2], 0.7),
      borderColor: ColorAlpha(Colors[2], 0.3),
      borderWidth: 2,
      hoverBackgroundColor: ColorAlpha(Colors[2], 0.5),
      hoverBorderColor: ColorAlpha(Colors[2], 0.5),
      data: Rdom(7, 100, 1000)
    },
    {
      label: 'Charts Bar2',
      backgroundColor: ColorAlpha(Colors[0], 0.7),
      borderColor: ColorAlpha(Colors[0], 0.3),
      borderWidth: 2,
      hoverBackgroundColor: ColorAlpha(Colors[0], 0.5),
      hoverBorderColor: ColorAlpha(Colors[0], 0.5),
      data: Rdom(7, 100, 1000)
    }
  ]
};

export const barOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'Bar Chart',
    // fontColor: '#fff'
  }
}
