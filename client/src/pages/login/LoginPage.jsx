import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui/Button.jsx';
import { login } from '../../redux/apiCall';
import { Wrapper, Content, Title, Form, Input, Link, Error } from './LoginPage.styled.js';

export const LoginPage = () => {
	const [userData, setUserData] = useState({ username: '', password: '' });
	const { isFetching, error } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const routeToRegisterPage = () => {
		navigate('/register');
	};

	const handleChange = (event) => {
		const activeInputEl = event.target.name;
		const inputValue = event.target.value;
		setUserData((prevState) => ({ ...prevState, [activeInputEl]: inputValue }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(dispatch, userData);
	};

	return (
		<Wrapper>
			<Content>
				<Title>Sign in</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						placeholder='Username'
						type='text'
						name='username'
						value={userData.username}
						onChange={handleChange}
					/>
					<Input
						placeholder='Password'
						type='password'
						name='password'
						value={userData.password}
						onChange={handleChange}
					/>
					<Button disabled={isFetching}>
						{isFetching ? <span>Checking...</span> : <span>Login</span>}
					</Button>
					{error && <Error>{error}</Error>}
				</Form>
			</Content>
		</Wrapper>
	);
};
