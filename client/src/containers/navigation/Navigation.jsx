import React from 'react';
import { IconCart, IconHeart } from '../../assets/images/icons';
import { NavMenu } from './components/menu/NavMenu';
import {
	HOME_PAGE_ROUTE,
	PRODUCTS_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
	CART_PAGE_ROUTE,
} from '../../router/routes';
import { Link } from 'react-router-dom';
import { IconWithBange } from '../../ui/icon-with-bange/IconWithBange';
import { NavMenuMobile } from './components/menu-mobile/NavMenuMobile';

const pages = [
	{ title: 'Home', value: 'home', link: HOME_PAGE_ROUTE, icon: null },
	{ title: 'Shop', value: 'shop', link: PRODUCTS_PAGE_ROUTE, icon: null },
	{ title: 'Favourites', value: 'favourites', link: FAVOURITES_PAGE_ROUTE, icon: IconHeart },
	{ title: 'Cart', value: 'cart', link: CART_PAGE_ROUTE, icon: IconCart },
];

export const Navigation = () => {
	return (
		<>
			<NavMenu>
				{pages.map(({ title, link, icon }) => (
					<NavMenu.Item key={link}>
						<Link to={link}>{icon ? <IconWithBange bangeLabel={2} icon={icon} /> : title}</Link>
					</NavMenu.Item>
				))}
			</NavMenu>
			<NavMenuMobile>
				{pages.map(({ title, link, icon }) => (
					<NavMenu.Item key={link}>
						<Link to={link}>{icon ? <IconWithBange bangeLabel={2} icon={icon} /> : title}</Link>
					</NavMenu.Item>
				))}
			</NavMenuMobile>
		</>
	);
};
