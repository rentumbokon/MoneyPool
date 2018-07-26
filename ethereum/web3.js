// Import to get access to web3

import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
//need to handle case where user not have metamask installed

export default web3;