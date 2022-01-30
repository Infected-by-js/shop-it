import React from 'react';
import styled, { css } from 'styled-components';
import { color, fonts, TRANSION_MS, fontWeight } from '../styles/constants';
import { lighten } from 'polished';

export const Button = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
	padding: 15px 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.m};
	border: 1px solid transparent;
	border-radius: 2px;

	color: ${color.white};
	background-color: ${color.black};

	cursor: pointer;
	transition: color ${TRANSION_MS} ease, background-color ${TRANSION_MS} ease;

	&:hover,
	&:focus-visible {
		background-color: ${lighten(0.3, color.black)};
	}

	&:disabled {
		background-color: ${lighten(0.5, color.black)};
		cursor: not-allowed;
	}

	${({ outlined }) =>
		outlined &&
		css`
			color: ${color.black};
			border: 1px solid ${color.black};
			background-color: transparent;

			&:hover {
				color: ${color.white};
				background-color: ${color.black};
			}
		`}
`;
