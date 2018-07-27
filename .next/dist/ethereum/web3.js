'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // Import to get access to web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// In browser and user has metamask
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// In server OR user not have metamask -> use infura portal to rinkeby
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/emxQjSh5lvHxMGiZO11n');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQUpBOztBQU1BLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RCxhQUFhLEFBQ3hFO0FBQ0E7UUFBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzVCO0FBSEQsT0FHTyxBQUNOO0FBQ0E7S0FBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDaEIsQUFFRDtRQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2hCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SZW5hcmQvRHJvcGJveC9Qcm9ncmFtbWluZy9Nb25leVBvb2wifQ==