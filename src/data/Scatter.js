import {Colors, ColorAlpha, Rdom} from './utils'

const _ = require('lodash')

export const scatterData = {
  datasets: [
    {
      label: 'January',
      backgroundColor: ColorAlpha(Colors[5], 0.5),
      borderColor: ColorAlpha(Colors[5], 0.6),
      data: _.times(_.random(5, 20), i => {
          return {
            x: _.random(-100, 100),
            y: _.random(-100, 100)
          }
        })
    }, {
      label: 'February',
      backgroundColor: ColorAlpha(Colors[2], 0.5),
      borderColor: ColorAlpha(Colors[2], 0.6),
      data: _.times(_.random(5, 20), i => {
          return {
            x: _.random(-100, 100),
            y: _.random(-100, 100)
          }
        })
    }, {
      label: 'April',
      backgroundColor: ColorAlpha(Colors[0], 0.5),
      borderColor: ColorAlpha(Colors[0], 0.6),
      data: _.times(_.random(5, 20), i => {
          return {
            x: _.random(-100, 100),
            y: _.random(-100, 100)
          }
        })
    }
  ]
};

export const scatterOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Scatter Chart',
    // fontColor: '#fff'
  }
}
