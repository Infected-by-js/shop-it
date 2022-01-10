import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, CART_PAGE_ROUTE } from '../../router/routes';

import * as Styled from './Navbar.styled';
import { IconCart, IconBurger } from '../../assets/images/icons';

export const Navbar = () => {
	return (
		<>
			<Styled.Navbar>
				<Styled.NavList>
					<Styled.NavItem>
						<Link to={REGISTER_PAGE_ROUTE}>Register</Link>
					</Styled.NavItem>
					<Styled.NavItem>
						<Link to={LOGIN_PAGE_ROUTE}>Log in</Link>
					</Styled.NavItem>
					<Styled.NavItem>
						<Link to={CART_PAGE_ROUTE}>
							<Styled.CartIconWrapp>
								<IconCart />
							</Styled.CartIconWrapp>
						</Link>
					</Styled.NavItem>
				</Styled.NavList>
			</Styled.Navbar>

			<Styled.BurgerButton>
				<IconBurger />
			</Styled.BurgerButton>
		</>
	);
};
