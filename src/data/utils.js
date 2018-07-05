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
// HEX TO RGBA
export const ColorAlpha = (color, opacity) => {
  var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)){
        c= color.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', ' + opacity +')';
    }
    throw new Error('Bad Hex');
}
