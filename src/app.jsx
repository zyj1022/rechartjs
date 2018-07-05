import React, {Component} from 'react';

import { Line, Bar, Radar, Doughnut, Pie, PolarArea, Bubble, Scatter, HorizontalBar } from '../lib/index';

import {lineData, lineOptions} from './data/line'
import {barData, barOptions} from './data/bar'
import {horizontalData, horizontalOptions} from './data/HorizontalBar'
import {mixedData, mixedOptions} from './data/mixed'
import {radarData, radarOptions} from './data/radar'
import {pieData, pieOptions} from './data/pie'
import {doughnutData, doughnutOptions} from './data/Doughnut'
import {polarAreaData, polarAreaOptions} from './data/PolarArea'
import {scatterData, scatterOptions} from './data/Scatter'
import {bubbleData, bubbleOptions} from './data/bubble'

import './css/css.css';

const charts = () => {
  return (<div className="chart-list">
    <div className="title-bar">
        <a href="https://github.com/zyj1022/rechartjs">View On GitHub</a>
        <h2><em>React</em> + <i>Chart.js</i> = <em>Re</em><i>chartjs</i></h2>
    </div>
    <div className="row">
      <div className="col">
        <div className="box">
          <Line data={lineData} options={lineOptions}/>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
			<div className="col">
        <div className="box">
          <HorizontalBar data={horizontalData} options={horizontalOptions}/>
        </div>
      </div>
			<div className="col">
        <div className="box">
          <Bar data={mixedData} options={mixedOptions}/>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
      <div className="col">
        <div className="box">
          <Doughnut data={doughnutData} options={doughnutOptions}/>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <Pie data={pieData} options={pieOptions}/>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <PolarArea data={polarAreaData} options={polarAreaOptions} />
        </div>
      </div>
      <div className="col">
        <div className="box">
          <Bubble data={bubbleData} options={bubbleOptions}/>
        </div>
      </div>
      <div className="col">
        <div className="box">
          <Scatter data={scatterData} options={scatterOptions}/>
        </div>
      </div>

    </div>
  </div>);
};

export default class App extends Component {
  render() {
    return charts();
  }
}
