import styled from 'styled-components';
import { animationSpeed, color, fonts, fontWeight } from '../../assets/styles/constants';

export const IconWrapp = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	border: 0;
	border-radius: 8px;
	transition: background-color ${animationSpeed.middle} ease-in-out;

	svg {
		width: 26px;
		height: 22px;
	}

	& g {
		transition: stroke ${animationSpeed.middle} ease-in-out;
	}
`;

export const Bange = styled.span`
	position: absolute;
	right: -15px;
	top: -15px;
	width: 24px;
	height: 24px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 1rem;
	font-family: ${fonts.arsenal};
	font-weight: ${fontWeight.arsenal.l};
	color: ${color.white};
	background-color: ${color.red};
	border-radius: 50%;

	transition: color ${animationSpeed.middle} ease-in-out,
		background-color ${animationSpeed.middle} ease-in-out;
`;
