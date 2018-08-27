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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _moneypool = require('../../ethereum/moneypool');

var _moneypool2 = _interopRequireDefault(_moneypool);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\moneypools\\show.js?entry';


var MoneyPoolShow = function (_Component) {
	(0, _inherits3.default)(MoneyPoolShow, _Component);

	function MoneyPoolShow() {
		(0, _classCallCheck3.default)(this, MoneyPoolShow);

		return (0, _possibleConstructorReturn3.default)(this, (MoneyPoolShow.__proto__ || (0, _getPrototypeOf2.default)(MoneyPoolShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(MoneyPoolShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{ // Manager
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this Money Pool and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' }
			}, { // minimumContribution
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'You must contribute at least this much wei to become an approver'
			}, { // requestsCount
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw money from the contract. Requests must be approved by the approvers'
			}, { // approversCount
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to the Money Pool'
			}, { // balance
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Money Pool Balance (eth)',
				description: 'The balance is how much money this Money Pool has left to spend'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, 'Money Pool Show'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}))));
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
									address: props.query.address,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb25leXBvb2xzXFxzaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJNb25leVBvb2wiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJNb25leVBvb2xTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwicXVlcnkiLCJtb25leXBvb2wiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFFckI7Ozs7Ozs7Ozs7O2dDQWtCUztnQkFPVCxLQVBTLEFBT0o7T0FQSSxBQUVaLGlCQUZZLEFBRVo7T0FGWSxBQUdaLGlCQUhZLEFBR1o7T0FIWSxBQUlaLDZCQUpZLEFBSVo7T0FKWSxBQUtaLHVCQUxZLEFBS1o7T0FMWSxBQU1aLHdCQU5ZLEFBTVosQUFHRDs7T0FBTSxXQUNILEFBQ0Q7WUFERCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBRSxjQUxHLEFBQ2IsQUFJUSxBQUFnQjtBQUp4QixJQURhLElBT1gsQUFDRDtZQURELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFWWSxBQU9iLEFBR2M7QUFIZCxRQUtFLEFBQ0Q7WUFERCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBZlksQUFZYixBQUdjO0FBSGQsUUFLRSxBQUNEO1lBREQsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQXBCWSxBQWlCYixBQUdjO0FBSGQsUUFLRSxBQUNEO1lBQVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBNEIsQUFDcEM7VUFGRCxBQUVPLEFBQ047aUJBekJGLEFBQWMsQUFzQmIsQUFHYyxBQUlmO0FBUEM7O3dDQU9NLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxvQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBREQsQUFDQyxBQUNFLEFBQUssQUFHUCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQVRKLEFBQ0MsQUFFQyxBQUtDLEFBQ0MsQUFLSjtBQUxJOzs7Ozs7d0csQUFwRXdCOzs7OztZQUM1QjtjQUFBLEFBQU0sTUFBTixBQUFZLEFBQ047QSxvQkFBWSx5QkFBVSxNQUFBLEFBQU0sTUFBaEIsQUFBc0IsQTs7ZUFDbEIsVUFBQSxBQUFVLFFBQVYsQUFBa0IsYUFBbEIsQSxBQUErQjs7WUFBL0M7QSwyQkFFTjs7Z0JBQUEsQUFBUSxJQUFSLEFBQVk7OztrQkFHRixNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjs4QkFBb0IsUUFGZixBQUVlLEFBQVEsQUFDNUI7a0JBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7d0JBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7eUJBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCO2tCQUFTLFFBTkosQUFNSSxBQUFRLEE7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVHlCLEEsQUE2RTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUmVuYXJkL0Ryb3Bib3gvUHJvZ3JhbW1pbmcvTW9uZXlQb29sIn0=