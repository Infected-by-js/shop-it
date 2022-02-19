import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from '../../router/routes';
import { useFormValidation, useRouting } from '../../hooks/';
import { loginUser, registerUser } from '../../redux/actions';

import { loginSchema, registerSchema } from './helpers/validationSchemas';
import { loginInputs, registerInputs } from './helpers/formInputs';

import { FcGoogle, FcBadDecision } from 'react-icons/fc';
import { FormInput } from '../../components/';
import { Button } from '../../ui';
import {
	Wrapper,
	Content,
	Title,
	Form,
	Link,
	OthersBlock,
	OtherLoginButton,
} from './AuthPage.styled.js';

export const AuthPage = () => {
	const [isLoginPage, setIsLoginPage] = useState(false);
	const { currentPage } = useRouting();
	const { register, handleSubmit, errors } = useFormValidation(
		isLoginPage ? loginSchema : registerSchema
	);
	const dispatch = useDispatch();

	const handleSubmitForm = (formData) => {
		const { confirm_password, ...userCredentials } = formData;

		if (isLoginPage) {
			dispatch(loginUser(userCredentials));
		} else {
			dispatch(registerUser(userCredentials));
		}
	};

	useEffect(() => {
		setIsLoginPage(currentPage === LOGIN_PAGE_ROUTE);
	}, [currentPage]);

	return (
		<Wrapper>
			<Content>
				<Title>{isLoginPage ? 'Sign In' : 'Sign Up'}</Title>

				<Form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
					{(isLoginPage ? loginInputs : registerInputs).map((input) => (
						<FormInput
							key={input.name}
							errorMessage={errors[input.name]?.message}
							register={register}
							{...input}
						/>
					))}
					<Button>{isLoginPage ? 'Sign In' : 'Sign Up'}</Button>
				</Form>

				<OthersBlock>
					<OtherLoginButton>
						<FcGoogle />
						Login with Google
					</OtherLoginButton>
					<OtherLoginButton>
						<FcBadDecision />
						Login as Anonymous
					</OtherLoginButton>
				</OthersBlock>
				<Link to={isLoginPage ? REGISTER_PAGE_ROUTE : LOGIN_PAGE_ROUTE}>
					{isLoginPage ? 'Need an Account?' : 'Already have an account?'}
				</Link>
			</Content>
		</Wrapper>
	);
};
