import React, { Component } from 'react';
import factory from '../ethereum/factory'

class MoneyPoolIndex extends Component {
	static async getInitialProps() {	// lifecycle method
		const moneyPools = await factory.methods.getDeployedMoneyPools().call();

		return { moneyPools: moneyPools }		
	}

	render() {	// req
		return <div>{this.props.moneyPools[0]}</div>;
	}
}


export default MoneyPoolIndex;	

