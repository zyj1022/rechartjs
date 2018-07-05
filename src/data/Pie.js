import {Colors, ColorAlpha, Rdom} from './utils'

export const pieData = {
  labels: [
    'January', 'February', 'March', 'April', 'May'
  ],
  datasets: [
    {
      label: "PIE",
      backgroundColor: [
        ColorAlpha(Colors[0], 0.6),
        ColorAlpha(Colors[2], 0.6),
        ColorAlpha(Colors[4], 0.6),
        ColorAlpha(Colors[6], 0.6),
        ColorAlpha(Colors[7], 0.6),
      ],
      borderWidth: 3,
      data: Rdom(5, 50, 500)
    }
  ]
};

export const pieOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Pie Chart',
    // fontColor: '#fff'
  }
}
