// Access to Factory contract, import factory.js

import web3 from './web3';
import MoneyPoolFactory from './build/MoneyPoolFactory.json'

const instance = new web3.eth.Contract(
	JSON.parse(MoneyPoolFactory.interface),
	'0x5C8278125D11E765d6c66D21b83E5Dc93c70387e'
);

export default instance;