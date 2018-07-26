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

var instance = new _web2.default.eth.Contract(JSON.parse(CampaignMoneyPool.interface), '0x180d7987f23F054a8774Bc7aDF9e631CAC73dc98');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiQ2FtcGFpZ25Nb25leVBvb2wiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFINUI7O0FBS0EsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM3QixLQUFBLEFBQUssTUFBTSxrQkFESyxBQUNoQixBQUE2QixZQUQ5QixBQUFpQixBQUVoQixBQUdEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUmVuYXJkL0Ryb3Bib3gvUHJvZ3JhbW1pbmcvTW9uZXlQb29sIn0=