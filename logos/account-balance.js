'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionAccountBalance = function ActionAccountBalance(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    //_react2.default.createElement('path', { d: 'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z' })
    _react2.default.createElement('path', { d: 'm 401.02,266.949 -54.11,-252.9685 -65.43,0 54.11,252.9685 65.43,0 z m 275.308,-163.359 34.492,95 19.801,-95 -54.293,0 z m 73.051,-89.6095 60.543,0 -52.852,252.9685 -55.898,0 c -12.5,0 -23.121,-7.34 -27.813,-18.59 L 575.16,13.9805 l 68.711,0 13.668,37.7695 83.941,0 7.899,-37.7695 z M 578.551,96.5586 c 0.277,66.7614 -92.34,70.4294 -91.672,100.2694 0.191,9.07 8.82,18.711 27.73,21.211 9.411,1.211 35.231,2.152 64.532,-11.32 l 11.519,53.633 c -15.738,5.699 -36.051,11.207 -61.211,11.207 -64.679,0 -110.23,-34.411 -110.621,-83.629 -0.387,-36.45 32.5,-56.719 57.301,-68.828 C 501.641,106.68 510.199,98.75 510.078,87.6484 509.922,70.6992 489.77,63.1992 470.941,62.8906 438.051,62.3789 418.91,71.7891 403.672,78.8594 L 391.84,23.4297 C 407.109,16.3984 435.352,10.3086 464.609,10 c 68.75,0 113.75,33.9805 113.942,86.5586 M 307.5,266.949 201.48,13.9805 l -69.21,0 -52.1489,201.8785 c -3.1719,12.422 -5.9414,16.993 -15.5508,22.18 C 48.8281,246.602 22.8906,254.609 0,259.609 l 1.55859,7.34 111.33241,0 c 14.218,0 26.988,-9.449 30.199,-25.777 l 27.57,-146.4103 68.09,172.1873 68.75,0 z' })
  );
};
ActionAccountBalance = (0, _pure2.default)(ActionAccountBalance);
ActionAccountBalance.displayName = 'ActionAccountBalance';
ActionAccountBalance.muiName = 'SvgIcon';

exports.default = ActionAccountBalance;
