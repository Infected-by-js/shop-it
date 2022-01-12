import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import { color, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Wrapper = styled.div`
	border: 0.5px solid ${color.greyLight};
	border-radius: 10px;
	padding: 20px;
	min-width: 350px;
	max-width: 80%;
	align-self: center;
`;

export const Title = styled.h1`
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.75rem;
`;

export const Item = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-family: ${fonts.inter};

	${({ type }) =>
		type === 'total' &&
		css`
			font-weight: ${fontWeight.inter.m};
			font-size: 24px;
			border-top: 1px solid grey;
			padding-top: 20px;
		`}
`;

export const ItemText = styled.span``;

export const ItemPrice = styled.span``;

export const Button = styled.button`
	width: 100%;
	padding: 8px;

	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	font-size: 1rem;
	line-height: 2;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: ${color.white};
	background: ${color.black};
	border-radius: 2px;

	transition: background-color ${TRANSION_MS} ease;

	&:hover,
	&:focus {
		background-color: ${lighten(0.3, color.black)};
	}

	&:active {
		background-color: ${color.black};
	}
`;
