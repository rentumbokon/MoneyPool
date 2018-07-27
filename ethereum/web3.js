// Import to get access to web3

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// In browser and user has metamask
	web3 = new Web3(window.web3.currentProvider);
} else {
	// In server OR user not have metamask -> use infura portal to rinkeby
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/emxQjSh5lvHxMGiZO11n'
	);
	web3 = new Web3(provider);
}

export default web3;