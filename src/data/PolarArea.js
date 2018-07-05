import {Colors, ColorAlpha, Rdom} from './utils'

export const polarAreaData = {
  labels: [
    'January', 'February', 'March', 'April', 'May'
  ],
  datasets: [
    {
      label: "Population (millions)",
      backgroundColor: [
          ColorAlpha(Colors[1], 0.2),
          ColorAlpha(Colors[4], 0.2),
          ColorAlpha(Colors[2], 0.2),
          ColorAlpha(Colors[6], 0.2),
          ColorAlpha(Colors[3], 0.2),
        ],
      borderWidth: 3,
      data: Rdom(5, 150, 1500)
    }
  ]
};

export const polarAreaOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'PolarArea Chart',
    // fontColor: '#fff'
  }
}
