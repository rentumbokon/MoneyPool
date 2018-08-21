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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _moneypool = require('../../ethereum/moneypool');

var _moneypool2 = _interopRequireDefault(_moneypool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\moneypools\\show.js?entry';


var MoneyPoolShow = function (_Component) {
	(0, _inherits3.default)(MoneyPoolShow, _Component);

	function MoneyPoolShow() {
		(0, _classCallCheck3.default)(this, MoneyPoolShow);

		return (0, _possibleConstructorReturn3.default)(this, (MoneyPoolShow.__proto__ || (0, _getPrototypeOf2.default)(MoneyPoolShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(MoneyPoolShow, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, 'Money Pool Show');
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var moneypool, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								props.query.address;
								moneypool = (0, _moneypool2.default)(props.query.address);
								_context.next = 4;
								return moneypool.methods.getSummary().call();

							case 4:
								summary = _context.sent;

								console.log(summary);

								return _context.abrupt('return', {
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return MoneyPoolShow;
}(_react.Component);

exports.default = MoneyPoolShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb25leXBvb2xzXFxzaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiTW9uZXlQb29sIiwiTW9uZXlQb29sU2hvdyIsInByb3BzIiwicXVlcnkiLCJhZGRyZXNzIiwibW9uZXlwb29sIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7Ozs7Ozs7O0lBRWhCLEE7Ozs7Ozs7Ozs7OzJCQWlCSSxBQUNSOzBCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLElBQUEsRUFERCxBQUNDLEFBRUQ7Ozs7O3dHQXBCNEIsQTs7Ozs7WUFDNUI7Y0FBQSxBQUFNLE1BQU4sQUFBWSxBQUNOO0Esb0JBQVkseUJBQVUsTUFBQSxBQUFNLE1BQWhCLEFBQXNCLEE7O2VBQ2xCLFVBQUEsQUFBVSxRQUFWLEFBQWtCLGFBQWxCLEFBQStCLEE7O1lBQS9DO0EsMkJBRU47O2dCQUFBLEFBQVEsSUFBUixBQUFZOzs7OEJBR1MsUUFEZixBQUNlLEFBQVEsQUFDNUI7a0JBQVMsUUFGSixBQUVJLEFBQVEsQUFDakI7d0JBQWUsUUFIVixBQUdVLEFBQVEsQUFDdkI7eUJBQWdCLFFBSlgsQUFJVyxBQUFRLEFBQ3hCO2tCQUFTLFFBQUEsQSxBQUxKLEFBS1k7QUFMWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVHlCLEEsQUF3QjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUmVuYXJkL0Ryb3Bib3gvUHJvZ3JhbW1pbmcvTW9uZXlQb29sIn0=