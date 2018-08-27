import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import MoneyPool from '../ethereum/moneypool';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {
	state = {
		value: ''
	};

	onSubmit = async event => {
		event.preventDefault();
		const moneyPool = MoneyPool(this.props.address);
		try {
			const accounts = await web3.eth.getAccounts();
			await moneyPool.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			});
		} catch (err) {

		}
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label>Amount to Contribute</label>
					<Input 
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
						label="ether" 
						labelPosition="right" />
				</Form.Field>
				<Button primary>Contribute</Button>
			</Form>
		)
	}
}

export default ContributeForm;