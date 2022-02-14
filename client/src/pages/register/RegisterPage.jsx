import React from 'react';
import { Button } from '../../ui/';
import { Wrapper, Content, Title, Form, Input, Agreement } from './RegisterPage.styled.js';

export const RegisterPage = () => {
	return (
		<Wrapper>
			<Content>
				<Title>Create an account</Title>
				<Form>
					<Input placeholder='Username' type='text' />
					<Input placeholder='Email' type='email' />
					<Input placeholder='Password' type='password' />
					<Input placeholder='Confirm Password' type='password' />
					<Agreement>
						By creating an account, I consent to the processing of my personal data in accordance
						with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>Create</Button>
				</Form>
			</Content>
		</Wrapper>
	);
};
