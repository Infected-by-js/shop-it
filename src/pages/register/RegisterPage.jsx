import React from 'react';
import * as Styled from './RegisterPage.styled.js';

export const RegisterPage = () => {
	return (
		<Styled.RegisterPage>
			<Styled.Wrapper>
				<Styled.Title>Create an account</Styled.Title>
				<Styled.Form>
					<Styled.Input placeholder='Username' type='text' />
					<Styled.Input placeholder='Email' type='email' />
					<Styled.Input placeholder='Password' type='password' />
					<Styled.Input placeholder='Confirm Password' type='password' />
					<Styled.Agreement>
						By creating an account, I consent to the processing of my personal data in accordance
						with the <b>PRIVACY POLICY</b>
					</Styled.Agreement>
					<Styled.Button>Create</Styled.Button>
				</Styled.Form>
			</Styled.Wrapper>
		</Styled.RegisterPage>
	);
};
