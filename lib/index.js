'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HorizontalBar = exports.Scatter = exports.Bubble = exports.PolarArea = exports.Pie = exports.Doughnut = exports.Radar = exports.Bar = exports.Line = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = exports.Line = function (_Component) {
    _inherits(Line, _Component);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'line' }, this.props));
        }
    }]);

    return Line;
}(_react.Component);

var Bar = exports.Bar = function (_Component2) {
    _inherits(Bar, _Component2);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
    }

    _createClass(Bar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'bar' }, this.props));
        }
    }]);

    return Bar;
}(_react.Component);

var Radar = exports.Radar = function (_Component3) {
    _inherits(Radar, _Component3);

    function Radar() {
        _classCallCheck(this, Radar);

        return _possibleConstructorReturn(this, (Radar.__proto__ || Object.getPrototypeOf(Radar)).apply(this, arguments));
    }

    _createClass(Radar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'radar' }, this.props));
        }
    }]);

    return Radar;
}(_react.Component);

var Doughnut = exports.Doughnut = function (_Component4) {
    _inherits(Doughnut, _Component4);

    function Doughnut() {
        _classCallCheck(this, Doughnut);

        return _possibleConstructorReturn(this, (Doughnut.__proto__ || Object.getPrototypeOf(Doughnut)).apply(this, arguments));
    }

    _createClass(Doughnut, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'doughnut' }, this.props));
        }
    }]);

    return Doughnut;
}(_react.Component);

var Pie = exports.Pie = function (_Component5) {
    _inherits(Pie, _Component5);

    function Pie() {
        _classCallCheck(this, Pie);

        return _possibleConstructorReturn(this, (Pie.__proto__ || Object.getPrototypeOf(Pie)).apply(this, arguments));
    }

    _createClass(Pie, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'pie' }, this.props));
        }
    }]);

    return Pie;
}(_react.Component);

var PolarArea = exports.PolarArea = function (_Component6) {
    _inherits(PolarArea, _Component6);

    function PolarArea() {
        _classCallCheck(this, PolarArea);

        return _possibleConstructorReturn(this, (PolarArea.__proto__ || Object.getPrototypeOf(PolarArea)).apply(this, arguments));
    }

    _createClass(PolarArea, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'polarArea' }, this.props));
        }
    }]);

    return PolarArea;
}(_react.Component);

var Bubble = exports.Bubble = function (_Component7) {
    _inherits(Bubble, _Component7);

    function Bubble() {
        _classCallCheck(this, Bubble);

        return _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).apply(this, arguments));
    }

    _createClass(Bubble, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'bubble' }, this.props));
        }
    }]);

    return Bubble;
}(_react.Component);

var Scatter = exports.Scatter = function (_Component8) {
    _inherits(Scatter, _Component8);

    function Scatter() {
        _classCallCheck(this, Scatter);

        return _possibleConstructorReturn(this, (Scatter.__proto__ || Object.getPrototypeOf(Scatter)).apply(this, arguments));
    }

    _createClass(Scatter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'scatter' }, this.props));
        }
    }]);

    return Scatter;
}(_react.Component);

var HorizontalBar = exports.HorizontalBar = function (_Component9) {
    _inherits(HorizontalBar, _Component9);

    function HorizontalBar() {
        _classCallCheck(this, HorizontalBar);

        return _possibleConstructorReturn(this, (HorizontalBar.__proto__ || Object.getPrototypeOf(HorizontalBar)).apply(this, arguments));
    }

    _createClass(HorizontalBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_chart2.default, _extends({ type: 'horizontalBar' }, this.props));
        }
    }]);

    return HorizontalBar;
}(_react.Component);