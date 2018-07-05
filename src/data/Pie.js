import {Colors, ColorAlpha, Rdom} from './utils'

export const pieData = {
  labels: [
    'January', 'February', 'March', 'April', 'May'
  ],
  datasets: [
    {
      label: "PIE",
      backgroundColor: [
        ColorAlpha(Colors[0], 0.2),
        ColorAlpha(Colors[2], 0.2),
        ColorAlpha(Colors[4], 0.2),
        ColorAlpha(Colors[6], 0.2),
        ColorAlpha(Colors[7], 0.2),
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
