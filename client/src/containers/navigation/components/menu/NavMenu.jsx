import React from 'react';

import { NavList, NavItem } from './NavMenu.styled';

export const NavMenu = ({ children }) => {
	return <NavList>{children}</NavList>;
};

NavMenu.Item = ({ children }) => {
	return <NavItem>{children}</NavItem>;
};
