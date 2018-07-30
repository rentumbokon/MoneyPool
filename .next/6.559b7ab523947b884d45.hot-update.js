webpackHotUpdate(6,{

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(481);

var _Layout = __webpack_require__(1158);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(999);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(1000);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\moneypools\\new.js?entry';


var MoneyPoolNew = function (_Component) {
	(0, _inherits3.default)(MoneyPoolNew, _Component);

	function MoneyPoolNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, MoneyPoolNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MoneyPoolNew.__proto__ || (0, _getPrototypeOf2.default)(MoneyPoolNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContribution: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault(); // keep browser from submitting form to backend

								_context.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context.sent;
								_context.next = 6;
								return _factory2.default.methods.createMoneyPool(_this.state.minimumContribution).send({
									from: accounts[0]
								});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(MoneyPoolNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, 'Create Money Pool'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				label: 'wei',
				labelPosition: 'right',
				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					return _this3.setState({ minimumContribution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			})), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, 'Create')));
		}
	}]);

	return MoneyPoolNew;
}(_react.Component);

exports.default = MoneyPoolNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb25leXBvb2xzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIk1vbmV5UG9vbE5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlTW9uZXlQb29sIiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7Ozs7O3NOQUNMLEE7d0JBQ3NCLEEsQUFEZDtBQUFBLEFBQ1AsV0FHRCxBO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDtRQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQURVLEFBQ1YsQUFBTSxrQkFESSxBQUNlOzt3QkFEZjtlQUdhLGNBQUEsQUFBSyxJQUhsQixBQUdhLEFBQVM7O1lBQTFCO0FBSEksNEJBQUE7d0JBQUE7aUNBSUosQUFBUSxRQUFSLEFBQ0osZ0JBQWdCLE1BQUEsQUFBSyxNQURqQixBQUN1QixxQkFEdkIsQUFFSjtlQUNNLFNBUEUsQUFJSixBQUVDLEFBQ0MsQUFBUztBQURWLEFBQ0wsU0FISTs7WUFKSTtZQUFBO3dCQUFBOztBQUFBO2dCQUFBO0E7Ozs7Ozs7Ozs7MkJBV0Q7Z0JBQ1Q7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFFQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7ZUFBckI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx5Q0FBQSxBQUFDO1dBQUQsQUFDTyxBQUNOO21CQUZELEFBRWUsQUFDZDtXQUFPLEtBQUEsQUFBSyxNQUhiLEFBR21CLEFBQ2xCO2NBQVUseUJBQUE7WUFDVCxPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFxQixNQUFBLEFBQU0sT0FEbEMsQUFDVCxBQUFjLEFBQW9DO0FBTHBEOztlQUFBO2lCQUhGLEFBQ0MsQUFFQyxBQVFEO0FBUkM7QUFDQyx3QkFPRixBQUFDLHlDQUFPLFNBQVI7ZUFBQTtpQkFBQTtBQUFBO01BZkgsQUFDQyxBQUdDLEFBV0MsQUFJSDs7Ozs7QUFwQ3lCLEEsQUF1QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SZW5hcmQvRHJvcGJveC9Qcm9ncmFtbWluZy9Nb25leVBvb2wifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\moneypools\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\moneypools\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/moneypools\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi41NTliN2FiNTIzOTQ3Yjg4NGQ0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbW9uZXlwb29scy9uZXcuanM/ZmJkOGY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY2xhc3MgTW9uZXlQb29sTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuXHRcdG1pbmltdW1Db250cmlidXRpb246ICcnXHJcblx0fTtcclxuXHJcblx0b25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHRcdC8vIGtlZXAgYnJvd3NlciBmcm9tIHN1Ym1pdHRpbmcgZm9ybSB0byBiYWNrZW5kXHJcblxyXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cdFx0YXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcblx0XHRcdC5jcmVhdGVNb25leVBvb2wodGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxyXG5cdFx0XHQuc2VuZCh7XHJcblx0XHRcdFx0ZnJvbTogYWNjb3VudHNbMF1cclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgxPkNyZWF0ZSBNb25leSBQb29sPC9oMT5cclxuXHJcblx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG5cdFx0XHRcdFx0PEZvcm0uRmllbGQ+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dCBcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIndlaVwiIFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJyaWdodFwiIFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG1pbmltdW1Db250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdDxCdXR0b24gcHJpbWFyeT5DcmVhdGU8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vbmV5UG9vbE5ldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9tb25leXBvb2xzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBSUE7QUFHQTtBQUFBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOztBQUFBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9