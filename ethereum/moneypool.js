import web3 from './web3';
import MoneyPool from './build/MoneyPool.json'

export default (address) => {
	return new web3.eth.Contract(
		JSON.parse(MoneyPool.interface),
		address
	);
}