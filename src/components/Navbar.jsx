import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from '../constants/routes';
import { IconCart, IconBurger } from '../assets/icons';
import { color, device, fonts, fontWeight, TRANSION_MS } from '../styles/constants';

export const Navbar = () => {
	return (
		<>
			<NavbarContainer>
				<NavList>
					<NavItem>
						<Link to={REGISTER_PAGE_ROUTE}>Register</Link>
					</NavItem>
					<NavItem>
						<Link to={LOGIN_PAGE_ROUTE}>Log in</Link>
					</NavItem>
					<NavItem>
						<ButtonCart>
							<IconCart />
						</ButtonCart>
					</NavItem>
				</NavList>
			</NavbarContainer>

			<BurgerButton>
				<IconBurger />
			</BurgerButton>
		</>
	);
};

export const NavbarContainer = styled.nav``;

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
