import React, { useState } from 'react';
import { useSkipFirstMount } from '../../../../hooks/useSkipFirstMount';

import { Burger } from '../burger/Burger';
import { NavMobileContainer, NavMobileList } from './NavMenuMobile.styled';

export const NavMenuMobile = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useSkipFirstMount(() => {
		document.body.style.overflow = 'hidden';
		return () => (document.body.style.overflow = 'visible');
	}, menuOpen);

	return (
		<>
			<Burger isMenuOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
			<NavMobileContainer isMenuOpen={menuOpen}>
				<NavMobileList>{children}</NavMobileList>
			</NavMobileContainer>
		</>
	);
};
