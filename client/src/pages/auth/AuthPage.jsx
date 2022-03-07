import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle, FcBadDecision } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';

import { HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from '../../router/routes';
import { useFormValidation, useRouting } from '../../hooks/';
import { loginUser, registerUser } from '../../redux/actions';
import { selectUser } from '../../redux/selectors';

import { authPageFadeInVariants } from '../../helpers/motions-utils';
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

export const AuthPage = () => {
	const [isLoginPage, setIsLoginPage] = useState(false);
	const { isLoading, authError, currentUser } = useSelector(selectUser);
	const { currentPage, navigateTo } = useRouting();
	const { register, handleSubmit, validationErrors } = useFormValidation(
		isLoginPage ? loginSchema : registerSchema
	);
	const dispatch = useDispatch();

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
			navigateTo(HOME_PAGE_ROUTE);
		}
	}, [currentUser]);

	useEffect(() => {
		setIsLoginPage(currentPage === LOGIN_PAGE_ROUTE);
	}, []);

	return (
		<>
			{isLoading && <Loader />}
			<Wrapper>
				<Content>
					<TitleContainer>
						<Title>{isLoginPage ? 'Login' : 'Sign Up'}</Title>
						<Error>{authError}</Error>
					</TitleContainer>

					<Form
						onSubmit={handleSubmit(handleSubmitForm)}
						noValidate
						as={motion.form}
						variants={authPageFadeInVariants}
						{...authPageFadeInVariants}
					>
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

					<OthersBlock
						as={motion.div}
						variants={authPageFadeInVariants}
						{...authPageFadeInVariants}
					>
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
