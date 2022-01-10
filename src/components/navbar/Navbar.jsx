import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, CART_PAGE_ROUTE } from '../../router/routes';

import { Wrapper, NavList, NavItem, CartIconWrapp, BurgerButton } from './Navbar.styled';
import { IconCart, IconBurger } from '../../assets/images/icons';

export const Navbar = () => {
	return (
		<>
			<Wrapper>
				<NavList>
					<NavItem>
						<Link to={REGISTER_PAGE_ROUTE}>Register</Link>
					</NavItem>
					<NavItem>
						<Link to={LOGIN_PAGE_ROUTE}>Log in</Link>
					</NavItem>
					<NavItem>
						<Link to={CART_PAGE_ROUTE}>
							<CartIconWrapp>
								<IconCart />
							</CartIconWrapp>
						</Link>
					</NavItem>
				</NavList>
			</Wrapper>

			<BurgerButton>
				<IconBurger />
			</BurgerButton>
		</>
	);
};
