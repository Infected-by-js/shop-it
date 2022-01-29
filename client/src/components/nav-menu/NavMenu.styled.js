import styled from 'styled-components';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../../styles/constants';

export const NavList = styled.ul`
	display: none;
	align-items: center;

	@media ${device.laptop} {
		display: flex;
	}
`;

export const NavItem = styled.li`
	margin-right: 30px;

	font-size: 1.25rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.xs};
	text-transform: uppercase;

	&:last-child {
		margin-right: 0;
	}

	a {
		display: inline-block;
		height: 100%;
		width: 100%;
		padding: 20px 0;
		border-radius: 8px;
		transition: color ${TRANSION_MS} ease-in-out;

		&:hover,
		&:focus {
			color: ${color.red};

			& g {
				stroke: ${color.red};
			}
		}
	}
`;

export const HeartIconWrapp = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	border: 0;
	border-radius: 8px;
	transition: background-color ${TRANSION_MS} ease-in-out;
	cursor: pointer;

	svg {
		width: 26px;
		height: 22px;
	}

	& g {
		transition: stroke ${TRANSION_MS} ease-in-out, fill ${TRANSION_MS} ease-in-out;
	}

	&:hover,
	&:focus-visible {
		& g {
			stroke: ${color.red};
			fill: ${color.red};
		}
	}
`;

export const CartIconWrapp = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	border: 0;
	border-radius: 8px;
	transition: background-color ${TRANSION_MS} ease-in-out;

	svg {
		width: 26px;
		height: 22px;
	}

	& g {
		transition: stroke ${TRANSION_MS} ease-in-out;
	}
`;

export const QuantityIcon = styled.span`
	position: absolute;
	right: -15px;
	top: -15px;
	width: 22px;
	height: 22px;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 0.75rem;
	font-family: ${fonts.inter};
	font-weight: ${fontWeight.inter.s};
	color: ${color.white};
	background-color: ${color.red};
	border-radius: 50%;

	transition: color ${TRANSION_MS} ease-in-out, background-color ${TRANSION_MS} ease-in-out;
`;
