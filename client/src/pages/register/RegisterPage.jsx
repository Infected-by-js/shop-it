import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOGIN_PAGE_ROUTE } from '../../router/routes';
import { useFormValidation } from '../../hooks/useFormValidation';
import { registerSchema } from './Register.schema';

import inputs from './inputs.json';
import { FcGoogle, FcBadDecision } from 'react-icons/fc';
import { Button, Input } from '../../ui/';
import {
	Wrapper,
	Content,
	Title,
	Form,
	Label,
	Link,
	OthersBlock,
	OtherLoginButton,
	InputWrapper,
	ErrorMessage,
} from './RegisterPage.styled.js';
import { registerUser } from '../../redux/actions';

export const RegisterPage = () => {
	const { register, handleSubmit, errors } = useFormValidation(registerSchema);
	const dispatch = useDispatch();

	const handleSubmitForm = (formData) => {
		const { confirm_password, ...userCredentials } = formData;
		dispatch(registerUser(userCredentials));
	};

	return (
		<Wrapper>
			<Content>
				<Title>Sign Up</Title>

				<Form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
					{inputs.map(({ name, type, label, placeholder }) => (
						<InputWrapper key={name} isError={!!errors[name]}>
							<Label>{label}</Label>
							<Input placeholder={placeholder} type={type} name={name} {...register(name)} />
							<ErrorMessage>{errors[name]?.message}</ErrorMessage>
						</InputWrapper>
					))}
					<Button>Sign Up</Button>
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
				<Link to={LOGIN_PAGE_ROUTE}>Already have an account?</Link>
			</Content>
		</Wrapper>
	);
};
