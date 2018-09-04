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

var _routes = require('../../routes');

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
					lineNumber: 65
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Money Pool Show'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, _react2.default.createElement(_routes.Link, { route: '/moneypools/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, 'View Requests')))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb25leXBvb2xzXFxzaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJNb25leVBvb2wiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiTW9uZXlQb29sU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsInF1ZXJ5IiwibW9uZXlwb29sIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Z0NBa0JTO2dCQU9ULEtBUFMsQUFPSjtPQVBJLEFBRVosaUJBRlksQUFFWjtPQUZZLEFBR1osaUJBSFksQUFHWjtPQUhZLEFBSVosNkJBSlksQUFJWjtPQUpZLEFBS1osdUJBTFksQUFLWjtPQUxZLEFBTVosd0JBTlksQUFNWixBQUdEOztPQUFNLFdBQ0gsQUFDRDtZQURELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdjLEFBQ2I7V0FBTyxFQUFFLGNBTEcsQUFDYixBQUlRLEFBQWdCO0FBSnhCLElBRGEsSUFPWCxBQUNEO1lBREQsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQVZZLEFBT2IsQUFHYztBQUhkLFFBS0UsQUFDRDtZQURELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFmWSxBQVliLEFBR2M7QUFIZCxRQUtFLEFBQ0Q7WUFERCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBcEJZLEFBaUJiLEFBR2M7QUFIZCxRQUtFLEFBQ0Q7WUFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FENUIsQUFDUyxBQUE0QixBQUNwQztVQUZELEFBRU8sQUFDTjtpQkF6QkYsQUFBYyxBQXNCYixBQUdjLEFBSWY7QUFQQzs7d0NBT00sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLG9DQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBREQsQUFDQyxBQUNFLEFBQUssQUFHUCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQVBILEFBQ0MsQUFLQyxBQUNDLEFBR0Y7QUFIRTt5QkFHRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsOEJBQUssd0JBQXNCLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxVQUF2QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQUc7QUFBSDtBQUFBLHNCQUFHLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFoQlQsQUFDQyxBQUVDLEFBVUMsQUFDQyxBQUNDLEFBQ0MsQUFBRyxBQU9UOzs7Ozt3RyxBQWxGNEI7Ozs7O1lBQzVCO2NBQUEsQUFBTSxNQUFOLEFBQVksQUFDTjtBLG9CQUFZLHlCQUFVLE1BQUEsQUFBTSxNQUFNLEEsQUFBdEI7O2VBQ0ksVUFBQSxBQUFVLFFBQVYsQUFBa0IsYUFBbEIsQSxBQUErQjs7WUFBL0M7QSwyQkFFTjs7Z0JBQUEsQUFBUSxJQUFSLEFBQVk7OztrQkFHRixNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjs4QkFBb0IsUUFGZixBQUVlLEFBQVEsQUFDNUI7a0JBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7d0JBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7eUJBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCO2tCQUFTLFFBTkosQUFNSSxBQUFRLEE7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVHlCLEEsQUFzRjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUmVuYXJkL0Ryb3Bib3gvUHJvZ3JhbW1pbmcvTW9uZXlQb29sIn0=