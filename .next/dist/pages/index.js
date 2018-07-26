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
		key: 'componentDidMount',
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

								console.log(moneyPools); //debug

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			// req
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, 'MoneyPool Index!');
		}
	}]);

	return MoneyPoolIndex;
}(_react.Component);

exports.default = MoneyPoolIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJNb25leVBvb2xJbmRleCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZE1vbmV5UG9vbHMiLCJjYWxsIiwibW9uZXlQb29scyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7Ozs7Ozs7SUFFZCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRXFCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix3QkFBaEIsQUFBd0MsQTs7WUFBM0Q7QSw4QkFDTjs7Z0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR2pCLEFBQUU7QUFDVjswQkFBTyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxJQUFBLEVBQVAsQUFBTyxBQUNQOzs7OztBQVIyQixBLEFBWTdCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1JlbmFyZC9Ecm9wYm94L1Byb2dyYW1taW5nL01vbmV5UG9vbCJ9