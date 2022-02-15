import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { color } from '../styles/constants';

export const Input = ({ label, type, name, value, onChangeValue }) => {
	return (
		<StyledInput
			placeholder='Username'
			type='text'
			name='username'
			value={value}
			onChange={onChangeValue}
		/>
	);
};

export const StyledInput = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 0 10px 20px 0px;
	padding: 10px;
	border: 1px solid ${color.black};
	border-radius: 4px;

	&:hover {
		box-shadow: 0 0 3px ${lighten(0.3, color.black)};
	}

	&:focus {
		box-shadow: 0 0 3px ${color.blue};
	}
`;
