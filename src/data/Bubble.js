import {Colors, ColorAlpha, Rdom} from './utils'

const _ = require('lodash')

export const bubbleData = {
  datasets: [
    {
      label: ["January"],
      backgroundColor: ColorAlpha(Colors[5], 0.5),
      borderColor: ColorAlpha(Colors[5], 0.0),
      data: [
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 10
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        }
      ]
    }, {
      label: ["February"],
      backgroundColor:ColorAlpha(Colors[2], 0.5),
      borderColor: ColorAlpha(Colors[2], 0.5),
      data: [
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 10
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 10
        },{
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 10
        }
      ]
    }, {
      label: ["March"],
      backgroundColor: ColorAlpha(Colors[4], 0.5),
      borderColor: ColorAlpha(Colors[4], 0.5),
      data: [
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        }
      ]
    }, {
      label: ["April"],
      backgroundColor: ColorAlpha(Colors[7], 0.5),
      borderColor: ColorAlpha(Colors[7], 0.5),
      data: [
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        },
        {
          x: _.random(10000, 1000000),
          y: _.random(1, 100),
          r: 15
        }        
      ]
    }
  ]
};

export const bubbleOptions = {
  responsive: true,
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Bubble Chart',
    // fontColor: '#fff'
  }
}
