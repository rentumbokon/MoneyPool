'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _MoneyPool = require('./build/MoneyPool.json');

var _MoneyPool2 = _interopRequireDefault(_MoneyPool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_MoneyPool2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxtb25leXBvb2wuanMiXSwibmFtZXMiOlsid2ViMyIsIk1vbmV5UG9vbCIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMzQjtRQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNOLEtBQUssQUFBTCxNQUFXLG9CQUFVLEFBQXJCLEFBRE0sWUFFTixBQUZNLEFBQVAsQUFJQTtBQUxEIiwiZmlsZSI6Im1vbmV5cG9vbC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SZW5hcmQvRHJvcGJveC9Qcm9ncmFtbWluZy9Nb25leVBvb2wifQ==