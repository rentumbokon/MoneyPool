// Access to Factory contract, import factory.js

import web3 from './web3';
import CampaignFactory from './build/MoneyPoolFactory.json'

const instance = new web3.eth.Contract(
	JSON.parse(CampaignMoneyPool.interface),
	'0x180d7987f23F054a8774Bc7aDF9e631CAC73dc98'
);

export default instance;