import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

class ChartJS extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		this.initializeChart(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.destroyChart();
		this.initializeChart(nextProps);
	}

	componentWillUnmount() {
		this.destroyChart();
	}

	getChart() {
		return this.chart;
	}

	destroyChart() {
		this.chart && this.chart.destroy();
	}

	initializeChart(props) {
		const { data, options, type, plugins } = props;
		const el = ReactDOM.findDOMNode(this.canvasRef.current);
		const ctx = el.getContext('2d');
		this.chart = new Chart(ctx, {
			type: type,
			data: data,
			options: options || {},
			plugins: plugins || {}
		});
	}

	exclude(obj, filters) {
		let results = {};
		for (let key in obj) {
			if (filters[key]) continue;
			results[key] = obj[key];
		}
		return results;
	}

	render() {
		const canvasStyle = {
			width: this.props.width ? this.props.width : 'auto',
			height: this.props.height ? this.props.height : 'auto'
		};
		const ref = this.props.ref ? this.props.ref : this.canvasRef;
		const _props = this.exclude(this.props, {
			data: true,
			options: true,
			type: true
		});
		return <canvas ref={ref} style={canvasStyle} {..._props} />;
	}
}

ChartJS.propTypes = {
	data: PropTypes.object.isRequired,
	options: PropTypes.object,
	type: PropTypes.oneOf([
		'line',
		'bar',
		'radar',
		'doughnut',
		'pie',
		'polarArea',
		'bubble',
		'scatter',
		'horizontalBar'
	]).isRequired
};

export default ChartJS;
