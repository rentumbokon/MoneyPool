import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';

export default (props) => {
	return (
		<Container>
			<Head>
				<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
			</Head>

			<Header/>
			{props.children}	
			<h1>Im a footer</h1>
		</Container>
	);
};