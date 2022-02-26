import React, { useEffect, useState } from 'react';
import { FcGoogle, FcBadDecision } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from '../../router/routes';
import { useFormValidation, useRouting } from '../../hooks/';
import { loginUser, registerUser } from '../../redux/actions';

import { loginSchema, registerSchema } from './helpers/validationSchemas';
import { loginInputs, registerInputs } from './helpers/formInputs';

import { FormInput, Button, Loader } from '../../shared/';
import {
	Wrapper,
	Content,
	Title,
	Form,
	Link,
	OthersBlock,
	OtherLoginButton,
	TitleContainer,
	Error,
} from './AuthPage.styled.js';
import { selectUser } from '../../redux/selectors';

export const AuthPage = () => {
	const [isLoginPage, setIsLoginPage] = useState(true);
	const { isLoading, authError, currentUser } = useSelector(selectUser);
	const { currentPage } = useRouting();
	const { register, handleSubmit, validationErrors } = useFormValidation(
		isLoginPage ? loginSchema : registerSchema
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmitForm = (formData) => {
		const { username, password, email } = formData;

		if (isLoginPage) {
			dispatch(loginUser({ username, password }));
		} else {
			dispatch(registerUser({ username, password, email }));
		}
	};

	useEffect(() => {
		if (currentUser && !authError) {
			navigate(HOME_PAGE_ROUTE);
		}
	}, [currentUser]);

	useEffect(() => {
		setIsLoginPage(currentPage === LOGIN_PAGE_ROUTE);
	}, [currentPage]);

	return (
		<>
			{isLoading && <Loader />}
			<Wrapper>
				<Content>
					<TitleContainer>
						<Title>{isLoginPage ? 'Login' : 'Sign Up'}</Title>
						<Error>{authError}</Error>
					</TitleContainer>

					<Form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
						{(isLoginPage ? loginInputs : registerInputs).map((input) => (
							<FormInput
								key={input.name}
								errorMessage={validationErrors[input.name]?.message}
								register={register}
								{...input}
							/>
						))}
						<Button>{isLoginPage ? 'Login' : 'Sign Up'}</Button>
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
		</>
	);
};
