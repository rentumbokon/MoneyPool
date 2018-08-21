'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _MoneyPoolFactory = require('./build/MoneyPoolFactory.json');

var _MoneyPoolFactory2 = _interopRequireDefault(_MoneyPoolFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Access to Factory contract, import factory.js

var instance = new _web2.default.eth.Contract(JSON.parse(_MoneyPoolFactory2.default.interface), '0x5C8278125D11E765d6c66D21b83E5Dc93c70387e');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJNb25leVBvb2xGYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBc0I7Ozs7OztBQUg3Qjs7QUFLQSxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzdCLEtBQUEsQUFBSyxNQUFNLDJCQURLLEFBQ2hCLEFBQTRCLFlBRDdCLEFBQWlCLEFBRWhCLEFBR0Q7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SZW5hcmQvRHJvcGJveC9Qcm9ncmFtbWluZy9Nb25leVBvb2wifQ==