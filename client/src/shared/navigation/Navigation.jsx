import { useState } from 'react';
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

import { IconWithBadge } from '../';
import { NavItem, NavMenu, NavMenuMobile } from './components';

import { Button } from './Navigation.styled';
import { Dropdown } from '../dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const MOBILE_BREAKPOINT = 1024;
const PAGES_ROUTE = {
	favourite: FAVOURITES_PAGE_ROUTE,
	cart: CART_PAGE_ROUTE,
};
export const Navigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

		setIsMobileMenuOpen(false);
	};

	const handleMobileMenuOpen = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleRouteToPage = (event) => {
		const button = event.target.closest('button');
		if (!button) return;

		const buttonName = button.name;

		navigate(PAGES_ROUTE[buttonName]);
		setIsMobileMenuOpen(false);
	};

	const privateItems = (isShow) => {
		return (
			isShow && (
				<>
					<NavItem>
						<Button name='favourite'>
							<IconWithBadge
								icon={FiHeart}
								bangeLabel={productsInFavourites}
								isShownBange={productsInFavourites !== 0}
							/>
						</Button>
					</NavItem>
					<NavItem>
						<Button name='cart'>
							<IconWithBadge
								icon={FiShoppingBag}
								bangeLabel={productsInCart}
								isShownBange={productsInCart !== 0}
							/>
						</Button>
					</NavItem>
				</>
			)
		);
	};

	if (isBreakpoint) {
		return (
			<NavMenuMobile
				isOpen={isMobileMenuOpen}
				onOpen={handleMobileMenuOpen}
				onClick={handleRouteToPage}
			>
				{privateItems(currentUser)}
				<NavItem>
					<Button onClick={handleSign}>{currentUser ? 'Logout' : 'Login'}</Button>
				</NavItem>
			</NavMenuMobile>
		);
	}

	return (
		<NavMenu onRouteToPage={handleRouteToPage}>
			{privateItems(currentUser)}
			<NavItem>
				<Dropdown label={currentUser ? currentUser.username : 'Have an Account?'}>
					<Dropdown.Item>
						<Button onClick={handleSign}>{currentUser ? 'Logout' : 'Login'}</Button>
					</Dropdown.Item>
				</Dropdown>
			</NavItem>
		</NavMenu>
	);
};
