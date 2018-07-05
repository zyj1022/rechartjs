# Rechartjs

React + Chart.js = Rechartjs

> React component for [Chart.js](http://www.chartjs.org)

## 安装方法 Installation
`npm install rechartjs chart.js --save`

## 预览 [Demo](http://zyj1022.github.io/demos/rechartjs/)
![chartjs]( http://og8z552x2.bkt.clouddn.com/chartjs1.jpg)

## 本机运行

`npm run dev`

## 使用方法 Usage

- data(必需)
- options(可选)

```
import { Bar, Line } from 'rechartjs'

<Bar data={barData} options={barOptions} />

<Line data={lineData}  options={lineOptions} />

```

## Properties

- data: PropTypes.object.isRequired
- width: PropTypes.number
- height: PropTypes.number
- options: PropTypes.object


## 图表类型 Chart type
- line
- bar
- radar
- doughnut
- pie
- polarArea
- bubble
- scatter
- horizontalBar

## License

MIT License
