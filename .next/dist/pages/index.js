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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\index.js?entry';


var MoneyPoolIndex = function (_Component) {
	(0, _inherits3.default)(MoneyPoolIndex, _Component);

	function MoneyPoolIndex() {
		(0, _classCallCheck3.default)(this, MoneyPoolIndex);

		return (0, _possibleConstructorReturn3.default)(this, (MoneyPoolIndex.__proto__ || (0, _getPrototypeOf2.default)(MoneyPoolIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(MoneyPoolIndex, [{
		key: 'renderMoneyPools',
		value: function renderMoneyPools() {
			// generate components using data from props
			var items = this.props.moneyPools.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/moneypools/' + address, __source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					}, 'View Money Pool')),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			// req
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, 'Open Money Pools'), _react2.default.createElement(_routes.Link, { route: '/moneypools/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				floated: 'right',
				content: 'Create Money Pool',
				icon: 'add',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}))), this.renderMoneyPools()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIk1vbmV5UG9vbEluZGV4IiwiaXRlbXMiLCJwcm9wcyIsIm1vbmV5UG9vbHMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlck1vbmV5UG9vbHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRNb25leVBvb2xzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OztxQ0FNYSxBQUFHO0FBQ3BCO09BQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLElBQUksbUJBQVcsQUFDbEQ7O2FBQU8sQUFDRSxBQUNSO2tDQUNDLEFBQUMsOEJBQUssd0JBQU4sQUFBNEI7aUJBQTVCO21CQUFBLEFBQ0M7QUFERDtNQUFBLGtCQUNDLGNBQUE7O2lCQUFBO21CQUFBO0FBQUE7QUFBQSxRQUpJLEFBR0wsQUFDQyxBQUdGO1lBUEQsQUFBTyxBQU9DLEFBRVI7QUFUTyxBQUNOO0FBRkYsQUFBYyxBQVlkLElBWmM7O3dDQVlQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUFFO0FBQ1Y7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFEQSxBQUNBLEFBRUEscUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDO2FBQUQsQUFDUyxBQUNSO2FBRkQsQUFFUyxBQUNSO1VBSEQsQUFHTSxBQUNMO2FBSkQ7O2VBQUE7aUJBTEYsQUFHQSxBQUNDLEFBQ0MsQUFTRDtBQVRDO0FBQ0MsY0FSTCxBQUNDLEFBQ0MsQUFjQyxBQUFLLEFBSVI7Ozs7Ozs7Ozs7OztlQXpDeUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHdCQUFoQixBQUF3QyxBOztZQUEzRDtBO3lDQUNDLEVBQUUsWUFBRixBQUFjLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFITSxBLEFBOEM3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SZW5hcmQvRHJvcGJveC9Qcm9ncmFtbWluZy9Nb25leVBvb2wifQ==