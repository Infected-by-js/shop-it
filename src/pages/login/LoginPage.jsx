import React from 'react';
import * as Styled from './LoginPage.styled.js';

export const LoginPage = () => {
	return (
		<Styled.RegisterPage>
			<Styled.Wrapper>
				<Styled.Title>Sign in</Styled.Title>
				<Styled.Form>
					<Styled.Input placeholder='Username/Email' type='text' />
					<Styled.Input placeholder='Password' type='password' />
					<Styled.Button>Login</Styled.Button>
					<Styled.Link>Don`t you remember the password?</Styled.Link>
					<Styled.Link>Create a new account</Styled.Link>
				</Styled.Form>
			</Styled.Wrapper>
		</Styled.RegisterPage>
	);
};
