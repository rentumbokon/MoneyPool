'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\index.js?entry';


var MoneyPoolIndex = function (_Component) {
	(0, _inherits3.default)(MoneyPoolIndex, _Component);

	function MoneyPoolIndex() {
		(0, _classCallCheck3.default)(this, MoneyPoolIndex);

		return (0, _possibleConstructorReturn3.default)(this, (MoneyPoolIndex.__proto__ || (0, _getPrototypeOf2.default)(MoneyPoolIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(MoneyPoolIndex, [{
		key: 'render',
		value: function render() {
			// req
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, this.props.moneyPools[0]);
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var moneyPools;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedMoneyPools().call();

							case 2:
								moneyPools = _context.sent;
								return _context.abrupt('return', { moneyPools: moneyPools });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return MoneyPoolIndex;
}(_react.Component);

exports.default = MoneyPoolIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJNb25leVBvb2xJbmRleCIsInByb3BzIiwibW9uZXlQb29scyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZE1vbmV5UG9vbHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7Ozs7Ozs7O0lBRWQsQTs7Ozs7Ozs7Ozs7MkJBT0ksQUFBRTtBQUNWOzBCQUFPLGNBQUE7O2VBQUE7aUJBQUEsQUFBTTtBQUFOO0FBQUEsSUFBQSxPQUFNLEFBQUssTUFBTCxBQUFXLFdBQXhCLEFBQU8sQUFBTSxBQUFzQixBQUNuQzs7Ozs7Ozs7Ozs7O2VBUHlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix3QkFBaEIsQUFBd0MsQTs7WUFBM0Q7QTt5Q0FFQyxFQUFFLFlBQUYsQUFBYyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSk0sQSxBQWE3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SZW5hcmQvRHJvcGJveC9Qcm9ncmFtbWluZy9Nb25leVBvb2wifQ==