'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartJS = function (_Component) {
	_inherits(ChartJS, _Component);

	function ChartJS(props) {
		_classCallCheck(this, ChartJS);

		var _this = _possibleConstructorReturn(this, (ChartJS.__proto__ || Object.getPrototypeOf(ChartJS)).call(this, props));

		_this.canvasRef = _react2.default.createRef();
		return _this;
	}

	_createClass(ChartJS, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.initializeChart(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.destroyChart();
			this.initializeChart(nextProps);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.destroyChart();
		}
	}, {
		key: 'getChart',
		value: function getChart() {
			return this.chart;
		}
	}, {
		key: 'destroyChart',
		value: function destroyChart() {
			this.chart && this.chart.destroy();
		}
	}, {
		key: 'initializeChart',
		value: function initializeChart(props) {
			var data = props.data,
			    options = props.options,
			    type = props.type,
			    plugins = props.plugins;

			var el = _reactDom2.default.findDOMNode(this.canvasRef.current);
			var ctx = el.getContext('2d');
			this.chart = new _chart2.default(ctx, {
				type: type,
				data: data,
				options: options || {},
				plugins: plugins || {}
			});
		}
	}, {
		key: 'exclude',
		value: function exclude(obj, filters) {
			var results = {};
			for (var key in obj) {
				if (filters[key]) continue;
				results[key] = obj[key];
			}
			return results;
		}
	}, {
		key: 'render',
		value: function render() {
			var canvasStyle = {
				width: this.props.width ? this.props.width : 'auto',
				height: this.props.height ? this.props.height : 'auto'
			};
			var ref = this.props.ref ? this.props.ref : this.canvasRef;
			var _props = this.exclude(this.props, {
				data: true,
				options: true,
				type: true
			});
			return _react2.default.createElement('canvas', _extends({ ref: ref, style: canvasStyle }, _props));
		}
	}]);

	return ChartJS;
}(_react.Component);

ChartJS.propTypes = {
	data: _propTypes2.default.object.isRequired,
	options: _propTypes2.default.object,
	type: _propTypes2.default.oneOf(['line', 'bar', 'radar', 'doughnut', 'pie', 'polarArea', 'bubble', 'scatter', 'horizontalBar']).isRequired
};

exports.default = ChartJS;