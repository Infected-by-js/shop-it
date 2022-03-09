import { NavList } from './NavMenu.styled';

export const NavMenu = ({ children, onRouteToPage }) => {
	return <NavList onClick={onRouteToPage}>{children}</NavList>;
};
