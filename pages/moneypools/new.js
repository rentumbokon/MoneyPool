import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class MoneyPoolNew extends Component {
	state = {	// json for rendering
		minimumContribution: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event) => {
		event.preventDefault();		// keep browser from submitting form to backend
		this.setState({ loading: true, errorMessage: '' })

		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods
				.createMoneyPool(this.state.minimumContribution)
				.send({
					from: accounts[0]
				});

				Router.pushRoute('/');
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}

		this.setState({ loading: false });
	};

	render () {
		return (
			<Layout>
				<h1>Create Money Pool</h1>

				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input 
							label="wei" 
							labelPosition="right" 
							value={this.state.minimumContribution}
							onChange={event => 
								this.setState({ minimumContribution: event.target.value })}
						/>
					</Form.Field>

					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary>Create</Button>
				</Form>
			</Layout>
		);
	}
}

export default MoneyPoolNew;