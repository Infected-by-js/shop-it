import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../assets/styles/constants';

export const IconWrapp = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	width: 100%;
	height: 100%;
	background-color: transparent;
	border: none;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	font-size: 1.5rem;
	padding: 10px;

	transition: color ${animationSpeed.fast} ease;

	&:hover {
		color: ${color.red};
	}
`;
