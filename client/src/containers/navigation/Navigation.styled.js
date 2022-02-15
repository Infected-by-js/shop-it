import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { animationSpeed, color, fonts, fontWeight } from '../../styles/constants';

export const IconWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SignButton = styled.button`
	background-color: transparent;
	border: none;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	padding: 20px;

	transition: color ${animationSpeed.fast} ease;

	&:hover {
		color: ${color.red};
	}
`;

export const Link = styled(RouterLink)`
	display: flex !important;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;
