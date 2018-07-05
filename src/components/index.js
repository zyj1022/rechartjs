import React, { Component } from 'react';
import Chart from './chart'

export class Line extends Component {
    render() {
        return (
            <Chart type="line" {...this.props} />
        )
    }
}

export class Bar extends Component {
    render() {
        return (
            <Chart type="bar" {...this.props} />
        )
    }
}

export class Radar extends Component {
    render() {
        return (
            <Chart type="radar" {...this.props} />
        )
    }
}

export class Doughnut extends Component {
    render() {
        return (
            <Chart type="doughnut" {...this.props} />
        )
    }
}

export class Pie extends Component {
    render() {
        return (
            <Chart type="pie" {...this.props} />
        )
    }
}

export class PolarArea extends Component {
    render() {
        return (
            <Chart type="polarArea" {...this.props} />
        )
    }
}

export class Bubble extends Component {
    render() {
        return (
            <Chart type="bubble" {...this.props} />
        )
    }
}

export class Scatter extends Component {
    render() {
        return (
            <Chart type="scatter" {...this.props} />
        )
    }
}

export class HorizontalBar extends Component {
    render() {
        return (
            <Chart type="horizontalBar" {...this.props} />
        )
    }
}
