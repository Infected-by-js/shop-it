import styled from 'styled-components';
import { fonts, color, fontWeight, TRANSION_MS, device } from '../../styles/constants';

export const Navbar = styled.nav``;

export const NavList = styled.ul`
	display: none;
	align-items: center;

	@media ${device.laptop} {
		display: flex;
	}
`;

export const NavItem = styled.li`
	margin-right: 40px;

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
			color: ${color.blue};
		}
	}
`;

export const ButtonCart = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 15px 0;
	background-color: transparent;
	border: 0;
	border-radius: 8px;
	transition: background-color ${TRANSION_MS} ease-in-out;

	& g {
		transition: stroke ${TRANSION_MS} ease-in-out;
	}

	&:hover,
	&:focus {
		& g {
			stroke: ${color.blue};
		}
	}
`;

export const BurgerButton = styled.button`
	display: flex;

	background-color: transparent;
	border: 0;

	&:active {
		g {
			fill: ${color.blue};
		}
	}

	@media ${device.laptop} {
		display: none;
	}
`;
