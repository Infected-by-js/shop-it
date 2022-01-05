import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from '../../constants/routes';
import { IconCart, IconBurger, IconClose } from '../../assets/icons/';

import * as S from './Navbar.styled.js';

export const Navbar = () => {
	return (
		<div>
			<S.Navbar>
				<S.NavList>
					<S.NavItem>
						<Link to={REGISTER_PAGE_ROUTE}>Register</Link>
					</S.NavItem>
					<S.NavItem>
						<Link to={LOGIN_PAGE_ROUTE}>Log in</Link>
					</S.NavItem>
					<S.NavItem>
						<S.ButtonCart>
							<IconCart />
						</S.ButtonCart>
					</S.NavItem>
				</S.NavList>
			</S.Navbar>

			<S.BurgerButton>
				<IconBurger />
			</S.BurgerButton>
		</div>
	);
};
