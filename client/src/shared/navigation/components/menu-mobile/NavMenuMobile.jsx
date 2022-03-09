import { useSkipFirstMount } from '../../../../hooks';
import { Burger } from '../burger/Burger';
import { NavMobileContainer, NavMobileList } from './NavMenuMobile.styled';

export const NavMenuMobile = ({ isOpen, onOpen, children, ...restProps }) => {
	useSkipFirstMount(() => {
		document.body.style.overflow = 'hidden';

		return () => (document.body.style.overflow = 'visible');
	}, isOpen);

	return (
		<>
			<Burger isMenuOpen={isOpen} onClick={onOpen} />
			<NavMobileContainer isMenuOpen={isOpen}>
				<NavMobileList {...restProps}>{children}</NavMobileList>
			</NavMobileContainer>
		</>
	);
};
