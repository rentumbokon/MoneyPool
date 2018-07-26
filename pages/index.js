import React, { Component } from 'react';
import factory from '../ethereum/factory'

class MoneyPoolIndex extends Component {
	async componentDidMount() {
		const moneyPools = await factory.methods.getDeployedMoneyPools().call();
		console.log(moneyPools); //debug
	}

	render() {	// req
		return <div>MoneyPool Index!</div>;
	}
}


export default MoneyPoolIndex;	

