import {Colors, ColorAlpha, white, gray900, Rdom} from './utils'

export const doughnutData = {
  labels: [
      'January',
      'February',
      'March',
      'April',
      'May'
    ],
    datasets: [
      {
        label: "Doughnut",
        backgroundColor: [
          ColorAlpha(Colors[0], 0.6),
          ColorAlpha(Colors[1], 0.6),
          ColorAlpha(Colors[3], 0.6),
          ColorAlpha(Colors[5], 0.6),
          ColorAlpha(Colors[2], 0.6),
        ],
        borderColor: ColorAlpha(white, 0),
        borderWidth: 3,
        data: Rdom(5, 50, 500)
      }
    ]
};

export const doughnutOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Doughnut Chart',
    // fontColor: '#fff'
  }
}
