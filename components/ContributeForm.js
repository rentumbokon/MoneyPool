import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import MoneyPool from '../ethereum/moneypool';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
	state = {
		value: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async event => {
		event.preventDefault();
		const moneyPool = MoneyPool(this.props.address);
		this.setState({ loading: true, errorMessage: '' })

		try {
			const accounts = await web3.eth.getAccounts();
			await moneyPool.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			});

			Router.replaceRoute(`/moneypools/${this.props.address}`);	//refresh page
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false, value: '' });
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label>Amount to Contribute</label>
					<Input 
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
						label="ether" 
						labelPosition="right" />
				</Form.Field>
				<Message error header="Oops!" content={this.state.errorMessage} />
				<Button primary loading={this.state.loading}>Contribute</Button>
			</Form>
		)
	}
}

export default ContributeForm;