import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory'
import Layout from '../components/Layout'
import { Link } from '../routes';

class MoneyPoolIndex extends Component {
	static async getInitialProps() {	// lifecycle method: get all data req
		const moneyPools = await factory.methods.getDeployedMoneyPools().call();
		return { moneyPools: moneyPools }		
	}

	renderMoneyPools(){		// generate components using data from props
		const items = this.props.moneyPools.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/moneypools/${address}`}>
						<a>View Money Pool</a>
					</Link>
				),	
				fluid: true
			};
		});

		return <Card.Group items={items} />
	}

	render() {	// req
		return (
			<Layout>
				<div>
				<h3>Open Money Pools</h3>

				<Link route="/moneypools/new">
					<a>
						<Button
							floated="right"
							content="Create Money Pool" 
							icon="add" 
							primary
						/>
					</a>
				</Link>

				{this.renderMoneyPools()}
				</div>
			</Layout>
		);
	}
}

export default MoneyPoolIndex;	

