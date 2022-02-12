import React, { useState } from 'react';
import { IconClose, IconBurger } from '../../../../assets/images/icons';
import { Modal } from '../../../../components';
import { NavList, BurgerButton, ButtonClose, MobileMenuWrapp } from './NavMenuMobile.styled';

export const NavMenuMobile = ({ children }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);

	const handleOpenBurgerMenu = () => {
		setBurgerOpen(true);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerOpen(false);
	};

	return (
		<>
			<BurgerButton onClick={handleOpenBurgerMenu}>
				{burgerOpen ? <IconClose /> : <IconBurger />}
			</BurgerButton>
			{burgerOpen && (
				<Modal
					style={{ position: 'fixed', width: '100%', height: '100%' }}
					onClose={handleCloseBurgerMenu}
				>
					<ButtonClose onClick={handleCloseBurgerMenu}>
						<IconClose />
					</ButtonClose>
					<MobileMenuWrapp isShow={burgerOpen}>
						<NavList>{children}</NavList>
					</MobileMenuWrapp>
				</Modal>
			)}
		</>
	);
};
