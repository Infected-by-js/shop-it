import React from 'react';
import { Link } from 'react-router-dom';
import { IconCart, IconHeart } from '../../assets/images/icons';
import {
	LOGIN_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
	CART_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
} from '../../router/routes';

import { NavList, NavItem, CartIconWrapp, HeartIconWrapp, QuantityIcon } from './NavMenu.styled';

export const NavMenu = ({ quantity }) => {
	const isEmptyCart = quantity === 0;

	return (
		<NavList>
			<NavItem>
				<Link to={REGISTER_PAGE_ROUTE}>Register</Link>
			</NavItem>
			<NavItem>
				<Link to={LOGIN_PAGE_ROUTE}>Log in</Link>
			</NavItem>
			<NavItem>
				<Link to={FAVOURITES_PAGE_ROUTE}>
					<HeartIconWrapp>
						<IconHeart />
					</HeartIconWrapp>
				</Link>
			</NavItem>
			<NavItem>
				<Link to={CART_PAGE_ROUTE}>
					<CartIconWrapp>
						<IconCart />
						{!isEmptyCart && <QuantityIcon>{quantity}</QuantityIcon>}
					</CartIconWrapp>
				</Link>
			</NavItem>
		</NavList>
	);
};
