import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import MoneyPool from '../../ethereum/moneypool';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class MoneyPoolShow extends Component {
	static async getInitialProps(props) {
		props.query.address;
		const moneypool = MoneyPool(props.query.address);
		const summary = await moneypool.methods.getSummary().call();

		console.log(summary);

		return{
			address: props.query.address,
			minimumContribution:summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4]
		};
	}

	renderCards() {
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;

		const items = [
			{	// Manager
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this Money Pool and can create requests to withdraw money',
				style: { overflowWrap: 'break-word'}
			},
			{	// minimumContribution
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'You must contribute at least this much wei to become an approver'
			},
			{	// requestsCount
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw money from the contract. Requests must be approved by the approvers'
			},
			{	// approversCount
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to the Money Pool'
			},
			{	// balance
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Money Pool Balance (eth)',
				description: 'The balance is how much money this Money Pool has left to spend'
			}
		];

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<h3>Money Pool Show</h3>
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderCards()}
						</Grid.Column>

						<Grid.Column width={6}>
							<ContributeForm address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Link route={`/moneypools/${this.props.address}/requests`}>
								<a><Button primary>View Requests</Button></a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>				
			</Layout>
		);
	}
}

export default MoneyPoolShow; 

