import React from 'react';
import { Input } from '../../ui';

import { Wrapper, Label, ErrorMessage } from './FormInput.styled';

export const FormInput = (props) => {
	const { name, label, placeholder, type, errorMessage, register } = props;

	return (
		<Wrapper isError={!!errorMessage}>
			<Label>{label}</Label>
			<Input placeholder={placeholder} type={type} name={name} {...register(name)} />
			<ErrorMessage>{errorMessage ?? ''}</ErrorMessage>
		</Wrapper>
	);
};
