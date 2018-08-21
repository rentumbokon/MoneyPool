import React, { Component } from 'react';
import Layout from '../../components/Layout';
import MoneyPool from '../../ethereum/moneypool';

class MoneyPoolShow extends Component {
	static async getInitialProps(props) {
		props.query.address;
		const moneypool = MoneyPool(props.query.address);
		const summary = await moneypool.methods.getSummary().call();

		console.log(summary);

		return{
			minimumContribution:summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};
	}

	render() {
		return (
			<h3>Money Pool Show</h3>
		)
	}
}

export default MoneyPoolShow; 

