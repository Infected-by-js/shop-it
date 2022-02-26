import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import { useViewport } from '../../hooks/useViewport';

import { CART_PAGE_ROUTE, FAVOURITES_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from '../../router/routes';
import {
	cartQuantitySelector,
	favouriteQuantitySelector,
	selectCurrentUser,
} from '../../redux/selectors';
import { logOutUser } from '../../redux/actions';

import { IconWithBange } from '../';
import { NavItem, NavMenu, NavMenuMobile } from './components';

import { IconWrapp, SignButton, Link } from './Navigation.styled';
import { Dropdown } from '../dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const MOBILE_BREAKPOINT = 1024;

export const Navigation = () => {
	const { isBreakpoint } = useViewport(MOBILE_BREAKPOINT);
	const currentUser = useSelector(selectCurrentUser);
	const productsInCart = useSelector(cartQuantitySelector);
	const productsInFavourites = useSelector(favouriteQuantitySelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSign = () => {
		if (currentUser) {
			dispatch(logOutUser());
		} else {
			navigate(LOGIN_PAGE_ROUTE);
		}
	};

	return (
		<>
			{isBreakpoint ? (
				<NavMenuMobile>
					{currentUser && (
						<>
							<NavItem>
								<Link to={CART_PAGE_ROUTE}>
									<IconWithBange
										icon={FiHeart}
										bangeLabel={productsInFavourites}
										isShownBange={productsInFavourites !== 0}
									/>
								</Link>
							</NavItem>
							<NavItem>
								<Link to={FAVOURITES_PAGE_ROUTE}>
									<IconWithBange
										icon={FiShoppingBag}
										bangeLabel={productsInCart}
										isShownBange={productsInCart !== 0}
									/>
								</Link>
							</NavItem>
						</>
					)}
					<NavItem>
						<SignButton onClick={handleSign}>{currentUser ? 'Logout' : 'Login'}</SignButton>
					</NavItem>
				</NavMenuMobile>
			) : (
				<NavMenu>
					{currentUser && (
						<>
							<NavItem>
								<Link to={FAVOURITES_PAGE_ROUTE}>
									<IconWrapp>
										<IconWithBange
											icon={FiHeart}
											bangeLabel={productsInFavourites}
											isShownBange={productsInFavourites !== 0}
										/>
									</IconWrapp>
								</Link>
							</NavItem>
							<NavItem>
								<Link to={CART_PAGE_ROUTE}>
									<IconWrapp>
										<IconWithBange
											icon={FiShoppingBag}
											bangeLabel={productsInCart}
											isShownBange={productsInCart !== 0}
										/>
									</IconWrapp>
								</Link>
							</NavItem>
						</>
					)}
					<NavItem>
						<Dropdown label={currentUser ? currentUser.username : 'Have an Account?'}>
							<Dropdown.Item>
								<SignButton onClick={handleSign}>{currentUser ? 'Logout' : 'Login'}</SignButton>
							</Dropdown.Item>
						</Dropdown>
					</NavItem>
				</NavMenu>
			)}
		</>
	);
};
