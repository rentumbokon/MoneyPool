webpackHotUpdate(6,{

/***/ 393:
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

var _factory = __webpack_require__(394);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Renard\\Dropbox\\Programming\\MoneyPool\\pages\\index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42NTY2ZDFjNWZmNTAxMDUxOTczOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTkyYWQ5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5J1xyXG5cclxuY2xhc3MgTW9uZXlQb29sSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc3QgbW9uZXlQb29scyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZE1vbmV5UG9vbHMoKS5jYWxsKCk7XHJcblx0XHRjb25zb2xlLmxvZyhtb25leVBvb2xzKTsgLy9kZWJ1Z1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1x0Ly8gcmVxXHJcblx0XHRyZXR1cm4gPGRpdj5Nb25leVBvb2wgSW5kZXghPC9kaXY+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vbmV5UG9vbEluZGV4O1x0XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=