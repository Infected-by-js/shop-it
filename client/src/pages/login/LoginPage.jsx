import React from 'react';
import { Button } from '../../ui/Button.jsx';
import { Wrapper, Content, Title, Form, Input, Link } from './LoginPage.styled.js';

export const LoginPage = () => {
	return (
		<Wrapper>
			<Content>
				<Title>Sign in</Title>
				<Form>
					<Input placeholder='Username/Email' type='text' />
					<Input placeholder='Password' type='password' />
					<Button>Login</Button>
					<Link>Foggot the password?</Link>
					<Link>Create a new account</Link>
				</Form>
			</Content>
		</Wrapper>
	);
};