import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory'
import Layout from '../components/Layout'

class MoneyPoolIndex extends Component {
	static async getInitialProps() {	// lifecycle method: get all data req
		const moneyPools = await factory.methods.getDeployedMoneyPools().call();
		return { moneyPools: moneyPools }		
	}

	renderMoneyPools(){		// generate components using data from props
		const items = this.props.moneyPools.map(address => {
			return {
				header: address,
				description: <a>View Money Pool</a>,	
				fluid: true
			};
		});

		return <Card.Group items={items} />
	}

	render() {	// req
		return (
			<Layout>
				<div>
				<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
				<h3>Open Money Pools</h3>
				{this.renderMoneyPools()}
				<Button
					content="Create Money Pool" 
					icon="add" 
					primary
				/>
				</div>
			</Layout>
		);
	}
}

export default MoneyPoolIndex;	

