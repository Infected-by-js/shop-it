import React from 'react';
import { useSelector } from 'react-redux';
import { useViewport } from '../../hooks/useViewport';

import {
	CART_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	PRODUCTS_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
} from '../../router/routes';
import { cartQuantitySelector, favouriteQuantitySelector } from '../../redux/selectors';

import { Dropdown, IconWithBange } from '../../ui';
import { NavItem, NavMenu, NavMenuMobile } from './components/';

import { IconCart, IconHeart } from '../../assets/images/icons';
import { IconWrapp, SignButton, Link } from './Navigation.styled';

const MOBILE_BREAKPOINT = 1024;

export const Navigation = () => {
	const { isBreakpoint } = useViewport(MOBILE_BREAKPOINT);
	const productsInCart = useSelector(cartQuantitySelector);
	const productsInFavourites = useSelector(favouriteQuantitySelector);

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
							<IconWithBange
								icon={IconHeart}
								bangeLabel={productsInFavourites}
								isShownBange={productsInFavourites !== 0}
							/>
						</Link>
					</NavItem>
					<NavItem>
						<Link to={FAVOURITES_PAGE_ROUTE}>
							<IconWithBange
								icon={IconCart}
								bangeLabel={productsInCart}
								isShownBange={productsInCart !== 0}
							/>
						</Link>
					</NavItem>
					<NavItem>
						<SignButton>Log-Out</SignButton>
					</NavItem>
				</NavMenuMobile>
			) : (
				<NavMenu>
					<NavItem>
						{/* FIXME: add active page by url*/}
						<Dropdown label='Home'>
							<Dropdown.Item>
								<Link to={HOME_PAGE_ROUTE}>Home</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link to={PRODUCTS_PAGE_ROUTE}>Shop</Link>
							</Dropdown.Item>
						</Dropdown>
					</NavItem>
					<NavItem>
						<Dropdown label={'UserName'}>
							<Dropdown.Item>
								<Link to={FAVOURITES_PAGE_ROUTE}>
									<IconWrapp>
										<IconWithBange
											icon={IconHeart}
											bangeLabel={productsInFavourites}
											isShownBange={productsInFavourites !== 0}
										/>
									</IconWrapp>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link to={CART_PAGE_ROUTE}>
									<IconWrapp>
										<IconWithBange
											icon={IconCart}
											bangeLabel={productsInCart}
											isShownBange={productsInCart !== 0}
										/>
									</IconWrapp>
								</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<SignButton>
									<Link to={REGISTER_PAGE_ROUTE}>Sign-In</Link>
								</SignButton>
							</Dropdown.Item>
						</Dropdown>
					</NavItem>
				</NavMenu>
			)}
		</>
	);
};
