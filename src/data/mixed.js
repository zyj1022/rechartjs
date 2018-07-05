import {Colors, ColorAlpha, Rdom} from './utils'

export const mixedData = {
  labels: [
    '美国', '日本', '俄罗斯', '土耳其'
  ],
  datasets: [
    {
      label: 'January',
      type: 'line',
      borderWidth: 2,
      borderColor: ColorAlpha(Colors[2], 0.2),
      backgroundColor: ColorAlpha(Colors[2], 0.7),
      data: Rdom(4, 100, 1000),
      fill: false
    }, {
      label: 'February',
      type: 'line',
      borderWidth: 2,
      borderColor: ColorAlpha(Colors[0], 0.2),
      backgroundColor: ColorAlpha(Colors[0], 0.7),
      data: Rdom(4, 500, 2000),
      fill: false
    }, {
      label: 'March',
      type: 'bar',
      borderWidth: 2,
      borderColor: ColorAlpha(Colors[1], 0.2),
      backgroundColor: ColorAlpha(Colors[1], 0.7),
      data: Rdom(4, 200, 1000),
    }, {
      label: 'April',
      type: 'bar',
      borderWidth: 2,
      borderColor: ColorAlpha(Colors[5], 0.2),
      backgroundColor: ColorAlpha(Colors[5], 0.7),
      data: Rdom(4, 500, 3000),
    }
  ]
};

export const mixedOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Bar Chart',
    // fontColor: '#fff'
  }
}
