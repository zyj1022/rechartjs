const _ = require('lodash');

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export const white = '#fff'
export const gray900 = '#222b3c'
export const Colors = [
  '#31b1fd',
  '#6610f2',
  '#f86c6b',
  '#dc3545',
  '#fd7e14',
  '#ffc107',
  '#28a745',
  '#20c997',
  '#17a2b8'
]

export const Rdom = (num, start, end) => {
  return _.times(num, i => {
    return _.random(start, _.random(start, end))
  })
}

const Color = global.Color;

export const ColorAlpha = (color, opacity) => {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return Color(color).alpha(alpha).rgbString();
}
