// Deploy MoneyPoolFactory to Ethereum network (rinksby)

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/MoneyPoolFactory.json');

const provider = new HDWalletProvider(
  'shaft boring organ alpha act table segment mercy draw sample borrow fabric', // account mnemonic
  'https://rinkeby.infura.io/emxQjSh5lvHxMGiZO11n'                          // Test Ethereum Network (Rinkeby)
);

const web3 = new Web3(provider);

const deploy = async () => {        // helper to use async-await syntax for deploy
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]) //Attempting to deploy from account  0x9F2E94f010C1b2e2B952F91f4e3784184eBC811C

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x'+compiledFactory.bytecode })	// new version: '0x'+...
    .send({ from: accounts[0] });	// new version: delete gas declaration

  console.log('Contact deployed to ', result.options.address)  //Contact deployed to  0x180d7987f23F054a8774Bc7aDF9e631CAC73dc98
}
deploy()