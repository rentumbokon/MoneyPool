// Guarentee most up-to-date contract is compiled in build dir

const path = require('path'); 	//directory module
const solc = require('solc'); 	//solidity compiler
const fs = require('fs-extra');	//file system module

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);	//deletes folder and its contents

const contractPath = path.resolve(__dirname, 'contracts', 'MoneyPool.sol');
const source = fs.readFileSync(contractPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);	//check if directory exists, else create folder

// Create compiled .json for each contract in contractPath
for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') + '.json'),
		output[contract]
	);
}