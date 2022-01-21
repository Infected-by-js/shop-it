import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, CART_PAGE_ROUTE } from '../../router/routes';

import {
	Wrapper,
	NavList,
	NavItem,
	CartIconWrapp,
	HeartIconWrapp,
	BurgerButton,
	QuantityIcon,
} from './Navbar.styled';
import { IconCart, IconBurger, IconHeart } from '../../assets/images/icons';

export const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const isEmptyCart = quantity === 0;

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
						<HeartIconWrapp>
							<IconHeart />
						</HeartIconWrapp>
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
			</Wrapper>

			<BurgerButton>
				<IconBurger />
			</BurgerButton>
		</>
	);
};
