import styled from 'styled-components';
import { lighten } from 'polished';
import { fonts, color, fontWeight, TRANSION_MS } from '../../styles/constants';

export const Navbar = styled.nav``;

export const NavList = styled.ul`
	display: flex;
	align-items: center;
`;

export const NavItem = styled.li`
	margin-right: 25px;

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
		padding: 20px;
		border-radius: 8px;
		transition: background-color ${TRANSION_MS} ease-in-out, color ${TRANSION_MS} ease-in-out;

		&:hover,
		&:focus {
			background-color: ${lighten(0.5, color.red)};
			color: ${color.red};
		}
	}
`;

export const ButtonCart = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 15px;
	background-color: transparent;
	border: 0;
	border-radius: 8px;
	transition: background-color ${TRANSION_MS} ease-in-out;

	& g {
		transition: stroke ${TRANSION_MS} ease-in-out;
	}

	&:hover,
	&:focus {
		background-color: ${lighten(0.5, color.red)};
		& g {
			stroke: ${color.red};
		}
	}
`;
