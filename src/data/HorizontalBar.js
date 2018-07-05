import {Colors, ColorAlpha, Rdom} from './utils'

export const horizontalData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May'
  ],
  datasets: [
    {
      label: 'Dataset1',
      backgroundColor: ColorAlpha(Colors[2], 0.3),
      borderColor: ColorAlpha(Colors[2], 0.7),
      borderWidth: 2,
      hoverBackgroundColor: ColorAlpha(Colors[2], 0.5),
      hoverBorderColor: ColorAlpha(Colors[2], 0.5),
      data: Rdom(5, -100, 100)
    }, {
      label: 'Dataset2',
      backgroundColor: ColorAlpha(Colors[0], 0.3),
      borderColor: ColorAlpha(Colors[0], 0.7),
      borderWidth: 2,
      hoverBackgroundColor: ColorAlpha(Colors[0], 0.5),
      hoverBorderColor: ColorAlpha(Colors[0], 0.5),
      data: Rdom(5, -100, 100)
    }
  ]
};

export const horizontalOptions = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    rectangle: {
      borderWidth: 2
    }
  },
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Horizontal Bar Chart'
  }
}
