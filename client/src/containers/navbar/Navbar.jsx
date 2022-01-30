import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { MobileMenuWrapp, BurgerButton, ButtonClose } from './Navbar.styled';
import { IconBurger, IconClose } from '../../assets/images/icons';
import { NavMenu, Modal } from '../../components';

export const Navbar = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const quantity = useSelector((state) => state.cart.quantity);

	const handleOpenBurgerMenu = () => {
		setBurgerOpen(true);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerOpen(false);
	};

	return (
		<>
			<NavMenu quantity={quantity} />

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
						<NavMenu quantity={quantity} />
					</MobileMenuWrapp>
				</Modal>
			)}
		</>
	);
};
