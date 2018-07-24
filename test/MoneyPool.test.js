const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());	// get 10 throwaway accounts

const compiledFactory = require('../ethereum/build/MoneyPoolFactory.json');	// get ABI
const compiledMoneyPool = require('../ethereum/build/MoneyPool.json');	// get ABI

let accounts;	//listing of all accounts exist in network
let factory;	//reference of deployed instance of factory
let moneyPoolAddress;
let moneyPool;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })		
		.send({ from: accounts[0], gas: '1000000' })

	// need to deploy contract
	await factory.methods.createMoneyPool('100').send({	//min contribution of 100 wei
		from: accounts[0],	//manager of MoneyPool
		gas: '1000000'
	});

	[moneyPoolAddress] = await factory.methods.getDeployedMoneyPools().call();	//return big array of all MoneyPool addressses
	// already deployed contract
	moneyPool = await new web3.eth.Contract(	
		JSON.parse(compiledMoneyPool.interface),
		moneyPoolAddress
	);
});

describe('MoneyPools', () => {
	it('deploys a factory and a MoneyPool', () => {
		assert.ok(factory.options.address);
		assert.ok(moneyPool.options.address);
	});

	it('marks caller as the MoneyPool manger', async () => {
		const manager = await moneyPool.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it('allows people to contribute money and marks them as approvers', async () => {
		await moneyPool.methods.contribute().send({
			value: '200',
			from: accounts[1]
		});
		const isContributor = await moneyPool.methods.approvers(accounts[1]).call()
		assert(isContributor);
	});

	it('requires a minimum contribution', async () => {
		try {
			await campaign.methods.contribute().send({
				value: '5',
				from: accounts[1]
			});
			assert(false);
		} catch(err) {
			assert(err);
		}
	});

	it('allows a manager to make a payment request', async () => {
		await moneyPool.methods
			.createRequest('Buy batteries', 100, accounts[1])
			.send({
				from: accounts[0],
				gas: '1000000'
			});
			const request = await moneyPool.methods.requests(0).call();
			assert.equal('Buy batteries', request.description);
	});

	it('create request, aprove request, finalize request (e2e)', async () => {
		await moneyPool.methods.contribute().send({
			from: accounts[0],
			value: web3.utils.toWei('10','ether')
		});
		await moneyPool.methods
			.createRequest('test desc', web3.utils.toWei('5','ether'), accounts[1])
			.send({ from: accounts[0], gas: '1000000' });

		await moneyPool.methods.approveRequest(0).send({
			from: accounts[0],
			gas: '1000000'
		});

		await moneyPool.methods.finalizeRequest(0).send({
			from: accounts[0],
			gas: '1000000'
		});

		let balance = await web3.eth.getBalance(accounts[1]);
		balance = web3.utils.fromWei(balance, 'ether');
		balance = parseFloat(balance);

		assert(balance > 104); // hard coded with ganache inital balance of 100 eth
	});
});