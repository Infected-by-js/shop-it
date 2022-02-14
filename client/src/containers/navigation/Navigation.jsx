import React from 'react';
import { Link } from 'react-router-dom';

import { useViewport } from '../../hooks/useViewport';
import {
	CART_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	PRODUCTS_PAGE_ROUTE,
} from '../../router/routes';

import { Dropdown } from '../../ui';
import { NavItem, NavMenu, NavMenuMobile } from './components/';
import { IconCart, IconHeart } from '../../assets/images/icons';

const MOBILE_WIDTH = 1024;

export const Navigation = () => {
	const { isBreakpoint } = useViewport(MOBILE_WIDTH);

	return (
		<>
			{isBreakpoint ? (
				<NavMenuMobile>
					<NavItem>
						<Link to={HOME_PAGE_ROUTE}>Home</Link>
					</NavItem>
					<NavItem>
						<Link to={PRODUCTS_PAGE_ROUTE}>Shop</Link>
					</NavItem>
					<NavItem>
						<Link to={CART_PAGE_ROUTE}>
							<IconCart />
						</Link>
					</NavItem>
					<NavItem>
						<Link to={FAVOURITES_PAGE_ROUTE}>
							<IconHeart />
						</Link>
					</NavItem>
					<NavItem>
						<button>Log-Out</button>
					</NavItem>
				</NavMenuMobile>
			) : (
				<NavMenu>
					<NavItem>
						<Dropdown label='Pages'>
							<Dropdown.Item>Home</Dropdown.Item>
							<Dropdown.Item>Shop</Dropdown.Item>
						</Dropdown>
					</NavItem>
					<NavItem>
						<IconCart />
					</NavItem>
					<NavItem>
						<IconHeart />
					</NavItem>
					<NavItem>
						<Dropdown label='Guest'>
							<Dropdown.Item>Sign-In</Dropdown.Item>
						</Dropdown>
					</NavItem>
				</NavMenu>
			)}
		</>
	);
};
